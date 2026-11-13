/**
 * Exam engine: outline domains and weights read from params-2026.json, reproducible draws (same seed,
 * same set), practice sets by domain or by topic, full mocks that follow the published count of scored
 * questions per domain, and marking. Pure functions, no network.
 */
import P from '../../data/params-2026.json';

export type ExamId = 'rbt' | 'bcba';
export const EXAM_IDS: ExamId[] = ['rbt', 'bcba'];
export interface Domain { code: string; name: string; short: string; items: number; share: number; tasks?: number }
export interface Question {
  id: string; exam: ExamId; domain: string;
  /** Task code of the outline the question trains, e.g. "A.2" (RBT TCO 3rd ed.). */
  ref: string;
  /** Topic tags for the topic practice pages. */
  topics?: string[];
  q: string; options: string[]; answer: number; explain: string;
}
export interface ExamParams {
  label: string; name: string; owner: string; vendor: string; items: number; scored: number; unscored: number; minutes: number; options: number;
  editionLabel: string; tasks: number; scoring: string; passText: string; target: number;
  feeApplication: number; feeExam: number; feeRetakeApplication: number; retakeWaitDays: number; attemptsMax: number; authorizationMonths: number;
  domains: Domain[];
}
export const examOf = (e: ExamId) => (P.exams as unknown as Record<ExamId, ExamParams>)[e];
export const domainsOf = (e: ExamId) => examOf(e).domains;
export const LABEL = (e: ExamId) => examOf(e).label;

/** mulberry32: same seed, same draw (shared link, hydration). */
export function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function shuffle<T>(xs: T[], r: () => number): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
/** Stable seed from a text (page id): the build and the browser draw the same first set. */
export function seedOf(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h;
}

export const pool = (bank: Question[], exam: ExamId, domain?: string | null, topic?: string | null) =>
  bank.filter((q) => q.exam === exam && (!domain || q.domain === domain) && (!topic || (q.topics ?? []).includes(topic)));

/** Minutes for a set of n questions: the official time prorated on the official total of questions. */
export const minutesFor = (e: ExamId, n: number) => { const x = examOf(e); return Math.max(1, Math.round((x.minutes * n) / x.items)); };
/** Correct answers to reach the study target of this site on n questions. */
export const targetCount = (e: ExamId, n: number) => Math.ceil(examOf(e).target * n - 1e-9);

/**
 * Full mock: the published number of SCORED questions in each domain (75 for the RBT exam), shuffled.
 * With `withUnscored`, 10 more questions are added and marked unscored, as on the real form where
 * 10 pilot questions are mixed in without being told apart.
 */
export function buildMock(bank: Question[], exam: ExamId, seed: number, withUnscored = false): { qs: Question[]; unscored: Set<string> } {
  const r = rng(seed);
  const used = new Set<string>();
  const out: Question[] = [];
  for (const d of domainsOf(exam)) {
    const p = shuffle(pool(bank, exam, d.code), r).filter((q) => !used.has(q.id)).slice(0, d.items);
    p.forEach((q) => used.add(q.id)); out.push(...p);
  }
  const x = examOf(exam);
  const short = x.scored - out.length;
  if (short > 0) out.push(...shuffle(pool(bank, exam).filter((q) => !used.has(q.id)), r).slice(0, short).map((q) => { used.add(q.id); return q; }));
  const unscored = new Set<string>();
  if (withUnscored) {
    const extra = shuffle(pool(bank, exam).filter((q) => !used.has(q.id)), r).slice(0, x.unscored);
    extra.forEach((q) => unscored.add(q.id)); out.push(...extra);
  }
  return { qs: shuffle(out, r), unscored };
}
/** Practice set: n questions of one domain, one topic, or the whole exam; same seed, same set. */
export function buildPractice(bank: Question[], exam: ExamId, domain: string | null, seed: number, n = 10, topic: string | null = null): Question[] {
  const own = pool(bank, exam, domain, topic);
  return shuffle(own, rng(seed)).slice(0, Math.min(n, own.length));
}

export interface Score { right: number; total: number; target: number; reached: boolean; byDomain: Array<{ code: string; short: string; n: number; r: number }> }
export function score(exam: ExamId, qs: Question[], answers: Array<number | null>, unscored: Set<string> = new Set()): Score {
  const counted = qs.map((q, i) => [q, answers[i]] as const).filter(([q]) => !unscored.has(q.id));
  const right = counted.reduce((s, [q, a]) => s + (a === q.answer ? 1 : 0), 0);
  const target = targetCount(exam, counted.length);
  const byDomain = domainsOf(exam).map((d) => {
    const own = counted.filter(([q]) => q.domain === d.code);
    return { code: d.code, short: d.short, n: own.length, r: own.filter(([q, a]) => a === q.answer).length };
  }).filter((d) => d.n > 0);
  return { right, total: counted.length, target, reached: right >= target, byDomain };
}

/** Binomial tail: chance of at least `need` right out of `n` when each answer is right with probability p. */
export function atLeast(n: number, need: number, p: number) {
  if (need <= 0) return 1;
  if (need > n) return 0;
  if (p <= 0) return 0; if (p >= 1) return 1;
  const lf = (k: number) => { let s = 0; for (let i = 2; i <= k; i++) s += Math.log(i); return s; };
  let s = 0;
  for (let k = need; k <= n; k++) s += Math.exp(lf(n) - lf(k) - lf(n - k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
  return Math.min(1, Math.max(0, s));
}
/** Questions of each domain in a set of n, in proportion to the outline (largest remainders). */
export function splitByDomain(exam: ExamId, n: number): Array<{ code: string; short: string; n: number }> {
  const ds = domainsOf(exam);
  const raw = ds.map((d) => (d.items / examOf(exam).scored) * n);
  const base = raw.map((x) => Math.floor(x));
  let left = n - base.reduce((a, b) => a + b, 0);
  const order = raw.map((x, i) => [x - Math.floor(x), i] as const).sort((a, b) => b[0] - a[0]);
  for (const [, i] of order) { if (left <= 0) break; base[i]++; left--; }
  return ds.map((d, i) => ({ code: d.code, short: d.short, n: base[i] }));
}
