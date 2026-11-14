import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'registered-behavior-technician-practice-exam', group: 'practice', order: 25,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', n: 25 } },
  mini: { kind: 'mini:readiness', props: { p: 80 } },
  related: ['rbt-mock-exam', 'rbt-practice-questions', 'rbt-practice-test', 'rbt-passing-score', 'rbt-study-plan'],
  sources: ['rbt_tco', 'rbt_handbook', 'rbt_pass_rates'],
  en: {
    slug: 'registered-behavior-technician-practice-exam', nav: 'Registered behavior technician practice exam', card: 'A third of the real exam: 25 mixed questions to check where you stand in about half an hour.',
    title: 'Registered Behavior Technician Practice Exam: 25 Questions',
    description: 'Registered behavior technician practice exam in 25 mixed questions, a third of the real test: a quick check with every answer explained and a score per domain.',
    h1: 'Registered behavior technician practice exam in 25 questions',
    intro: 'This registered behavior technician practice exam draws 25 questions from all six domains, a third of the scored exam, so you can check your level in about half an hour.',
    resume: (h) => `A full mock of ${h.X('rbt').scored} scored questions takes ${h.time('rbt')} and is best kept for the last weeks. Between sets by domain and the full mock, this shorter practice exam gives a checkpoint: 25 questions drawn at random from the whole technician bank of ${h.inPool('rbt')}, across data collection, assessment, behavior acquisition, behavior reduction, documentation and ethics. Answers are corrected as you go, with the explanation and the outline task, and the score at the end is split by domain so you know where to work next. At the exam pace of ${h.X('rbt').minutes} minutes for ${h.X('rbt').items} questions, 25 questions take about ${Math.round((25 * h.X('rbt').minutes) / h.X('rbt').items)} minutes. The real exam reports only pass or fail, and the board does not publish its passing standard as a count of right answers; we use a study target of ${h.pc(h.X('rbt').target)}, or 20 of 25. The calculator below the summary shows how a practice rate translates into the chance of reaching that target on a full mock.`,
    faqs: (h) => [
      { q: 'How long is the registered behavior technician exam?', a: `${h.X('rbt').items} multiple-choice questions in ${h.time('rbt')}, of which ${h.X('rbt').scored} are scored and ${h.X('rbt').unscored} are trial questions, mixed in so you cannot tell them apart, that do not count. It is taken at a Pearson VUE test center or online with a proctor. This practice exam is a third of the scored length, and the full mock on the site reproduces the whole format.` },
      { q: 'What score should I aim for on a practice exam?', a: `We suggest ${h.pc(h.X('rbt').target)} or more, holding over several attempts. That is a study margin, not the official cut score, which the board sets by expert panel and does not publish as a number. Twenty right answers out of 25 here, then ${Math.round(h.X('rbt').target * h.X('rbt').scored)} of ${h.X('rbt').scored} on the full mock, is a reasonable sign of readiness.` },
      { q: 'Should I take a short practice exam or a full mock first?', a: 'The short one. It takes about half an hour, shows your weakest domain and does not drain your energy. Take a full mock once your short exams hold steady above the target, ideally on a separate day at the same hour as your real appointment, to train your focus over ninety minutes.' },
    ],
    body: (h) => `
<h2>How this registered behavior technician practice exam works</h2>
<p>The 25 questions are drawn from all domains at once, so a set is unpredictable in the way the real exam is. Each answer is corrected immediately with its explanation. At the end, the domain breakdown shows how many you got right in each part of the outline. A new draw gives another 25, and a shared link with its set number replays the same questions for a study partner.</p>
<h2>Short practice exam, domain sets or full mock</h2>
${h.table(['Format', 'Questions', 'Time', 'Best used for'], [
  ['Domain set', 10, 'About 12 minutes', 'Learning one area after the training'],
  ['Scenario set', 8, 'About 10 minutes', 'Applying rules to session events'],
  ['This practice exam', 25, `About ${Math.round((25 * h.X('rbt').minutes) / h.X('rbt').items)} minutes`, 'Checking your level across domains'],
  ['Full mock', h.X('rbt').scored, h.time('rbt'), 'The last weeks before the exam'],
], 'Times prorated from the exam pace.', ['l', 'r', 'l', 'l'])}
<p>The ${h.a('rbt-practice-test', 'domain sets')}, the ${h.a('rbt-practice-questions', 'scenario questions')} and the ${h.a('rbt-mock-exam', 'full mock')} use the same bank, so the explanations and task codes match across formats.</p>
<h2>Reading your score</h2>
<p>With 25 questions, one answer is worth four points, so a single lucky guess or slip moves the score a lot. Look at the trend over three or four attempts rather than one result. A domain where you miss two or more in a set deserves a ${h.a('rbt-practice-test', 'focused set')} before the next attempt. For context, ${h.pc(h.pr.rate)} of first-time candidates from the training providers in the board's ${h.pr.year} report passed.</p>
<h2>Before exam day</h2>
<p>Book the appointment within the window after approval, check the ID and test-center rules, and plan a last full mock a few days before. The ${h.a('rbt-study-plan', 'study plan')} spreads the bank over the days you have left, and the ${h.a('rbt-passing-score', 'passing score page')} explains how the pass or fail result is set.</p>`,
  },
});
