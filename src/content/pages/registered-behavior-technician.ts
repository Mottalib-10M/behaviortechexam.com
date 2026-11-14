import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'registered-behavior-technician', group: 'become', order: 305,
  tool: { kind: 'mini:supervision', props: { h: 80 } },
  mini: { kind: 'mini:application', props: { m: 1, y: 2027 } },
  related: ['rbt-certification', 'how-to-become-an-rbt', 'behavior-technician', 'rbt-supervision', 'rbt-ethics'],
  sources: ['rbt_page', 'rbt_handbook', 'rbt_tco'],
  en: {
    slug: 'registered-behavior-technician', nav: 'Registered behavior technician', card: 'What an RBT does in a session, who supervises the work, what the title allows and what it does not.',
    title: 'Registered Behavior Technician: the Role, Day to Day',
    description: 'Registered behavior technician explained: what RBTs do in ABA sessions, who supervises the work, the limits of the role and the monthly supervision it needs.',
    h1: 'Registered behavior technician: what the job involves',
    intro: 'A registered behavior technician is a certified paraprofessional who carries out ABA treatment under close supervision; the calculator below shows the monthly supervision your service hours require.',
    resume: (h) => `Registered Behavior Technician, or RBT, is the entry-level credential of the Behavior Analyst Certification Board. The person who holds it works directly with learners, most often children with autism, in homes, clinics and schools, and carries out treatment plans written by a supervising analyst. The work is hands-on: running teaching trials, using prompts and reinforcement, following a behavior plan when problem behavior occurs, recording data during the session and writing a short objective note at the end. A technician does not design or change treatment, does not interpret assessments and does not supervise anyone. Every month the technician must be supervised for at least ${h.pc(h.R.supervision.share)} of the hours spent delivering services, with at least ${h.R.supervision.contactsPerMonth} contacts and ${h.R.supervision.observationsPerMonth} observation with a client. The title can only be used while the certification is active and a supervisor is on record. The calculator at the top turns your monthly service hours into the supervision minutes the board asks for.`,
    faqs: (h) => [
      { q: 'Is a registered behavior technician the same as a behavior analyst?', a: 'No. The analyst, usually a BCBA, assesses the learner, writes the treatment plan, trains the staff and makes the clinical decisions. The registered behavior technician carries out that plan in sessions and reports what happened. The two credentials have different requirements, exams and duties, and a technician may not present themselves as an analyst.' },
      { q: 'Where do registered behavior technicians work?', a: 'Mostly where ABA services are delivered: learners homes, outpatient clinics, schools and some community settings. Many positions are part time with sessions after school hours, since a large share of learners are school-age children. The setting does not change the rules: supervision, data collection and the ethics code apply everywhere.' },
      { q: 'How much supervision does a registered behavior technician need?', a: `At least ${h.pc(h.R.supervision.share)} of the hours you spend delivering behavior-analytic services each month, with ${h.R.supervision.contactsPerMonth} or more supervision contacts and at least ${h.R.supervision.observationsPerMonth} in which the supervisor observes you with a client. A technician working 80 hours in a month needs 4 hours of supervision. The calculator on this page does the arithmetic for any number of hours.` },
      { q: 'Can a registered behavior technician work without a supervisor?', a: 'No. Practicing without an active supervisor on record breaks the board requirements, and the certification shows as inactive until a supervisor or requirements coordinator adds you in the board portal. If your supervisor leaves, you stop delivering services as an RBT until a new one is assigned.' },
    ],
    body: (h) => `
<h2>What a registered behavior technician does in a session</h2>
<p>A typical session starts with a quick check of the plan and the materials, often a short preference check to find out what will work as a reward that day. Most of the time goes to teaching: discrete trials at a table, naturalistic teaching during play, chaining for daily routines such as handwashing, always with the prompts and reinforcement the plan sets. When problem behavior occurs, the technician follows the behavior plan rather than improvising. Data are recorded as the session runs, then entered and graphed, and the session ends with a note that describes what happened in observable terms.</p>
${h.table(['Part of the job', 'Exam domain it maps to', 'Scored questions'], [
  ['Recording and graphing data', 'A. Data collection and graphing', h.dom('rbt', 'A').items],
  ['Preference checks, ABC data', 'B. Behavior assessment', h.dom('rbt', 'B').items],
  ['Teaching new skills', 'C. Behavior acquisition', h.dom('rbt', 'C').items],
  ['Following the behavior plan', 'D. Behavior reduction', h.dom('rbt', 'D').items],
  ['Notes and reporting to the supervisor', 'E. Documentation and reporting', h.dom('rbt', 'E').items],
  ['Boundaries, confidentiality, competence', 'F. Ethics', h.dom('rbt', 'F').items],
], `${h.X('rbt').editionLabel}, read on ${h.read}.`, ['l', 'l', 'r'])}
<h2>Registered behavior technician and the other ABA roles</h2>
<p>Behavior-analytic services are delivered by a team. The board certifies three levels: the analyst (BCBA), who designs and oversees treatment; the assistant analyst (BCaBA), who can take on some of that work under an analyst; and the registered behavior technician, who implements. Supervision flows down the chain, and so does responsibility for clinical decisions. That is why many exam questions ask what the technician should do next, and the right answer is so often to follow the plan, record and tell the supervisor.</p>
<h2>What the title allows and what it does not</h2>
<ul>
<li>Allowed: implementing skill acquisition and behavior reduction plans, collecting data, assisting with assessments under direction, talking with caregivers about what happened in the session.</li>
<li>Not allowed: designing or changing programs, choosing procedures, interpreting data for clinical decisions, supervising other staff, practicing without an active supervisor.</li>
<li>Required: following the ethics code for technicians, keeping certification active and meeting the monthly supervision rule.</li>
</ul>
<p>The name RBT is a certification mark of the board, so only certified technicians may use it. Some states add their own credential on top, which the ${h.a('behavior-technician', 'behavior technician page')} compares.</p>
<h2>How to become a registered behavior technician</h2>
<p>The path has six steps: eligibility (age ${h.R.eligibility.minAge} and a ${h.R.eligibility.education}), the ${h.R.training.hours}-hour training, the initial competency assessment, background checks, the application and the ${h.X('rbt').items}-question exam. The ${h.a('how-to-become-an-rbt', 'step-by-step guide')} gives the deadlines, and the ${h.a('rbt-certification', 'certification page')} the full requirements. The second calculator on this page shows how early your checks and competency assessment can be done before you apply.</p>`,
  },
});
