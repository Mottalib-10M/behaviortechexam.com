import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'bcba-fieldwork-hours', group: 'bcba', order: 620,
  tool: { kind: 'mini:fieldwork', props: { s: 600, c: 0, m: 100 } },
  mini: { kind: 'mini:bcbacost', props: { a: 1 } },
  related: ['bcba-exam', 'bcba-practice-test', 'rbt-supervision', 'rbt-certification'],
  sources: ['bcba_handbook'],
  en: {
    slug: 'bcba-fieldwork-hours', nav: 'BCBA fieldwork hours', card: '2,000 supervised or 1,500 concentrated hours, 20 to 130 a month: months left for you.',
    title: 'BCBA Fieldwork Hours: 2,000 or 1,500, Months Left Calculator',
    description: 'BCBA fieldwork hours: 2,000 supervised or 1,500 concentrated, 20 to 130 hours a month, 60% unrestricted, 5% or 10% supervision, and the months you have left.',
    h1: 'BCBA fieldwork hours: how many months are left',
    intro: 'BCBA fieldwork hours add up slowly; enter the hours you have logged and the hours you can log each month above to see when you will finish.',
    resume: (h) => `Every route to the BCBA certification includes supervised fieldwork in applied behavior analysis. The BCBA Handbook offers two types: ${h.num(h.X('bcba').fieldworkSupervised)} hours of supervised fieldwork, or ${h.num(h.X('bcba').fieldworkConcentrated)} hours of concentrated supervised fieldwork, which carries more supervision. The supervisory period is one calendar month, and a month counts only if it has between ${h.X('bcba').monthMinHours} and ${h.X('bcba').monthMaxHours} fieldwork hours. Supervision covers 5% of the hours in the month for the standard type and 10% for the concentrated type, with 4 or 6 contacts and at least one observation with a client, and at least half of the supervision must be individual. At least ${h.pc(h.X('bcba').unrestrictedShare)} of all fieldwork hours must be unrestricted activities, such as designing programs, analyzing data and training staff or caregivers, rather than delivering existing programs. That rule matters for technicians: much of an RBT's daily work is restricted. At ${h.num(100)} hours a month, the standard total takes 20 months.`,
    faqs: (h) => [
      { q: 'How many fieldwork hours does a BCBA need?', a: `${h.num(h.X('bcba').fieldworkSupervised)} hours of supervised fieldwork, or ${h.num(h.X('bcba').fieldworkConcentrated)} hours of concentrated supervised fieldwork with more supervision. Pathway 4, for postdoctoral applicants, requires only 500 hours. Each month must include between ${h.X('bcba').monthMinHours} and ${h.X('bcba').monthMaxHours} hours to count. Under 20 hours, a month does not count at all; above 130, the extra hours are lost.` },
      { q: 'Do my RBT hours count toward BCBA fieldwork?', a: `Not automatically. Fieldwork needs a qualified BCBA supervisor and its own monthly supervision, and at least ${h.pc(h.X('bcba').unrestrictedShare)} must be unrestricted activities. The BCBA Handbook warns that many tasks done as an RBT, including RBT supervision itself, may not count. Hours begin only once fieldwork requirements are met.` },
      { q: 'What are unrestricted fieldwork activities?', a: 'Activities closer to what an analyst does: observing clients and analyzing the data, developing programs, training staff and caregivers, and meeting clients to discuss services. Restricted hours are spent delivering existing assessments and interventions. At least 60% of all fieldwork hours must be unrestricted.' },
    ],
    body: (h) => `
<h2>BCBA fieldwork hours: the two types</h2>
${h.table(['', 'Supervised fieldwork', 'Concentrated supervised fieldwork'], [
  ['Hours to qualify', h.num(h.X('bcba').fieldworkSupervised), h.num(h.X('bcba').fieldworkConcentrated)],
  ['Hours per monthly period', `${h.X('bcba').monthMinHours} to ${h.X('bcba').monthMaxHours}`, `${h.X('bcba').monthMinHours} to ${h.X('bcba').monthMaxHours}`],
  ['Supervision', '5% of hours', '10% of hours'],
  ['Contacts with the supervisor', '4', '6'],
  ['Observations with a client', '1', '1'],
  ['Unrestricted activities', `at least ${h.pc(h.X('bcba').unrestrictedShare)}`, `at least ${h.pc(h.X('bcba').unrestrictedShare)}`],
], `BCBA Handbook, Supervised Fieldwork Requirements, read on ${h.read}.`, ['l', 'r', 'r'])}
<h2>Months to finish at different paces</h2>
${h.table(['Hours logged a month', 'Months for 2,000 hours', 'Months for 1,500 concentrated'], [40, 80, 100, 130].map((m) => [m, Math.ceil(h.X('bcba').fieldworkSupervised / m), Math.ceil(h.X('bcba').fieldworkConcentrated / m)]), 'Our calculation from the handbook totals, starting from zero.', ['r', 'r', 'r'])}
<h2>Supervisor rules</h2>
<p>Fieldwork supervisors are active BCBAs without current disciplinary sanctions; those certified for less than a year receive monthly consultation from a qualified consulting supervisor. RBT supervision and BCBA fieldwork supervision are separate requirements; the ${h.a('rbt-supervision', 'RBT supervision page')} covers the first.</p>`,
  },
});
