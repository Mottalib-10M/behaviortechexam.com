import { definePage } from '../../lib/guide-types';
export default definePage({
  id: 'rbt-exam-scheduling', group: 'become', order: 360,
  tool: { kind: 'mini:reschedule', props: { d: 6 } },
  related: ['rbt-exam', 'rbt-exam-retake', 'rbt-certification-cost', 'rbt-mock-exam'],
  sources: ['rbt_handbook', 'pearson_bacb'],
  demarche: true,
  en: {
    slug: 'rbt-exam-scheduling', nav: 'RBT exam scheduling', card: 'Booking with Pearson VUE, test sites, moving or cancelling, late arrival and missed appointments.',
    title: 'RBT Exam Scheduling with Pearson VUE: Book, Move, Cancel',
    description: 'RBT exam scheduling with Pearson VUE: booking after approval, $45 per appointment, the $27 and $32 reschedule fees, the 48-hour rule and what a no-show costs.',
    h1: 'RBT exam scheduling: book, move or cancel',
    intro: 'RBT exam scheduling happens with Pearson VUE, the testing company that runs the centers, once the board approves you; the calculator below shows the fee for moving the appointment on a given day.',
    resume: (h) => `After approval, the board emails instructions to schedule with Pearson VUE, which delivers the exam in person at authorized testing sites and some US military bases. The board itself cannot book, move or cancel an appointment for you. Each appointment costs ${h.usd(h.X('rbt').feeExam)}, paid at booking. Changes follow a calendar: free if you move or cancel 31 days or more before the appointment, ${h.usd(h.X('rbt').rescheduleFee5to30Days)} between 30 and 5 days before, ${h.usd(h.X('rbt').rescheduleFee48hTo5Days)} between 5 days and 48 hours before, and impossible within 48 hours, with no refund. Arriving more than 30 minutes late means you cannot test and lose the fee; missing the appointment also forfeits it, and you book and pay again in your Pearson VUE account. Check the confirmation email when you book: the name must match your board account and your identification.`,
    faqs: (h) => [
      { q: 'How soon can I schedule the RBT exam?', a: 'As soon as the board approves your application and you receive the scheduling instructions. Seats depend on the testing site, so look at several dates and nearby centers. You have twelve months from approval to pass, which leaves room for retakes if you book early.' },
      { q: 'Can I reschedule the RBT exam for free?', a: `Yes, if you do it 31 days or more before the appointment. Between 30 and 5 days before, it costs ${h.usd(h.X('rbt').rescheduleFee5to30Days)}; between 5 days and 48 hours, ${h.usd(h.X('rbt').rescheduleFee48hTo5Days)}. Within 48 hours you cannot change it at all. Changes are made in your Pearson VUE account or through its customer service.` },
      { q: 'What do I need to bring to the RBT exam?', a: 'The identification required in the handbook and your Pearson VUE confirmation, with the same name as in your board account. Read the confirmation email in full when you book, and contact Pearson VUE if it does not arrive. The handbook asks for one current, original, government-issued ID with your photo and signature; the only items allowed into the exam room are that ID and your locker key.' },
    ],
    body: (h) => `
<h2>RBT exam scheduling fee calendar</h2>
${h.table(['When you move or cancel', 'Fee'], [
  ['31 days or more before', 'No fee'],
  ['30 days to 5 days before', h.usd(h.X('rbt').rescheduleFee5to30Days)],
  ['5 days to 48 hours before', h.usd(h.X('rbt').rescheduleFee48hTo5Days)],
  ['Within 48 hours', 'No change possible, no refund'],
  ['Late by more than 30 minutes or absent', `Appointment fee of ${h.usd(h.X('rbt').feeExam)} lost`],
], `RBT Handbook, read on ${h.read}.`, ['l', 'r'])}
<h2>Booking well</h2>
<ul>
<li>Book a date that leaves time for one retake inside your authorization, in case it is needed.</li>
<li>Pick a time of day when you are usually alert; the exam lasts ${h.time('rbt')}.</li>
<li>Read the confirmation email in full: center address, time, name.</li>
<li>Keep the reschedule calendar in mind: decide on any change at least 31 days ahead to avoid a fee.</li>
</ul>
<h2>Testing locations</h2>
<p>The handbook lists Pearson VUE testing sites in the United States, Canada except Quebec and Ontario, and other countries, with Australia until January 1, 2027, plus certain US military bases. The vendor's ${h.src('pearson_bacb', 'board testing page')} has the center finder. Accommodations for a disability are requested from the board with its request form and documentation from a qualified professional, as the handbook describes. The ${h.a('rbt-exam', 'exam format page')} describes the test itself.</p>`,
  },
});
