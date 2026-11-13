import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'functions-of-behavior', group: 'topics', order: 240,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', topic: 'function', n: 9 } },
  related: ['rbt-behavior-reduction', 'rbt-behavior-assessment', 'rbt-skill-acquisition', 'rbt-mock-exam'],
  sources: ['rbt_tco', 'rbt_competency'],
  en: {
    slug: 'functions-of-behavior', nav: 'Functions of behavior', card: 'Attention, escape, tangible, automatic, then DRO, DRA, FCT and extinction matched to function.',
    title: 'Functions of Behavior: RBT Exam Practice Questions (D.1)',
    description: 'Functions of behavior practice for the RBT exam: attention, escape, tangible and automatic, then reinforcement and extinction matched to each function.',
    h1: 'Functions of behavior practice questions',
    intro: 'The functions of behavior, task D.1, explain why a behavior keeps happening; these nine questions link each function to the reduction procedures that follow from it.',
    resume: (h) => `Behavior analysts ask what a behavior gets the person, not what it looks like. Four functions cover most cases. Social positive reinforcement by attention: yelling brings an adult over. Social negative reinforcement by escape: throwing materials ends the task. Access to tangibles: crying gets the tablet back. Automatic reinforcement: rocking or humming produces its own sensory consequence, whether anyone is there or not. Two behaviors that look identical can serve different functions, and one behavior can serve several. Function drives treatment. Differential reinforcement teaches or rewards a behavior that meets the same need, such as asking for a break instead of throwing materials, which is functional communication training. Extinction withholds the reinforcer that maintains the behavior, so it looks different for each function. The exam gives a scenario with an antecedent and a consequence and asks for the function, the matching procedure, or the effect to expect, such as an extinction burst.`,
    faqs: (h) => [
      { q: 'How do you tell the function of a behavior?', a: 'From the pattern of antecedents and consequences over many instances, gathered through ABC data, interviews or a functional analysis designed by the analyst. A behavior that follows demands and ends them points to escape; one that follows a drop in attention and brings attention points to attention. The supervisor confirms the hypothesis.' },
      { q: 'What is functional communication training?', a: 'A procedure that teaches a request producing the same reinforcer as the problem behavior: a break card instead of throwing materials, or a tap on the shoulder instead of yelling for attention. The request is reinforced every time at first, while the problem behavior no longer works. It is a form of differential reinforcement of alternative behavior.' },
      { q: 'Can a behavior have more than one function?', a: 'Yes. A learner may hit to escape tasks at the table and to get attention on the playground. Treatment then has to address each function in its context. This is one reason the supervisor gathers data across settings before writing a plan.' },
    ],
    body: (h) => `
<h2>The four functions of behavior with examples</h2>
${h.table(['Function', 'Antecedent', 'Consequence that maintains it'], [
  ['Attention', 'Adult busy, on the phone, with another child', 'Someone talks, scolds, comforts'],
  ['Escape', 'A demand, a hard task, a noisy room', 'The demand is removed or delayed'],
  ['Tangible', 'A preferred item is taken away or refused', 'The item is given back or given'],
  ['Automatic', 'Often any time, also when alone', 'The sensory result of the behavior itself'],
], 'Our examples for task D.1.', ['l', 'l', 'l'])}
<h2>Matching procedures to functions</h2>
<p>Antecedent strategies reduce the motivation: attention on a schedule for attention-maintained behavior, easier tasks and high-probability requests for escape. Differential reinforcement provides a better way to get the same thing. Extinction must withhold that same thing: for escape, the task stays; for attention, the attention stops. Getting the match wrong is the trap in many exam options, for example ignoring a behavior that is maintained by escape.</p>
<h2>What to expect when a plan starts</h2>
<p>When extinction begins, behavior often gets worse before it gets better: the extinction burst. Old behaviors may return if a new request stops working: resurgence. Technicians stay with the plan, record carefully and report. The full domain, with punishment and crisis procedures, is on the ${h.a('rbt-behavior-reduction', 'behavior reduction page')}; the assessment side is on the ${h.a('rbt-behavior-assessment', 'behavior assessment page')}.</p>`,
  },
});
