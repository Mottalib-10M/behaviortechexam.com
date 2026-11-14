import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'behavior-technician', group: 'states', order: 405,
  tool: { kind: 'states', props: { state: 'Nevada' } },
  mini: { kind: 'mini:supervision', props: { h: 100 } },
  related: ['registered-behavior-technician', 'rbt-requirements-by-state', 'washington-certified-behavior-technician', 'louisiana-registered-line-technician', 'rbt-certification'],
  sources: ['bacb_regbrief', 'rbt_page', 'wa_wac_300', 'or_form', 'nv_board', 'la_rules'],
  en: {
    slug: 'behavior-technician', nav: 'Behavior technician credentials', card: 'The job title versus the credentials: national RBT, then the four states with their own rules.',
    title: 'Behavior Technician: Job Title, RBT and State Credentials',
    description: 'Behavior technician: how the job title differs from the RBT credential, which four states add their own credential, its fees and what employers can require.',
    h1: 'Behavior technician: the title and the credentials behind it',
    intro: 'Behavior technician is a job title used across ABA services; the finder below shows whether your state adds its own technician credential to the national one.',
    resume: (h) => `Behavior technician, sometimes behavior therapist or ABA therapist, is what employers call the staff member who delivers applied behavior analysis sessions one to one. The title on its own is not a credential. What turns it into one is either the national Registered Behavior Technician certification of the Behavior Analyst Certification Board or, in a few states, a state credential or registration. The board brief on licensure laws, version ${h.RB.version}, counts ${h.RB.statesLicensingAnalysts} states that license behavior analysts and only ${h.RB.statesRegulatingTechnicians} that regulate technicians. On the states' own pages, four of them, Washington, Oregon, Nevada and Louisiana, each have a technician credential or registration with its own form and fee. Elsewhere, employers and insurance funders set the bar, and most of them ask for RBT certification or for the training that leads to it within a set time after hiring. The finder at the top of this page shows the state rule and its source; the calculator below it adds up the cost.`,
    faqs: (h) => [
      { q: 'Is a behavior technician the same as an RBT?', a: 'Not always. Behavior technician is a job title, and an employer can hire someone under it before they are certified. RBT is the credential that the board issues after training, a competency assessment, checks and an exam. Many jobs are posted as behavior technician with RBT certification required within a few months of hiring.' },
      { q: 'Which states have their own behavior technician credential?', a: 'Washington has the certified behavior technician of its Department of Health, Oregon a registered behavior analysis interventionist, Nevada a state registration for RBTs and Louisiana a registered line technician. Each comes with its own application and fee, on top of or alongside the national certification. The finder on this page shows the details and sources.' },
      { q: 'Can I work as a behavior technician without certification?', a: `It depends on the state and the employer. In the four states with their own credential you must hold it to practice. Elsewhere the law is often silent, but many funders only pay for sessions delivered by certified technicians, so employers commonly require RBT status. The national route costs at least ${h.usd(h.floor)} in board and exam fees.` },
    ],
    body: (h) => `
<h2>Behavior technician credentials by state</h2>
${h.table(['State', 'Technician credential', 'State fee', 'Authority'], h.P.states.filter((s) => s.techRequired).map((s) => [s.name, s.techCredential ?? '', h.usd(s.techFee), s.techAuthority]), `State rules and fee schedules, read on ${h.read}. National RBT fees are extra.`, ['l', 'l', 'r', 'l'])}
<p>The fees above are what the state charges for the technician credential. They come on top of the board's ${h.usd(h.X('rbt').feeApplication)} application and ${h.usd(h.X('rbt').feeExam)} exam appointment when the national certification is also required. Each state page gives the proofs, the renewal and the source text: ${h.a('washington-certified-behavior-technician', 'Washington')}, ${h.a('oregon-behavior-analysis-interventionist', 'Oregon')}, ${h.a('nevada-rbt-registration', 'Nevada')} and ${h.a('louisiana-registered-line-technician', 'Louisiana')}.</p>
<h2>Behavior technician without a state credential</h2>
<p>In the other states, nothing in state law creates a technician credential. Some of them license analysts, and their rules may say who can work under an analyst's supervision; ${h.P.noLicensureStates.length} states, including California and Florida, had no licensure law for behavior analysts in the board's list. There, the national certification and the employer's policy are what count. The ${h.a('rbt-requirements-by-state', 'requirements by state page')} lists the licensing board of every state.</p>
<h2>From behavior technician to RBT</h2>
<p>Most new hires start with the ${h.R.training.hours}-hour training, often paid by the employer, then pass the competency assessment with a qualified assessor. After background checks and the application, the exam has ${h.X('rbt').items} questions in ${h.time('rbt')}. The ${h.a('registered-behavior-technician', 'registered behavior technician page')} explains what the role covers once certified, and the ${h.a('rbt-practice-test', 'practice test')} trains for the exam domain by domain.</p>
<h2>What to check in a behavior technician job offer</h2>
<ul>
<li>Whether the employer pays for the 40-hour training and the exam fees, and whether you must stay a set time in return.</li>
<li>Who will supervise you, and how the monthly supervision of ${h.pc(h.R.supervision.share)} of your service hours is scheduled.</li>
<li>Whether the state where you work requires its own credential, and who files and pays for it.</li>
<li>How many hours a week are guaranteed, since sessions cancelled by families often go unpaid.</li>
</ul>`,
  },
});
