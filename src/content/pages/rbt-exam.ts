import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-exam', group: 'practice', order: 50,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', n: 6 } },
  mini: { kind: 'mini:reschedule', props: { d: 10 } },
  related: ['rbt-exam-scheduling', 'rbt-mock-exam', 'rbt-exam-retake', 'rbt-certification-cost', 'rbt-task-list'],
  sources: ['rbt_handbook', 'rbt_tco', 'pearson_bacb'],
  demarche: true,
  en: {
    slug: 'rbt-exam', nav: 'RBT exam format', card: 'Questions, time, test centers, fees, results and retakes of the exam, read in the handbook.',
    title: 'RBT Exam 2026: Format, Time, Fees, Results and Retakes',
    description: 'RBT exam in 2026: 85 questions in 90 minutes at a Pearson VUE center, six domains, $45 per appointment, pass or fail, retakes after 7 days, sample questions.',
    h1: 'RBT exam: format, fees and rules for 2026',
    intro: 'The RBT exam is a 90-minute, 85-question multiple-choice test taken in person at a Pearson VUE center, scored pass or fail on the six domains of the 2026 outline.',
    resume: (h) => `Everything about the exam itself is set in the RBT Handbook, last updated in October 2026. After the board approves your application, you have ${h.R.application.monthsToTestAfterApproval} months to pass. You schedule in your Pearson VUE account and pay ${h.usd(h.X('rbt').feeExam)} for each appointment, on top of the ${h.usd(h.X('rbt').feeApplication)} application fee already paid to the board. The exam is delivered in person, at authorized Pearson VUE testing sites in the United States, parts of Canada and some other countries, and on certain US military bases. It has ${h.X('rbt').items} questions, ${h.X('rbt').scored} of them scored, each with ${h.X('rbt').options} options, in ${h.time('rbt')}. Moving or cancelling costs nothing up to 31 days before, ${h.usd(h.X('rbt').rescheduleFee5to30Days)} from 30 to 5 days before and ${h.usd(h.X('rbt').rescheduleFee48hTo5Days)} from 5 days to 48 hours before; within 48 hours nothing can be changed. The six questions above give a feel for the format.`,
    faqs: (h) => [
      { q: 'Where do I take the RBT exam?', a: 'At a Pearson VUE testing site authorized for board exams, or on certain US military bases. The handbook lists the United States, Canada except Quebec and Ontario, and Australia until January 1, 2027, among other countries. You pick the site and the date in your Pearson VUE account once the board has approved your application.' },
      { q: 'What happens if I am late for the RBT exam?', a: 'If you arrive more than 30 minutes after your appointment time, you are turned away and the scheduling fee is lost. The same applies when you do not show up. You then book and pay a new appointment in your Pearson VUE account, as long as you are still inside your authorization period.' },
      { q: 'How long do I have to take the RBT exam after approval?', a: `${h.R.application.monthsToTestAfterApproval} months from the day the application is approved. Within that period you can take the exam up to ${h.X('rbt').attemptsMax} times, waiting at least ${h.X('rbt').retakeWaitDays} days between attempts. Your board account shows the exact deadline. If that period runs out, a new application and its fee are needed before you can book again.` },
      { q: 'When do I get my RBT exam result?', a: 'At the testing center, as soon as you finish: the exam is pass or fail. A copy of the result report stays in your Pearson VUE account. If you pass, the board writes within about a week about your certification, which starts as inactive until your supervisor or requirements coordinator adds you as a supervisee in the board portal.' },
    ],
    body: (h) => `
<h2>The RBT exam at a glance</h2>
${h.table(['Item', 'Rule'], [
  ['Questions', `${h.X('rbt').items}, of which ${h.X('rbt').scored} scored and ${h.X('rbt').unscored} unscored`],
  ['Time', h.time('rbt')],
  ['Outline', h.X('rbt').editionLabel],
  ['Where', 'In person, Pearson VUE testing sites and some military bases'],
  ['Appointment fee', `${h.usd(h.X('rbt').feeExam)} at each scheduling`],
  ['Result', 'Pass or fail, given at the testing center'],
  ['Retakes', `${h.X('rbt').retakeWaitDays} days apart, up to ${h.X('rbt').attemptsMax} attempts in ${h.X('rbt').authorizationMonths} months`],
], `RBT Handbook, read on ${h.read}.`, ['l', 'l'])}
<h2>What the RBT exam covers</h2>
<p>The questions follow the ${h.X('rbt').tasks} tasks of the third edition outline, which replaced the previous edition for exams taken from 2026. The six domains and their scored questions are listed on the ${h.a('rbt-task-list', 'task list page')}. In practice the exam asks you to recognize procedures in short situations: what a technician is doing, what should come next, or which choice breaks a rule of the ethics code.</p>
<h2>Fees around the exam</h2>
<p>The ${h.usd(h.X('rbt').feeExam)} appointment fee is collected by Pearson VUE at booking, and local sales tax may apply. Rescheduling has its own calendar, worked out by the calculator under the summary. Missing an appointment or arriving late forfeits the fee. The full cost of certification, with training and state fees, is on the ${h.a('rbt-certification-cost', 'cost page')}.</p>
<h2>On exam day</h2>
<ul>
<li>Bring the identification the handbook and your confirmation email ask for; names must match your board account.</li>
<li>Arrive early: more than 30 minutes late means no test.</li>
<li>Read each scenario to the end before looking at the options; many wrong options describe a nearby procedure.</li>
<li>Use the review screen to come back to flagged questions before you end the test.</li>
</ul>
<p>Accommodations for a disability are requested from the board with its request form and documentation from a qualified professional. Scheduling details are on the ${h.a('rbt-exam-scheduling', 'scheduling page')}; a failed attempt is handled on the ${h.a('rbt-exam-retake', 'retake page')}.</p>`,
  },
});
