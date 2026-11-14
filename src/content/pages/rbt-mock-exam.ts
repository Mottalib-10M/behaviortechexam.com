import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-mock-exam', group: 'practice', order: 20,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'mock' } },
  mini: { kind: 'mini:pace', props: { d: 21, m: 3 } },
  related: ['rbt-practice-test', 'rbt-passing-score', 'review-mistakes', 'rbt-study-plan', 'rbt-exam'],
  sources: ['rbt_tco', 'rbt_handbook'],
  en: {
    slug: 'rbt-mock-exam', nav: 'RBT mock exam', card: 'A second timed mock with its own draw, the question map, flags and corrections at the end.',
    title: 'RBT Mock Exam: Timed 75 Questions with Domain Scores',
    description: 'Timed RBT mock exam: 75 scored questions drawn in the outline proportions, optional pilot questions, a question map with flags, and a score for each domain.',
    h1: 'RBT mock exam under exam conditions',
    intro: 'Sit this RBT mock exam in one go: the clock starts with your first answer, nothing is corrected until you end the test, and the result splits by domain.',
    resume: (h) => `A full mock does a different job from practice by domain. It tests pacing, attention over ${h.X('rbt').scored} or ${h.X('rbt').items} questions, and the habit of answering without feedback. This page draws its own set, different from the one on the home page, so you can sit two mocks without seeing the same order. The draw takes ${h.dom('rbt', 'A').items} questions from data collection, ${h.dom('rbt', 'B').items} from assessment, ${h.dom('rbt', 'C').items} from behavior acquisition (teaching new skills), ${h.dom('rbt', 'D').items} from behavior reduction, ${h.dom('rbt', 'E').items} from documentation and ${h.dom('rbt', 'F').items} from ethics, the counts of the outline. With the full length chosen, ${h.X('rbt').unscored} more are mixed in and left out of the score. The time is ${h.time('rbt')} for the full length, prorated when you sit only the scored questions. At the end, the panel shows right answers per domain and the list of questions to read again.`,
    faqs: (h) => [
      { q: 'How long is the RBT exam?', a: `${h.time('rbt')} for ${h.X('rbt').items} questions, which leaves a little over a minute per question. Most candidates finish with time to spare, but a long scenario can eat minutes. Flag a question you are unsure of, answer the rest, and come back at the end. Our mock keeps the same pace and the same map of flagged questions.` },
      { q: 'How many mocks should I take before the RBT exam?', a: 'Two or three spaced over the last weeks are usually enough. A mock is useful when you study what it shows afterwards: the domain with the lowest score and every question you missed. Taking mocks back to back without review mostly measures the same weak spots again and can make you overconfident about familiar questions.' },
      { q: 'Why are the trial questions optional in this mock?', a: `On the real exam, ${h.X('rbt').unscored} trial questions that do not count are mixed in to test new items for later forms, and nobody knows which they are. Leaving them out gives a shorter mock with a clean score. Adding them trains your stamina at the full ${h.X('rbt').items} questions, and the score still counts only the ${h.X('rbt').scored} scored ones.` },
      { q: 'My mock score is just under 80 percent. Am I ready?', a: `Possibly. ${h.pc(h.X('rbt').target)} is the study target of this site, not the board's passing standard, which is not published as a count. Look at the domains: a score just under the target spread evenly is closer to ready than the same score with one domain far below the rest. Work on that domain, then sit another mock.` },
    ],
    body: (h) => `
<h2>How to sit the RBT mock exam</h2>
<p>Pick a quiet half hour, or ${h.time('rbt')} if you add the pilot questions, and put your phone away. Answer in order, and use the flag button on any question you want to come back to. The map under the question shows answered questions in blue and flagged ones in amber, and a click on a number takes you there. End the test when you are done, or let the clock end it.</p>
<p>After marking, the map turns green and red, the side panel gives the score and the result per domain, and the list under the test gives the right answer and the explanation for every miss. Every answer you gave is saved in this browser, so the misses feed the ${h.a('review-mistakes', 'review page')}.</p>
<h2>Reading your score by domain</h2>
<p>The domain bars matter more than the total. A domain where you get fewer than four answers in five deserves its own practice page before the next mock. Domain counts on a mock are small, ${h.dom('rbt', 'B').items} questions for assessment, so one or two misses move the bar a lot; look for the domain that stays low across two mocks.</p>
<ul>
<li>Low on data collection: rework interval methods and the arithmetic of rate and percentage on the ${h.a('rbt-data-collection', 'data collection page')}.</li>
<li>Low on skill acquisition: the ${h.a('prompting-and-prompt-fading', 'prompting')} and ${h.a('discrete-trial-teaching', 'discrete trial')} topic pages hold many of its questions.</li>
<li>Low on behavior reduction: start with the ${h.a('functions-of-behavior', 'functions of behavior')}, since most reduction procedures depend on the function.</li>
<li>Low on ethics or documentation: these domains reward careful reading of who decides what, the technician or the supervisor.</li>
</ul>
<h2>Pacing on the day</h2>
<p>${h.X('rbt').items} questions in ${h.X('rbt').minutes} minutes is about ${h.num(h.X('rbt').minutes * 60 / h.X('rbt').items)} seconds each. A first pass that answers everything you know, then a second pass on the flags, avoids running out of time on a single hard scenario. The calculator below the summary spreads practice over the days you have left, with the number of mocks you want to fit in.</p>
<h2>What a mock cannot tell you</h2>
<p>Our questions are written from the outline, not taken from the exam, and our target is not the passing standard. A strong mock score says you know the procedures and the vocabulary well; it does not guarantee a pass. The board's figures give perspective: in ${h.pr.year}, ${h.pc(h.pr.rate)} of the first-time candidates from the providers it listed passed. Exam day rules, such as arrival time and identification, are on the ${h.a('rbt-exam-scheduling', 'scheduling page')}.</p>`,
  },
});
