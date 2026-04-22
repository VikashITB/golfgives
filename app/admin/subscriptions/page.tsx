import PageHeader from "@/components/page-header";

const plans = [
  {
    name: "Starter",
    users: 12,
    revenue: "$588"
  },
  {
    name: "Growth",
    users: 8,
    revenue: "$392"
  },
  {
    name: "Enterprise",
    users: 2,
    revenue: "$1,200"
  }
];

export default function AdminSubscriptionsPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Subscriptions"
        title="Plan Performance"
        text="Monitor active subscriptions and recurring revenue."
      />

      <div className="space-y-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-3xl border bg-white p-6 shadow-soft"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="font-semibold">
                {plan.name}
              </p>

              <div className="text-sm text-gray-500">
                {plan.users} users • {plan.revenue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
