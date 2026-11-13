import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'prompting-and-prompt-fading', group: 'topics', order: 230,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', topic: 'prompting', n: 8 } },
  related: ['discrete-trial-teaching', 'rbt-skill-acquisition', 'rbt-practice-test', 'rbt-mock-exam'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'prompting-and-prompt-fading', nav: 'Prompting and prompt fading', card: 'Prompt types, most-to-least, least-to-most, time delay, stimulus fading: eight questions.',
    title: 'Prompting and Prompt Fading: RBT Exam Practice Questions',
    description: 'Prompting and prompt fading practice for the RBT exam: prompt types, most-to-least, least-to-most, time delay, stimulus fading and errorless teaching.',
    h1: 'Prompting and prompt fading practice',
    intro: 'Prompting and prompt fading, task C.7, is one of the most tested skills on the exam; these eight questions cover the prompt types and every fading method named in it.',
    resume: (h) => `A prompt is extra help that makes a correct response more likely: a gesture toward the right card, a spoken hint, a model of the response, a hand guiding the learner, or a change in the materials themselves. Response prompts act on the learner's behavior; stimulus prompts change the cue, such as a darker picture or a card placed closer. All prompts are temporary. If they stay, the learner may learn to wait for them, which is prompt dependence. Fading moves control from the prompt to the natural cue. Most-to-least starts with the most help the learner needs and steps down, which keeps errors rare. Least-to-most starts with a chance to answer alone and adds help step by step. Time delay inserts a wait between the instruction and the prompt, constant or growing. Stimulus fading makes the added feature fainter over trials. Errorless teaching combines immediate prompts with planned fading. The exam asks you to name, rank and choose these methods from short scenarios.`,
    faqs: (h) => [
      { q: 'Which prompt is the most intrusive?', a: 'A full physical prompt, where the technician guides the learner through the whole response hand over hand. Partial physical prompts, models, gestures and verbal prompts follow in most hierarchies, though the exact order varies by source. Physical prompts are used only as the plan allows and with respect for the learner’s comfort.' },
      { q: 'When is most-to-least prompting used?', a: 'When errors are costly or upsetting for the learner, or for skills just being introduced. Starting with full help and fading keeps the learner successful from the first trial. The trade-off is that fading must be planned well, or the learner may depend on help longer than needed.' },
      { q: 'What is the difference between constant and progressive time delay?', a: 'Both start with a zero-second delay, prompting right after the instruction. Constant time delay then switches to one fixed wait, such as four seconds. Progressive time delay increases the wait gradually, for example one second at a time, giving the learner more and more chances to answer before help comes.' },
    ],
    body: (h) => `
<h2>Prompt types at a glance</h2>
${h.table(['Prompt', 'Example', 'Kind'], [
  ['Full physical', 'Hand over hand through the response', 'Response prompt, most intrusive'],
  ['Partial physical', 'A light touch at the elbow', 'Response prompt'],
  ['Model', 'The technician shows the response', 'Response prompt'],
  ['Gestural', 'Pointing or nodding toward the answer', 'Response prompt'],
  ['Verbal', 'A spoken hint or the first sound', 'Response prompt'],
  ['Positional', 'The right card placed closer', 'Stimulus prompt'],
  ['Within-stimulus', 'The right picture drawn darker', 'Stimulus prompt, faded by stimulus fading'],
], 'Our summary for task C.7; hierarchies differ from one program to another.', ['l', 'l', 'l'])}
<h2>Choosing a prompt fading method</h2>
<p>The supervisor chooses; the exam checks that you recognize each one. Most-to-least suits errorless learning. Least-to-most gives the learner the chance to show independence first. Time delay transfers control from the prompt to the instruction without changing the kind of prompt. Stimulus fading removes help built into the materials. Graduated guidance adjusts physical help moment to moment.</p>
<h2>Prompts in the data</h2>
<p>Prompted answers are recorded as prompted, never as independent. The split is what tells the supervisor that it is time to fade. Overstating independence leads to fading too fast and to a wave of errors. The ${h.a('discrete-trial-teaching', 'discrete trial page')} shows how prompts fit in each trial, and prompting is task 11 of the ${h.a('rbt-competency-assessment', 'competency assessment')}.</p>`,
  },
});
