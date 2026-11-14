/** Menus and footer, built from the page registry: a new page file appears in its group by itself. */
import { route, hasRoute, type Locale } from './routes';
import { PAGES, pageById } from '../lib/guides';
import type { Group } from '../lib/guide-types';
export interface NavLink { href: string; label: string } export interface NavCategory { label: string; links: NavLink[] }
const CORE: Record<string, string> = { home: 'Practice exam', method: 'Method and sources', about: 'About', widget: 'Embed the quiz', contact: 'Contact', editorial: 'Editorial policy', privacy: 'Privacy', terms: 'Legal notice', cookies: 'Cookies' };
/** Short labels for the top menu (one or two words, MASTERFACTORY §10.3); full labels in the footer and on the home page. */
const GROUP_SHORT: Record<Group, string> = { practice: 'Practice exams', domains: 'Domains', topics: 'Topics', become: 'Certification', states: 'States', maintain: 'Renewal', bcba: 'BCBA (next level)', plan: 'Plan' };
const GROUP_LABEL: Record<Group, string> = { practice: 'Practice exams and mocks', domains: 'Practice by outline domain', topics: 'Practice by topic', become: 'Becoming certified: steps, cost, training', states: 'Rules and fees by state', maintain: 'Keeping the certification', bcba: 'BCBA exam: the analyst level above RBT', plan: 'Study plan and review' };
export const GROUPS_ORDER: Group[] = ['practice', 'domains', 'topics', 'become', 'states', 'maintain', 'bcba', 'plan'];
export const groupLabel = (g: Group, _lang: Locale = 'en') => GROUP_LABEL[g];
export const label = (id: string, _lang: Locale = 'en') => CORE[id] ?? pageById(id)?.en.nav ?? id;
const link = (id: string, lang: Locale): NavLink => ({ href: route(id, lang), label: label(id, lang) });
export const inGroup = (g: Group, lang: Locale) => PAGES.filter((p) => p.group === g && hasRoute(p.id, lang)).map((p) => link(p.id, lang));
export function navCategories(lang: Locale, short = true): NavCategory[] {
  // The full mock lives on the home page: it opens the Practice group, so the menu leads back to it (testeurs naïfs, 2026-11-14).
  return GROUPS_ORDER.map((g) => ({ label: short ? GROUP_SHORT[g] : GROUP_LABEL[g], links: g === 'practice' ? [{ href: route('home', lang), label: 'Full RBT mock exam (home)' }, ...inGroup(g, lang)] : inGroup(g, lang) })).filter((c) => c.links.length);
}
export const navDirect = (_lang: Locale): NavLink[] => [];
export const footerColumns = (lang: Locale): NavCategory[] => [
  ...navCategories(lang, false),
  { label: 'This site', links: ['home', 'method', 'about', 'contact', 'editorial', 'widget', 'terms', 'privacy', 'cookies'].map((i) => link(i, lang)) },
];
export const popularLinks = (_lang: Locale): NavLink[] => [];
