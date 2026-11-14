import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-practice-questions', group: 'practice', order: 15,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', topic: 'session', n: 8 } },
  mini: { kind: 'mini:domains', props: { n: 20 } },
  related: ['rbt-practice-test', 'rbt-exam-questions', 'registered-behavior-technician-practice-exam', 'review-mistakes', 'rbt-task-list'],
  sources: ['rbt_tco', 'rbt_handbook'],
  en: {
    slug: 'rbt-practice-questions', nav: 'RBT practice questions', card: 'Scenario questions built on what happens in a real session, from the data sheet to the parent at the door.',
    title: 'RBT Practice Questions: Session Scenarios with Answers',
    description: 'RBT practice questions built on session scenarios: a soaked data sheet, a bruise, a parent request, each answer explained with its task code in the outline.',
    h1: 'RBT practice questions from a day in session',
    intro: 'These RBT practice questions follow the moments of a real session, from the first preference check to the note at the end, and each answer is explained on the spot.',
    resume: (h) => `Most exam questions describe a short moment in a session and ask what the technician should do, or what is going on. This set was written around those moments: the data sheet that gets soaked halfway through, the learner who touches the same card whatever color is named, the parent who asks for a new program, the bruise noticed during a home visit, the family holiday you never heard of. Each scenario trains one task of the third edition outline and covers the six domains, so a set mixes data, assessment, teaching, behavior plans, reporting and ethics, the way a working day does. The pool holds ${h.inTopic('session')} of these scenario questions, written by us and never taken from the real exam, which the board keeps confidential. A set of eight is drawn each time; answer, read the explanation, and use the button for a new set. Missed questions are saved in this browser for the review page.`,
    faqs: (h) => [
      { q: 'How are these RBT practice questions different from the practice test?', a: 'The practice test draws from the whole bank by outline domain. This page draws only from the scenario set, where each question starts from a concrete event in a session and mixes domains in one set. Use it when you want questions that feel like a working day rather than one topic at a time.' },
      { q: 'Why do so many RBT practice questions end with telling the supervisor?', a: 'Because the role is built that way. The technician implements, records and reports; the supervisor decides. When a scenario raises something outside the plan, such as a new request, a safety concern or an unclear program, the right step is usually to follow the plan and bring it to the supervisor. Exam writers test that boundary often.' },
      { q: 'How many RBT practice questions should I do each day?', a: `Enough to finish the whole bank of ${h.inPool('rbt')} questions twice before the exam, with time left for two timed mocks. For most people that means one to three sets a day over two or three weeks. The study plan page turns your exam date into a daily number.` },
    ],
    body: (h) => `
<h2>RBT practice questions by moment of the session</h2>
${h.table(['Moment', 'What the scenario tests', 'Task codes'], [
  ['Before teaching', 'Preference checks, probes without prompts', 'B.1, B.2'],
  ['During teaching', 'Conditioned reinforcers, discrimination, generalization, token systems', 'C.2, C.6, C.8, C.11'],
  ['When behavior occurs', 'Function, high probability requests, spontaneous recovery, ABC terms', 'B.3, D.1, D.2, D.6'],
  ['Recording', 'Permanent products, lost data, reading a stable graph', 'A.3, A.7, A.8'],
  ['After the session', 'Objective notes, caregiver requests, signs of harm', 'E.1, E.3, E.4'],
  ['Around the job', 'Boundaries, multiple relationships, cultural humility', 'F.7, F.9, F.10'],
], `Task codes of the ${h.X('rbt').editionLabel}. Questions written by Radif Partners.`, ['l', 'l', 'l'])}
<h2>How to read a scenario question</h2>
<p>Start with the last sentence: it tells you whether the question asks for a name (what is this?), a next step (what should the technician do?) or an error (what is the problem?). Then reread the scenario for the one detail that decides it, such as whether anyone was present, whether the plan includes response cost or whether the data were written during the session. Wrong options are usually things a technician might do with good intentions but outside the plan or the role.</p>
<h2>After each set</h2>
<ul>
<li>Read the explanation of every question, including the ones you got right by elimination.</li>
<li>Note the task codes you missed; the ${h.a('rbt-task-list', 'task list page')} shows where each sits in the outline.</li>
<li>Open the ${h.a('review-mistakes', 'review page')} every few days to clear your misses.</li>
<li>Move to the ${h.a('registered-behavior-technician-practice-exam', 'practice exam')} when you hold ${h.pc(h.X('rbt').target)} across several sets.</li>
</ul>
<h2>Where these questions sit in the exam</h2>
${h.outline('rbt', `Scored questions per domain on the real exam, ${h.X('rbt').editionLabel}.`)}
<p>The calculator under the summary splits a set of any size by these weights. Behavior acquisition weighs the most, which is why the scenario set has more teaching moments than any other kind.</p>`,
  },
});
