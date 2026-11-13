import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'preference-assessments', group: 'topics', order: 210,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', topic: 'preference', n: 8 } },
  related: ['rbt-behavior-assessment', 'discrete-trial-teaching', 'rbt-skill-acquisition', 'rbt-competency-assessment'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'preference-assessments', nav: 'Preference assessments', card: 'MSWO, paired stimulus, free operant: eight questions on how reinforcers are found.',
    title: 'Preference Assessments: RBT Exam Practice Questions (B.1)',
    description: 'Preference assessment practice for the RBT exam: MSWO, paired stimulus, free operant and single stimulus formats, and preference versus a true reinforcer.',
    h1: 'Preference assessments: practice for technicians',
    intro: 'A preference assessment finds the items a learner is most likely to work for; these eight questions train task B.1, which is also task 4 of the competency assessment.',
    resume: (h) => `Preference assessments are where reinforcement starts. Before teaching, the technician needs items or activities the learner wants enough to work for, and wants today, not last month. Task B.1 of the outline names three formats as examples: multiple stimulus, paired stimulus and free operant. Each answers a slightly different question. A multiple stimulus assessment without replacement ranks several items quickly; with replacement, it finds the single favorite. A paired stimulus assessment gives a precise order at the cost of many trials. A free operant observation records time spent with items the learner can reach freely, and it avoids the frustration of having an item taken away. The exam asks you to name the format from a description, to run it properly, and to remember that preference predicts but does not prove that an item will reinforce behavior. The competency assessment asks you to run one, with a client or in role-play.`,
    faqs: (h) => [
      { q: 'How often should a preference assessment be done?', a: 'As often as the supervisor’s plan says, which for many learners means brief checks at the start of sessions and fuller assessments from time to time. Preferences shift with satiation, deprivation and new experiences, so an item that ranked first a month ago may not work today.' },
      { q: 'Why give access to the chosen item during a preference assessment?', a: 'Brief access lets the learner contact the item, which keeps the next choices honest. If choices never lead to anything, a learner may stop choosing or choose at random, and the ranking stops meaning much. The supervisor sets how long access lasts, often a few seconds, before the next trial begins.' },
      { q: 'What if the learner always picks the item in the same position?', a: 'That can be a position bias rather than a preference. Rotating where items are placed between trials separates the two. The supervisor may also change the format, for example to a paired stimulus assessment with careful placement. Record the position of each choice so the pattern shows in the data.' },
    ],
    body: (h) => `
<h2>Preference assessments in four formats</h2>
${h.table(['Format', 'Trials', 'Output'], [
  ['Multiple stimulus without replacement (MSWO)', 'One per item, chosen item removed each time', 'A full ranking'],
  ['Multiple stimulus with replacement', 'Several, chosen item returned', 'The favorite, sometimes a top few'],
  ['Paired stimulus (forced choice)', 'One per pair of items', 'A precise order'],
  ['Free operant', 'One observation of several minutes', 'Time with each item'],
], 'Our summary for task B.1.', ['l', 'l', 'l'])}
<h2>Running an MSWO step by step</h2>
<ol>
<li>Let the learner sample each item briefly.</li>
<li>Place the items in a row, at equal distance, and give a neutral instruction such as "pick one".</li>
<li>Give brief access to the item chosen, then take it back and set it aside.</li>
<li>Rearrange the remaining items and repeat until none are left or the learner stops choosing.</li>
<li>Record the order of selection; the first choice ranks highest.</li>
</ol>
<p>Paired stimulus assessments follow the same idea, two items at a time, with every item meeting every other. Free operant assessments need no trials at all: the technician watches and times.</p>
<h2>From preference to reinforcement</h2>
<p>An item proves itself as a reinforcer only when the behavior it follows increases. Exam questions test the difference, often with an option saying that the favorite item "will always" reinforce. The ${h.a('rbt-skill-acquisition', 'skill acquisition domain')} picks up from there: delivering the reinforcer immediately, contingently, and in the amount the plan sets. Preference assessments are also task 4 of the ${h.a('rbt-competency-assessment', 'competency checklist')}, and the larger ${h.a('rbt-behavior-assessment', 'assessment domain')} adds skills and functional assessments.</p>`,
  },
});
