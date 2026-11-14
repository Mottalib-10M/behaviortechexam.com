import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-behavior-reduction', group: 'domains', order: 140,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'D', n: 10 } },
  related: ['functions-of-behavior', 'rbt-skill-acquisition', 'rbt-documentation-reporting', 'rbt-ethics'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'rbt-behavior-reduction', nav: 'D. Behavior reduction', card: 'Functions, antecedent strategies, differential reinforcement, extinction, punishment and crisis plans.',
    title: 'RBT Behavior Reduction: Questions from Function to Crisis',
    description: 'RBT behavior reduction practice: functions of behavior, NCR, high-p requests, DRO, DRA, DRI, DRL and FCT, extinction and its burst, crisis procedures.',
    h1: 'RBT behavior reduction practice questions',
    intro: 'RBT behavior reduction is domain D, 14 scored questions: from the four functions of behavior to extinction bursts and crisis procedures, all practiced here.',
    resume: (h) => `Domain D has ${h.dom('rbt', 'D').tasks} tasks and ${h.dom('rbt', 'D').items} scored questions, ${h.pc(h.dom('rbt', 'D').share)} of the exam. Its logic runs in one direction. First, identify the common functions of behavior: attention, escape, access to tangibles and automatic reinforcement. Then prevent the behavior with antecedent interventions such as noncontingent reinforcement, high-probability request sequences and demand fading. Then teach and reinforce something else with differential reinforcement: DRO for the absence of the behavior, DRA for a named alternative, DRI for an incompatible one, DRL for lower rates, and functional communication training, which teaches a request that earns the same reinforcer. Extinction withholds the reinforcer that maintained the behavior and must match its function. Punishment, positive or negative, comes with side effects the outline asks you to describe, as do extinction bursts and resurgence. Last, crisis and emergency procedures are followed exactly as planned and always reported. The ${h.inPool('rbt', 'D')} questions above follow that order.`,
    faqs: (h) => [
      { q: 'What is an extinction burst?', a: 'A temporary rise in how often, how long or how intensely a behavior occurs when the reinforcer that maintained it stops. It is expected early in extinction. Giving in during a burst teaches the learner that a stronger behavior works, which makes things worse. Technicians keep to the plan and keep the supervisor informed.' },
      { q: 'What is the difference between DRO and DRA?', a: 'DRO, differential reinforcement of other behavior, reinforces an interval in which the problem behavior did not occur, whatever else happened. DRA, differential reinforcement of alternative behavior, reinforces a specific replacement behavior, such as asking for a break, while the problem behavior no longer pays off. FCT is a form of DRA.' },
      { q: 'Can an RBT decide to use time-out?', a: 'No. Time-out, response cost and any other punishment procedure are chosen by the supervising analyst, written into the plan and used exactly as written. The technician implements, records and reports. Exam options in which a technician improvises a punishment, or skips a step of a crisis plan, are wrong.' },
      { q: 'Why does extinction have to match the function?', a: 'Because it works only by stopping the reinforcer that maintains the behavior. For attention-maintained behavior, attention is withheld. For escape-maintained behavior, the task stays in place. Ignoring an escape-maintained behavior does not withhold anything; it may even let the learner escape, which strengthens the behavior.' },
    ],
    body: (h) => `
<h2>Behavior reduction from function to procedure</h2>
${h.table(['Function', 'Antecedent example', 'Differential reinforcement example', 'Extinction looks like'], [
  ['Attention', 'Attention on a fixed schedule (NCR)', 'Teach a polite way to call the adult (FCT)', 'No attention after the behavior'],
  ['Escape', 'Easier tasks first, high-p requests, demand fading', 'Teach asking for a break', 'The task stays in place'],
  ['Tangible', 'Scheduled access, warnings before transitions', 'Teach asking for the item', 'The item is not given after the behavior'],
  ['Automatic', 'Enriched environment, matched alternatives', 'Reinforce incompatible behavior', 'Sensory consequence reduced, as the plan sets'],
], 'Our examples for tasks D.1 to D.4 of the board’s exam plan; the supervisor writes the actual plan.', ['l', 'l', 'l', 'l'])}
<h2>Differential reinforcement in brief</h2>
<p>All differential reinforcement procedures reinforce one thing and not another. DRO reinforces the absence of the target behavior over an interval. DRA reinforces an alternative behavior. DRI reinforces a behavior that cannot happen at the same time. DRL reinforces a lower rate of a behavior that is fine in small amounts, such as asking the same question. FCT teaches a communication response that produces the same reinforcer as the problem behavior. The ${h.a('functions-of-behavior', 'functions page')} drills these.</p>
<h2>Punishment and its side effects</h2>
<p>Positive punishment adds something after a behavior, negative punishment removes something such as tokens or access to reinforcement, and both reduce the behavior. Their side effects include emotional responses, aggression, and escape from or avoidance of the person or place. Extinction has its own: the burst, more varied responding, emotional responding, and resurgence of old behaviors when a newer one stops working. Exam questions ask you to recognize each.</p>
<h2>Crisis and emergency procedures</h2>
<p>When behavior puts someone in danger, the technician follows the crisis plan and the workplace's emergency procedures, uses only the techniques they were trained for, and documents and reports promptly. Crisis or emergency procedures are also task 13 of the ${h.a('rbt-competency-assessment', 'competency assessment')}, which can be shown with a client, in role-play or by interview. Reporting itself belongs to the ${h.a('rbt-documentation-reporting', 'documentation domain')}.</p>`,
  },
});
