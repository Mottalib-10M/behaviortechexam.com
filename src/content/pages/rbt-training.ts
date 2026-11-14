import { definePage } from '../../lib/guide-types';
const big = (h: { pr: { providers: Array<{ rate: number; n: number }> } }) => h.pr.providers.filter((p) => p.n >= 1000);
export default definePage({
  id: 'rbt-training', group: 'become', order: 328,
  tool: { kind: 'passrates', props: { minN: 1000 } },
  mini: { kind: 'mini:training', props: { w: 20 } },
  related: ['rbt-40-hour-training', 'rbt-pass-rates', 'rbt-competency-assessment', 'rbt-certification', 'rbt-practice-test'],
  sources: ['rbt_training', 'rbt_pass_rates', 'rbt_handbook', 'rbt_competency'],
  en: {
    slug: 'rbt-training', nav: 'RBT training: choosing a course', card: 'Compare 40-hour course providers by their 2025 first-time pass rates and see what training comes after.',
    title: 'RBT Training: Pick a 40-Hour Course by Its Pass Rate',
    description: 'RBT training compared: first-time pass rates of the largest 40-hour course providers in 2025, what a valid course must include and the training after it.',
    h1: 'RBT training: how to choose a 40-hour course',
    intro: 'RBT training starts with a 40-hour course from a provider of your choice; the table above ranks the largest providers by the share of their trainees who passed the exam on the first try.',
    resume: (h) => `RBT training is the first requirement you control yourself. The board does not run courses: it sets the 2026 requirements and curriculum, and providers of all kinds offer the ${h.R.training.hours}-hour course, from employers training their own new hires to online schools and universities. Since the course is also the main preparation for the exam, the choice matters. The board publishes each year the first-time exam results of trainees by training provider. In the ${h.pr.year} report, updated ${h.pr.updated}, ${h.num(h.pr.n)} first-time candidates came from ${h.pr.providers.length} providers with ten or more candidates, and ${h.pc(h.pr.rate)} of them passed. Among the ${big(h).length} providers with at least 1,000 first-time candidates, the rate ranged from ${Math.min(...big(h).map((p) => p.rate))}% to ${Math.max(...big(h).map((p) => p.rate))}%. A rate reflects who enrolls as well as how they are taught, so read it next to the format, the price and the support offered. The table at the top lets you lower the threshold to see smaller providers.`,
    faqs: (h) => [
      { q: 'Where can I get RBT training?', a: 'From any provider whose course meets the board requirements: many ABA employers train new hires for free, and online providers, colleges and private trainers sell the course to individuals. The board does not approve or list courses one by one, so check that the course follows the 2026 curriculum and is overseen by a qualified Responsible Trainer.' },
      { q: 'Does the training provider change my chance of passing the RBT exam?', a: `The board report shows large gaps: among providers with at least 1,000 first-time candidates in ${h.pr.year}, pass rates ran from ${Math.min(...big(h).map((p) => p.rate))}% to ${Math.max(...big(h).map((p) => p.rate))}%. Part of that gap comes from who enrolls, for example people already working in ABA versus newcomers, so treat it as a signal to compare, not a promise.` },
      { q: 'Is RBT training enough on its own to pass the exam?', a: 'The course covers the curriculum, but the exam asks you to apply it to short scenarios under time pressure. Most candidates add practice questions after the course, then a timed mock. The competency assessment, done with a qualified assessor, checks the hands-on skills that the written exam cannot see.' },
      { q: 'Is there more training after the 40 hours?', a: `Yes. The initial competency assessment follows the course, with ${h.R.competency.tasks} tasks to show. Once certified, the monthly supervision is ongoing training on the job, and under the 2026 maintenance rules each two-year cycle requires ${h.R.recertification.pduHours} hours of professional development before you can renew.` },
    ],
    body: (h) => `
<h2>RBT training stages from course to renewal</h2>
${h.table(['Stage', 'What it involves', 'Rule'], [
  ['40-hour course', 'Curriculum of eight sections, in person, online or mixed', `${h.R.training.hours} hours in ${h.R.training.minDays} to ${h.R.training.maxDays} days`],
  ['Competency assessment', `${h.R.competency.tasks} tasks shown to a qualified assessor`, `Within ${h.R.competency.withinDaysBeforeApplication} days before applying`],
  ['Exam preparation', 'Practice questions and timed mocks', `${h.X('rbt').items} questions in ${h.time('rbt')}`],
  ['Supervision', 'Observation and feedback on the job', `${h.pc(h.R.supervision.share)} of service hours each month`],
  ['Professional development', 'Continuing education for renewal', `${h.R.recertification.pduHours} hours per ${h.R.recertification.cycleYears}-year cycle`],
], `2026 training requirements, competency packet and RBT Handbook, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>What a valid RBT training course must include</h2>
<p>Under the 2026 requirements, the course is designed and overseen by a Responsible Trainer who holds BCaBA, BCBA or BCBA-D certification and has completed the ${h.R.training.trainerSupervisionTrainingHours}-hour supervision training. Assistant trainers must be RBTs or higher. Readings do not count toward the hours, and a course must use active methods such as role-play with feedback. Behavior-change interventions take ${h.R.training.sectionsHours.interventions} of the hours. The ${h.a('rbt-40-hour-training', '40-hour training page')} lists every section with its minimum hours and what the certificate must show.</p>
<h2>How to compare RBT training providers</h2>
<ul>
<li>Pass rate: find the provider in the table above; with fewer than a few hundred candidates, one cohort can move the rate a lot.</li>
<li>Format: self-paced video suits people who study alone; live sessions give feedback on role-plays, which the competency assessment will test.</li>
<li>Competency assessment: ask whether the provider or employer arranges it, since you need a qualified assessor for the ${h.R.competency.withClientMin} tasks done with a client.</li>
<li>Price and refund: employer courses are often free; paid courses vary, and the board fees of ${h.usd(h.floor)} come on top.</li>
<li>Curriculum version: the certificate must state that the course meets the 2026 requirements.</li>
</ul>
<h2>Fitting RBT training into your weeks</h2>
<p>The calculator under the summary spreads the ${h.R.training.hours} hours over your weekly pace and warns when you would finish faster than ${h.R.training.minDays} days or slower than ${h.R.training.maxDays}. Once the course is done, move to the ${h.a('rbt-competency-assessment', 'competency assessment')} and start the ${h.a('rbt-practice-test', 'practice test')} while the content is fresh. The full pass rate list, with every provider and its counts, is on the ${h.a('rbt-pass-rates', 'pass rates page')}.</p>`,
  },
});
