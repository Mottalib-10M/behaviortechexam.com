/**
 * Rules engine: costs, deadlines, supervision and fieldwork arithmetic, all read from params-2026.json
 * (RBT Handbook 10/2026, BCBA Handbook 11/2026, state boards). Pure functions with tests in tests/engine.test.ts.
 */
import P from '../../data/params-2026.json';
import { examOf } from './exam';

const R = P.rules;
export type StateRow = (typeof P.states)[number] & { techFeeDetail?: string; techBackgroundFee?: number; techBackgroundNote?: string; techRenewal?: number | null; techRenewalYears?: number | null; techLateFee?: number; techDuplicateFee?: number; techVerificationFee?: number };
export const STATES = P.states as StateRow[];
export const stateById = (id: string) => STATES.find((s) => s.id === id);

export interface CostInput { stateId: string; trainingCost: number; backgroundCost: number; attempts: number; includeFirstRenewal?: boolean }
export interface CostLine { label: string; amount: number; note?: string }
export interface CostOut { total: number; lines: CostLine[]; state: StateRow | null; attemptsCapped: number }

/** Total cost to become certified: BACB application, Pearson VUE appointment per attempt, training, background check, state credential. */
export function totalCost(i: CostInput): CostOut {
  const x = examOf('rbt');
  const st = stateById(i.stateId) ?? null;
  const attempts = Math.min(Math.max(1, Math.round(i.attempts || 1)), x.attemptsMax);
  const lines: CostLine[] = [
    { label: 'BACB certification application', amount: x.feeApplication, note: 'paid once in the 12-month authorization period' },
    { label: `Pearson VUE exam appointment${attempts > 1 ? ` × ${attempts}` : ''}`, amount: x.feeExam * attempts, note: 'paid at every scheduling' },
    { label: '40-hour training', amount: Math.max(0, i.trainingCost), note: 'your provider’s price; free courses exist' },
    { label: 'Background and abuse registry checks', amount: Math.max(0, i.backgroundCost), note: 'set by the vendor or the employer' },
  ];
  if (st && st.techRequired) {
    lines.push({ label: `${st.name}: ${st.techCredential}`, amount: st.techFee, note: st.techFeeDetail ?? `paid to the ${st.techAuthority}` });
    if (st.techBackgroundFee) lines.push({ label: `${st.name}: state background clearance`, amount: st.techBackgroundFee, note: st.techBackgroundNote });
  }
  const total = lines.reduce((s, l) => s + l.amount, 0);
  return { total, lines, state: st, attemptsCapped: attempts };
}

/** Supervision hours owed in a month: 5% of the hours of service, at least two contacts with one observation. */
export function supervision(hoursOfService: number) {
  const h = Math.max(0, hoursOfService);
  const minutes = Math.max(0, Math.ceil(h * R.supervision.share * 60 - 1e-9));
  return { hours: Math.floor(minutes / 60), minutes: minutes % 60, totalMinutes: minutes, contacts: R.supervision.contactsPerMonth, observations: R.supervision.observationsPerMonth, share: R.supervision.share };
}

/** BCBA fieldwork: hours still needed, mixing supervised (2,000) and concentrated (1,500, × 1.33) hours. */
export function fieldwork(supervisedDone: number, concentratedDone: number, hoursPerMonth: number, rules: 2026 | 2027 = 2026) {
  const b = examOf('bcba') as unknown as { fieldworkSupervised: number; fieldworkConcentrated: number; concentratedMultiplier: number; monthMinHours: number; monthMaxHours: number; unrestrictedShare: number };
  // 2027 BCBA requirements: same hour totals, monthly ceiling raised (P.bcba2027.monthMaxHours).
  const x = rules === 2027 ? { ...b, monthMinHours: P.bcba2027.monthMinHours, monthMaxHours: P.bcba2027.monthMaxHours } : b;
  const perMonth = Math.min(Math.max(0, hoursPerMonth), x.monthMaxHours);
  const credit = Math.max(0, supervisedDone) + Math.max(0, concentratedDone) * x.concentratedMultiplier;
  const left = Math.max(0, x.fieldworkSupervised - credit);
  const months = perMonth >= x.monthMinHours ? Math.ceil(left / perMonth) : null;
  return { credit, left, months, perMonth, tooFew: perMonth > 0 && perMonth < x.monthMinHours, capped: hoursPerMonth > x.monthMaxHours, unrestrictedMin: Math.ceil(x.fieldworkSupervised * x.unrestrictedShare) };
}

/** 40-hour training planner: days needed at a weekly pace, against the 5-day floor and 180-day ceiling. */
export function trainingPlan(hoursPerWeek: number) {
  const t = R.training;
  const hpw = Math.max(0.5, hoursPerWeek);
  const days = Math.ceil((t.hours / hpw) * 7);
  return { days, tooFast: days < t.minDays, tooSlow: days > t.maxDays, minDays: t.minDays, maxDays: t.maxDays, hours: t.hours, minHoursPerWeekToFit: Math.ceil((t.hours / t.maxDays) * 7 * 10) / 10 };
}

/** Pearson VUE cancellation or rescheduling fee by days before the appointment (RBT Handbook). */
export function rescheduleFee(daysBefore: number) {
  const x = examOf('rbt') as unknown as { rescheduleFee5to30Days: number; rescheduleFee48hTo5Days: number; feeExam: number };
  const d = Math.max(0, daysBefore);
  if (d > 30) return { fee: 0, rule: 'More than 30 days before: no fee' };
  if (d >= 5) return { fee: x.rescheduleFee5to30Days, rule: '30 days to 5 days before: fee charged' };
  if (d >= 2) return { fee: x.rescheduleFee48hTo5Days, rule: '5 days to 48 hours before: fee charged' };
  return { fee: x.feeExam, rule: 'Within 48 hours: no change possible; a missed appointment forfeits the scheduling fee' };
}

/** Retakes: after k failed attempts, next date and attempts left inside the 12-month authorization. */
export function retakePlan(failed: number, lastAttemptISO: string, approvalISO: string) {
  const x = examOf('rbt');
  const k = Math.min(Math.max(1, Math.round(failed)), x.attemptsMax);
  const next = addDays(lastAttemptISO, x.retakeWaitDays);
  const deadline = addMonths(approvalISO, x.authorizationMonths);
  const left = x.attemptsMax - k;
  return { next, deadline, left, over: left <= 0 || next > deadline, waitDays: x.retakeWaitDays, attemptsMax: x.attemptsMax };
}

/** Application timeline: the latest start of each check so that it is still valid on the application day. */
export function applicationWindow(applicationISO: string) {
  const e = R.eligibility, c = R.competency, a = R.application;
  return {
    checksNoEarlier: addDays(applicationISO, -e.checksWithinDays),
    competencyNoEarlier: addDays(applicationISO, -c.withinDaysBeforeApplication),
    applicationExpires: addDays(applicationISO, a.activeDays),
    examDeadlineIfApprovedToday: addMonths(applicationISO, a.monthsToTestAfterApproval),
  };
}

/**
 * Recertification (RBT Handbook 10/2026). A certification dated before 2026 renews one year later; if that
 * renewal falls by December 31, 2026, it follows the old annual rules one last time (recertification
 * competency assessment no more than 45 days before the date). A certification or renewal dated in 2026 or
 * later starts a 2-year cycle with 12 PDUs and no competency assessment.
 */
export function recertification(certifiedISO: string) {
  const r = R.recertification;
  const annual = certifiedISO < '2026-01-01';
  const next = annual ? addYears(certifiedISO, 1) : addYears(certifiedISO, r.cycleYears);
  const oldRules = next <= r.oldRulesUntil;
  return {
    next, oldRules, windowOpens: addDays(next, -r.applicationWindowDays), reinstatementEnds: addDays(next, r.reinstatementDays),
    fee: r.fee, lateFee: r.lateFee, pdu: oldRules ? 0 : r.pduHours, competencyNoEarlier: oldRules ? addDays(next, -r.competencyWithinDays) : null,
  };
}

export function addDays(iso: string, d: number): string { const t = new Date(`${iso}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + d); return t.toISOString().slice(0, 10); }
export function addMonths(iso: string, m: number): string { const t = new Date(`${iso}T12:00:00Z`); t.setUTCMonth(t.getUTCMonth() + m); return t.toISOString().slice(0, 10); }
export function addYears(iso: string, y: number): string { return addMonths(iso, y * 12); }
export function daysBetween(a: string, b: string): number { return Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`)) / 86400000); }
