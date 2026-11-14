import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-requirements-by-state', group: 'states', order: 410,
  tool: { kind: 'states', props: { state: 'Texas' } },
  related: ['washington-certified-behavior-technician', 'oregon-behavior-analysis-interventionist', 'nevada-rbt-registration', 'louisiana-registered-line-technician', 'rbt-certification-cost'],
  sources: ['bacb_licensure', 'bacb_regbrief', 'wa_wac_300', 'or_hlo', 'nv_board', 'la_rules', 'tx_tdlr', 'ny_op'],
  demarche: true,
  en: {
    slug: 'rbt-requirements-by-state', nav: 'RBT requirements by state', card: 'Every state: analyst licensure, technician credential, state fee, from the board’s list and state pages.',
    title: 'RBT Requirements by State: Licensure, Fees, Credentials',
    description: 'RBT requirements by state: which states license behavior analysts, the four that add a technician credential or registration, their fees and where they apply.',
    h1: 'RBT requirements by state',
    intro: 'RBT requirements by state start from the same board certification; pick your state below to see whether it licenses analysts and adds its own technician credential.',
    resume: (h) => `The board's certification is the same everywhere in the United States, but behavior analysis is regulated state by state. The board's compiled list names ${h.P.licensureStates.length - 1} states and the District of Columbia with a behavior analyst licensure law, the oldest dating from ${Math.min(...h.P.licensureStates.map((l) => Number(l[1])))} and the most recent from ${Math.max(...h.P.licensureStates.map((l) => Number(l[1])))}. Its regulatory brief, version ${h.RB.version}, counts ${h.RB.statesLicensingAnalysts} states licensing analysts, ${h.RB.statesLicensingAssistants} licensing assistant analysts, ${h.RB.statesRegulatingTechnicians} regulating technicians and ${h.RB.statesWithTechnicianRegistry} keeping a technician registry. On the state pages we could read, four states add something for technicians: Washington's certified behavior technician, Oregon's registered interventionist, Nevada's state registration of technicians and Louisiana's registered line technician. Large states such as California, Florida, Texas and New York have no state technician credential: in California and Florida no analyst licensure law appears on the board's list, while Texas and New York license analysts and assistants but not technicians.`,
    faqs: (h) => [
      { q: 'Which states require a state license for RBTs?', a: 'On the pages we read, Washington, Oregon, Nevada and Louisiana add their own credential or registration for technicians on top of, or alongside, the board certification. Each has its own application, proofs and fee. The board’s brief describes three states that regulate technicians and two that keep a registry; definitions differ, so read the state board page before you start work.' },
      { q: 'Does Texas license RBTs?', a: 'No. The Texas Department of Licensing and Regulation runs a behavior analyst program for licensed behavior analysts and licensed assistant behavior analysts; its program page lists no technician license. Technicians in Texas work under the board certification and their employer’s and funders’ rules.' },
      { q: 'Does California require RBT certification?', a: 'California has no behavior analyst licensure law on the board’s list, so no state credential for technicians. Many employers and funders in the state still require the board certification or a comparable credential. Check the requirements of the program or insurer that pays for your services.' },
    ],
    body: (h) => `
<h2>RBT requirements by state: the four technician credentials</h2>
${h.table(['State', 'Credential', 'Issued by', 'Fee'], ['wa', 'or', 'nv', 'la'].map((id) => { const s = h.state(id); return [h.a(({ wa: 'washington-certified-behavior-technician', or: 'oregon-behavior-analysis-interventionist', nv: 'nevada-rbt-registration', la: 'louisiana-registered-line-technician' } as Record<string, string>)[id], s.name), s.techCredential ?? '', s.techAuthority, h.usd(s.techFee)]; }), `State laws, rules and board pages, read on ${h.read}.`, ['l', 'l', 'l', 'r'])}
<h2>States that license behavior analysts</h2>
<p>A licensure law for analysts does not by itself regulate technicians, but it often shapes who may supervise them. The table lists every state on the board's compiled list with the year of its law; the board notes the list is a summary, not a legal text.</p>
${h.table(['State', 'Year of the law', 'Licensing body'], h.P.licensureStates.map((l) => [String(l[0]), String(l[1]), String(l[2])]), `Board list of U.S. licensure of behavior analysts, read on ${h.read}.`, ['l', 'r', 'l'])}
<p>States not on the list: ${h.P.noLicensureStates.join(', ')}.</p>
<h2>How to check your own state</h2>
<p>Use the finder at the top of the page, then open the state board's page in the sources. Ask your employer which credential it files for you: in Louisiana, for example, the supervising licensed analyst registers each line technician. When the state requires its own background check, as Nevada does through LiveScan, plan for its delay. The ${h.a('rbt-certification-cost', 'cost calculator')} adds the state fee to the board's.</p>`,
  },
});
