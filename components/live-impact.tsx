const updates = [
  { city: "Dallas", amount: "$4,200", cause: "Children's Care" },
  { city: "Miami", amount: "$2,950", cause: "Clean Water" },
  { city: "Seattle", amount: "$5,180", cause: "Youth Sports" }
];

export default function LiveImpact() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Live Impact
          </p>
          <h2 className="mt-2 text-3xl font-bold">Recent Contributions</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((item) => (
            <div
              key={item.city}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <p className="text-sm text-gray-500">{item.city}</p>
              <p className="mt-2 text-2xl font-bold text-brand">
                {item.amount}
              </p>
              <p className="mt-1 text-sm text-gray-600">{item.cause}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
