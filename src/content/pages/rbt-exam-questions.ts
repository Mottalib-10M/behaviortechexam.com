import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-exam-questions', group: 'practice', order: 30,
  tool: { kind: 'bank', props: { exam: 'rbt', domain: 'C' } },
  mini: { kind: 'mini:domains', props: { n: 30 } },
  related: ['rbt-task-list', 'rbt-practice-test', 'rbt-mock-exam', 'rbt-skill-acquisition'],
  sources: ['rbt_tco', 'rbt_handbook'],
  en: {
    slug: 'rbt-exam-questions', nav: 'RBT exam questions', card: 'Every practice question of a domain with its answer and explanation, open in one list.',
    title: 'RBT Exam Questions: Practice Bank with Answers by Domain',
    description: 'RBT exam questions to study as a list: every practice question of one outline domain with its four options, the answer, the reasoning and the task it trains.',
    h1: 'RBT exam questions with answers, domain by domain',
    intro: 'These RBT exam questions are listed in full, one outline domain at a time, so you can read answers and reasoning instead of testing yourself.',
    resume: (h) => `Some candidates learn best by reading worked examples before they test themselves. This list shows the whole pool of one domain: ${h.inPool('rbt', 'A')} questions for data collection, ${h.inPool('rbt', 'B')} for assessment, ${h.inPool('rbt', 'C')} for skill acquisition, ${h.inPool('rbt', 'D')} for behavior reduction, ${h.inPool('rbt', 'E')} for documentation and ${h.inPool('rbt', 'F')} for ethics. Open a question to see its four options, the right one marked, the explanation and the outline task. The button above the list opens all of them at once for a quick read. None of these is a question from the real exam, which the board keeps confidential; each was written by us for one task, with a short scenario of the kind the exam uses. When you know a domain well enough, close the list and take the same questions as a quiz on the ${h.a('rbt-practice-test', 'practice test page')}.`,
    faqs: (h) => [
      { q: 'Where can I find real RBT exam questions?', a: 'Nowhere legitimate. The exam is confidential, and candidates agree not to share its content. Sites that sell real questions put your certification at risk. What helps is practice written from the public outline, which covers the same ' + h.X('rbt').tasks + ' tasks at your own pace, plus the sample questions the board prints in its handbook.' },
      { q: 'What kind of questions are on the RBT exam?', a: 'Multiple choice with four options, most of them short scenarios: a technician does something with a learner, and you name the procedure, pick the next step or spot the error. Some questions ask for a definition, but many test whether you can apply it, for example telling DRO from DRA, or partial from whole interval recording.' },
      { q: 'Which domain has the most RBT exam questions?', a: `Behavior acquisition, with ${h.dom('rbt', 'C').items} of the ${h.X('rbt').scored} scored questions. It covers reinforcement, discrete trials, naturalistic teaching, chaining, discrimination, prompting, generalization, maintenance, shaping and token economies. Behavior reduction follows with ${h.dom('rbt', 'D').items}, and data collection with ${h.dom('rbt', 'A').items}. Practice sets weighted the same way put your time where the points are.` },
    ],
    body: (h) => `
<h2>How to study with a list of RBT exam questions</h2>
<p>Reading questions with their answers works when you read actively. Before opening a question, try to answer it in your head; then open it and read the explanation, including why the wrong options are wrong. Wrong options on this exam are rarely absurd: they are usually the neighboring procedure, the one a tired candidate mixes up.</p>
<p>The list is sorted as the bank is stored. The domain selector loads another domain; the counter on the side gives the size of that domain's pool and of the whole technician bank.</p>
<h2>The pairs that cause most mistakes</h2>
${h.table(['Easily confused', 'What tells them apart'], [
  ['Partial and whole interval', 'Any occurrence in the interval counts, versus the behavior lasting the whole interval'],
  ['Latency and interresponse time', 'Time from a cue to the response, versus time between two responses'],
  ['Negative reinforcement and punishment', 'Removing something makes behavior more likely, versus less likely'],
  ['DRO and DRA', 'Reward for the absence of the behavior, versus reward for a named replacement'],
  ['Extinction and punishment', 'The old reinforcer stops, versus a consequence is added or taken away'],
  ['Most-to-least and least-to-most', 'Start with the most help and fade, versus start with none and add'],
  ['Forward and backward chaining', 'Teach the first step first, versus the last step first'],
], 'Our summary of the outline tasks most often tested in pairs.', ['l', 'l'])}
<h2>How the questions are built</h2>
<p>Each question names its task code, from A.1 to F.10, so you can find the matching part of your training. The explanations are between fifteen and ninety-five words: long enough to give the reason, short enough to read in a set. Every build of the site checks that answers are spread over the four positions and that the right answer is not simply the longest option, two habits that let test-wise candidates guess without knowing.</p>
<p>The calculator under the summary splits a set of any size by the outline weights, which helps when you build your own flash cards or a class quiz from this list.</p>
<h2>From the list to the exam</h2>
<p>Reading is a first step. Next, take the same domain as a ${h.a('rbt-practice-test', 'quiz')}, then the ${h.a('rbt-mock-exam', 'timed mock')}. The ${h.a('rbt-task-list', 'task list page')} shows how the questions map to the ${h.X('rbt').tasks} tasks of the outline.</p>`,
  },
});
