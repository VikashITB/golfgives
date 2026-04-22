const stats = [
  { label: "Charities Supported", value: "58+" },
  { label: "Golfers Joined", value: "12,000+" },
  { label: "Cities Reached", value: "26" },
  { label: "Volunteer Hours", value: "18,400" }
];

export default function ImpactStats() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <p className="text-3xl font-bold text-brand">{item.value}</p>
              <p className="mt-2 text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
