const faqs = [
  {
    question: "How do donations work?",
    answer: "Funds are collected through registered event pages and tracked clearly."
  },
  {
    question: "Can small clubs host events?",
    answer: "Yes. GolfGives supports both local clubs and large tournaments."
  },
  {
    question: "Do sponsors get visibility?",
    answer: "Yes. Sponsors can be featured on event pages and campaigns."
  }
];

export default function Faq() {
  return (
    <section className="py-16">
      <div className="container space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <h3 className="font-semibold">{item.question}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
