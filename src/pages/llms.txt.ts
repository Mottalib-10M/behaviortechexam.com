/** llms.txt (RECETTE §21), generated at build from the page registry: always in sync with the site. */
import { PAGES } from '../lib/guides';
import { SITE_URL, LAST_UPDATED, SITE_NAMES } from '../data/site-config';
import { route } from '../i18n/routes';
import { GROUPS_ORDER, groupLabel } from '../i18n/nav';
import params from '../data/params-2026.json';

const words = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export function GET() {
  const lines = [
    `# ${SITE_NAMES.en}`,
    '',
    `> Free practice for the US behavior technician certification exam (RBT exam of the Behavior Analyst Certification Board): a 75-question mock in the published format with the domain weights of the RBT Test Content Outline (3rd ed.), practice by domain and by topic with explanations, review of missed questions kept in the browser, the cost of certification, application and renewal deadlines, monthly supervision, 2025 pass rates by training provider, state rules for technicians (Washington, Oregon, Nevada, Louisiana) and a BCBA exam track. Questions written by Radif Partners (outline wording not reproduced). Independent: not affiliated with the BACB or Pearson VUE. Last updated ${words(LAST_UPDATED)}.`,
    '',
    '## Data',
    `- Format, fees, deadlines and state rules read in the BACB handbooks and on state board pages, retrieved ${words(params.retrieved_at)}.`,
    '- Practice questions: written by Radif Partners; they are not questions from the real exam.',
    '',
    `- [Free mock exam](${SITE_URL}${route('home', 'en')}): 75 questions, domain weights, study target`,
    '',
    ...GROUPS_ORDER.flatMap((g) => [`## ${groupLabel(g)}`, ...PAGES.filter((p) => p.group === g).map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`), '']),
    '## About',
    `- [Method and sources](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
