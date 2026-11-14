import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-exam-retake', group: 'become', order: 370,
  tool: { kind: 'mini:retake', props: { f: 1, am: 6, ay: 2026, lm: 11, ly: 2026 } },
  mini: { kind: 'mini:pace', props: { d: 14, m: 2 } },
  related: ['review-mistakes', 'rbt-mock-exam', 'rbt-passing-score', 'rbt-exam-scheduling'],
  sources: ['rbt_handbook'],
  demarche: true,
  en: {
    slug: 'rbt-exam-retake', nav: 'RBT exam retake', card: 'Seven days between attempts, eight attempts in twelve months: your dates and what is left.',
    title: 'RBT Exam Retake: Wait, Attempts Left, Fees and Deadline',
    description: 'RBT exam retake rules: wait 7 days, up to 8 attempts within 12 months of approval, $45 per new appointment, and your own next dates in one free calculator.',
    h1: 'RBT exam retake: wait, attempts and deadline',
    intro: 'An RBT exam retake is possible 7 days after a failed attempt, up to 8 attempts in 12 months; the calculator below gives your next date and the attempts you have left.',
    resume: (h) => `Failing the exam is common and not final. Within 48 hours of a failed attempt, a retake application appears in your board portal; the handbook says no fee is currently charged for it, and the authorization email follows within 48 hours of submitting it. You must wait at least ${h.X('rbt').retakeWaitDays} days after the previous attempt, then book a new Pearson VUE appointment for ${h.usd(h.X('rbt').feeExam)}. You can take the exam up to ${h.X('rbt').attemptsMax} times in all within the ${h.X('rbt').authorizationMonths} months that follow the approval of your first application. When the period ends or the attempts are used, a new certification application is needed, with its fee and with requirements that must be current again, including the competency assessment window. The calculator above takes your approval month, your last attempt and the number of failed attempts, and returns the earliest next sitting, the end of your authorization and the attempts left. The second calculator plans the study between now and that date.`,
    faqs: (h) => [
      { q: 'How many times can you take the RBT exam?', a: `Up to ${h.X('rbt').attemptsMax} attempts within ${h.X('rbt').authorizationMonths} months of the approval of your initial application. Each attempt is a new ${h.usd(h.X('rbt').feeExam)} appointment, at least ${h.X('rbt').retakeWaitDays} days after the previous one. After the eighth attempt or the twelfth month, you must apply again. The retake calculator gives your dates.` },
      { q: 'Do I have to pay the board again to retake?', a: 'Not on the handbook read for this page: it says a fee is not currently required to submit the retake application. You do pay Pearson VUE again for each new appointment. If you have to start a new certification application after your authorization ends, the application fee is due again.' },
      { q: 'What should I study before an RBT retake?', a: 'Start from where you lost points. Take a full mock to see the weak domains, then practice those domains and the questions you miss. Read the explanations, not just the answers. Many candidates who fail know the definitions but mix up neighboring procedures, such as DRO and DRA (rewarding the absence of a behavior versus rewarding a named replacement) or partial and whole interval.' },
    ],
    body: (h) => `
<h2>RBT exam retake rules in one table</h2>
${h.table(['Rule', 'Value'], [
  ['Wait between attempts', `${h.X('rbt').retakeWaitDays} days`],
  ['Attempts in one authorization', `${h.X('rbt').attemptsMax}`],
  ['Authorization period', `${h.X('rbt').authorizationMonths} months from approval of the initial application`],
  ['Retake application', 'In the portal within 48 hours of a failed attempt; no fee currently'],
  ['New appointment', `${h.usd(h.X('rbt').feeExam)} to Pearson VUE`],
], `RBT Handbook, read on ${h.read}.`, ['l', 'l'])}
<h2>A two-week plan between attempts</h2>
<p>Seven days is the minimum, not a target. Two to three weeks usually give enough time to fix a weak domain without losing what you know. In the first days, sit a ${h.a('rbt-mock-exam', 'full mock')} and list the domains under the target. Spend the middle days on those domains, ten questions at a time, reading every explanation. Keep the last days for the ${h.a('review-mistakes', 'review of your mistakes')} and one more mock.</p>
<h2>When the authorization runs out</h2>
<p>Check your deadline in your portal and keep a margin: an appointment needs a free seat at a nearby center, and rescheduling close to the date costs up to ${h.usd(h.X('rbt').rescheduleFee48hTo5Days)}. If you reach the end of the ${h.X('rbt').authorizationMonths} months, the new application must meet the requirements in force at that time, which can mean a new competency assessment and new attested checks. The ${h.a('rbt-exam-scheduling', 'scheduling page')} covers booking and moving appointments.</p>`,
  },
});
