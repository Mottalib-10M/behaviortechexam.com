import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-behavior-assessment', group: 'domains', order: 120,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'B', n: 10 } },
  related: ['preference-assessments', 'functions-of-behavior', 'rbt-data-collection', 'rbt-skill-acquisition'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'rbt-behavior-assessment', nav: 'B. Behavior assessment', card: 'Preference assessments, skills assessments and the technician’s part in functional assessment.',
    title: 'RBT Behavior Assessment: Practice Questions and Answers',
    description: 'RBT behavior assessment practice: MSWO, paired stimulus and free operant preference assessments, skills assessments, ABC data and functional analysis.',
    h1: 'RBT behavior assessment practice questions',
    intro: 'Behavior assessment is the smallest RBT domain, 8 scored questions, and the questions here train its three tasks: preference, skills and functional assessment.',
    resume: (h) => `Domain B has ${h.dom('rbt', 'B').tasks} tasks and ${h.dom('rbt', 'B').items} scored questions, ${h.pc(h.dom('rbt', 'B').share)} of the exam. The questions turn on one idea: in assessment, the technician runs procedures and records, and the supervisor designs, interprets and decides. Preference assessments are the task you will run most often, so they carry many of the questions: multiple stimulus with or without replacement, paired stimulus, and free operant observation, each with its strengths. Skills assessments, such as curriculum-based or developmental tools, ask you to present items exactly as written. Functional assessment ranges from descriptive methods, where you record what happens before and after behavior in the natural setting, to a functional analysis, where the supervisor arranges test conditions and you follow the script. The ${h.inPool('rbt', 'B')} practice questions above draw on all three tasks, with a heavier share on preference assessments.`,
    faqs: (h) => [
      { q: 'What is the difference between MSWO (multiple stimulus without replacement) and paired stimulus?', a: 'In a multiple stimulus without replacement assessment, several items are shown at once and each chosen item is left out of the next rounds, which gives a ranking quickly. In a paired stimulus assessment, items are shown two at a time until each has met every other, which takes longer but gives a clear order of preference.' },
      { q: 'Does an RBT conduct a functional analysis?', a: 'A technician may run conditions of a functional analysis designed and supervised by a behavior analyst, and records the data. The analyst decides the conditions, when to stop and what the results mean. On the exam, options in which the technician changes a condition, skips one or decides the function are wrong.' },
      { q: 'Is a preferred item always a reinforcer?', a: 'No. A preference assessment shows what a learner chooses; a reinforcer is defined by its effect, an increase in the behavior it follows. Preferred items are good candidates, and in practice they usually work, but only data on the target behavior show it. Preferences also change, which is why assessments are repeated.' },
    ],
    body: (h) => `
<h2>Preference assessments compared</h2>
${h.table(['Format', 'How it runs', 'Strength', 'Watch out for'], [
  ['Multiple stimulus without replacement', 'Several items; the chosen one is removed for the next rounds', 'Fast ranking', 'Learners who always pick the nearest item'],
  ['Multiple stimulus with replacement', 'Chosen item returned each round', 'Shows the top choice', 'The same item can win every round'],
  ['Paired stimulus', 'Two items at a time, every pair', 'Clear order', 'Takes long with many items'],
  ['Free operant', 'Open access, time with each item recorded', 'No removal, low risk of problem behavior', 'Items that cannot be shared at once'],
  ['Single stimulus', 'One item at a time, approach or not', 'Useful when choosing is hard', 'Says little about relative preference'],
], 'Our summary for task B.1 of the board’s exam plan.', ['l', 'l', 'l', 'l'])}
<h2>Running a preference assessment well</h2>
<p>Give brief access to each chosen item before the next trial, so choices keep their meaning. Rotate positions so the learner is not just picking the closest spot. Adapt the response when a learner cannot reach or point, for example to looking at an item, as the supervisor sets. And repeat assessments: satiation and new experiences change what a learner wants from one day to the next. A dedicated ${h.a('preference-assessments', 'topic page')} drills these questions.</p>
<h2>Skills and functional behavior assessment</h2>
<p>For skills assessments (B.2), the rule is fidelity: present each item as written, record exactly, do not coach. For functional assessment (B.3), the technician most often collects ABC data: the antecedent, the behavior and the consequence, as they happen. In a functional analysis the technician follows a scripted condition, for example giving attention only after the target behavior in the attention condition, and records. The analysis is valid only if each condition is run as designed, which is why exam options that improvise are wrong.</p>
<p>Behavior assessment feeds straight into the ${h.a('functions-of-behavior', 'functions of behavior')}, which open the behavior reduction domain.</p>`,
  },
});
