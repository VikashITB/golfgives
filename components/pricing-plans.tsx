import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "Free",
    text: "Perfect for local clubs running their first fundraiser."
  },
  {
    name: "Growth",
    price: "$49/mo",
    text: "Advanced registration, sponsors, and donation tracking."
  },
  {
    name: "Enterprise",
    price: "Custom",
    text: "For national campaigns and multi-event organizations."
  }
];

export default function PricingPlans() {
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
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-3 text-3xl font-bold text-brand">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-gray-600">{plan.text}</p>
              <Link
                href="/dashboard/create-event"
                className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
