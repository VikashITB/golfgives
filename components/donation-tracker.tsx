const goals = [
  { name: "Cancer Support Fund", raised: "$42,000", target: "$60,000" },
  { name: "Junior Golf Program", raised: "$18,500", target: "$25,000" },
  { name: "School Meals Drive", raised: "$31,200", target: "$40,000" }
];

export default function DonationTracker() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Fundraising Goals
          </p>
          <h2 className="mt-2 text-3xl font-bold">Track Active Campaigns</h2>
        </div>

        <div className="space-y-5">
          {goals.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.raised} raised of {item.target}
                  </p>
                </div>

                <button className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white">
                  Donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
