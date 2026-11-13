import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-renewal', group: 'maintain', order: 500,
  tool: { kind: 'mini:recert', props: { m: 3, y: 2026 } },
  mini: { kind: 'mini:supervision', props: { h: 100 } },
  related: ['rbt-supervision', 'rbt-competency-assessment', 'rbt-certification-cost', 'nevada-rbt-registration'],
  sources: ['rbt_handbook', 'rbt_renewal_competency', 'rbt_page'],
  demarche: true,
  en: {
    slug: 'rbt-renewal', nav: 'RBT renewal', card: 'Old annual rules one last time in 2026, then a two-year cycle with 12 PDUs: your dates.',
    title: 'RBT Renewal 2026: Two-Year Cycle, PDUs, Fees and Dates',
    description: 'RBT renewal in 2026 and after: the last annual renewal with a competency assessment, then two-year cycles with 12 PDUs, the $50 fee and the late fees.',
    h1: 'RBT renewal: your next date under the 2026 rules',
    intro: 'RBT renewal changes in 2026: enter the month you were certified above to see your next date, the rules that apply to it and the fee.',
    resume: (h) => `The board changed how technicians keep their certification. Under the RBT Handbook revised in October 2026, technicians whose renewal date falls on or before December 31, 2026 renew one last time under the old annual rules: a renewal application, a Recertification Competency Assessment completed no more than ${h.R.recertification.competencyWithinDays} days before the date, and the fee. From then on, certification runs in ${h.R.recertification.cycleYears}-year cycles, and the competency assessment is replaced by ${h.R.recertification.pduHours} hours of professional development units, called PDUs, earned within each cycle: for a date of September 30, 2026, only units earned from October 1, 2026 to September 30, 2028 count toward the next renewal. The renewal application opens ${h.R.recertification.applicationWindowDays} days before the date. The fee is ${h.usd(h.R.recertification.fee)}; after the date, a ${h.usd(h.R.recertification.lateFee)} late fee applies during a ${h.R.recertification.reinstatementDays}-day reinstatement period, after which the certification expires and the full application, training and exam start over. Ongoing supervision of at least ${h.pc(h.R.supervision.share)} of service hours each month stays a condition throughout.`,
    faqs: (h) => [
      { q: 'How often do RBTs renew now?', a: `Every ${h.R.recertification.cycleYears} years under the 2026 maintenance requirements, with ${h.R.recertification.pduHours} hours of professional development per cycle. Technicians whose date falls by December 31, 2026 renew once more under the old annual rules with a competency assessment, then move to the two-year cycle.` },
      { q: 'What happens if I miss my RBT renewal date?', a: `You have a ${h.R.recertification.reinstatementDays}-day reinstatement period with a ${h.usd(h.R.recertification.lateFee)} late fee on top of the ${h.usd(h.R.recertification.fee)} renewal fee. You cannot practice as an RBT during that period. After it, the certification expires and you would apply again from the start, with training, competency assessment and exam.` },
      { q: 'What counts as an RBT professional development unit?', a: 'Three types: in-service training on behavior-analytic service delivery given by a BCaBA or BCBA at your organization, events from an Authorized Continuing Education provider, and behavior-analytic university courses passed with a C or better. Ongoing supervision, client-specific training and BCBA fieldwork do not count, and missed units cannot be made up after the date.' },
      { q: 'Can I put my RBT certification on hold?', a: `The handbook offers a voluntary inactive status for a fee of ${h.usd(h.R.recertification.voluntaryInactiveFee)}, for up to ${h.R.recertification.voluntaryInactiveMaxYears} years. You may not practice as an RBT while inactive, and the conditions for returning to active status are set out in the handbook. The fee is not refundable.` },
    ],
    body: (h) => `
<h2>RBT renewal: old and new rules side by side</h2>
${h.table(['', 'Renewal due by December 31, 2026', 'From the first two-year cycle'], [
  ['Cycle', '1 year', `${h.R.recertification.cycleYears} years`],
  ['Requirement', `Recertification Competency Assessment, within ${h.R.recertification.competencyWithinDays} days before the date`, `${h.R.recertification.pduHours} hours of PDUs in the cycle`],
  ['Supervision', `${h.pc(h.R.supervision.share)} of service hours a month`, `${h.pc(h.R.supervision.share)} of service hours a month`],
  ['Fee', h.usd(h.R.recertification.fee), h.usd(h.R.recertification.fee)],
], `RBT Handbook revised 10/2026, read on ${h.read}.`, ['l', 'l', 'l'])}
<h2>Fees around the renewal</h2>
${h.table(['Item', 'Amount'], [['Renewal', h.usd(h.R.recertification.fee)], ['Late fee during the reinstatement period', h.usd(h.R.recertification.lateFee)], ['Voluntary inactive status', h.usd(h.R.recertification.voluntaryInactiveFee)], ['Returned payment', h.usd(h.R.recertification.returnedCheckFee)]], 'RBT Handbook, fees section.', ['l', 'r'])}
<h2>State renewals are separate</h2>
<p>Washington, Louisiana and Nevada renew their own credentials on their own calendars; see the ${h.a('rbt-requirements-by-state', 'state finder')}. Keep both dates in one place, since a lapse in either can stop you working. The ${h.a('rbt-supervision', 'supervision calculator')} checks the monthly minimum that both systems rely on.</p>`,
  },
});
