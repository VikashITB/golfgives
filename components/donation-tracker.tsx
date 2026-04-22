const goals = [
  { name: "Cancer Support Fund", raised: "$42,000", target: "$60,000" },
  { name: "Junior Golf Program", raised: "$18,500", target: "$25,000" },
  { name: "School Meals Drive", raised: "$31,200", target: "$40,000" }
];

interface DonationTrackerProps {
  onDonate: (charity: string) => void;
}

export default function DonationTracker({ onDonate }: DonationTrackerProps) {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
              Fundraising Goals
            </p>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#f0ede6]">
            Track Active Campaigns
          </h2>
        </div>

        <div className="space-y-5">
          {goals.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/7 bg-surface p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-display font-semibold text-[#f0ede6]">{item.name}</p>
                  <p className="text-sm" style={{ color: 'rgba(240,237,230,0.65)' }}>
                    {item.raised} raised of {item.target}
                  </p>
                </div>

                <button 
                  onClick={() => onDonate(item.name)}
                  className="rounded-full px-5 py-2 text-sm font-semibold text-deep transition hover:brightness-110 hover:shadow-glow"
                  style={{ background: 'linear-gradient(to right, #c9a84c, #b8923e)' }}
                >
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
