import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'oregon-behavior-analysis-interventionist', group: 'states', order: 430,
  tool: { kind: 'mini:cost', props: { st: 2, a: 1, locked: 'st' } },
  mini: { kind: 'states', props: { state: 'Oregon', headline: 'fee' } },
  related: ['rbt-requirements-by-state', 'washington-certified-behavior-technician', 'rbt-certification-cost', 'how-to-become-an-rbt'],
  sources: ['or_form', 'or_hlo', 'rbt_handbook'],
  demarche: true,
  en: {
    slug: 'oregon-behavior-analysis-interventionist', nav: 'Oregon: behavior analysis interventionist', card: 'Registration with the Health Licensing Office: proofs, $75 plus $100, the total with board fees.',
    title: 'Oregon Behavior Analysis Interventionist: Registration, Fees',
    description: 'Oregon behavior analysis interventionist registration: the Health Licensing Office form, $75 application and $100 registration fees, and your full total cost.',
    h1: 'Oregon behavior analysis interventionist registration',
    intro: 'An Oregon behavior analysis interventionist registers with the Health Licensing Office; the calculator below adds the state fees to the board certification cost.',
    resume: (h) => `Oregon regulates behavior analysis through the Behavior Analysis Regulatory Board, part of the Health Licensing Office of the Oregon Health Authority, under a law dating from ${h.state('or').analystLaw}. Besides licensed analysts and assistants, it registers behavior analysis interventionists, the role that technicians fill. The registration application form, revised on November 1, 2025, asks for proof of being at least 18, proof of a high school diploma or equivalent or of a post-secondary degree, and two forms of government identification. It lists an application fee of ${h.usd(75)} and a registration fee of ${h.usd(100)}, ${h.usd(h.state('or').techFee)} in all, and states that the application fee is not refundable. The office's page sets out the other requirements, including how training and supervision are documented. With the board certification, the fees for a first attempt come to ${h.usd(h.floor + h.state('or').techFee)}; the calculator above adds retakes and your own training and check costs.`,
    faqs: (h) => [
      { q: 'Is RBT certification required in Oregon?', a: 'Oregon has its own registration for behavior analysis interventionists with the Health Licensing Office, separate from the board certification. Whether the board certification is one of the accepted ways to meet its training requirement is set out on the office’s page and form; read both before you apply, and ask your employer which route it uses.' },
      { q: 'How much does the Oregon interventionist registration cost?', a: `${h.usd(h.state('or').techFee)} on the form revised in November 2025: an application fee of ${h.usd(75)} and a registration fee of ${h.usd(100)}. The application fee is not refundable. Board and exam fees are separate if you also hold the board certification. The calculator above adds both to the board fees for the attempts you plan.` },
      { q: 'What documents does the Oregon form ask for?', a: 'Proof of being at least 18, proof of a high school diploma or equivalent or a post-secondary degree, and two forms of government identification, along with the application itself and the fees. The Health Licensing Office page lists the other requirements and the current version of the form.' },
    ],
    body: (h) => `
<h2>Oregon behavior analysis interventionist: steps</h2>
<ol>
<li>Read the requirements on the Health Licensing Office page for the Behavior Analysis Regulatory Board.</li>
<li>Download the current interventionist registration application.</li>
<li>Gather the proofs: age, education, two government IDs, and the items the office lists for training and supervision.</li>
<li>Pay the ${h.usd(75)} application fee and the ${h.usd(100)} registration fee.</li>
<li>Keep the registration current as the office requires.</li>
</ol>
<h2>Oregon fees and board fees together</h2>
${h.table(['Fee', 'Amount'], [['Oregon application fee', h.usd(75)], ['Oregon registration fee', h.usd(100)], ['Board certification application', h.usd(h.X('rbt').feeApplication)], ['Exam appointment (per attempt)', h.usd(h.X('rbt').feeExam)]], `Oregon form revised 11/01/2025 and RBT Handbook, read on ${h.read}.`, ['l', 'r'])}
<h2>Comparing with neighboring states</h2>
<p>${h.a('washington-certified-behavior-technician', 'Washington')} certifies behavior technicians through its Department of Health for ${h.usd(h.state('wa').techFee)}. California has no state credential, as the ${h.a('rbt-requirements-by-state', 'state finder')} shows. Nevada and Louisiana have their own registrations, each with a different authority and fee.</p>`,
  },
});
