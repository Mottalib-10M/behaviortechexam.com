import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-data-collection', group: 'domains', order: 110,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'A', n: 10 } },
  related: ['rbt-behavior-assessment', 'rbt-documentation-reporting', 'rbt-practice-test', 'rbt-task-list'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'rbt-data-collection', nav: 'A. Data collection and graphing', card: 'Continuous and discontinuous measurement, permanent products, rate, percentage, trend.',
    title: 'RBT Data Collection Questions: Measurement and Graphs',
    description: 'RBT data collection practice: frequency, duration, latency, IRT, partial and whole interval, momentary time sampling, rate, percentage and trends, explained.',
    h1: 'RBT data collection and graphing practice',
    intro: 'RBT data collection is domain A of the outline, 13 scored questions: these practice items cover every measurement method a technician uses and how to read a graph.',
    resume: (h) => `Domain A holds ${h.dom('rbt', 'A').tasks} tasks and ${h.dom('rbt', 'A').items} of the ${h.X('rbt').scored} scored questions, ${h.pc(h.dom('rbt', 'A').share)} of the exam. Its questions sort into three families. The first is choosing and running a measurement method: continuous methods record every instance (frequency, duration, latency, interresponse time), discontinuous methods sample it (partial interval, whole interval, momentary time sampling), and permanent product recording measures what behavior leaves behind. The second is turning records into numbers and graphs: rate per minute, mean duration, percentage of trials or intervals, and a line graph with sessions on the horizontal axis. The third is judging the data: trend, level, variability, and the risks of data recorded late, from memory or with poor procedural fidelity. The ${h.inPool('rbt', 'A')} practice questions above follow those families; the competency assessment also asks you to show the first and the third in front of an assessor.`,
    faqs: (h) => [
      { q: 'Which RBT measurement method overestimates behavior?', a: 'Partial interval recording. It marks an interval as soon as the behavior happens at any moment in it, so a brief occurrence fills the whole interval. That is why it is often chosen for behaviors to reduce. Whole interval recording does the opposite and tends to underestimate, which suits behaviors to increase.' },
      { q: 'What is the difference between latency and IRT?', a: 'Latency is the time from a cue, such as an instruction, to the start of the response. Interresponse time, or IRT, is the time between two responses of the same kind. A goal to start tasks sooner calls for latency; a goal to slow down eating or speaking calls for IRT.' },
      { q: 'How do I calculate rate on the RBT exam?', a: 'Divide the count by the observation time. Eighteen requests in thirty minutes is 0.6 per minute. Rate lets you compare sessions of different lengths, which a plain count cannot. Percentage works the same way for trials: correct trials divided by all trials, times one hundred.' },
      { q: 'Why does the outline mention procedural fidelity?', a: 'Because data only mean something if the plan was run as written. If a technician skips steps or records late, a graph may show no progress when the procedure was never really tried, or progress that is not real. Task A.8 asks you to describe those risks; the exam often frames them as a choice between recording now and filling in later.' },
    ],
    body: (h) => `
<h2>RBT data collection methods in one table</h2>
${h.table(['Method', 'What it records', 'Typical use'], [
  ['Frequency or count', 'Every occurrence', 'Discrete behaviors with a clear start and end'],
  ['Duration', 'How long each occurrence lasts', 'Tantrums, time on task, time seated'],
  ['Latency', 'Time from a cue to the start of the response', 'Starting tasks after an instruction'],
  ['Interresponse time', 'Time between two responses', 'Pacing of eating or speaking'],
  ['Partial interval', 'Any occurrence in each interval', 'High-rate behaviors to reduce'],
  ['Whole interval', 'Behavior throughout each interval', 'Behaviors to increase, such as engagement'],
  ['Momentary time sampling', 'Behavior at the moment the interval ends', 'Several learners or a busy session'],
  ['Permanent product', 'The lasting result of behavior', 'Worksheets, items assembled, a made bed'],
], 'Our summary of tasks A.1 to A.3 of the board’s exam plan.', ['l', 'l', 'l'])}
<h2>Operational definitions</h2>
<p>Task A.5 asks you to describe behavior and environment in observable and measurable terms. A good definition lets two people watching the same session agree on every instance. It names what the behavior looks like, not why it happens or how the learner feels: "hits the table with an open hand hard enough to be heard" rather than "gets angry". On the exam, wrong options often contain a label such as aggressive, defiant or anxious.</p>
<h2>Summarizing and graphing</h2>
<p>Technicians enter data and update graphs (A.4) and calculate summaries (A.6): rate, mean duration, percentage. Expect simple arithmetic on the exam, done without a calculator. Line graphs put sessions or dates on the horizontal axis and the measure on the vertical axis, with a phase line where the intervention changes. Reading them (A.7) comes down to three words: level, trend and variability.</p>
<h2>When data cannot be trusted</h2>
<p>Records written from memory, at the end of the day or under pressure to show progress, mislead the supervisor. A skill may be marked mastered too soon, or a working procedure dropped. The right response on the exam is almost always to record during or right after the session, follow the data sheet as designed, and report problems to the supervisor rather than fix them alone. The ${h.a('rbt-documentation-reporting', 'documentation domain')} picks up the same theme for session notes.</p>
<h2>Practice next</h2>
<p>Domain A pairs well with ${h.a('rbt-behavior-assessment', 'behavior assessment')}, which relies on the same recording skills for ABC data and preference assessments. The ${h.a('rbt-competency-assessment', 'competency checklist')} lists the measurement tasks you will show an assessor before you apply.</p>`,
  },
});
