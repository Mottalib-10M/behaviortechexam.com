import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-40-hour-training', group: 'become', order: 330,
  tool: { kind: 'mini:training', props: { w: 10 } },
  mini: { kind: 'mini:timeline', props: { m: 1, y: 2027, w: 10 } },
  related: ['rbt-competency-assessment', 'how-to-become-an-rbt', 'rbt-pass-rates', 'rbt-certification-cost'],
  sources: ['rbt_training', 'rbt_handbook', 'rbt_pass_rates'],
  demarche: true,
  en: {
    slug: 'rbt-40-hour-training', nav: 'RBT 40-hour training', card: 'Sections and hours of the 2026 curriculum, the 5 to 180 day window, who may teach it.',
    title: 'RBT 40-Hour Training 2026: Sections, Deadlines, Trainers',
    description: 'RBT 40-hour training under the 2026 rules: eight curriculum sections, 5 to 180 days to finish, who can teach it, the certificate, your training calendar.',
    h1: 'RBT 40-hour training: the 2026 requirements',
    intro: 'The RBT 40-hour training must be finished in no fewer than 5 and no more than 180 days; the calculator below turns your weekly hours into days and checks both limits.',
    resume: (h) => `Applicants who apply from January 1, 2026 must have completed a training that meets the board's 2026 requirements, version 03/2026. It lasts at least ${h.R.training.hours} hours, spread over no fewer than ${h.R.training.minDays} days and no more than ${h.R.training.maxDays} days, and follows a curriculum of eight sections. Behavior-change interventions take the largest block, ${h.R.training.sectionsHours.interventions} hours; ethics and professionalism take ${h.R.training.sectionsHours.ethics}. The sections total 38 hours, and ${h.R.training.sectionsHours.unallocated} unallocated hours can be added to any of them. The training can be in person, online or both, and must use behavioral skills training methods such as modeling, role-play with feedback or quizzes; assigned readings do not count toward the hours. A Responsible Trainer, a board-certified analyst (BCBA, or BCBA-D at doctoral level) or assistant analyst (BCaBA) who has completed the ${h.R.training.trainerSupervisionTrainingHours}-hour supervision training, designs and oversees it and signs the certificate you upload with your application.`,
    faqs: (h) => [
      { q: 'Can the RBT 40-hour training be done online?', a: 'Yes. The 2026 requirements allow in-person training, online training or a mix. Whatever the format, it must include behavioral skills training components, such as video modeling, role-play with feedback, quizzes or instructor-led discussion, and it must be overseen by a qualified Responsible Trainer. Reading assignments do not count toward the 40 hours.' },
      { q: 'How fast can I finish the 40-hour training?', a: `No faster than ${h.R.training.minDays} days from the first to the last session, even if you could fit 40 hours into fewer. And no slower than ${h.R.training.maxDays} days. The calculator above shows how your weekly pace fits between those two limits. A full-time course of eight hours a day therefore still takes at least five days.` },
      { q: 'Is the 40-hour training free?', a: 'Many employers provide it free to new hires, and some providers offer free or low-cost versions. Its price is not set by the board. When comparing providers, the board’s report of first-time pass rates by training provider is a useful check, keeping in mind that rates also reflect who enrolls.' },
      { q: 'Does my old 40-hour training still count in 2026?', a: 'Applicants applying on or after January 1, 2026 must have completed a training that meets the 2026 requirements. A certificate from a training built on the earlier requirements may not qualify. Ask the provider whether its course follows the 2026 curriculum, and check the statement on the certificate.' },
    ],
    body: (h) => `
<h2>RBT 40-hour training sections and minimum hours</h2>
${h.table(['Section', 'Minimum hours'], h.R.training.sections.map((s) => [s[0] + '. ' + s[1], s[2]]), `Curriculum outline, version 03/2026. Plus ${h.R.training.sectionsHours.unallocated} unallocated hours to reach ${h.R.training.hours}.`, ['l', 'r'])}
<p>The sections can be taught in any order. Most of the content is marked in the curriculum as also part of the test content outline, which is why the training is the backbone of exam preparation and why practice questions work best after it.</p>
<h2>Who can deliver it</h2>
<p>The Responsible Trainer designs and oversees the training and keeps records for at least seven years. Assistant Trainers, who must hold an RBT certification or higher, can deliver some or all of it. Trainers may not be related to you, subordinate to you or employed by you during the training. Providers must include a statement that the training is offered independent of the board, and the board may audit any training.</p>
<h2>The certificate</h2>
<p>At the end you receive a certificate to upload with your application. It shows your name and board ID, the start and end dates, the time you spent in training, the Responsible Trainer's name, certification number and signature or branding, the assistant trainers if any, and the required statement about the 2026 eligibility requirement. Keep it with your records.</p>
<h2>After the training</h2>
<p>The ${h.a('rbt-competency-assessment', 'initial competency assessment')} comes next and must be completed after the training, no more than ${h.R.competency.withinDaysBeforeApplication} days before you apply. The second calculator on this page lays out the whole calendar from a start month. Costs, when you pay for the training yourself, are added on the ${h.a('rbt-certification-cost', 'cost page')}, and provider pass rates are on the ${h.a('rbt-pass-rates', 'pass rate page')}.</p>`,
  },
});
