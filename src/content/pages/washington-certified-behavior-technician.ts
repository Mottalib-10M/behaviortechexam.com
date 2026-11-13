import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'washington-certified-behavior-technician', group: 'states', order: 420,
  tool: { kind: 'mini:cost', props: { st: 1, a: 1, locked: 'st' } },
  mini: { kind: 'states', props: { state: 'Washington' } },
  related: ['rbt-requirements-by-state', 'rbt-certification-cost', 'oregon-behavior-analysis-interventionist', 'rbt-supervision'],
  sources: ['wa_wac_300', 'wa_wac_990', 'wa_doh', 'rbt_handbook'],
  demarche: true,
  en: {
    slug: 'washington-certified-behavior-technician', nav: 'Washington: certified behavior technician', card: 'The CBT credential of the Department of Health: proofs, $95 fee, $150 renewal.',
    title: 'Washington Certified Behavior Technician (CBT): Rules, Fees',
    description: 'Washington certified behavior technician (CBT): proofs under WAC 246-805-300, the $95 fee and $150 renewal, the named clinical supervisor, and your total cost.',
    h1: 'Washington certified behavior technician (CBT)',
    intro: 'A Washington certified behavior technician holds a CBT credential from the Department of Health; the calculator above adds its fee to the board certification cost.',
    resume: (h) => `Washington licenses behavior analysts and assistant behavior analysts through its Department of Health, under a law dating from ${h.state('wa').analystLaw}, and certifies behavior technicians too. Under WAC 246-805-300, an applicant for an initial certified behavior technician credential sends the department the fee and application, proof of being at least 18, proof of a high school diploma or equivalent, and either a current behavior technician registration or certification from a professional credentialing entity, verified directly by that entity, or completion of a training program described in WAC 246-805-310. The application also names the clinical supervisor, as proof of ongoing supervision. WAC 246-805-990 sets the fees: ${h.usd(h.state('wa').techFee)} for the application and initial credential, ${h.usd(h.state('wa').techRenewal ?? 0)} for a renewal, and a ${h.usd(h.state('wa').techLateFee ?? 0)} late renewal penalty. With the board certification route, the first-year fees come to ${h.usd(h.floor + h.state('wa').techFee)}.`,
    faqs: (h) => [
      { q: 'Do I need RBT certification to be a CBT in Washington?', a: 'Not necessarily. WAC 246-805-300 accepts either a current registration or certification from a professional credentialing entity, which the board certification is, or the completion of a behavior technician training program meeting WAC 246-805-310. Many applicants use the board certification, sent directly by the board to the department.' },
      { q: 'How much does the Washington CBT cost?', a: `${h.usd(h.state('wa').techFee)} for the application and initial credential, then ${h.usd(h.state('wa').techRenewal ?? 0)} per renewal, under WAC 246-805-990. A late renewal adds a ${h.usd(h.state('wa').techLateFee ?? 0)} penalty. Board and exam fees come on top if you take the board certification route. A duplicate credential and a verification each have their own small fee in the same rule.` },
      { q: 'Who issues the CBT credential?', a: 'The Washington State Department of Health, which also licenses behavior analysts and assistant behavior analysts. Its applied behavior analysis page explains the online application. The rules themselves are in chapter 246-805 of the Washington Administrative Code. The department checks the proofs and the name of your clinical supervisor before it issues the credential.' },
    ],
    body: (h) => `
<h2>Washington certified behavior technician: what to send</h2>
<ol>
<li>The completed application and the fee.</li>
<li>Proof of age, at least 18.</li>
<li>Proof of a high school diploma or equivalent.</li>
<li>Either a current technician registration or certification verified directly by the credentialing entity, or completion of a training program under WAC 246-805-310, with instruction, experiential learning and an evaluation.</li>
<li>The name of the clinical supervisor.</li>
</ol>
<h2>Fees under WAC 246-805-990</h2>
${h.table(['Item', 'Fee'], [['Application and initial credential', h.usd(h.state('wa').techFee)], ['Renewal', h.usd(h.state('wa').techRenewal ?? 0)], ['Late renewal penalty', h.usd(h.state('wa').techLateFee ?? 0)], ['Duplicate credential', h.usd(h.state('wa').techDuplicateFee ?? 0)], ['Verification of credential', h.usd(h.state('wa').techVerificationFee ?? 0)]], `WAC 246-805-990, read on ${h.read}.`, ['l', 'r'])}
<h2>Working in Washington with the board certification</h2>
<p>The board's rules keep applying: ongoing supervision of at least ${h.pc(h.R.supervision.share)} of your service hours each month, the ethics code, renewal every ${h.R.recertification.cycleYears} years. The state credential is a second layer with its own renewal. The second tool on this page compares Washington with other states, and ${h.a('oregon-behavior-analysis-interventionist', 'Oregon')} has a comparable registration.</p>`,
  },
});
