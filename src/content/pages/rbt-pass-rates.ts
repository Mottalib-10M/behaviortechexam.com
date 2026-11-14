import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-pass-rates', group: 'become', order: 380,
  tool: { kind: 'passrates', props: { minN: 500 } },
  mini: { kind: 'mini:passrate', props: { p: 0 } },
  related: ['rbt-40-hour-training', 'rbt-passing-score', 'rbt-mock-exam', 'rbt-certification-cost'],
  sources: ['rbt_pass_rates', 'rbt_training'],
  en: {
    slug: 'rbt-pass-rates', nav: 'RBT pass rates 2025', card: 'First-time pass rates of the 51 training providers in the board’s 2025 report, sortable.',
    title: 'RBT Pass Rates 2025 by Training Provider, Sortable',
    description: 'RBT pass rates for 2025 from the board report: first-time candidates and pass rate for 51 training providers, a pooled rate, and what the numbers do mean.',
    h1: 'RBT pass rates by training provider, 2025',
    intro: 'These RBT pass rates come from the board’s 2025 report: first-time candidates and their pass rate for every provider listed, sortable below by size or by rate.',
    resume: (h) => `Each year the board publishes the first-time exam pass rates of 40-hour training providers that were publicly available and had at least ten first-time candidates. The ${h.pr.year} report, updated ${h.pr.updated}, lists ${h.pr.providers.length} providers. Together they sent ${h.num(h.pr.n)} first-time candidates to the exam, of whom ${h.num(h.pr.pass)} passed: a pooled rate of ${h.pc(h.pr.rate, 1)}, which we computed by adding the report's rows. The largest providers by volume were Relias with ${h.num(h.pr.byName('Relias').n)} first-time candidates at ${h.num(h.pr.byName('Relias').rate, 1)}%, CentralReach with ${h.num(h.pr.byName('CentralReach').n)} at ${h.num(h.pr.byName('CentralReach').rate, 1)}%, and the Autism Partnership Foundation with ${h.num(h.pr.byName('Autism Partnership Foundation').n)} at ${h.num(h.pr.byName('Autism Partnership Foundation').rate, 1)}%. Rates range from under 10 percent to 100 percent across small providers. The board warns that names come from what applicants typed and may differ from the providers' own records, and that candidates may not test in the same year as their training.`,
    faqs: (h) => [
      { q: 'What is the RBT exam pass rate?', a: `Across the ${h.pr.providers.length} training providers in the board’s ${h.pr.year} report, ${h.pc(h.pr.rate, 1)} of first-time candidates passed. That figure covers only providers listed in the report, with ten or more first-time candidates, so it is a close estimate of the overall first-time pass rate rather than the board’s own total.` },
      { q: 'Does a high pass rate mean a better training?', a: 'Not by itself. A provider that trains a small, selected group, such as university students, can show a very high rate; one that trains thousands of new hires with varied backgrounds may show a lower one with a sound course. Look at the number of candidates next to the rate, and at how the provider supports you after the course.' },
      { q: 'Why is my training provider not in the list?', a: 'The report includes only providers that were publicly available at the time of publication and had ten or more first-time candidates in the year. In-house trainings of clinics, and small providers, are not listed. Names also come from what applicants entered, so a provider may appear under a different name.' },
    ],
    body: (h) => `
<h2>How to read RBT pass rates</h2>
<p>The table above starts with providers that had at least 500 first-time candidates, where rates are stable. Lower the threshold to see smaller providers, whose rates swing more from year to year: with ten candidates, one more failure moves the rate by ten points. Sorting by rate puts the smallest programs at the top and bottom, which says more about sample size than quality.</p>
${h.table(['Size of provider', 'Providers', 'First-time candidates', 'Pooled pass rate'], [[10, 100], [100, 1000], [1000, 1e9]].map(([lo, hi]) => { const g = h.pr.providers.filter((p) => p.n >= lo && p.n < hi); const n = g.reduce((s, p) => s + p.n, 0), ps = g.reduce((s, p) => s + p.pass, 0); return [hi > 1e8 ? `${h.num(lo)} or more` : `${h.num(lo)} to ${h.num(hi - 1)}`, g.length, h.num(n), h.pc(ps / n, 1)]; }), `Our grouping of the ${h.pr.year} report rows.`, ['l', 'r', 'r', 'r'])}
<h2>What the report leaves out</h2>
<p>It counts first attempts only, so it says nothing about how many candidates pass on a second try. It does not include repeat test takers, in-house trainings that are not publicly available, or providers under ten candidates. And it cannot separate the effect of a course from the effect of who takes it. Use it as one signal among others when choosing a provider, along with the format, the support offered and whether the course follows the ${h.a('rbt-40-hour-training', '2026 curriculum')}.</p>
<h2>Your own odds</h2>
<p>The best predictor you control is your accuracy on practice questions across all six domains. The ${h.a('rbt-passing-score', 'readiness calculator')} turns it into a chance of reaching the study target on a full mock, and the ${h.a('rbt-mock-exam', 'mock exam')} measures it under exam conditions.</p>`,
  },
});
