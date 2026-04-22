import PageHeader from "@/components/page-header";

const payouts = [
  { name: "Spring Charity Classic", amount: "$1,200" },
  { name: "Hope Invitational", amount: "$850" }
];

export default function WinningsPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Winnings"
        title="Prize History"
        text="View tournament winnings and payouts."
      />

      <div className="space-y-4">
        {payouts.map((item) => (
          <div
            key={item.name}
            className="rounded-3xl border bg-white p-6 shadow-soft flex justify-between"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="font-bold text-brand">{item.amount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
