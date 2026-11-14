/**
 * Calculators of the pages (RECETTE §9.3): one subject = one calculation, read from params-2026.json
 * through the engines (exam.ts, rules.ts), never a second formula in a page.
 */
import type { MiniSpec } from './mini-types';
import P from '../data/params-2026.json';
import PR from '../data/pass-rates-2025.json';
import { money, formatNumberL, pct, dateL } from './format-l';
import { examOf, atLeast, targetCount, splitByDomain, topOfSplit, topLabel } from './engine/exam';
import { STATES, totalCost, supervision, fieldwork, trainingPlan, rescheduleFee, retakePlan, recertification, applicationWindow, addMonths } from './engine/rules';

const n0 = (v: number, d = 0) => formatNumberL(v, 'en', d);
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const plural = (k: number, w: string) => `${n0(k)} ${w}${k === 1 ? '' : 's'}`;
const R = P.rules;
const RBT = examOf('rbt');
const BCBA = examOf('bcba');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_OPT = MONTHS.map((m, i) => ({ value: String(i + 1), label: m }));
const YEAR_OPT = [2024, 2025, 2026, 2027].map((y) => ({ value: String(y), label: String(y) }));
const iso = (y: number, m: number, d = 15) => `${Math.round(y)}-${String(clamp(Math.round(m), 1, 12)).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
/** State select: the eight states documented in params, then "another state". */
export const STATE_OPT = [...STATES.map((s, i) => ({ value: String(i + 1), label: s.name })), { value: '0', label: 'Another state' }];
export const stateIdx = (id: string) => STATES.findIndex((s) => s.id === id) + 1;
const stateOf = (v: number | undefined) => STATES[Math.round(v ?? 0) - 1] ?? null;
const PROVIDERS = (PR.providers as Array<{ name: string; rate: number; n: number; pass: number; fail: number }>);
const PROV_OPT = PROVIDERS.map((p, i) => ({ value: String(i), label: p.name }));
export const providerIdx = (name: string) => PROVIDERS.findIndex((p) => p.name === name);
const pooled = PROVIDERS.reduce((s, p) => s + p.pass, 0) / PROVIDERS.reduce((s, p) => s + p.n, 0);

const SPECS: Record<string, () => MiniSpec> = {
  cost: () => ({
    title: 'Your RBT certification cost', cta: 'Full cost breakdown',
    exemple: (v) => `Example for ${stateOf(v.st)?.name ?? 'a state with no technician credential'}, ${plural(Math.round(v.a ?? 1), 'exam attempt')} and a ${money(v.tr ?? 0)} training course`,
    inputs: [
      { id: 'st', label: 'State where you will work', def: 0, options: STATE_OPT },
      { id: 'a', label: 'Exam attempts you plan for', def: 1, max: RBT.attemptsMax },
      { id: 'tr', label: 'Price of your 40-hour training', def: 0, unit: '$', max: 5000, avance: true, help: 'Many employers provide it free' },
      { id: 'bg', label: 'Background check you pay yourself', def: 0, unit: '$', max: 1000, avance: true },
    ],
    run: (v) => {
      const st = stateOf(v.st);
      const c = totalCost({ stateId: st?.id ?? '', trainingCost: v.tr ?? 0, backgroundCost: v.bg ?? 0, attempts: v.a ?? 1 });
      return {
        head: ['Total to budget', money(c.total)],
        rows: c.lines.filter((l) => l.amount > 0 || l.label.startsWith('BACB')).map((l) => [l.label, money(l.amount)] as [string, string]),
        alert: (v.a ?? 1) > RBT.attemptsMax ? `${RBT.attemptsMax} attempts at most in one authorization period` : undefined,
        note: `BACB fees from the RBT Handbook; ${st?.techRequired ? `${st.name} fee from the ${st.techAuthority}` : 'no state technician fee counted'}.`,
      };
    },
  }),
  supervision: () => ({
    title: 'Monthly supervision you need', cta: 'Supervision rules explained',
    exemple: (v) => `Example for ${n0(v.h ?? 0)} hours of services in the month`,
    inputs: [{ id: 'h', label: 'Hours of behavior technician services this month', def: 100, unit: 'h', max: 400 }],
    run: (v) => {
      const s = supervision(v.h ?? 0);
      return {
        head: ['Supervision to receive', `${s.hours} h ${String(s.minutes).padStart(2, '0')} min`],
        rows: [['Share of service hours', pct(s.share)], ['Separate supervision contacts', `at least ${s.contacts}`], ['Contacts with you working with a client', `at least ${s.observations}`]],
        note: 'Rounded up to the next minute. The RBT Handbook counts the calendar month; group supervision has its own limits.',
      };
    },
  }),
  retake: () => ({
    title: 'Retakes left in your authorization', cta: 'Retake rules',
    exemple: (v) => `Example for ${plural(Math.round(v.f ?? 1), 'failed attempt')}, approval in ${MONTHS[clamp(Math.round(v.am ?? 1), 1, 12) - 1]} ${v.ay}`,
    inputs: [
      { id: 'f', label: 'Attempts already failed', def: 1, max: RBT.attemptsMax },
      { id: 'am', label: 'Month your application was approved', def: 9, options: MONTH_OPT },
      { id: 'ay', label: 'Year of approval', def: 2026, options: YEAR_OPT },
      { id: 'lm', label: 'Month of your last attempt', def: 11, options: MONTH_OPT },
      { id: 'ly', label: 'Year of your last attempt', def: 2026, options: YEAR_OPT },
    ],
    run: (v) => {
      const p = retakePlan(v.f ?? 1, iso(v.ly ?? 2026, v.lm ?? 1), iso(v.ay ?? 2026, v.am ?? 1));
      return {
        head: ['Attempts left', p.over ? 'None in this period' : n0(p.left)],
        rows: [['Earliest next sitting', dateL(p.next)], ['Authorization ends', dateL(p.deadline)], ['Wait between attempts', `${p.waitDays} days`]],
        alert: p.over ? 'A new application is needed: the period or the attempts are used up' : undefined,
        note: `Dates use the 15th of each month. ${RBT.attemptsMax} attempts at most per ${RBT.authorizationMonths}-month authorization; each new sitting is paid again.`,
      };
    },
  }),
  reschedule: () => ({
    title: 'Fee to move your exam appointment', cta: 'Scheduling rules',
    exemple: (v) => `Example for a change ${plural(Math.round(v.d ?? 0), 'day')} before the appointment`,
    inputs: [{ id: 'd', label: 'Days before your appointment', def: 10, max: 365 }],
    run: (v) => { const r = rescheduleFee(v.d ?? 0); return { head: ['Fee to reschedule or cancel', money(r.fee)], rows: [['Rule that applies', r.rule]], note: 'Fees of the RBT Handbook, paid to the testing vendor; the BACB application fee is not refunded.' }; },
  }),
  training: () => ({
    title: 'Your 40-hour training calendar', cta: 'Training requirements',
    exemple: (v) => `Example for ${n0(v.w ?? 0, 1)} hours of training a week`,
    inputs: [{ id: 'w', label: 'Training hours you can do each week', def: 10, unit: 'h', max: 60, decimals: 1 }],
    run: (v) => {
      const t = trainingPlan(v.w ?? 10);
      return {
        head: ['Days to finish', n0(t.days)],
        rows: [['Shortest allowed', `${t.minDays} days`], ['Longest allowed', `${t.maxDays} days`], ['Lowest weekly pace that fits', `${n0(t.minHoursPerWeekToFit, 1)} h`]],
        alert: t.tooFast ? `Below the ${t.minDays}-day minimum: the training must be spread over more days` : t.tooSlow ? `Over the ${t.maxDays}-day limit: hours past it would not count` : undefined,
        note: 'Calendar days from the first to the last training session, as the 40-hour requirements count them.',
      };
    },
  }),
  application: () => ({
    title: 'When your checks and competency count', cta: 'Application steps',
    exemple: (v) => `Example for an application sent in ${MONTHS[clamp(Math.round(v.m ?? 1), 1, 12) - 1]} ${v.y}`,
    inputs: [{ id: 'm', label: 'Month you plan to apply', def: 1, options: MONTH_OPT }, { id: 'y', label: 'Year', def: 2027, options: YEAR_OPT }],
    run: (v) => {
      const w = applicationWindow(iso(v.y ?? 2027, v.m ?? 1));
      return {
        head: ['Competency assessment no earlier than', dateL(w.competencyNoEarlier)],
        rows: [['Checks confirmed by the attesting certificant no earlier than', dateL(w.checksNoEarlier)], ['Application stays open until', dateL(w.applicationExpires)], ['Exam deadline if approved that day', dateL(w.examDeadlineIfApprovedToday)]],
        note: `${R.eligibility.checksWithinDays} days for the attested checks, ${R.competency.withinDaysBeforeApplication} days for the competency assessment, counted back from the 15th.`,
      };
    },
  }),
  recert: () => ({
    title: 'Your next RBT renewal', cta: 'Renewal rules',
    exemple: (v) => `Example for a certification dated ${MONTHS[clamp(Math.round(v.m ?? 1), 1, 12) - 1]} ${v.y}`,
    inputs: [{ id: 'm', label: 'Month you were certified or last renewed', def: 3, options: MONTH_OPT }, { id: 'y', label: 'Year', def: 2026, options: YEAR_OPT.filter((o) => o.value !== '2024') }],
    run: (v) => {
      const r = recertification(iso(v.y ?? 2026, v.m ?? 1));
      return {
        head: ['Renewal due', dateL(r.next)],
        rows: [['Application opens', dateL(r.windowOpens)], r.competencyNoEarlier ? ['Recertification competency assessment no earlier than', dateL(r.competencyNoEarlier)] : ['Professional development in the cycle', `${r.pdu} hours (PDUs)`], ['Fee', money(r.fee)], ['Late fee, until', `${money(r.lateFee)}, ${dateL(r.reinstatementEnds)}`]],
        alert: r.oldRules ? 'Old annual rules, one last time: then a 2-year cycle with PDUs begins' : undefined,
        note: 'Day of the month taken as the 15th; your board portal account shows the exact date.',
      };
    },
  }),
  readiness: () => ({
    title: 'Chance of reaching 80% on a full mock', cta: 'Take a full mock',
    exemple: (v) => `Example for ${n0(v.p ?? 0)}% right in practice`,
    inputs: [{ id: 'p', label: 'Your share of right answers in practice', def: 75, unit: '%', max: 100 }],
    run: (v) => {
      const p = clamp(v.p ?? 0, 0, 100) / 100;
      const need = targetCount('rbt', RBT.scored);
      const ch = atLeast(RBT.scored, need, p);
      return {
        head: ['Chance on one mock', pct(ch)],
        rows: [['Right answers needed', `${need} of ${RBT.scored}`], ['Expected right answers', n0(Math.round(p * RBT.scored))]],
        note: 'A statistical model with independent questions. 80% is the study target of this site, not the BACB passing standard, which is not published as a count.',
      };
    },
  }),
  pace: () => ({
    title: 'Questions a day until exam day', cta: 'Study plan',
    exemple: (v) => `Example for ${plural(Math.round(v.d ?? 0), 'day')} left and ${plural(Math.round(v.m ?? 0), 'full mock')}`,
    inputs: [{ id: 'd', label: 'Days until your appointment', def: 21, max: 365 }, { id: 'm', label: 'Full mocks you want to take', def: 3, max: 10 }],
    run: (v) => {
      const days = Math.max(1, Math.round(v.d ?? 1)), mocks = clamp(Math.round(v.m ?? 0), 0, 10);
      const reviewDays = Math.min(2, days - 1);
      const study = Math.max(1, days - reviewDays);
      const base = RBT.scored * 2;
      const perDay = Math.ceil(base / study);
      const split = splitByDomain('rbt', perDay);
      const top = split.filter((s) => s.n > 0).map((s) => `${s.short} ${s.n}`).join(', ');
      return {
        head: ['Practice questions a day', n0(perDay)],
        rows: [['Split by domain', top], ['Mocks', mocks ? `one every ${n0(Math.max(1, Math.floor(study / mocks)))} days` : 'none planned'], ['Last days', reviewDays ? `${reviewDays} for missed questions only` : 'exam tomorrow']],
        note: 'Volume set to see every outline area twice before the exam, split by the scored questions of each domain.',
      };
    },
  }),
  fieldwork: () => ({
    title: 'BCBA fieldwork months left', cta: 'BCBA requirements',
    exemple: (v) => `Example for ${n0(v.s ?? 0)} supervised and ${n0(v.c ?? 0)} concentrated hours done, ${n0(v.m ?? 0)} hours a month`,
    inputs: [
      { id: 's', label: 'Supervised fieldwork hours done', def: 600, unit: 'h', max: 2000, help: 'Regular fieldwork: your supervisor oversees at least 5% of your hours' },
      { id: 'c', label: 'Concentrated hours done', def: 0, unit: 'h', max: 1500, help: 'Fieldwork with closer supervision (10% of hours); each hour counts as 1.33 regular hours' },
      { id: 'm', label: 'Hours you can log a month', def: 100, unit: 'h', max: 200 },
    ],
    run: (v) => {
      const f = fieldwork(v.s ?? 0, v.c ?? 0, v.m ?? 0);
      return {
        head: ['Months to go', f.months == null ? 'Too few hours a month' : n0(f.months)],
        rows: [['Hours still needed', n0(Math.ceil(f.left))], [`Hours already counted toward the ${n0(BCBA.fieldworkSupervised)}`, n0(Math.round(f.credit))], ['Of all your hours, hands-off work at least (writing plans, analyzing data)', `${n0(f.unrestrictedMin)} h, ${pct(BCBA.unrestrictedShare)}`]],
        alert: f.tooFew ? `Months under ${BCBA.monthMinHours} hours do not count` : f.capped ? `Only ${BCBA.monthMaxHours} hours a month can count` : undefined,
        note: `Each concentrated hour counts ${BCBA.concentratedMultiplier} regular hours toward the ${n0(BCBA.fieldworkSupervised)}-hour total (BCBA Handbook). The handbook calls the hands-off work “unrestricted activities”.`,
      };
    },
  }),
  bcbacost: () => ({
    title: 'BCBA exam cost', cta: 'BCBA exam format',
    exemple: (v) => `Example for ${plural(Math.round(v.a ?? 1), 'attempt')}`,
    inputs: [{ id: 'a', label: 'Exam attempts you plan for', def: 1, max: BCBA.attemptsMax }],
    run: (v) => {
      const a = clamp(Math.round(v.a ?? 1), 1, BCBA.attemptsMax);
      const total = BCBA.feeApplication + BCBA.feeExam * a + BCBA.feeRetakeApplication * (a - 1);
      return {
        head: ['BACB and exam fees', money(total)],
        rows: [['Application', money(BCBA.feeApplication)], [`Exam appointment × ${a}`, money(BCBA.feeExam * a)], [`Retake fee, ${money(BCBA.feeRetakeApplication)} for each attempt after the first × ${a - 1}`, money(BCBA.feeRetakeApplication * (a - 1))]],
        note: `Fees of the BCBA Handbook. ${BCBA.retakeWaitDays} days between attempts.`,
      };
    },
  }),
  fieldpace: () => ({
    title: 'Hours a month to finish your BCBA fieldwork in time', cta: 'BCBA requirements',
    exemple: (v) => `Example for ${n0(v.s ?? 0)} hours done and ${plural(Math.round(v.mo ?? 1), 'month')} to finish`,
    inputs: [
      { id: 's', label: 'Supervised fieldwork hours done', def: 600, unit: 'h', max: 2000 },
      { id: 'mo', label: 'Months you want to finish in', def: 12, max: 120 },
      { id: 'c', label: 'Concentrated hours done', def: 0, unit: 'h', max: 1500, avance: true, help: 'Each hour with closer supervision counts as 1.33 regular hours' },
    ],
    run: (v) => {
      const f = fieldwork(v.s ?? 0, v.c ?? 0, BCBA.monthMinHours);
      const mo = clamp(Math.round(v.mo ?? 12), 1, 120);
      const need = f.left > 0 ? Math.ceil(f.left / mo) : 0;
      const perMonth = f.left > 0 ? Math.max(need, BCBA.monthMinHours) : 0;
      const fastest = Math.ceil(f.left / BCBA.monthMaxHours);
      return {
        head: ['Hours to log each month', f.left <= 0 ? 'None: you are done' : n0(perMonth)],
        rows: [['Hours still needed', n0(Math.ceil(f.left))], ['Hours that can count in one month', `${BCBA.monthMinHours} to ${BCBA.monthMaxHours}`], ['Fastest possible finish', f.left > 0 ? plural(fastest, 'month') : 'now']],
        alert: need > BCBA.monthMaxHours ? `Too fast: only ${BCBA.monthMaxHours} hours a month count, so plan at least ${plural(fastest, 'month')}` : need > 0 && need < BCBA.monthMinHours ? `Months under ${BCBA.monthMinHours} hours do not count, so log at least ${BCBA.monthMinHours}` : undefined,
        note: `Total of ${n0(BCBA.fieldworkSupervised)} hours, each concentrated hour counting ${BCBA.concentratedMultiplier} (BCBA Handbook).`,
      };
    },
  }),
  bcbaretake: () => ({
    title: 'BCBA retakes: what the next attempt costs and how many are left', cta: 'BCBA exam format',
    exemple: (v) => `Example after ${plural(Math.round(v.f ?? 1), 'failed attempt')}`,
    inputs: [{ id: 'f', label: 'Attempts already failed', def: 1, max: BCBA.attemptsMax }],
    run: (v) => {
      const f = clamp(Math.round(v.f ?? 1), 0, BCBA.attemptsMax);
      const left = BCBA.attemptsMax - f;
      const next = f === 0 ? BCBA.feeExam : BCBA.feeRetakeApplication + BCBA.feeExam;
      return {
        head: ['Next attempt costs', left > 0 ? money(next) : 'No attempt left'],
        rows: [['Attempts left', n0(left)], ['Wait after a failed attempt', `${BCBA.retakeWaitDays} days`], ['Time to use the attempts', `${BCBA.authorizationMonths} months from approval`], ...(f > 0 ? [['Made of', `${money(BCBA.feeRetakeApplication)} retake fee + ${money(BCBA.feeExam)} appointment`] as [string, string]] : [])],
        alert: left <= 0 ? 'All attempts are used: a new application is needed' : undefined,
        note: `Fees and limits of the BCBA Handbook. Spent before: ${money(BCBA.feeApplication)} application and ${money(BCBA.feeExam)} for the first appointment.`,
      };
    },
  }),
  passrate: () => ({
    title: 'First-time pass rate by training provider', cta: 'All 2025 pass rates',
    exemple: (v) => `Example for ${PROVIDERS[clamp(Math.round(v.p ?? 0), 0, PROVIDERS.length - 1)].name}`,
    inputs: [{ id: 'p', label: 'Your 40-hour training provider', def: 0, options: PROV_OPT }],
    run: (v) => {
      const p = PROVIDERS[clamp(Math.round(v.p ?? 0), 0, PROVIDERS.length - 1)];
      const diff = p.rate / 100 - pooled;
      return {
        head: ['First-time pass rate, 2025', `${n0(p.rate, 1)}%`],
        rows: [['First-time candidates', n0(p.n)], ['Passed / failed', `${n0(p.pass)} / ${n0(p.fail)}`], ['All listed providers together', `${n0(pooled * 100, 1)}%`], ['Gap with that average', `${diff >= 0 ? '+' : ''}${n0(diff * 100, 1)} points`]],
        note: `BACB report updated ${PR.updated}; names as applicants typed them. A rate reflects who enrolls as much as how well a course teaches.`,
      };
    },
  }),
  domains: () => ({
    title: 'Questions per domain in a set of your size', cta: 'Practice by domain',
    exemple: (v) => `Example for a set of ${n0(v.n ?? 0)} questions`,
    inputs: [{ id: 'n', label: 'Questions in your practice set', def: 30, max: 300 }],
    run: (v) => {
      const n = clamp(Math.round(v.n ?? 30), 1, 300);
      const s = splitByDomain('rbt', n);
      const t = topOfSplit('rbt', s);
      return { head: ['Most questions', topLabel(t)], rows: s.map((d) => [`${d.code}. ${d.short}`, n0(d.n)] as [string, string]), note: `Split in proportion to the ${RBT.scored} scored questions of the board's exam plan (3rd ed.). On the real exam, the biggest domain is ${t.official.code}. ${t.official.short}, with ${t.official.items} of the ${RBT.scored}.` };
    },
  }),
  bcbadomains: () => ({
    title: 'Building your own BCBA study set? How many questions to take from each domain', cta: 'BCBA practice',
    exemple: (v) => `Example for a set of ${n0(v.n ?? 0)} questions`,
    inputs: [{ id: 'n', label: 'Questions in the set you plan', def: 20, max: 400 }],
    run: (v) => {
      const n = clamp(Math.round(v.n ?? 20), 1, 400);
      const s = splitByDomain('bcba', n);
      const t = topOfSplit('bcba', s);
      return { head: ['Most questions', topLabel(t)], rows: s.map((d) => [`${d.code}. ${d.short}`, n0(d.n)] as [string, string]), note: `Split in proportion to the ${BCBA.scored} scored questions of the BCBA exam plan (6th ed.). On the real exam, the biggest domain is ${t.official.code}. ${t.official.short}, with ${t.official.items} of the ${BCBA.scored}. Use it to pick questions from your course materials: this site's BCBA bank is only a sample.` };
    },
  }),
  timeline: () => ({
    title: 'From first training day to exam deadline', cta: 'All the steps',
    exemple: (v) => `Example for training starting in ${MONTHS[clamp(Math.round(v.m ?? 1), 1, 12) - 1]} ${v.y} at ${n0(v.w ?? 0)} hours a week`,
    inputs: [{ id: 'm', label: 'Month you start the training', def: 1, options: MONTH_OPT }, { id: 'y', label: 'Year', def: 2027, options: YEAR_OPT }, { id: 'w', label: 'Training hours a week', def: 10, unit: 'h', max: 60 }],
    run: (v) => {
      const start = iso(v.y ?? 2027, v.m ?? 1, 1);
      const t = trainingPlan(v.w ?? 10);
      const trained = addMonths(start, 0);
      const dEnd = new Date(`${trained}T12:00:00Z`); dEnd.setUTCDate(dEnd.getUTCDate() + Math.max(t.days, t.minDays));
      const end = dEnd.toISOString().slice(0, 10);
      const applyBy = new Date(`${end}T12:00:00Z`); applyBy.setUTCDate(applyBy.getUTCDate() + 30);
      const apply = applyBy.toISOString().slice(0, 10);
      return {
        head: ['Training finished around', dateL(end)],
        rows: [['Competency assessment and application, about', dateL(apply)], ['Exam deadline after approval that day', dateL(addMonths(apply, R.application.monthsToTestAfterApproval))]],
        note: 'Allows 30 days after training for the competency assessment and checks; your supervisor and employer set the real pace.',
      };
    },
  }),
};

export function getSpec(kind: string, _lang = 'en'): MiniSpec {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown mini spec: ${kind}`);
  return f();
}
export const SPEC_IDS = Object.keys(SPECS);
/** Page each calculator's link goes to (Tool.astro reads it). */
export const CTA_PAGE: Record<string, string> = {
  cost: 'rbt-certification-cost', supervision: 'rbt-supervision', retake: 'rbt-exam-retake', reschedule: 'rbt-exam-scheduling', training: 'rbt-40-hour-training',
  application: 'how-to-become-an-rbt', recert: 'rbt-renewal', readiness: 'rbt-mock-exam', pace: 'rbt-study-plan', fieldwork: 'bcba-fieldwork-hours', fieldpace: 'bcba-fieldwork-hours', bcbaretake: 'bcba-exam', bcbacost: 'bcba-exam',
  passrate: 'rbt-pass-rates', domains: 'rbt-exam-questions', bcbadomains: 'bcba-practice-test', timeline: 'how-to-become-an-rbt',
};
