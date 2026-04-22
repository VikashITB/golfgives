import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    annualPrice: "Free",
    text: "Perfect for local clubs running their first fundraiser.",
    features: [
      "1 active event",
      "Basic registration",
      "Donation tracking",
      "Email support",
      "GolfGives branding"
    ],
    cta: "Get Started Free",
    ctaLink: "/sign-up"
  },
  {
    name: "Growth",
    price: "$49/mo",
    annualPrice: "$39/mo",
    text: "Advanced registration, sponsors, and donation tracking.",
    features: [
      "Unlimited events",
      "Custom branding",
      "Sponsor management",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access",
      "Custom domains"
    ],
    cta: "Start Free Trial",
    ctaLink: "/sign-up?plan=growth",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    annualPrice: "Custom",
    text: "For national campaigns and multi-event organizations.",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "White-label solution",
      "SSO & advanced security",
      "Custom integrations",
      "SLA guarantee",
      "Training & onboarding"
    ],
    cta: "Contact Sales",
    ctaLink: "/contact"
  }
];

export default function PricingPlans({ annual = false }: { annual?: boolean }) {
  return (
    <section className="py-20">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
              Plans
            </p>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#f0ede6]">
            Flexible Pricing
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-gold/40 bg-gradient-to-b from-elevated to-surface"
                  : "border-white/7 hover:border-gold/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-xs font-mono font-semibold text-deep">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-display font-semibold text-[#f0ede6]">
                {plan.name}
              </h3>
              <p className={`mt-3 text-4xl font-display font-bold ${plan.popular ? 'text-[#e8c97a]' : 'text-[#f0ede6]'}`}>
                {annual ? plan.annualPrice : plan.price}
              </p>
              <p className="mt-3 text-sm" style={{ color: 'rgba(240,237,230,0.5)' }}>{plan.text}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-[#52b788]">✓</span>
                    <span style={{ color: 'rgba(240,237,230,0.7)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink as any}
                className={`mt-8 inline-block w-full rounded-full px-6 py-3 text-center text-sm font-sans font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-gold to-gold-dark text-deep hover:brightness-110 hover:shadow-glow"
                    : "border border-gold/30 text-gold hover:bg-gold/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
