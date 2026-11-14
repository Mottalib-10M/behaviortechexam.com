import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'bcba-practice-test', group: 'bcba', order: 610,
  tool: { kind: 'quiz', props: { exam: 'bcba', mode: 'practice', n: 10 } },
  mini: { kind: 'mini:bcbadomains', props: { n: 20 } },
  related: ['bcba-exam', 'bcba-fieldwork-hours', 'rbt-practice-test', 'review-mistakes'],
  sources: ['bcba_tco', 'bcba_handbook'],
  en: {
    slug: 'bcba-practice-test', nav: 'BCBA practice test', card: 'Free BCBA questions across the nine domains of the 6th outline, with explanations.',
    title: 'BCBA Practice Test: Free Questions, 6th Edition Outline',
    description: 'BCBA practice test with free questions across the nine domains of the 6th-edition outline, each explained, and a split of your own study set by domain weight.',
    h1: 'BCBA practice test: questions by domain',
    intro: 'This BCBA practice test, for the Board Certified Behavior Analyst exam one level above RBT, draws 10 questions from our bank; answer, read each explanation, draw again.',
    resume: (h) => `The BCBA exam has ${h.X('bcba').scored} scored questions spread over nine domains, from behaviorism and philosophical foundations to personnel supervision and management. Our bank holds ${h.inPool('bcba')} original BCBA questions, at least four per domain, written from the ${h.X('bcba').editionLabel}; none is copied from the board or from a commercial course. It is a starter set for candidates who already practice as technicians and want to see the level and style of the analyst exam, not a full preparation: the official exam has ${h.X('bcba').items} questions and ${h.time('bcba')}. Each answer comes with an explanation of the right option and why the others fail. The calculator under this summary splits a study set of any size by the weight of each domain on the outline, which shows where to spend time. Concepts and principles, behavior-change procedures and assessment are the three largest domains, with ${h.dom('bcba', 'B').items}, ${h.dom('bcba', 'G').items} and ${h.dom('bcba', 'F').items} scored questions.`,
    faqs: (h) => [
      { q: 'How many BCBA questions are on this site?', a: `${h.inPool('bcba')} original questions, at least four for each of the nine domains of the 6th-edition outline. The site focuses on the RBT exam, with ${h.inPool('rbt')} questions for it, so treat the BCBA set as a sample of the level rather than a complete preparation.` },
      { q: 'Which BCBA domain has the most questions?', a: `Behavior-change procedures, with ${h.dom('bcba', 'G').items} scored questions, followed by concepts and principles with ${h.dom('bcba', 'B').items} and behavior assessment with ${h.dom('bcba', 'F').items}. Behaviorism and philosophical foundations is the smallest, with ${h.dom('bcba', 'A').items}. The calculator on this page splits any study set in the same proportions. Weight your study the same way.` },
      { q: 'What score should I aim for on BCBA practice?', a: `The board does not publish the passing score as a count of correct answers; it sets the standard with a panel of experts. Aim for ${h.pc(h.X('bcba').target)} or more on mixed practice sets before booking, a study target of this site and not an official threshold.` },
    ],
    body: (h) => `
<h2>BCBA practice test coverage</h2>
${h.table(['Domain', 'Scored questions on the exam', 'Questions in our bank'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].map((c) => [`${c}. ${h.dom('bcba', c).name}`, h.dom('bcba', c).items, h.inPool('bcba', c)]), `BCBA Test Content Outline (6th ed.) and this site's bank, ${h.read}.`, ['l', 'r', 'r'])}
<h2>How to use these questions</h2>
<p>Answer without notes, then read every explanation, including those of questions you got right. Note the domains where you miss most, and return to them with your course materials. Your missed questions are saved in this browser and can be drilled again on the ${h.a('review-mistakes', 'review page')}.</p>
<h2>Before the BCBA exam</h2>
<p>Eligibility comes first: degree, coursework and supervised fieldwork. The ${h.a('bcba-fieldwork-hours', 'fieldwork calculator')} shows how many months you still need, and the ${h.a('bcba-exam', 'BCBA exam page')} sets out the format, fees and retake rules.</p>`,
  },
});
