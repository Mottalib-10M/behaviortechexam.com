import { definePage } from '../../lib/guide-types';
// Campagne 2027 (2026-11-23): BACB 2027 BCBA Requirements (updated 02/2026) and the 2027 transition guidance
// (updated 01/2026). Every figure lives in params-2026.json (bcba2027); the 2022 column is the current handbook.
export default definePage({
  id: 'bcba-requirements-2027', group: 'bcba', order: 605,
  tool: { kind: 'mini:field27', props: { s: 600, c: 0, m: 150 } },
  related: ['bcba-fieldwork-hours', 'bcba-exam', 'rbt-renewal', 'bcba-practice-test'],
  sources: ['bcba_2027', 'bacb_changes', 'bcba_handbook'],
  en: {
    slug: 'bcba-requirements-2027', nav: 'BCBA requirements 2027', card: 'Two pathways instead of four from January 1, 2027, 160 fieldwork hours a month, new supervision and coursework rules: what changes.',
    title: 'BCBA Requirements 2027: Pathways, Fieldwork, Coursework',
    description: 'BCBA requirements 2027: two pathways from January 1, 2027, fieldwork at 20 to 160 hours a month, 7.5% concentrated supervision, 315 hours of coursework.',
    h1: 'BCBA requirements 2027: what changes on January 1, 2027',
    intro: 'BCBA requirements change on January 1, 2027. Enter the fieldwork hours you have and the hours you can log a month: the calculator gives the months left under the 2022 and the 2027 rules.',
    resume: (h) => {
      const Y = h.P.bcba2027, B = h.X('bcba');
      return `The Behavior Analyst Certification Board (BACB) announced the 2027 BCBA requirements over three newsletters, in March 2022, September 2023 and March 2025, and summarizes them in its 2027 BCBA Requirements document. From January 1, 2027, a candidate applies through one of two pathways only: a master's degree or higher from an accredited or recognized behavior analysis program, or a master's degree in any field plus ${h.num(Y.coursework)} hours of behavior-analytic coursework. Pathways 3 and 4 close: anyone using them must apply, and meet every requirement, before January 1, 2027. Fieldwork keeps its totals, ${h.num(Y.fieldworkSupervised)} supervised or ${h.num(Y.fieldworkConcentrated)} concentrated hours, but up to ${Y.monthMaxHours} hours can count in a month instead of ${B.monthMaxHours}, concentrated fieldwork needs ${h.pc(Y.supervisionShareConcentrated, 1)} supervision instead of 10%, and observations are counted in minutes. The rules that apply are those in force on the day you submit the application, not the day you logged the hours.`;
    },
    faqs: (h) => {
      const Y = h.P.bcba2027, B = h.X('bcba');
      return [
        { q: 'Do my fieldwork hours from before 2027 still count?', a: `Yes, if they meet the rules in force when you apply. Hours logged at ${B.monthMaxHours} a month or less fit both sets of rules, and concentrated hours supervised at 10% also meet the ${h.pc(Y.supervisionShareConcentrated, 1)} threshold of 2027. The board advises candidates unsure of their date to keep both monthly forms and track observation minutes as well as contacts.` },
        { q: 'Can I still apply for the BCBA through pathway 4 in 2027?', a: 'No. The board discontinues pathways 3 and 4 on January 1, 2027: an application under either must be submitted, with every requirement met, before that date. From 2027 only pathway 1, an accredited or recognized program, and pathway 2, a master\'s degree plus behavior-analytic coursework, remain, and the board plans to remove pathway 2 in 2032.' },
        { q: 'How many continuing education units does a BCBA need from 2027?', a: `${Y.ceus} continuing education units in each ${Y.cycleYears}-year recertification cycle, including ${Y.ceusEthics} in ethics and, for those who supervise, ${Y.ceusSupervision} in supervision. Since March 2025, ethics units may also cover cultural and contextual responsiveness, as long as most of the event is about it. Recertification is still applied for every two years.` },
      ];
    },
    body: (h) => {
      const Y = h.P.bcba2027, B = h.X('bcba');
      return `
<h2>BCBA requirements 2027: fieldwork, 2022 and 2027 rules</h2>
<p>The ${h.src('bcba_2027', '2027 BCBA Requirements')} keep the two kinds of fieldwork and their totals. The monthly ceiling, the supervision share of concentrated fieldwork and the way observations are counted change. The left column is the current ${h.src('bcba_handbook', 'BCBA Handbook')}, read on ${h.read}.</p>
${h.table(['', '2022 rules (apply by December 31, 2026)', '2027 rules (apply from January 1, 2027)'], [
  ['Hours to qualify', `${h.num(B.fieldworkSupervised)} supervised or ${h.num(B.fieldworkConcentrated)} concentrated`, `${h.num(Y.fieldworkSupervised)} supervised or ${h.num(Y.fieldworkConcentrated)} concentrated`],
  ['Hours per monthly period', `${B.monthMinHours} to ${B.monthMaxHours}`, `${Y.monthMinHours} to ${Y.monthMaxHours}`],
  ['Supervision, supervised fieldwork', '5% of hours', `${h.pc(Y.supervisionShare, 0)} of hours`],
  ['Supervision, concentrated fieldwork', '10% of hours', `${h.pc(Y.supervisionShareConcentrated, 1)} of hours`],
  ['Observations with a client', 'one a month', `${Y.observationMinutes} minutes a month (${Y.observationMinutesConcentrated} concentrated)`],
  ['Unrestricted activities', `at least ${h.pc(B.unrestrictedShare)}`, `at least ${h.pc(Y.unrestrictedShare)}`],
], 'BACB, BCBA Handbook and 2027 BCBA Requirements; the transition guidance compares both.', ['l', 'l', 'l'])}
<p>Concentrated hours supervised at ${h.pc(Y.supervisionShareConcentrated, 1)} under the 2027 rules do not count as concentrated under the 2022 rules, and a month above ${B.monthMaxHours} hours must be cut back to ${B.monthMaxHours} for a 2022 application. All qualifying hours must still fall within five years. The ${h.a('bcba-fieldwork-hours', 'fieldwork hours page')} plans the months at the current ceiling.</p>
<h2>The two pathways that remain</h2>
<p>Pathway 1 asks for a master's degree earned while the program was accredited by the Association of Professional Behavior Analysts (APBA), or a master's or doctoral degree earned in 2015 or later from a program accredited or recognized by the Association for Behavior Analysis International (ABAI). Pathway 2 asks for a master's degree or higher in any field, not earned in less than one calendar year, plus coursework from a program with a registered pathway 2 contact, completed within 10 years of the application.</p>
${h.table(['Coursework area, pathway 2', 'Hours from 2027'], [
  ['Basic Principles of Behavior', '45, one freestanding course'],
  ['Theory and Philosophy in Behavior Analysis', '45, one freestanding course'],
  ['Research Methods in Behavior Analysis', '45, one freestanding course'],
  ['Behavior Assessment and Intervention', '90, two freestanding courses'],
  ['Organizational Behavior Management', '45, one freestanding course'],
  ['Ethics in Behavior Analysis', '45, one freestanding course'],
  ['Total', h.num(Y.coursework)],
], 'BACB, 2027 BCBA Requirements. The total is unchanged; the split and the freestanding courses are new.', ['l', 'l'])}
<p>The total stays at ${h.num(Y.coursework)} hours, but supervision content becomes Organizational Behavior Management with 45 hours instead of 30, and ethics must be one freestanding course. A candidate with 2022 coursework who applies in 2027 checks each area with the program advisor.</p>
<h2>Exam and maintenance in 2027</h2>
<p>The exam does not change: ${B.items} questions on the ${B.editionLabel}, in force since January 1, 2025; the ${h.a('bcba-exam', 'BCBA exam page')} gives the format and fees. A BCBA recertifies every ${Y.cycleYears} years with ${Y.ceus} continuing education units. The ${h.src('bacb_changes', 'board\'s list of upcoming changes')} also announces the removal of pathway 2 in ${Y.pathway2RemovedIn}. For technicians, the RBT moves to a two-year cycle in 2027; the ${h.a('rbt-renewal', 'RBT renewal page')} gives the dates.</p>`;
    },
  },
});
