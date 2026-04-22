import prisma from "@/lib/db";

type DashboardStatsProps = {
  userId: string;
};

export default async function DashboardStats({
  userId
}: DashboardStatsProps) {
  const totalEvents = await prisma.event.count({
    where: {
      userId
    }
  });

  const raised = await prisma.event.aggregate({
    _sum: {
      raised: true
    },
    where: {
      userId
    }
  });

  const donations = await prisma.donation.count({
    where: {
      event: {
        userId
      }
    }
  });

  const cards = [
    {
      label: "Your Events",
      value: totalEvents
    },
    {
      label: "Raised",
      value: `$${raised._sum.raised || 0}` 
    },
    {
      label: "Donations",
      value: donations
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-3xl border bg-white p-6 shadow-soft"
        >
          <p className="text-sm text-gray-500">
            {card.label}
          </p>

          <p className="mt-2 text-3xl font-bold">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}
