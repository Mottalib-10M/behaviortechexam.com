import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'discrete-trial-teaching', group: 'topics', order: 220,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', topic: 'dtt', n: 8 } },
  related: ['prompting-and-prompt-fading', 'rbt-skill-acquisition', 'preference-assessments', 'rbt-data-collection'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'discrete-trial-teaching', nav: 'Discrete-trial teaching', card: 'Instruction, response, consequence, pause: eight questions on running and scoring trials.',
    title: 'Discrete Trial Teaching: RBT Exam Practice Questions (C.3)',
    description: 'Discrete trial teaching practice for the RBT exam: the parts of a trial, the intertrial interval, error correction, prompted answers and mixed targets.',
    h1: 'Discrete trial teaching practice questions',
    intro: 'Discrete trial teaching breaks a skill into short, repeated learning opportunities; these eight questions cover how each trial is run and scored.',
    resume: (h) => `A discrete trial has a fixed shape. The technician secures attention and gives a short instruction, the discriminative stimulus. A prompt may follow, according to the plan. The learner responds. The technician delivers the consequence: the reinforcer for a correct response, or the error correction the plan describes. A brief intertrial interval marks the end before the next instruction. Each part has a purpose. Short, consistent instructions make the cue clear. Immediate reinforcement strengthens the right response. The pause separates trials so the learner can tell one from the next. Data are recorded on every trial, with prompted answers kept apart from independent ones, because the difference tells the supervisor when to fade. Once a target is acquired in massed trials, it is mixed with others so the learner must discriminate. Scenarios on the exam test each of these steps, and discrete-trial teaching is task 6 of the competency assessment.`,
    faqs: (h) => [
      { q: 'What is the discriminative stimulus in discrete trial teaching?', a: 'The instruction or cue that signals reinforcement is available for a specific response, such as “touch red” with three colored cards on the table. It is kept short and consistent at first so the learner can tell which cue goes with which response; variations are added later to build generalization.' },
      { q: 'How is an error usually corrected in discrete trials?', a: 'The plan sets the procedure. A common one repeats the instruction with a prompt that makes a correct answer likely, then gives an independent trial. What the technician does not do is reinforce the error or move on as if nothing happened. The prompted response is recorded as prompted.' },
      { q: 'Why is discrete trial teaching combined with natural teaching?', a: 'Discrete trials build many responses quickly in a structured setting, but skills learned only at a table may not appear elsewhere. Natural environment teaching uses everyday moments and motivation, which helps the skill generalize. Most programs use both, as the supervisor plans.' },
    ],
    body: (h) => `
<h2>The parts of a discrete trial</h2>
${h.table(['Part', 'What the technician does', 'Common mistake'], [
  ['Attending', 'Gets the learner’s attention as the plan describes', 'Giving the cue while the learner looks away'],
  ['Instruction', 'Gives a short, consistent cue', 'Long or changing sentences early on'],
  ['Prompt (if planned)', 'Gives the planned level of help', 'Prompting late or more than planned'],
  ['Response', 'Waits for and watches the response', 'Counting a prompted answer as independent'],
  ['Consequence', 'Reinforcer or planned error correction', 'Reinforcing errors to keep the mood'],
  ['Intertrial interval', 'Brief pause, records data', 'No pause, so trials run together'],
], 'Our summary for task C.3 of the board’s exam plan.', ['l', 'l', 'l'])}
<h2>Scoring discrete trials</h2>
<p>Most data sheets separate independent correct, prompted correct, incorrect and no response. The supervisor uses the split to decide when to fade prompts or call a target mastered. Rules differ for edge cases, such as an answer given before the instruction ends; the technician follows the program's rule and asks when unsure. Percentages are computed on the trials actually run, as the ${h.a('rbt-data-collection', 'data collection domain')} explains.</p>
<h2>Massed, mixed and maintenance trials</h2>
<p>New targets are often taught in massed trials, then mixed with known ones. Interspersing easy targets keeps reinforcement frequent and prepares the learner for real life, where cues do not come in blocks. Mastered targets move to maintenance, practiced now and then. Prompting inside trials has its own page: ${h.a('prompting-and-prompt-fading', 'prompting and prompt fading')}. Reinforcers come from ${h.a('preference-assessments', 'preference assessments')}.</p>`,
  },
});
