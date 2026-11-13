import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'nevada-rbt-registration', group: 'states', order: 440,
  tool: { kind: 'mini:cost', props: { st: 3, a: 1, locked: 'st' } },
  mini: { kind: 'states', props: { state: 'Nevada' } },
  related: ['rbt-requirements-by-state', 'louisiana-registered-line-technician', 'rbt-certification-cost', 'rbt-renewal'],
  sources: ['nv_board', 'rbt_handbook', 'bacb_licensure'],
  demarche: true,
  en: {
    slug: 'nevada-rbt-registration', nav: 'Nevada: RBT registration', card: 'State registration with the Nevada ABA Board: $70 fee, LiveScan clearance, timing.',
    title: 'Nevada RBT Registration: State Fee, LiveScan and Timing',
    description: 'Nevada RBT registration with the state ABA board: the $70 fee, the $40 LiveScan clearance plus vendor fee, 10 to 14 days for results, and the full totals.',
    h1: 'Nevada RBT registration with the state board',
    intro: 'Nevada RBT registration is filed with the state’s Applied Behavior Analysis Board; the calculator above adds its fee and the LiveScan clearance to the board certification.',
    resume: (h) => `Nevada was among the first states to license behavior analysts, in ${h.state('nv').analystLaw}, and its Applied Behavior Analysis Board also registers technicians who hold the board certification. The board's licensing page describes an online initial application in two parts and a registration fee of ${h.usd(h.state('nv').techFee)}, due when you apply and not refundable. A state and federal background clearance is required: in Nevada it is requested through LiveScan, at a cost of ${h.usd(h.state('nv').techBackgroundFee ?? 0)} plus the fee of the fingerprint vendor, with results sent to the board in about 10 to 14 days. LiveScan is not available outside the state, so out-of-state applicants follow another process described in the application. The board warns that results received before an application is started are destroyed and must be requested again. With the board certification fees, a first attempt costs ${h.usd(h.floor + h.state('nv').techFee + (h.state('nv').techBackgroundFee ?? 0))} before the vendor's fingerprint fee.`,
    faqs: (h) => [
      { q: 'Do RBTs need a state registration in Nevada?', a: 'Yes: the Nevada Applied Behavior Analysis Board lists registered behavior technicians among the credentials it handles, with its own initial application, fee and background clearance. Technicians practice under the direction of a supervisor or requirements coordinator, as with the board certification. Check the board page for current forms.' },
      { q: 'How long does the Nevada LiveScan take?', a: 'The board page gives about 10 to 14 days for the results to reach the board. Start the application before you get fingerprinted: results that arrive before an application exists are destroyed, and a new report is needed. Call the fingerprint site ahead to confirm it submits prints electronically.' },
      { q: 'How much does Nevada RBT registration cost?', a: `${h.usd(h.state('nv').techFee)} for the registration and ${h.usd(h.state('nv').techBackgroundFee ?? 0)} for the LiveScan clearance, plus the fee of the fingerprint vendor. Board and Pearson VUE fees for the certification itself are separate. Fees paid to the Nevada board are not refundable, so make sure your application is complete before you pay. The calculator above adds every line for the number of attempts you plan.` },
    ],
    body: (h) => `
<h2>Nevada RBT registration in order</h2>
<ol>
<li>Hold or be completing the board certification, under a supervisor or requirements coordinator.</li>
<li>Start the online initial application with the Nevada board; it has two parts.</li>
<li>Request the background clearance through LiveScan in Nevada, or the out-of-state process if you live elsewhere.</li>
<li>Pay the ${h.usd(h.state('nv').techFee)} registration fee.</li>
<li>Wait for the clearance results, about 10 to 14 days.</li>
</ol>
<h2>Nevada costs with the board certification</h2>
${h.table(['Fee', 'Amount'], [['Nevada registration', h.usd(h.state('nv').techFee)], ['LiveScan clearance (plus vendor fee)', h.usd(h.state('nv').techBackgroundFee ?? 0)], ['Board certification application', h.usd(h.X('rbt').feeApplication)], ['Exam appointment (per attempt)', h.usd(h.X('rbt').feeExam)]], `Nevada board page and RBT Handbook, read on ${h.read}.`, ['l', 'r'])}
<h2>Renewal in Nevada</h2>
<p>The Nevada board runs its own renewals for registered technicians, announced to active registrants by email; its page in the sources has the current notices. Board certification renewal follows the board's own calendar, worked out on the ${h.a('rbt-renewal', 'renewal page')}. ${h.a('louisiana-registered-line-technician', 'Louisiana')} keeps a comparable registry, filed by the supervising analyst.</p>`,
  },
});
