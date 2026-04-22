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
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Plans
          </p>
          <h2 className="mt-2 text-3xl font-bold">Flexible Pricing</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-6 shadow-soft ${
                plan.popular ? "border-brand ring-2 ring-brand/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold text-brand">
                {annual ? plan.annualPrice : plan.price}
              </p>
              <p className="mt-3 text-sm text-gray-600">{plan.text}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-brand">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink as any}
                className={`mt-6 inline-block w-full rounded-full px-6 py-3 text-center font-semibold transition hover:opacity-90 ${
                  plan.popular
                    ? "bg-brand text-white"
                    : "border border-brand text-brand hover:bg-brand hover:text-white"
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
