import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'how-to-become-an-rbt', group: 'become', order: 320,
  tool: { kind: 'mini:application', props: { m: 1, y: 2027 } },
  mini: { kind: 'mini:training', props: { w: 20 } },
  related: ['rbt-certification', 'rbt-40-hour-training', 'rbt-competency-assessment', 'rbt-exam-scheduling', 'rbt-certification-cost'],
  sources: ['rbt_handbook', 'rbt_training', 'rbt_competency', 'pearson_bacb'],
  demarche: true,
  en: {
    slug: 'how-to-become-an-rbt', nav: 'How to become an RBT', card: 'The steps in order, with the date windows that decide when you can apply and test.',
    title: 'Become an RBT: 7 Steps, Deadlines and Forms for 2026',
    description: 'Become an RBT step by step: board account, 40-hour training, competency assessment, attested checks, application, exam booking and the 90 and 180 days.',
    h1: 'Become an RBT: the steps and their deadlines',
    intro: 'To become an RBT, you go through seven steps in a fixed order; the calculator above gives the earliest dates for each check from the month you plan to apply.',
    resume: (h) => `The path is short but the windows are tight. First, create an account in the board's portal: you will need your board ID for the training certificate and the forms. Second, complete the ${h.R.training.hours}-hour training in ${h.R.training.minDays} to ${h.R.training.maxDays} days. Third, pass the initial competency assessment of ${h.R.competency.tasks} tasks after the training, and no more than ${h.R.competency.withinDaysBeforeApplication} days before you apply. Fourth, have an attesting certificant confirm your age, education and criminal background and abuse registry checks no more than ${h.R.eligibility.checksWithinDays} days before you apply, and sign the attestation form no more than ${h.R.eligibility.attestationWithinDays} days before you pay. Fifth, submit the application with the training certificate, the competency assessment and the attestation, and pay ${h.usd(h.X('rbt').feeApplication)}. Sixth, once approved, book the exam with Pearson VUE for ${h.usd(h.X('rbt').feeExam)}. Seventh, pass, and have your supervisor add you so your certification becomes active.`,
    faqs: (h) => [
      { q: 'Can I become an RBT without a job at an ABA provider?', a: 'It is harder. The competency assessment must be done by assessors who work at or contract with the same organization as you and the client involved, and at least three tasks must be shown with a client receiving services. Most candidates therefore go through an employer. After certification you also need a qualified supervisor on record to practice.' },
      { q: 'What happens if my RBT application is not approved?', a: 'The board sends feedback and next steps by email and as action items in your portal account, where you can resolve them. The handbook also describes an appeal within 30 days of the determination. Fees already paid are nonrefundable, so check every document and date before you submit.' },
      { q: 'How long is an RBT application open?', a: `${h.R.application.activeDays} days. If you do not meet every requirement within that period, the handbook says you must submit a new application, pay the fee again and meet the requirements in force at that time. After approval, you have ${h.R.application.monthsToTestAfterApproval} months to sit and pass the exam, with up to ${h.X('rbt').attemptsMax} attempts.` },
    ],
    body: (h) => `
<h2>How to become an RBT, step by step</h2>
<ol>
<li><strong>Portal account.</strong> Create it once and always log in to that same account; the handbook warns that a new account cannot be used to recertify later.</li>
<li><strong>Training.</strong> ${h.R.training.hours} hours under the 2026 curriculum, with a certificate from the Responsible Trainer. See ${h.a('rbt-40-hour-training', 'the training page')}.</li>
<li><strong>Competency assessment.</strong> ${h.R.competency.tasks} tasks with a qualified assessor, after the training. See ${h.a('rbt-competency-assessment', 'the checklist')}.</li>
<li><strong>Attestation.</strong> An attesting certificant confirms age, education and checks, then signs the form.</li>
<li><strong>Application.</strong> Upload the documents and pay ${h.usd(h.X('rbt').feeApplication)}.</li>
<li><strong>Exam.</strong> Book with Pearson VUE once approved; see ${h.a('rbt-exam-scheduling', 'scheduling')}.</li>
<li><strong>Activation.</strong> Your supervisor or requirements coordinator adds you in the portal.</li>
</ol>
<h2>The windows that cause delays</h2>
${h.table(['Item', 'Must be no older than', 'Counted to'], [
  ['Competency assessment', `${h.R.competency.withinDaysBeforeApplication} days`, 'Submission of the application'],
  ['Confirmation of age, education and checks', `${h.R.eligibility.checksWithinDays} days`, 'Submission of the application'],
  ['Signed attestation form', `${h.R.eligibility.attestationWithinDays} days`, 'Payment of the application'],
], `RBT Handbook and competency packet, read on ${h.read}.`, ['l', 'l', 'l'])}
<p>The training itself has no expiry once finished, but the competency assessment cannot happen before it. Plan backwards from your application month, which is what the calculator above does. The second calculator checks your training pace against the ${h.R.training.minDays}- and ${h.R.training.maxDays}-day limits.</p>
<h2>Costs along the way</h2>
<p>Board and vendor fees come to ${h.usd(h.floor)} for one attempt. Training and checks depend on your employer. Four states add their own credential. The ${h.a('rbt-certification-cost', 'cost calculator')} adds it all up for your state.</p>`,
  },
});
