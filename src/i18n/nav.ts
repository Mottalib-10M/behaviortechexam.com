/** Menus and footer, built from the page registry: a new page file appears in its group by itself. */
import { route, hasRoute, type Locale } from './routes';
import { PAGES, pageById } from '../lib/guides';
import type { Group } from '../lib/guide-types';
import { examOf } from '../lib/engine/exam';
const SCORED = examOf('rbt').scored;
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<string, string> = { home: 'Practice exam', method: 'Method and sources', about: 'About', widget: 'Embed the quiz', contact: 'Contact', editorial: 'Editorial policy', privacy: 'Privacy', terms: 'Legal notice', cookies: 'Cookies' };
/** Short labels for the top menu (one or two words, MASTERFACTORY §10.3); full labels in the footer and on the home page. */
const GROUP_SHORT: Record<Group, string> = { practice: 'Practice exams', domains: 'Domains', topics: 'Topics', become: 'Certification', states: 'States', maintain: 'Renewal', bcba: 'BCBA (next level)', plan: 'Study plan' };
const GROUP_LABEL: Record<Group, string> = { practice: 'Practice exams and mocks', domains: 'Practice by outline domain', topics: 'Practice by topic', become: 'Becoming certified: steps, cost, training', states: 'Rules and fees by state', maintain: 'Keeping the certification', bcba: 'BCBA exam: the analyst level above RBT', plan: 'Study plan and review' };
/** Menu labels of the practice pages: what sets each one apart, not its search name (eight near-synonyms confused all three testers, 2026-11-14, tour 3). The footer keeps the page names. */
const PRACTICE_MENU: Array<[string, string]> = [
  ['rbt-mock-exam', `Another timed mock: ${SCORED} questions picked at random`],
  ['registered-behavior-technician-practice-exam', 'Quick check: 25 mixed questions'],
  ['rbt-practice-test', '10 questions at a time, mixed or by domain'],
  ['rbt-practice-questions', '8 questions on scenes from a therapy session'],
  ['rbt-exam-questions', 'Read mode: every question with its answer'],
  ['rbt-passing-score', 'What score do I need?'],
  ['rbt-exam', 'How the real exam works: time, fees, retakes'],
];
export const GROUPS_ORDER: Group[] = ['practice', 'domains', 'topics', 'become', 'states', 'maintain', 'bcba', 'plan'];
export const groupLabel = (g: Group, _lang: Locale = 'en') => GROUP_LABEL[g];
export const label = (id: string, _lang: Locale = 'en') => CORE[id] ?? pageById(id)?.en.nav ?? id;
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id, lang) });
export const inGroup = (g: Group, lang: Locale) => PAGES.filter((p) => p.group === g && hasRoute(p.id, lang)).map((p) => link(p.id, lang));
export function navCategories(lang: Locale, short = true): NavCategory[] {
  // The full mock lives on the home page: it opens the Practice group, so the menu leads back to it (testeurs naïfs, 2026-11-14).
  return GROUPS_ORDER.map((g) => ({ label: short ? GROUP_SHORT[g] : GROUP_LABEL[g], links: g === 'practice' ? practiceLinks(lang, short) : inGroup(g, lang) })).filter((c) => c.links.length);
}
function practiceLinks(lang: Locale, short: boolean): NavLink[] {
  const home = { href: route('home', lang), label: short ? `Full timed mock, ${SCORED} questions (home)` : 'Full RBT mock exam (home)' };
  if (!short) return [home, ...inGroup('practice', lang)];
  const known = PRACTICE_MENU.filter(([id]) => hasRoute(id, lang)).map(([id, l]) => ({ href: route(id, lang), label: l }));
  // A practice page added later still shows, under its own name.
  const rest = PAGES.filter((p) => p.group === 'practice' && hasRoute(p.id, lang) && !PRACTICE_MENU.some(([id]) => id === p.id)).map((p) => link(p.id, lang));
  return [home, ...known, ...rest];
}
export const navDirect = (_lang: Locale): NavLink[] => [];
export const footerColumns = (lang: Locale): NavCategory[] => [
  ...navCategories(lang, false),
  { label: 'This site', links: ['home', 'method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].map((i) => link(i, lang)) },
];
export const popularLinks = (_lang: Locale): NavLink[] => [];
