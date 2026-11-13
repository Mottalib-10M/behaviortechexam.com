import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'review-mistakes', group: 'plan', order: 710,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'review', pick: true } },
  mini: { kind: 'progress', props: { exam: 'rbt' } },
  related: ['rbt-study-plan', 'rbt-practice-test', 'rbt-mock-exam', 'bcba-practice-test'],
  sources: ['rbt_tco'],
  en: {
    slug: 'review-mistakes', nav: 'Review your missed questions', card: 'Every question you missed on this site, saved in your browser, to drill until you get it right.',
    title: 'RBT Missed Questions Review: Drill Your Mistakes Again',
    description: 'RBT missed questions review: every question you got wrong in practice or mocks here, kept in your browser only, to drill again with full explanations each time.',
    h1: 'RBT missed questions review',
    intro: 'The RBT missed questions review above brings back every question you got wrong on this site, stored in this browser only; answer it right to clear it.',
    resume: (h) => `Going back over mistakes is where practice turns into progress. Every time you answer a question wrong in a practice set or a full mock on this site, the question is saved in your browser's local storage, with no account and nothing sent to a server. This page draws those questions back, shuffles them and shows the explanation after each answer. A question you then answer correctly leaves the list; one you miss again stays. The progress panel under this summary shows your share of right answers by outline domain across everything you have answered, so you can see whether a weak area is improving. The bank holds ${h.inPool('rbt')} RBT and ${h.inPool('bcba')} BCBA questions. If the list is empty, you have either not started or cleared every mistake; start with a ${h.a('rbt-practice-test', 'practice set')}. Clearing your browser data erases both the list and the progress record.`,
    faqs: (h) => [
      { q: 'Where are my missed questions stored?', a: 'In the local storage of the browser you used, on your own device. Nothing is sent to us and there is no account. A different browser or device starts empty, and clearing site data or using private browsing removes the list. Use one browser to keep a single list.' },
      { q: 'How does a question leave the review list?', a: 'Answer it correctly here and it is removed. Answer it wrong again and it stays, so the questions you find hardest keep coming back until you get them right. You can also reset the whole list and your progress from the progress panel.' },
      { q: 'Should I only review mistakes before the RBT exam?', a: `In the last two days, yes: the study plan on this site keeps them for missed questions only. Earlier, mix review with new practice sets so that you keep covering every domain of the outline, not only the ones you already struggled with. Fresh sets also show whether old mistakes are really fixed.` },
    ],
    body: (h) => `
<h2>RBT missed questions review: how it works</h2>
<ol>
<li>Answer practice sets or a full mock on any question page.</li>
<li>Wrong answers are saved in this browser.</li>
<li>Come back here: the list is shuffled each time.</li>
<li>A right answer here clears the question.</li>
</ol>
<h2>Reading the explanations</h2>
<p>Each explanation says why the right option is right and what is wrong with the others. When the same idea keeps coming back, such as the difference between negative reinforcement and punishment, read the matching ${h.a('rbt-skill-acquisition', 'domain page')} before drilling again. Common traps are listed on the ${h.a('rbt-exam-questions', 'exam questions page')}.</p>
<h2>Progress by domain</h2>
<p>The panel under the summary reads your answers across the site and shows a share of right answers for each of the six RBT domains. A domain under ${h.pc(h.X('rbt').target)} is where your next practice set should go.</p>`,
  },
});
