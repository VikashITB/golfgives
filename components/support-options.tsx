import Link from "next/link";

const options = [
  { label: "Sponsor an Event", href: "/events" },
  { label: "Register as Player", href: "/events" },
  { label: "Partner as Nonprofit", href: "/charities" }
];

interface SupportOptionsProps {
  onDonate: () => void;
}

export default function SupportOptions({ onDonate }: SupportOptionsProps) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-2xl p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="text-center space-y-4 mb-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
                Ways to Support
              </p>
              <div className="w-10 h-px bg-[#c9a84c]" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {options.map((item) => (
              <Link
                key={item.label}
                href={item.href as any}
                className="rounded-2xl border border-white/7 bg-surface px-5 py-4 font-medium transition-all hover:border-gold/30"
                style={{ color: '#f0ede6' }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={onDonate}
              className="rounded-2xl border border-gold/30 bg-surface px-5 py-4 font-medium transition-all hover:bg-gold/10"
              style={{ color: '#e8c97a' }}
            >
              Donate Directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
