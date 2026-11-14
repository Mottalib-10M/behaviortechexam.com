import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-certification', group: 'become', order: 310,
  tool: { kind: 'mini:timeline', props: { m: 2, y: 2027, w: 8 } },
  mini: { kind: 'mini:cost', props: { st: 0, a: 1 } },
  related: ['how-to-become-an-rbt', 'rbt-certification-cost', 'rbt-40-hour-training', 'rbt-requirements-by-state', 'rbt-renewal'],
  sources: ['rbt_page', 'rbt_handbook', 'bacb_regbrief', 'bacb_ip'],
  demarche: true,
  en: {
    slug: 'rbt-certification', nav: 'RBT certification', card: 'What the credential is, who needs it, what it takes and how long it lasts, with a timeline.',
    title: 'RBT Certification in 2026: Requirements, Cost and Timeline',
    description: 'RBT certification explained: who issues it, the six requirements, the cost, how long it takes from the first training day, renewal and the state rules.',
    h1: 'RBT certification: what it is and what it takes',
    intro: 'RBT certification is the board’s credential for behavior technicians who deliver ABA services under supervision; the timeline below estimates when you could hold it.',
    resume: (h) => `The Registered Behavior Technician credential is issued by the Behavior Analyst Certification Board, a nonprofit that also certifies behavior analysts and assistant analysts. It certifies paraprofessionals who implement behavior-analytic services designed and supervised by a BCBA, a BCaBA or another qualified supervisor. Employers and funders often require it, and three states regulate technicians on top of it. Getting it takes six steps: meet the basic eligibility of age ${h.R.eligibility.minAge} and a ${h.R.eligibility.education}; complete the ${h.R.training.hours}-hour training; pass the initial competency assessment; pass background and abuse registry checks; apply and pay ${h.usd(h.X('rbt').feeApplication)}; and pass the ${h.X('rbt').items}-question exam, paying ${h.usd(h.X('rbt').feeExam)} per appointment. Keeping it means working under ongoing supervision, following the ethics code for technicians and renewing on time. The calculator above turns a start month and a weekly training pace into dates.`,
    faqs: (h) => [
      { q: 'How long does it take to get RBT certification?', a: `Often one to three months for a full-time new hire, longer when training is spread out. The ${h.R.training.hours}-hour training takes at least ${h.R.training.minDays} days; the competency assessment, checks and application follow; then you have ${h.R.application.monthsToTestAfterApproval} months after approval to pass the exam. The calculator on this page gives an estimate for your own pace.` },
      { q: 'Do I need a degree for RBT certification?', a: `No. The requirement is a ${h.R.eligibility.education}, together with being at least ${h.R.eligibility.minAge}. Some employers and some states ask for more, such as Oregon or Washington rules for their own technician credentials, but the board itself does not require a college degree.` },
      { q: 'Is RBT certification valid in every state?', a: 'It is a national credential, but each state decides how behavior analysis is regulated. Washington, Oregon, Nevada and Louisiana have their own credential or registration for technicians, which come with their own forms and fees. In most other states, the board’s certification and the employer’s rules are what apply.' },
      { q: 'What can an RBT not do?', a: 'Practice without supervision, design or change treatment plans, run assessments on their own, or present themselves as a behavior analyst. The technician implements plans written by the supervisor, collects data and reports. These limits come up often in the ethics and documentation questions of the exam.' },
    ],
    body: (h) => `
<h2>RBT certification requirements in order</h2>
${h.table(['Step', 'Rule', 'Window'], [
  ['Eligibility', `Age ${h.R.eligibility.minAge}+, ${h.R.eligibility.education}`, 'Confirmed by an attesting certificant'],
  ['Training', `${h.R.training.hours} hours, 2026 curriculum`, `${h.R.training.minDays} to ${h.R.training.maxDays} days`],
  ['Competency assessment', `${h.R.competency.tasks} tasks, ${h.R.competency.withClientMin} with a client`, `Within ${h.R.competency.withinDaysBeforeApplication} days before applying`],
  ['Checks', 'Criminal background and abuse registry', `Confirmed within ${h.R.eligibility.checksWithinDays} days before applying`],
  ['Application', `${h.usd(h.X('rbt').feeApplication)} to the board`, `Approval, then ${h.R.application.monthsToTestAfterApproval} months to pass`],
  ['Exam', `${h.usd(h.X('rbt').feeExam)} per Pearson VUE appointment`, `Up to ${h.X('rbt').attemptsMax} attempts`],
], `RBT Handbook, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>What the credential lets you do</h2>
<p>An RBT delivers direct services: running teaching programs, implementing behavior plans, collecting data and writing session notes, always under a qualified supervisor. The credential does not let you design treatment, interpret assessments or supervise others. When you pass, your status starts as inactive until your supervisor or requirements coordinator adds you as a supervisee in the board portal.</p>
<h2>Where states come in</h2>
<p>The board's brief on licensure laws, version ${h.RB.version}, counts ${h.RB.statesRegulatingTechnicians} states that regulate technicians and ${h.RB.statesWithTechnicianRegistry} that keep a registry. The ${h.a('rbt-requirements-by-state', 'state finder')} shows what applies where you work, from Washington's certified behavior technician to Louisiana's registered line technician.</p>
<h2>Keeping it</h2>
<p>Supervision of at least ${h.pc(h.R.supervision.share)} of your service hours each month, the ethics code, and renewal: every ${h.R.recertification.cycleYears} years for ${h.usd(h.R.recertification.fee)} with ${h.R.recertification.pduHours} hours of professional development under the 2026 rules. See ${h.a('rbt-supervision', 'supervision')} and ${h.a('rbt-renewal', 'renewal')}. The name RBT is a certification mark of the board; only certified technicians may use it.</p>`,
  },
});
