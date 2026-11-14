import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { BANK } from '../src/lib/banks-build';
import { buildMock, buildPractice, pool, score, atLeast, splitByDomain, targetCount, examOf, domainsOf, topOfSplit, topLabel } from '../src/lib/engine/exam';
import { totalCost, supervision, fieldwork, trainingPlan, rescheduleFee, retakePlan, applicationWindow, recertification } from '../src/lib/engine/rules';
import { getSpec, SPEC_IDS } from '../src/lib/mini-specs';

describe('bank', () => {
  it('passes the linter', () => { execFileSync('node', ['scripts/lint-bank.mjs'], { stdio: 'pipe' }); });
  it('the RBT mock is full and follows the outline quotas', () => {
    const m = buildMock(BANK, 'rbt', 42).qs;
    expect(m).toHaveLength(examOf('rbt').scored);
    expect(new Set(m.map((q) => q.id)).size).toBe(m.length);
    for (const d of domainsOf('rbt')) {
      expect(pool(BANK, 'rbt', d.code).length, d.code).toBeGreaterThanOrEqual(d.items);
      expect(m.filter((q) => q.domain === d.code).length, d.code).toBe(d.items);
    }
    expect(buildMock(BANK, 'rbt', 42, true).qs).toHaveLength(examOf('rbt').items);
  });
  it('every BCBA domain has at least four questions', () => {
    for (const d of domainsOf('bcba')) expect(pool(BANK, 'bcba', d.code).length, d.code).toBeGreaterThanOrEqual(4);
  });
  it('draws are reproducible', () => {
    expect(buildMock(BANK, 'rbt', 7).qs.map((q) => q.id)).toEqual(buildMock(BANK, 'rbt', 7).qs.map((q) => q.id));
    expect(buildPractice(BANK, 'rbt', 'C', 3, 10)).toHaveLength(10);
  });
});
describe('marking', () => {
  it('80% study target of 75 scored questions is 60', () => { expect(targetCount('rbt', 75)).toBe(60); });
  it('score counts right answers and skips unscored ones', () => {
    const { qs, unscored } = buildMock(BANK, 'rbt', 1, true);
    const s = score('rbt', qs, qs.map((q) => q.answer), unscored);
    expect(s.total).toBe(75); expect(s.right).toBe(75); expect(s.reached).toBe(true);
  });
  it('binomial tail', () => { expect(atLeast(10, 0, 0.5)).toBe(1); expect(atLeast(2, 2, 0.5)).toBeCloseTo(0.25); });
  it('split by domain sums to the set size', () => {
    for (const n of [1, 10, 37, 75]) expect(splitByDomain('rbt', n).reduce((a, b) => a + b.n, 0)).toBe(n);
    expect(splitByDomain('rbt', 75).map((d) => d.n)).toEqual([13, 8, 19, 14, 10, 11]);
  });
  it('biggest share of a split shows ties and never names one domain of a tie', () => {
    // 20 BCBA questions: B, E, F and G get 3 each (testeurs naïfs 2026-11-14, tour 2).
    const s = splitByDomain('bcba', 20);
    const t = topOfSplit('bcba', s);
    expect(t.tied.map((d) => d.code)).toEqual(['B', 'E', 'F', 'G']);
    expect(topLabel(t)).toBe('Concepts, Ethics, Assessment and Behavior change (3 each)');
    expect(t.official.code).toBe('G');
    expect(t.official.items).toBeGreaterThan(domainsOf('bcba').find((d) => d.code === 'B')!.items);
    // A single top domain is named alone.
    const r = topOfSplit('rbt', splitByDomain('rbt', 75));
    expect(topLabel(r)).toBe('C. ' + domainsOf('rbt').find((d) => d.code === 'C')!.short);
    for (const n of [1, 7, 20, 50, 185]) {
      const x = topOfSplit('bcba', splitByDomain('bcba', n));
      for (const d of splitByDomain('bcba', n)) expect(d.n).toBeLessThanOrEqual(x.max);
      expect(x.tied.every((d) => d.n === x.max)).toBe(true);
    }
  });
});
describe('rules', () => {
  it('cost: application + appointment per attempt + state fees', () => {
    expect(totalCost({ stateId: '', trainingCost: 0, backgroundCost: 0, attempts: 1 }).total).toBe(110);
    expect(totalCost({ stateId: 'wa', trainingCost: 0, backgroundCost: 0, attempts: 2 }).total).toBe(65 + 90 + 95);
    expect(totalCost({ stateId: 'nv', trainingCost: 0, backgroundCost: 0, attempts: 1 }).total).toBe(110 + 70 + 40);
    expect(totalCost({ stateId: 'or', trainingCost: 0, backgroundCost: 0, attempts: 99 }).attemptsCapped).toBe(8);
  });
  it('supervision is 5% rounded up to the minute', () => {
    expect(supervision(100).totalMinutes).toBe(300);
    expect(supervision(7).totalMinutes).toBe(21);
    expect(supervision(0).totalMinutes).toBe(0);
  });
  it('fieldwork months', () => {
    expect(fieldwork(600, 0, 100).months).toBe(14);
    expect(fieldwork(0, 0, 10).months).toBeNull();
    expect(fieldwork(0, 0, 200).capped).toBe(true);
    expect(fieldwork(2000, 0, 100).left).toBe(0);
  });
  it('40-hour training pace', () => {
    expect(trainingPlan(10).days).toBe(28);
    expect(trainingPlan(80).tooFast).toBe(true);
    expect(trainingPlan(1).tooSlow).toBe(true);
  });
  it('rescheduling fees by notice', () => {
    expect(rescheduleFee(31).fee).toBe(0); expect(rescheduleFee(10).fee).toBe(27);
    expect(rescheduleFee(3).fee).toBe(32); expect(rescheduleFee(1).fee).toBe(45);
  });
  it('retakes: 7 days after, inside 12 months', () => {
    const r = retakePlan(1, '2026-11-01', '2026-09-15');
    expect(r.next).toBe('2026-11-08'); expect(r.deadline).toBe('2027-09-15'); expect(r.left).toBe(7);
    expect(retakePlan(8, '2027-01-01', '2026-09-15').over).toBe(true);
  });
  it('application window', () => {
    const w = applicationWindow('2027-03-15');
    expect(w.checksNoEarlier).toBe('2026-09-16'); expect(w.competencyNoEarlier).toBe('2026-12-15');
  });
  it('recertification: last annual renewal in 2026, then two-year cycles with PDUs', () => {
    const a = recertification('2025-09-30');
    expect(a.next).toBe('2026-09-30'); expect(a.oldRules).toBe(true); expect(a.competencyNoEarlier).toBe('2026-08-16'); expect(a.pdu).toBe(0);
    const b = recertification('2026-03-15');
    expect(b.next).toBe('2028-03-15'); expect(b.oldRules).toBe(false); expect(b.pdu).toBe(12); expect(b.competencyNoEarlier).toBeNull();
    expect(b.reinstatementEnds).toBe('2028-04-14');
  });
  it('every mini-spec runs with its defaults', () => {
    for (const k of SPEC_IDS) {
      const s = getSpec(k);
      const out = s.run(Object.fromEntries(s.inputs.map((i) => [i.id, i.def])), new Set());
      expect(JSON.stringify(out), k).not.toMatch(/NaN|undefined|Infinity/);
    }
  });
});
