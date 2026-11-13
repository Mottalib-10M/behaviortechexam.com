import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-ethics', group: 'domains', order: 160,
  tool: { kind: 'quiz', props: { exam: 'rbt', mode: 'practice', domain: 'F', n: 10 } },
  related: ['rbt-documentation-reporting', 'rbt-supervision', 'rbt-renewal', 'rbt-practice-test'],
  sources: ['rbt_tco', 'rbt_handbook'],
  en: {
    slug: 'rbt-ethics', nav: 'F. Ethics', card: 'Competence, supervision, confidentiality, public statements, multiple relationships, gifts.',
    title: 'RBT Ethics Questions: Practice on the Code for Technicians',
    description: 'RBT ethics practice questions: competence, supervision, confidentiality, social media, multiple relationships, gifts and feedback, each answer explained.',
    h1: 'RBT ethics practice questions',
    intro: 'RBT ethics, domain F, is worth 11 scored questions on the exam; these practice items apply the code for technicians to situations you will meet at work.',
    resume: (h) => `Domain F has ${h.dom('rbt', 'F').tasks} tasks, the most of any domain, and ${h.dom('rbt', 'F').items} scored questions, ${h.pc(h.dom('rbt', 'F').share)} of the exam. It rests on the board's ethics code for technicians. The core principles are to benefit others, to treat people with compassion, dignity and respect, and to behave with integrity. From them follow concrete rules: provide services only after showing competence and only under ongoing supervision by a qualified supervisor; protect confidential information when it is collected, used, stored or shared; make honest public statements, on social media too, about yourself, the field and outcomes; avoid multiple relationships and manage those that cannot be avoided; follow the gift rules; accept feedback and work well with others; and practice cultural humility. Most questions describe an invitation, a request or a post and ask what the technician should do. The answer usually protects the client and involves the supervisor.`,
    faqs: (h) => [
      { q: 'Can an RBT accept gifts from a client’s family?', a: 'Only items of small monetary value, and only within the workplace’s policy, which may be stricter than the code. A child’s drawing or a card is usually fine. An expensive item is not, even at the end of services. Declining politely and telling the supervisor protects the relationship with the family.' },
      { q: 'What is a multiple relationship for an RBT?', a: 'Any second role with a client or a client’s family alongside the professional one: babysitting, friendship, business deals, social events at their home, or serving a friend’s child. Such roles can cloud judgment and harm the client. The code asks technicians to avoid them and to tell the supervisor when one arises.' },
      { q: 'Can an RBT post about clients on social media?', a: 'No identifying information, ever, without the consent and the workplace procedures that allow it, and in practice not at all from a personal account. Public statements must also be truthful: claiming a cure, overstating results or calling oneself a behavior analyst misrepresents the field and the credential.' },
      { q: 'Can an RBT work without a supervisor?', a: 'No. Technicians may provide services as RBTs only under ongoing supervision by a supervisor who meets the board’s requirements. If a supervisor leaves and no qualified replacement is in place, the technician stops practicing as an RBT until supervision is restored, and the employer arranges a new supervisor.' },
    ],
    body: (h) => `
<h2>RBT ethics tasks and what the exam checks</h2>
${h.table(['Task', 'Rule in our words', 'Typical trap'], [
  ['F.1', 'Benefit others; dignity and respect; integrity', 'Discussing a client in a waiting room'],
  ['F.2', 'Only after showing competence', 'Running an untrained procedure “to learn”'],
  ['F.3', 'Only under ongoing qualified supervision', 'Working on while the supervisor post is empty'],
  ['F.4', 'Supervision with training and observation', 'Arguing with feedback'],
  ['F.5', 'Confidentiality of client information', 'Photos for friends, records at home'],
  ['F.6', 'Honest public statements', 'Claiming a cure online'],
  ['F.7', 'Avoid and manage multiple relationships', 'Babysitting for a client’s family'],
  ['F.8', 'Gift rules', 'An expensive thank-you gift'],
  ['F.9', 'Interpersonal and professional skills', 'Changing data to end a dispute'],
  ['F.10', 'Cultural humility', 'Teaching a family to adopt your habits'],
], 'Paraphrase of domain F of the outline.', ['l', 'l', 'l'])}
<h2>A way to answer ethics questions</h2>
<p>Ask three questions in order. Does the option protect the client's welfare, dignity and privacy? Does it keep the technician inside the role, implementing and reporting rather than deciding? Does it bring in the supervisor when something is unusual? An option that passes all three is usually right. Options that sound friendly, such as attending a party to build rapport, often fail the first or second test.</p>
<h2>Confidentiality in daily work</h2>
<p>Records with client names stay in the place the workplace designates, not in a car or at home. Photos, videos and work samples are shared only as policy and law allow, usually with written consent. Conversations about clients happen in private, with people who need to know.</p>
<h2>Ethics beyond the exam</h2>
<p>The same rules apply after certification. Supervision continues every month, the ${h.a('rbt-renewal', 'renewal')} includes a new competency assessment, and a complaint about a violation can be filed with the board. The ${h.a('rbt-supervision', 'supervision page')} explains the monthly requirement that task F.3 refers to.</p>`,
  },
});
