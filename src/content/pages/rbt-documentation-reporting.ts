import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-documentation-reporting', group: 'domains', order: 150,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'E', n: 10 } },
  mini: { kind: 'mini:supervision', props: { h: 120 } },
  related: ['rbt-ethics', 'rbt-supervision', 'rbt-data-collection', 'rbt-behavior-reduction'],
  sources: ['rbt_tco', 'rbt_handbook', 'rbt_competency'],
  en: {
    slug: 'rbt-documentation-reporting', nav: 'E. Documentation and reporting', card: 'Passing on concerns, seeking clinical direction, reporting changes, objective session notes.',
    title: 'RBT Documentation and Reporting Questions: Session Notes',
    description: 'RBT documentation and reporting practice: when to tell the supervisor, chain of command, illness and schedule changes, objective notes, record corrections.',
    h1: 'RBT documentation and reporting practice',
    intro: 'RBT documentation and reporting, domain E, puts 10 questions on the exam about one skill: telling the supervisor the right thing, quickly and in objective words.',
    resume: (h) => `Domain E has ${h.dom('rbt', 'E').tasks} tasks and ${h.dom('rbt', 'E').items} scored questions, ${h.pc(h.dom('rbt', 'E').share)} of the exam. Its scenarios share a pattern. Someone, a caregiver, a teacher, a speech therapist, says something about the learner or the plan, or something changes: a new medication, a poor night, a new school schedule, a move. The technician's job is to pass it on to the supervisor in a timely manner, and to seek clinical direction whenever unsure, through the chain of command when the supervisor cannot be reached. The fourth task covers session notes: objective descriptions of what happened, written as legal, regulatory and workplace rules require, with no opinions or guesses about motives. Most wrong options in this domain have the technician act alone, change a plan, give medical advice, or wait. The calculator under the summary adds the supervision side: the minimum time your supervisor must spend with you each month.`,
    faqs: (h) => [
      { q: 'What makes an RBT session note objective?', a: 'It describes what could be seen or measured: what the learner did and said, how long, what happened before and after, and which programs were run. It leaves out labels such as lazy or defiant, guesses about feelings, and opinions on the plan. A good test is whether another person who watched the session would agree with every sentence.' },
      { q: 'When should an RBT contact the supervisor?', a: 'Whenever something could affect the learner or the plan: a concern from a caregiver or another provider, odd data, a new medication, illness, a schedule change, a safety issue, or doubt about how to run a procedure. The outline says timely: do not wait for the next scheduled visit if the issue matters now.' },
      { q: 'Can an RBT give caregivers advice about the plan?', a: 'No. A technician can describe objectively what happened in a session, within the limits the supervisor and the workplace set. Advice on changing goals or procedures, and opinions on the treatment, belong to the supervising analyst. The right move is to note the caregiver’s question and pass it on.' },
    ],
    body: (h) => `
<h2>RBT documentation and reporting: the four tasks</h2>
${h.table(['Task', 'In our words', 'Typical scenario'], [
  ['E.1', 'Pass on concerns and suggestions from the team', 'A teacher says the plan does not work in class'],
  ['E.2', 'Seek clinical direction in time, through the chain of command', 'A new program is unclear, or the data look odd'],
  ['E.3', 'Report variables that may affect progress', 'Illness, medication, a schedule change, a move'],
  ['E.4', 'Write objective notes as the rules require', 'A note says “bad day” instead of what happened'],
], 'Paraphrase of domain E of the outline.', ['l', 'l', 'l'])}
<h2>Writing a session note that helps</h2>
<p>Compare two notes. "The learner was in a terrible mood and refused everything" tells the supervisor little. "The learner cried for three minutes after the tablet was removed at 10:15, then completed 8 of 10 matching trials with gestural prompts" can be checked and used. Objective notes also protect the technician: they show what was done, when and how. Errors in a signed note are corrected through the workplace procedure, usually a dated amendment, never by erasing.</p>
<h2>Reporting in time</h2>
<p>Timely means before the issue can harm the learner or skew the data. A sudden drop in a mastered skill, a new medication, or a family's move are worth a message the same day. If the supervisor cannot be reached, the organization's chain of command names someone else. Online forums are never the place: they break confidentiality, which the ${h.a('rbt-ethics', 'ethics domain')} covers.</p>
<h2>Supervision behind the reporting</h2>
<p>The handbook requires supervision of at least ${h.pc(h.R.supervision.share)} of your service hours each month, in at least ${h.R.supervision.contactsPerMonth} contacts, one of them observing you with a client. Those contacts are when reporting and feedback happen in person. The ${h.a('rbt-supervision', 'supervision page')} explains the rule in full.</p>`,
  },
});
