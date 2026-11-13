import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-study-plan', group: 'plan', order: 700,
  tool: { kind: 'mini:pace', props: { d: 21, m: 3 } },
  mini: { kind: 'mini:readiness', props: { p: 75 } },
  related: ['rbt-mock-exam', 'review-mistakes', 'rbt-exam-questions', 'rbt-exam-scheduling'],
  sources: ['rbt_tco', 'rbt_handbook'],
  en: {
    slug: 'rbt-study-plan', nav: 'RBT study plan', card: 'Questions a day until your appointment, split by domain weight, with mocks and review days.',
    title: 'RBT Study Plan: Daily Questions Until Your Exam Appointment',
    description: 'RBT study plan built from your days left: questions a day split by the weight of each outline domain, when to take full mocks, and the final review days.',
    h1: 'RBT study plan from today to exam day',
    intro: 'This RBT study plan starts from the days left before your appointment; enter them above with the number of full mocks you want to take.',
    resume: (h) => `The RBT exam has ${h.X('rbt').scored} scored questions over six domains, and skill acquisition alone accounts for ${h.dom('rbt', 'C').items} of them, a quarter of the exam. A study plan that follows those weights spends time where the points are. The calculator above takes the days until your appointment and sets a daily number of practice questions so that you see every area of the outline about twice, split by domain in proportion to the scored questions. It keeps the last two days for missed questions only and spaces the full mocks you plan evenly across the remaining days. Each mock takes ${h.time('rbt')} like the real exam. The calculator under this summary turns your current share of right answers into the chance of reaching ${h.pc(h.X('rbt').target)} on a full mock, the study target of this site. Our bank holds ${h.inPool('rbt')} RBT questions, so a plan of several weeks will repeat questions; repetition of missed ones is useful, repetition of known ones less so.`,
    faqs: (h) => [
      { q: 'How long should I study for the RBT exam?', a: 'Most candidates study for two to four weeks after finishing the 40-hour training, but it depends on how much the training covered and whether you already work with clients. Use your practice scores, not the calendar, to decide: book once you are steady near the target on full mocks.' },
      { q: 'How many practice questions a day for the RBT exam?', a: `Enough to see the outline twice before the exam: about ${h.num(Math.ceil(h.X('rbt').scored * 2 / 19))} a day for a three-week plan, more if your appointment is closer. The calculator above gives the number for your days left and splits it by domain. Fewer questions with careful review of each explanation beat a large number answered quickly.` },
      { q: 'When should I take a full RBT mock exam?', a: `Take one early to find weak domains, one in the middle and one a few days before the appointment, each in one sitting of ${h.time('rbt')}. Do not take a full mock the day before; use the last days to go over the questions you missed.` },
    ],
    body: (h) => `
<h2>RBT study plan by domain weight</h2>
${h.table(['Domain', 'Scored questions', 'Share of a daily set'], ['A', 'B', 'C', 'D', 'E', 'F'].map((c) => [`${c}. ${h.dom('rbt', c).name}`, h.dom('rbt', c).items, h.pc(h.dom('rbt', c).share)]), `RBT Test Content Outline (3rd ed.), read on ${h.read}.`, ['l', 'r', 'r'])}
<h2>A three-week example</h2>
<ol>
<li>Week 1: a first ${h.a('rbt-mock-exam', 'full mock')} on day 1, then daily sets weighted toward your weakest domains.</li>
<li>Week 2: daily sets by domain on the ${h.a('rbt-exam-questions', 'question pages')}, a second mock at the end of the week.</li>
<li>Week 3: a last mock four or five days before, then only ${h.a('review-mistakes', 'missed questions')}.</li>
</ol>
<h2>Booking the appointment</h2>
<p>Book only when practice is steady, and keep the ${h.a('rbt-exam-scheduling', 'rescheduling rules')} in mind: moving the appointment late costs a fee, and a missed appointment loses the exam fee.</p>`,
  },
});
