import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-skill-acquisition', group: 'domains', order: 130,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'C', n: 10 } },
  related: ['discrete-trial-teaching', 'prompting-and-prompt-fading', 'rbt-behavior-reduction', 'rbt-exam-questions'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'rbt-skill-acquisition', nav: 'C. Behavior acquisition', card: 'The largest domain: reinforcement, discrete trials, naturalistic teaching, chaining, prompts, shaping, tokens.',
    title: 'RBT Skill Acquisition: Questions on the Largest Exam Domain',
    description: 'RBT skill acquisition practice for the largest domain, 19 exam questions: reinforcement, discrete trials, NET, chaining, prompting, shaping and tokens.',
    h1: 'RBT skill acquisition practice: behavior acquisition domain',
    intro: 'RBT skill acquisition, domain C of the outline, is the largest part of the exam: 19 of the 75 scored questions, on eleven teaching tasks a technician runs every day.',
    resume: (h) => `Behavior acquisition carries ${h.dom('rbt', 'C').items} scored questions, ${h.pc(h.dom('rbt', 'C').share)} of the exam, spread over ${h.dom('rbt', 'C').tasks} tasks. It starts with reinforcement itself: positive and negative, delivered immediately and contingently, on a schedule, with attention to magnitude and variety, and the pairing that turns praise or tokens into conditioned reinforcers. Then come the teaching formats: discrete-trial teaching, with its instruction, response, consequence and intertrial interval; naturalistic teaching, which uses moments of motivation in play and routines; and chaining, forward, backward or total task, for skills broken down by a task analysis. Prompting and prompt fading, discrimination training, generalization, the difference between maintenance and acquisition, shaping and token economies complete the list. The ${h.inPool('rbt', 'C')} questions above cover all eleven tasks, with more on discrete trials and on prompting, the two areas that come up most in scenarios.`,
    faqs: (h) => [
      { q: 'What is the difference between shaping and chaining?', a: 'Shaping builds one new behavior by reinforcing closer and closer approximations of it, such as sounds that come nearer to a word. Chaining links several behaviors the learner can already do, or learns one by one, into a sequence like handwashing, following a task analysis. Exam questions often describe one and offer the other as a distractor.' },
      { q: 'Is negative reinforcement a punishment?', a: 'No. Reinforcement, positive or negative, always makes a behavior more likely. Negative means something is removed: a learner asks for a break and the hard task is taken away for a minute, and asking increases. Punishment makes a behavior less likely. Mixing the two is one of the most common mistakes on the exam.' },
      { q: 'What is natural environment teaching?', a: 'Teaching that happens during play and daily routines, using what the learner is already motivated by. In incidental teaching, the technician waits for the learner to show interest, such as reaching for a ball, and prompts a response before giving it. Skills taught this way tend to generalize, because they are learned where they will be used.' },
      { q: 'What is the difference between maintenance and acquisition?', a: 'Acquisition teaches a skill the learner does not yet have, usually with prompts and frequent reinforcement. Maintenance keeps a mastered skill alive by practicing it from time to time, with thinner reinforcement. Task C.9 asks you to tell the two apart, often from a short description of how often a target is run.' },
    ],
    body: (h) => `
<h2>The eleven skill acquisition tasks</h2>
${h.table(['Task', 'In our words'], [
  ['C.1', 'Reinforce, positively or negatively, right after the response and according to the schedule'],
  ['C.2', 'Pair neutral stimuli with reinforcers to build conditioned reinforcers'],
  ['C.3', 'Run discrete trials: instruction, response, consequence, short pause'],
  ['C.4', 'Teach in the natural environment, including incidental teaching'],
  ['C.5', 'Teach chains forward, backward or as a total task'],
  ['C.6', 'Train discriminations between cues'],
  ['C.7', 'Prompt and fade: errorless, least to most, stimulus fading, time delay'],
  ['C.8', 'Program generalization across settings, people and materials'],
  ['C.9', 'Tell maintenance from acquisition'],
  ['C.10', 'Shape successive approximations'],
  ['C.11', 'Run token economies'],
], `Paraphrase of domain C, ${h.X('rbt').editionLabel}.`, ['l', 'l'])}
<h2>Reinforcement comes first</h2>
<p>Most skill acquisition questions turn on reinforcement. Positive adds something, negative removes something, and both increase the behavior. Delivered immediately, the reinforcer strengthens the right response; delayed, it may strengthen whatever happened in between. Schedules matter too: continuous reinforcement for new skills, then intermittent schedules to keep them. The ${h.a('preference-assessments', 'preference assessment page')} covers how the reinforcers are chosen.</p>
<h2>Teaching formats</h2>
<p>Discrete trials give many structured learning opportunities in a short time; the ${h.a('discrete-trial-teaching', 'discrete trial page')} has its own drill. Naturalistic teaching gives fewer, richer opportunities that generalize well. Chaining fits multi-step routines: backward chaining lets the learner finish the task and meet the natural reinforcer from the start, total task chaining suits learners who already have some steps.</p>
<h2>Prompts and their fading</h2>
<p>Prompts are temporary. Questions ask you to name a prompt type (gestural, verbal, model, physical, positional), place it on the intrusiveness scale, and choose a fading method: most-to-least for errorless learning, least-to-most to give a chance at independence, time delay to move control from the prompt to the instruction. The ${h.a('prompting-and-prompt-fading', 'prompting page')} has eight questions on this task alone.</p>
<h2>Token economies and shaping</h2>
<p>Tokens are conditioned reinforcers exchanged for backup reinforcers; questions check the earning rule, the exchange and the role of the technician in running the system as written. Shaping reinforces closer approximations and stops reinforcing the earlier ones. Both are also tasks of the ${h.a('rbt-competency-assessment', 'competency assessment')}, where at least ${h.R.competency.withClientMin} of tasks 6 to 14 must be shown with a client.</p>`,
  },
});
