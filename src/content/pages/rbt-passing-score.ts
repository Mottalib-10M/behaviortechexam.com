import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-passing-score', group: 'practice', order: 40,
  tool: { kind: 'mini:readiness', props: { p: 78 } },
  mini: { kind: 'mini:passrate', props: { p: 0 } },
  related: ['rbt-mock-exam', 'rbt-pass-rates', 'rbt-exam-retake', 'rbt-practice-test'],
  sources: ['rbt_handbook', 'rbt_tco', 'rbt_pass_rates'],
  en: {
    slug: 'rbt-passing-score', nav: 'RBT passing score', card: 'Why no number of right answers is published, and your chance of reaching 80% on a mock.',
    title: 'RBT Passing Score: What the Board Publishes and Why',
    description: 'RBT passing score explained: pass or fail set by a modified Angoff panel, no published count of right answers, and your own chance of 80% on a full mock.',
    h1: 'RBT passing score: pass or fail, no published count',
    intro: 'There is no official RBT passing score in right answers: the board reports pass or fail against a standard set by expert judges, and it does not print the cut.',
    resume: (h) => `Candidates often read that the RBT exam needs 70 or 80 percent. Neither figure comes from the board. The RBT Handbook explains that the passing standard is set by a panel of subject matter experts using a modified Angoff method: each judge estimates, question by question, the share of minimally competent technicians who would answer correctly, and those estimates set the standard for a form. Because forms differ, the number of right answers needed can differ too, and the board reports only pass or fail. What you can control is your accuracy across the ${h.X('rbt').scored} scored questions. The calculator above takes your practice rate and gives the probability of reaching the site's study target of ${h.pc(h.X('rbt').target)}, that is ${Math.ceil(h.X('rbt').target * h.X('rbt').scored)} right answers out of ${h.X('rbt').scored}, on one full mock, with a simple statistical model.`,
    faqs: (h) => [
      { q: 'Is the RBT passing score 80 percent?', a: `No published rule says so. The board uses a modified Angoff method to set a standard for each form and reports pass or fail. ${h.pc(h.X('rbt').target)} is the study target this site uses because it leaves a margin over the level most judges would expect from an entry-level technician. Treat it as a training goal, not as the cut score.` },
      { q: 'Does the RBT exam score report give a percentage?', a: 'The handbook describes the exam as pass or fail, with the result given at the testing center right after the exam. A copy of the result report is kept in your Pearson VUE account under score reports; the board itself cannot view or download it. Nothing in the handbook turns the result into a count of right answers you could compare with a mock.' },
      { q: 'Do the trial questions count toward passing?', a: `No. The ${h.X('rbt').unscored} trial questions are there to test new items and do not affect the result. You cannot tell them apart from the ${h.X('rbt').scored} scored questions, so answer every one with the same care. Our full mock can add the same number of unscored questions, so you train at the real length of the exam.` },
      { q: 'What should I do if my mock scores stay below 80 percent?', a: 'Look at the domains rather than the total. Most candidates have one or two domains that drag the score down, often behavior reduction or measurement. Work those on the domain pages, review every missed question, and sit a new mock a few days later. If time is short, the study plan calculator spreads the work over the days left.' },
    ],
    body: (h) => `
<h2>How the RBT passing score is set</h2>
<p>In a modified Angoff study, a panel of certified practitioners reviews each question and estimates how many minimally competent candidates would get it right. Their estimates are combined into a standard for the whole form. The approach ties the cut to the difficulty of the questions on that form: a harder form needs fewer right answers, an easier form more. That is why a fixed percentage quoted by a third party is at best an estimate.</p>
<p>What the board does publish is the structure of the exam: ${h.X('rbt').items} questions, of which ${h.X('rbt').scored} count, in ${h.time('rbt')}, spread over six domains. The result arrives as pass or fail. If you pass, your name appears in the board's registry of certificants; if you fail, you can retake after ${h.X('rbt').retakeWaitDays} days within your authorization period, as the ${h.a('rbt-exam-retake', 'retake page')} explains.</p>
<h2>What the readiness calculator assumes</h2>
<p>The calculator treats each question as an independent draw that you answer right with the probability of your practice rate. Under that model, the chance of reaching ${Math.ceil(h.X('rbt').target * h.X('rbt').scored)} right answers out of ${h.X('rbt').scored} rises steeply around the target: a few points of accuracy change the odds a lot. Real exams break the model, since some domains are stronger than others and some questions are harder, but the shape of the curve holds. It is the reason why moving from about three answers in four to four in five changes more than it seems.</p>
${h.table(['Practice accuracy', 'Expected right answers out of ' + h.X('rbt').scored], [70, 75, 80, 85, 90].map((p) => [p + '%', Math.round(p / 100 * h.X('rbt').scored)]), 'Expected values only; the calculator adds the spread around them.', ['l', 'r'])}
<h2>Pass rates give the real picture</h2>
<p>The board's report on ${h.pr.year} shows ${h.num(h.pr.pass)} first-time passes out of ${h.num(h.pr.n)} first-time candidates across ${h.pr.providers.length} training providers, ${h.pc(h.pr.rate, 1)} together. The second calculator above looks up any of those providers. A low rate is a warning sign for a course, but it also reflects who enrolls: providers that train large numbers of new hires on the job see a wider mix of candidates. The ${h.a('rbt-pass-rates', 'pass rate page')} has the sortable list.</p>
<h2>A practical target before booking</h2>
<p>Two full mocks at or above the study target, on different days, with no domain far behind the others, is a sound signal. If a mock lands below, the domain bars tell you where to go back. A ${h.a('rbt-mock-exam', 'second mock')} with a fresh draw is on its own page.</p>`,
  },
});
