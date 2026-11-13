import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-supervision', group: 'maintain', order: 510,
  tool: { kind: 'mini:supervision', props: { h: 100 } },
  mini: { kind: 'mini:recert', props: { m: 3, y: 2026 } },
  related: ['rbt-renewal', 'rbt-documentation-reporting', 'rbt-ethics', 'louisiana-registered-line-technician'],
  sources: ['rbt_handbook', 'rbt_tco'],
  en: {
    slug: 'rbt-supervision', nav: 'RBT supervision requirements', card: 'At least 5% of your service hours each month, two contacts, one with a client: your minimum.',
    title: 'RBT Supervision Requirements: 5% Monthly Hours Calculator',
    description: 'RBT supervision requirements: at least 5% of your service hours each month, two contacts, one observation with a client, and who may legally supervise you.',
    h1: 'RBT supervision requirements for each month',
    intro: 'RBT supervision requirements scale with your hours: enter the service hours of the month above to get the minimum time and contacts you need.',
    resume: (h) => `Supervision is a condition of keeping the certification, not just of getting it. Each calendar month in which you provide behavior technician services, you receive supervision for at least ${h.pc(h.R.supervision.share)} of the hours you spent providing those services. The supervision is spread over at least ${h.R.supervision.contactsPerMonth} separate contacts in the month, and in at least ${h.R.supervision.observationsPerMonth} of them the supervisor observes you working with a client, in person or live online. Contacts are face-to-face and in real time: phone calls and emails do not count. Supervisors hold a BCBA or BCaBA certification and have completed training based on the Supervisor Training Curriculum Outline; where there are several, a BCBA requirements coordinator makes sure the rules are met. At least one contact is individual; the other may be a small-group meeting of 2 to 10 technicians. Months with no services need no supervision. For a technician working ${h.num(120)} hours in a month, the minimum is 6 hours. The exam's ethics domain includes questions about supervision, so the rule also matters on test day.`,
    faqs: (h) => [
      { q: 'How many supervision hours does an RBT need?', a: `At least ${h.pc(h.R.supervision.share)} of the hours you provide behavior technician services in each calendar month. For 80 hours of services, that is 4 hours; for 160 hours, 8 hours. The calculator above rounds up to the next minute so you never fall short.` },
      { q: 'Does RBT supervision have to be in person?', a: `No. Supervision contacts may be in person or live over the internet. In at least ${h.R.supervision.observationsPerMonth} contact each month the supervisor observes you providing services to a client, which can also be done live by video conference, though on-site observation is preferred. Video monitoring without real-time interaction or feedback may not count, and phone calls or emails never do.` },
      { q: 'Who can supervise an RBT?', a: 'A BCBA or BCaBA who has completed training based on the Supervisor Training Curriculum Outline and is not related to you, your subordinate or your employee. A BCBA requirements coordinator may oversee several supervisors. Without a supervisor on record with the board, your certification shows as inactive and you may not practice.' },
    ],
    body: (h) => `
<h2>RBT supervision requirements by monthly hours</h2>
${h.table(['Service hours in the month', 'Minimum supervision', 'Contacts', 'With a client'], [40, 80, 120, 160].map((x) => [x, `${h.num(x * h.R.supervision.share, 0)} h`, `at least ${h.R.supervision.contactsPerMonth}`, `at least ${h.R.supervision.observationsPerMonth}`]), `RBT Handbook, ongoing supervision, read on ${h.read}.`, ['r', 'r', 'r', 'r'])}
<h2>Logging supervision</h2>
<p>Write down the date, length, format and who supervised you for each contact, and note which one included a client. Your organization usually keeps the official record, but a personal log helps when you change employers or supervisors. The ${h.a('rbt-documentation-reporting', 'documentation and reporting')} domain of the exam covers what you report to your supervisor and when.</p>
<h2>Supervision and the exam</h2>
<p>Questions on seeking clinical direction, reporting other variables and the limits of your role come from the ${h.a('rbt-ethics', 'ethics domain')}. Practice them before your appointment; they are often missed by candidates who already work in the field and rely on habits.</p>`,
  },
});
