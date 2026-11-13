import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-certification-cost', group: 'become', order: 315,
  tool: { kind: 'mini:cost', props: { st: 0, a: 1, tr: 0, bg: 0 } },
  mini: { kind: 'mini:reschedule', props: { d: 20 } },
  related: ['rbt-requirements-by-state', 'rbt-exam-retake', 'rbt-40-hour-training', 'rbt-renewal', 'bcba-exam'],
  sources: ['rbt_handbook', 'wa_wac_990', 'or_form', 'nv_board', 'la_rules', 'va_test_fees'],
  demarche: true,
  en: {
    slug: 'rbt-certification-cost', nav: 'RBT certification cost', card: 'Board fee, Pearson VUE per attempt, training, checks and the four state credentials, added up.',
    title: 'RBT Certification Cost 2026: Fees by Attempt and by State',
    description: 'RBT certification cost in 2026: $65 to the board, $45 per Pearson VUE appointment, plus training, checks and state fees in WA, OR, NV and LA, totaled.',
    h1: 'RBT certification cost: every fee, added up',
    intro: 'The RBT certification cost starts at $110 in board and test fees for one attempt; the calculator above adds retakes, training, checks and the fee of your state.',
    resume: (h) => `Two fees are fixed by the board's handbook: ${h.usd(h.X('rbt').feeApplication)} for the certification application, paid once in the board portal, and ${h.usd(h.X('rbt').feeExam)} for each exam appointment, collected by Pearson VUE when you book, with any local sales tax. A first-time pass therefore costs ${h.usd(h.floor)} in fees. A second attempt adds another ${h.usd(h.X('rbt').feeExam)}; the handbook says no fee is currently charged for the retake application itself. The 40-hour training, the background check and the abuse registry check have no set price: employers often pay them, and the calculator lets you enter your own figures. Four states add a credential: Washington charges ${h.usd(h.state('wa').techFee)} to apply as a certified behavior technician, Oregon ${h.usd(h.state('or').techFee)} for an interventionist registration, Nevada ${h.usd(h.state('nv').techFee)} for its registration plus a ${h.usd(h.state('nv').techBackgroundFee ?? 0)} fingerprint clearance, and Louisiana ${h.usd(h.state('la').techFee)} for a line technician. Renewal later costs ${h.usd(h.R.recertification.fee)} every ${h.R.recertification.cycleYears} years.`,
    faqs: (h) => [
      { q: 'How much is the RBT exam?', a: `${h.usd(h.X('rbt').feeExam)} per appointment, paid to Pearson VUE at booking, in addition to the ${h.usd(h.X('rbt').feeApplication)} application fee paid to the board. Every retake is a new appointment at the same price, and missing an appointment or arriving more than 30 minutes late forfeits the fee.` },
      { q: 'Do employers pay for RBT certification?', a: 'Many ABA providers pay for the 40-hour training and the checks of new hires, and some also cover the board and exam fees, often with a condition to stay for a period. Nothing in the board’s rules requires it, so ask before you accept an offer. The calculator separates the fees you pay yourself from those your employer covers.' },
      { q: 'Can the GI Bill pay for the RBT exam?', a: 'The Department of Veterans Affairs reimburses the fees of approved licensing and certification tests for eligible beneficiaries. Whether this exam is on its approved list, and for how much, is checked on the VA page and with the VA, not here. The reimbursement covers test fees, not the training.' },
      { q: 'Are RBT fees refundable?', a: 'No. The handbook says board fees are nonrefundable and nontransferable. Pearson VUE rescheduling and cancellation fees apply within 30 days of the appointment, and nothing can be changed within 48 hours of it. State fees, such as Oregon’s application fee, are also nonrefundable.' },
    ],
    body: (h) => `
<h2>RBT certification cost, fee by fee</h2>
${h.table(['Fee', 'Amount', 'Paid to', 'When'], [
  ['Certification application', h.usd(h.X('rbt').feeApplication), 'The board', 'Once, with the application'],
  ['Exam appointment', h.usd(h.X('rbt').feeExam), 'Pearson VUE', 'At each booking'],
  ['Reschedule 30 to 5 days before', h.usd(h.X('rbt').rescheduleFee5to30Days), 'Pearson VUE', 'If you move or cancel'],
  ['Reschedule 5 days to 48 hours before', h.usd(h.X('rbt').rescheduleFee48hTo5Days), 'Pearson VUE', 'If you move or cancel'],
  ['Renewal', h.usd(h.R.recertification.fee), 'The board', `Every ${h.R.recertification.cycleYears} years`],
  ['Late renewal', h.usd(h.R.recertification.lateFee), 'The board', `Within ${h.R.recertification.reinstatementDays} days after expiry`],
  ['Verification letter', h.usd(h.R.application.verificationLetterFee), 'The board', 'On request'],
], `RBT Handbook, read on ${h.read}.`, ['l', 'r', 'l', 'l'])}
<h2>State credentials on top</h2>
${h.table(['State', 'Credential', 'Fee', 'Renewal'], ['wa', 'or', 'nv', 'la'].map((id) => { const s = h.state(id); return [s.name, s.techCredential ?? '', h.usd(s.techFee), s.techRenewal ? h.usd(s.techRenewal) + (s.techRenewalYears === 1 ? ' a year' : ' per renewal') : 'not stated on the page read']; }), `State pages and rules read on ${h.read}.`, ['l', 'l', 'r', 'l'])}
<p>Each state credential has its own application and proofs; the ${h.a('rbt-requirements-by-state', 'state finder')} lists them with the authority that issues it.</p>
<h2>Where the money goes in practice</h2>
<p>For most candidates hired by a clinic, the out-of-pocket cost is the two board and exam fees, or nothing if the employer pays. Candidates who train on their own pay for the course and the checks too. The largest avoidable cost is a retake: every failed attempt adds ${h.usd(h.X('rbt').feeExam)} and at least ${h.X('rbt').retakeWaitDays} days. Moving an appointment late costs up to ${h.usd(h.X('rbt').rescheduleFee48hTo5Days)}; the second calculator shows the fee for a given number of days before. Veterans can look at the ${h.src('va_test_fees', 'VA reimbursement of test fees')}.</p>`,
  },
});
