import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-practice-test', group: 'practice', order: 10,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', n: 10 } },
  mini: { kind: 'mini:readiness', props: { p: 75 } },
  related: ['rbt-mock-exam', 'rbt-exam-questions', 'rbt-skill-acquisition', 'review-mistakes', 'rbt-passing-score'],
  sources: ['rbt_tco', 'rbt_handbook', 'rbt_pass_rates'],
  en: {
    slug: 'rbt-practice-test', nav: 'RBT practice test', card: 'Ten questions at a time, by outline domain, each answer explained with its task code.',
    title: 'RBT Practice Test: Free Questions by Domain, Explained',
    description: 'Free RBT practice test: ten questions at a time from any of the six outline domains, each answer explained with its task code, progress kept in your browser.',
    h1: 'RBT practice test, one domain at a time',
    intro: 'This RBT practice test serves ten questions at once from the domain you pick, corrects each answer on the spot and names the skill of the board’s exam plan behind it.',
    resume: (h) => `The behavior technician exam has ${h.X('rbt').scored} scored questions spread over six domains of the third edition outline, and skill acquisition alone carries ${h.dom('rbt', 'C').items} of them. Practicing by domain finds the weak area faster than full mocks do: ten questions on data collection tell you more about data collection than ten mixed ones. Each question here was written by us for one task of the outline, so a wrong answer points to a task to reread, such as A.2 for interval recording or D.3 for differential reinforcement. The bank holds ${h.inPool('rbt')} technician questions; a set is drawn at random, and the button for new questions draws another without repeating the one on screen. Answers stay in this browser, so the review page can bring back every question you missed. When your share of right answers holds above ${h.pc(h.X('rbt').target)} in every domain, move on to the timed mock.`,
    faqs: (h) => [
      { q: 'Is a free RBT practice test enough to pass?', a: `It helps most when it comes after the ${h.R.training.hours}-hour training, not instead of it. The training teaches the procedures, and the competency assessment checks you can do them. Practice questions then train you to recognize each procedure in a short written scenario, which is what the exam asks. Use them to find weak domains and reread those parts of your training notes.` },
      { q: 'How many practice questions should I answer before the exam?', a: `Enough to see every domain several times and to hold a steady score. A practical goal is to work through the whole bank of ${h.inPool('rbt')} questions twice, then take two full mocks on different days. If one domain stays well below the others, give it a few extra sets before booking or keeping your appointment.` },
      { q: 'Why does each question show a code like C.7?', a: 'The code is the task of the RBT Test Content Outline (3rd ed.) that the question trains: C.7 is prompting and prompt fading, D.4 is extinction, F.5 is confidentiality. When you miss a question, the code tells you which part of your training to review, and the domain pages group the tasks with their own practice sets.' },
      { q: 'Are these the questions of the real RBT exam?', a: 'No. The board keeps its item bank secret, and any site that claims to show real questions is either wrong or breaking the rules of the exam. Every question here was written by Radif Partners from one task of the public outline. They test the same knowledge with different wording and different scenarios.' },
    ],
    body: (h) => `
<h2>How this RBT practice test works</h2>
<p>Pick a domain in the list above the question, or leave it on all domains for a mixed set. Each question has four options. As soon as you answer, the right option turns green, a short explanation says why it is right and why the tempting wrong options are wrong, and the outline task appears under it. The panel on the side counts right answers and shows how far you are from the study target of ${h.pc(h.X('rbt').target)}. That target is ours: the board reports a pass or a fail, and it does not publish its passing standard as a number of right answers.</p>
<p>A new set comes from the same domain until you change it. A shared link with the set number replays the same questions, which is handy for a study partner or a trainer who wants a group to discuss the same ten.</p>
<h2>The six domains and how much each one weighs</h2>
${h.outline('rbt', `Scored questions per domain, ${h.X('rbt').editionLabel}. ${h.X('rbt').unscored} trial questions that do not count are added on the real exam.`)}
<p>The weights tell you where to spend time. Skill acquisition and behavior reduction together make up ${h.dom('rbt', 'C').items + h.dom('rbt', 'D').items} of the ${h.X('rbt').scored} scored questions, so prompting, discrete trials, reinforcement and extinction come up again and again. Behavior assessment is the smallest domain with ${h.dom('rbt', 'B').items} questions, mostly on preference assessments and on the technician's part in functional assessment.</p>
<h2>A study routine that uses the domains</h2>
<ul>
<li>Start with one mixed set to see where you stand, then work the domains from your weakest to your strongest.</li>
<li>After each set, read the explanation of every miss, even when you guessed right. A lucky guess is a weak area that does not show yet.</li>
<li>Every few days, open the ${h.a('review-mistakes', 'review page')}: it serves only the questions you missed until you get them right.</li>
<li>When every domain holds above the target, sit a ${h.a('rbt-mock-exam', 'full 75-question mock')} under the clock.</li>
</ul>
<p>The calculator under the summary turns your practice rate into a chance of reaching the target on a full mock, assuming each question is answered right with that same probability. It is a model, not a forecast of the exam, but it shows how a few points of practice accuracy change the odds over ${h.X('rbt').scored} questions.</p>
<h2>What the exam itself looks like</h2>
<p>The real exam is taken at a Pearson VUE test center, with ${h.X('rbt').items} multiple-choice questions in ${h.time('rbt')}. The board's pass rate report gives a sense of the stakes: across the ${h.a('rbt-pass-rates', 'training providers it lists for 2025')}, about three in four first-time candidates passed. Fees, retakes and scheduling are on the ${h.a('rbt-exam', 'exam format page')}.</p>`,
  },
});
