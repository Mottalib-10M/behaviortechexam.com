import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'louisiana-registered-line-technician', group: 'states', order: 450,
  tool: { kind: 'mini:cost', props: { st: 4, a: 1, locked: 'st' } },
  mini: { kind: 'states', props: { state: 'Louisiana' } },
  related: ['rbt-requirements-by-state', 'nevada-rbt-registration', 'rbt-supervision', 'rbt-certification-cost'],
  sources: ['la_rules', 'la_forms', 'rbt_handbook'],
  demarche: true,
  en: {
    slug: 'louisiana-registered-line-technician', nav: 'Louisiana: registered line technician', card: 'The RLT registered by your supervising analyst: $50, $50 a year, 10-day notice when supervision ends.',
    title: 'Louisiana Registered Line Technician (RLT): Rules and Fees',
    description: 'Louisiana registered line technician (RLT): filed by the supervising analyst, background check, $50 fee, $50 yearly renewal, and the 10-day notice rule.',
    h1: 'Louisiana registered line technician (RLT)',
    intro: 'A Louisiana registered line technician is registered with the state board by the licensed analyst who supervises them; the calculator below adds the fee to board costs.',
    resume: (h) => `Louisiana licenses behavior analysts through the Louisiana Behavior Analyst Board, under a law dating from ${h.state('la').analystLaw}. Chapter 3 of the board's rules adds a registry of line technicians, the people who implement behavior-analytic services under a licensed analyst. The registration is made by the Louisiana licensed behavior analyst who directs the technician's work, with a criminal background check approved by the board. The fee schedule sets ${h.usd(h.state('la').techFee)} for the registration and ${h.usd(h.state('la').techRenewal ?? 0)} for the annual renewal. When the supervisory relationship ends, both the analyst and the technician notify the board within 10 calendar days. The board's forms page has the registration and renewal forms. The board certification is a separate credential; many Louisiana employers ask for both. With the board fees, a first attempt costs ${h.usd(h.floor + h.state('la').techFee)} in fees.`,
    faqs: (h) => [
      { q: 'Who registers a line technician in Louisiana?', a: 'The Louisiana licensed behavior analyst who supervises the technician files the registration with the state board, with a board-approved criminal background check. The technician does not register alone. If the technician changes supervisor, the registration follows the new supervisory relationship. Ask your supervisor for a copy of the filing.' },
      { q: 'How much is the Louisiana RLT fee?', a: `${h.usd(h.state('la').techFee)} to register and ${h.usd(h.state('la').techRenewal ?? 0)} for each annual renewal, under the fee schedule in chapter 3 of the board’s rules. Board certification and exam fees are separate. Because the state renews every year and the board on its own calendar, a technician holding both pays the state renewal more often. The calculator above adds the state fee to the board costs for a first attempt.` },
      { q: 'What happens when supervision ends in Louisiana?', a: 'Both the supervising analyst and the line technician notify the state board within 10 calendar days that the supervisory relationship has ended. The technician then needs a new supervisor and registration to keep working as a registered line technician. Keep a record of the date the supervision ended.' },
    ],
    body: (h) => `
<h2>Louisiana registered line technician: the rules in short</h2>
${h.table(['Rule', 'Detail'], [
  ['Who files', 'The supervising Louisiana licensed behavior analyst'],
  ['Background check', 'Criminal background check approved by the board'],
  ['Registration fee', h.usd(h.state('la').techFee)],
  ['Renewal', `${h.usd(h.state('la').techRenewal ?? 0)} every year`],
  ['End of supervision', 'Both parties notify the board within 10 calendar days'],
], `Louisiana Behavior Analyst Board, Rules Chapter 3, read on ${h.read}.`, ['l', 'l'])}
<h2>Board certification alongside</h2>
<p>The board's ${h.R.supervision.share * 100}% monthly supervision rule still applies to certified technicians, with at least ${h.R.supervision.contactsPerMonth} contacts; the ${h.a('rbt-supervision', 'supervision calculator')} gives your minimum. Louisiana's registry and the board certification renew on different calendars: the state each year, the board every ${h.R.recertification.cycleYears} years under its 2026 rules.</p>
<h2>Compared with other states</h2>
<p>${h.a('nevada-rbt-registration', 'Nevada')} also registers technicians, with a state fingerprint clearance. Washington and Oregon issue their own credentials. Most states add nothing; see the ${h.a('rbt-requirements-by-state', 'state finder')}.</p>`,
  },
});
