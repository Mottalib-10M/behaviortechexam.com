import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-task-list', group: 'become', order: 350,
  tool: { kind: 'mini:domains', props: { n: 40 } },
  related: ['rbt-exam-questions', 'rbt-practice-test', 'rbt-40-hour-training', 'rbt-exam'],
  sources: ['rbt_tco', 'rbt_training', 'bacb_ip'],
  en: {
    slug: 'rbt-task-list', nav: 'RBT task list (3rd ed.)', card: 'The 43 tasks of the third edition outline by domain, with practice for each.',
    title: 'RBT Task List 3rd Edition: 43 Tasks in Six Domains',
    description: 'RBT task list, third edition, used for the exam since 2026: the six domains, the tasks and scored questions in each, what changed, and practice by task.',
    h1: 'RBT task list, third edition: the exam blueprint',
    intro: 'The RBT task list, now called the test content outline (3rd ed.), sets 43 tasks in six domains; the calculator below splits any practice set by the outline weights.',
    resume: (h) => `The board's test content outline describes what entry-level behavior technicians must know, based on its most recent job task analysis. The third edition applies to exams taken from 2026 and lists ${h.X('rbt').tasks} tasks: ${h.dom('rbt', 'A').tasks} in data collection and graphing, ${h.dom('rbt', 'B').tasks} in behavior assessment, ${h.dom('rbt', 'C').tasks} in behavior acquisition, ${h.dom('rbt', 'D').tasks} in behavior reduction, ${h.dom('rbt', 'E').tasks} in documentation and reporting, and ${h.dom('rbt', 'F').tasks} in ethics. It also fixes the number of scored questions per domain, from ${h.dom('rbt', 'B').items} for assessment to ${h.dom('rbt', 'C').items} for behavior acquisition, ${h.X('rbt').scored} in all, plus ${h.X('rbt').unscored} unscored pilot questions. The outline is the board's document and its wording is protected; this page gives the structure and our short descriptions, and links to the official PDF. Every practice question on the site carries the code of the task it trains, so you can work task by task.`,
    faqs: (h) => [
      { q: 'What changed in the RBT task list 3rd edition?', a: 'The third edition replaced the second for exams taken from 2026. It lists 43 tasks in six domains, with tasks that reach beyond running procedures: identifying trends in graphed data, describing the risks of unreliable data and poor procedural fidelity, and practicing cultural humility. Study from material built for the 2026 outline and curriculum rather than older guides.' },
      { q: 'Is the RBT task list the same as the 40-hour training curriculum?', a: 'They overlap but are different documents. The curriculum sets what the training must cover and for how many hours; the outline sets what the exam tests. The curriculum marks which of its contents are also in the outline. A few curriculum items, such as preparing for service delivery or next steps in certification, are not exam tasks.' },
      { q: 'Can I print the RBT task list?', a: 'The board publishes the outline as a free PDF on its site, linked in the sources of this page. Its wording is copyrighted, so this site does not reproduce it; the domain tables here use our own short descriptions. Printing the official PDF for your own study is the simplest way to keep it beside you while you practice.' },
    ],
    body: (h) => `
<h2>The RBT task list by domain</h2>
${h.table(['Domain', 'Tasks', 'Scored questions', 'Practice page'], h.P.exams.rbt.domains.map((d) => [d.code + '. ' + d.name, d.tasks ?? 0, d.items, h.a(({ A: 'rbt-data-collection', B: 'rbt-behavior-assessment', C: 'rbt-skill-acquisition', D: 'rbt-behavior-reduction', E: 'rbt-documentation-reporting', F: 'rbt-ethics' } as Record<string, string>)[d.code], 'Practice ' + d.code)]), `${h.X('rbt').editionLabel}, read on ${h.read}.`, ['l', 'r', 'r', 'l'])}
<h2>Questions per task</h2>
<p>The outline gives questions per domain, not per task. A domain with many tasks and few questions, such as ethics with ${h.dom('rbt', 'F').tasks} tasks for ${h.dom('rbt', 'F').items} questions, can only test some tasks on any one form. A domain with few tasks and many questions, such as behavior assessment, tests each task several times. That is a reason to cover every task rather than guess which will appear.</p>
<h2>Using the codes</h2>
<p>Each practice question on this site names its task, from A.1 to F.10. When you miss one, note the code. After a few sets, the codes you miss most are your study list. The ${h.a('rbt-exam-questions', 'question list')} shows a whole domain at once with the codes, and the calculator above tells you how many questions of each domain to put in a set of any size, for example for a class quiz.</p>
<h2>Where the tasks come from</h2>
<p>The outline states that it reflects the knowledge, skills and abilities found important for entry-level technicians by the board's most recent job task analysis, presented in its December 2023 newsletter. The ${h.a('rbt-40-hour-training', '40-hour training')} was rewritten for 2026 to match, and its curriculum marks each item that is also tested.</p>`,
  },
});
