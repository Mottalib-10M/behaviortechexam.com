import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'bcba-exam', group: 'bcba', order: 600,
  tool: { kind: 'mini:bcbacost', props: { a: 1 } },
  mini: { kind: 'mini:fieldwork', props: { s: 600, c: 0, m: 100 } },
  related: ['bcba-practice-test', 'bcba-fieldwork-hours', 'rbt-exam', 'rbt-certification'],
  sources: ['bcba_handbook', 'bcba_tco', 'pearson_bacb'],
  demarche: true,
  en: {
    slug: 'bcba-exam', nav: 'BCBA exam: format and cost', card: '185 questions in 4 hours, nine domains of the 6th outline, $245 plus $125 per attempt.',
    title: 'BCBA Exam 2026: 185 Questions, Format, Fees and Retakes',
    description: 'BCBA exam in 2026: 185 questions in 4 hours on the 6th-edition outline, the four eligibility pathways, $245 application, $125 appointment, and the retakes.',
    h1: 'BCBA exam: format, eligibility and cost',
    intro: 'The BCBA exam is the next step for many technicians; the calculator above totals the board and appointment fees for the attempts you plan.',
    resume: (h) => `The Board Certified Behavior Analyst examination is the certification many technicians aim for after a few years of practice. It has ${h.X('bcba').items} multiple-choice questions, ${h.X('bcba').scored} scored and ${h.X('bcba').unscored} unscored, with ${h.X('bcba').options} options each, answered in ${h.time('bcba')} at a Pearson VUE testing center. Since 2025 it follows the ${h.X('bcba').editionLabel}, with nine content domains and ${h.X('bcba').tasks} tasks. Every eligibility pathway requires a degree, behavior-analytic content, supervised fieldwork and passing the exam: pathways 1 to 3 ask for a master's degree or higher, pathway 4 a doctoral degree. Under the BCBA Handbook revised in November 2026, the application costs ${h.usd(h.X('bcba').feeApplication)}, each exam appointment ${h.usd(h.X('bcba').feeExam)}, and each retake application ${h.usd(h.X('bcba').feeRetakeApplication)}. You may take the exam up to ${h.X('bcba').attemptsMax} times within ${h.X('bcba').authorizationMonths} months of approval, waiting ${h.X('bcba').retakeWaitDays} days between attempts. Results are given at the testing center as pass or fail.`,
    faqs: (h) => [
      { q: 'How many questions are on the BCBA exam?', a: `${h.X('bcba').items} questions in ${h.time('bcba')}: ${h.X('bcba').scored} count toward your result and ${h.X('bcba').unscored} are unscored pilot questions mixed in at random, so you cannot tell them apart. Each question has ${h.X('bcba').options} options and one correct answer. All questions on the BCBA exam are weighted equally, and the result is given as pass or fail.` },
      { q: 'Can an RBT take the BCBA exam?', a: 'Only after meeting the BCBA eligibility requirements: a qualifying graduate degree, behavior-analytic coursework or an accredited program, and supervised fieldwork. Holding the RBT certification is not a requirement, and many tasks done as an RBT do not count toward fieldwork, as the BCBA Handbook warns.' },
      { q: 'How much does the BCBA exam cost?', a: `${h.usd(h.X('bcba').feeApplication + h.X('bcba').feeExam)} for a first attempt: ${h.usd(h.X('bcba').feeApplication)} for the application and ${h.usd(h.X('bcba').feeExam)} for the Pearson VUE appointment. Each retake adds a ${h.usd(h.X('bcba').feeRetakeApplication)} retake application and a new ${h.usd(h.X('bcba').feeExam)} appointment. Coursework, supervision and study materials are extra. Board fees cannot be refunded or transferred, so plan your attempts.` },
    ],
    body: (h) => `
<h2>BCBA exam outline, 6th edition</h2>
${h.outline('bcba', `BCBA Test Content Outline (6th ed.), read on ${h.read}.`)}
<h2>RBT exam and BCBA exam compared</h2>
${h.table(['', 'RBT exam', 'BCBA exam'], [
  ['Questions (scored)', `${h.X('rbt').items} (${h.X('rbt').scored})`, `${h.X('bcba').items} (${h.X('bcba').scored})`],
  ['Time', h.time('rbt'), h.time('bcba')],
  ['Application', h.usd(h.X('rbt').feeApplication), h.usd(h.X('bcba').feeApplication)],
  ['Appointment', h.usd(h.X('rbt').feeExam), h.usd(h.X('bcba').feeExam)],
  ['Wait between attempts', `${h.X('rbt').retakeWaitDays} days`, `${h.X('bcba').retakeWaitDays} days`],
], 'RBT and BCBA Handbooks.', ['l', 'r', 'r'])}
<h2>Preparing for the BCBA exam</h2>
<p>Start with the ${h.a('bcba-practice-test', 'BCBA practice questions')}, sorted by the nine domains, and track your fieldwork with the ${h.a('bcba-fieldwork-hours', 'fieldwork calculator')}. Concepts and principles, behavior-change procedures and assessment carry the most scored questions, so they deserve the most study time.</p>`,
  },
});
