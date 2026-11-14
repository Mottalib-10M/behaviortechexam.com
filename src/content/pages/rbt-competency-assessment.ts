import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-competency-assessment', group: 'become', order: 340,
  tool: { kind: 'checklist' },
  mini: { kind: 'mini:application', props: { m: 3, y: 2027 } },
  related: ['rbt-40-hour-training', 'how-to-become-an-rbt', 'rbt-skill-acquisition', 'rbt-renewal'],
  sources: ['rbt_competency', 'rbt_handbook', 'rbt_renewal_competency'],
  demarche: true,
  en: {
    slug: 'rbt-competency-assessment', nav: 'RBT competency assessment', card: 'The 19 tasks of the 2026 packet, the types allowed for each, and the three-with-a-client rule.',
    title: 'RBT Competency Assessment 2026: 19 Tasks and a Tracker',
    description: 'RBT competency assessment under the 2026 packet: the 19 tasks, client, role-play or interview for each, who may assess you, and the 90-day window to apply.',
    h1: 'RBT competency assessment: the 19 tasks of 2026',
    intro: 'The RBT competency assessment has 19 tasks since January 2026; tick each one below as your assessor signs it off, and the tracker checks the client rule.',
    resume: (h) => `The initial competency assessment packet, effective January 1, 2026, is where you show an assessor that you can do what the training taught. It has ${h.R.competency.tasks} tasks in four sections: measurement (tasks 1 to 3), assessment (4 and 5), skill acquisition and behavior reduction (6 to 14), and professionalism and requirements (15 to 19). Each task lists the assessment types allowed: with a client, in role-play, or by interview. At least ${h.R.competency.withClientMin} of tasks 6 to 14 must be shown with a client receiving services. The assessment comes after the 40-hour training and must be completed no more than ${h.R.competency.withinDaysBeforeApplication} days before you submit your application, which is the deadline people miss most often. It may run over one or several sessions, in person, live over the internet, or through videos recorded for the purpose. A Responsible Assessor, a BCaBA or BCBA with the 8-hour supervision training, signs the form.`,
    faqs: (h) => [
      { q: 'Who can do my RBT competency assessment?', a: 'A Responsible Assessor who holds a BCaBA or BCBA certification and has completed the 8-hour supervision training. Assistant assessors with an active RBT certification or higher can do some or all of it. Assessors cannot be related to you, subordinate to you or employed by you, and all must work at or contract with the organization serving the client involved.' },
      { q: 'How many competency tasks must be done with a client?', a: `At least ${h.R.competency.withClientMin} of tasks 6 to 14, the skill acquisition and behavior reduction tasks. The other tasks of that section, and the measurement and assessment tasks, may be shown with a client or in role-play. Tasks 16 to 19 are done by interview only.` },
      { q: 'How long is the RBT competency assessment valid?', a: `It must be completed no more than ${h.R.competency.withinDaysBeforeApplication} days before you submit your certification application, and after the 40-hour training. If your application slips past that window, the assessment has to be done again. The calculator on this page gives the earliest date for your planned application month.` },
      { q: 'Is there a competency assessment for renewal too?', a: 'Only one last time for technicians whose renewal falls by December 31, 2026: they complete a recertification competency assessment no more than 45 days before their date. After that, the 2026 maintenance rules replace it with a two-year cycle and twelve hours of professional development. The renewal page works out which rule applies to your date.' },
    ],
    body: (h) => `
<h2>The RBT competency assessment by section</h2>
${h.table(['Task', 'Section', 'Allowed types'], h.R.competency.list.map((t) => [String(t.n) + '. ' + t.name, t.section, t.types.map((x) => ({ client: 'with a client', roleplay: 'role-play', interview: 'interview' } as Record<string, string>)[x]).join(', ')]), 'RBT Initial Competency Assessment Packet, effective January 1, 2026. Task names shortened by us.', ['l', 'l', 'l'])}
<h2>How the assessor scores you</h2>
<p>For each task, the assessor gives you a chance to perform it and judges whether you did so competently. With a client, the assessor watches you work with a person receiving services. In role-play, another person plays the client; this type is used when circumstances do not allow a client. In an interview, held live in person or online, you describe the concept and give examples and nonexamples, and questions can be tailored to your clients and workplace.</p>
<h2>Planning around the 90-day window</h2>
<p>Because the assessment expires ${h.R.competency.withinDaysBeforeApplication} days after completion for application purposes, schedule it once your background checks and the attestation are in sight. An attesting certificant confirms your age, education and background and abuse registry checks no more than ${h.R.eligibility.checksWithinDays} days before you submit, and signs the attestation form no more than ${h.R.eligibility.attestationWithinDays} days before you pay for the application. The calculator under the summary turns your application month into the earliest dates for each.</p>
<h2>Practicing the tasks</h2>
<p>Tasks 1 to 14 match the exam's measurement, assessment, skill acquisition and reduction tasks, so the ${h.a('rbt-skill-acquisition', 'skill acquisition')} and ${h.a('rbt-data-collection', 'data collection')} pages double as preparation. Tasks 15 to 19 match documentation and ethics. The tracker above is for your own planning; only the signed form counts.</p>`,
  },
});
