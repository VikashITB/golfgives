import prisma from "@/lib/db";

type RecentDonationsProps = {
  userId: string;
};

export default async function RecentDonations({
  userId
}: RecentDonationsProps) {
  const donations = await prisma.donation.findMany({
    where: {
      event: {
        userId
      }
    },
    include: {
      event: true
    },
    orderBy: {
      createdAt: "desc"
    },
    take: 5
  });

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-soft">
      <p className="font-semibold">
        Recent Donations
      </p>

      <div className="mt-5 space-y-4">
        {donations.length === 0 && (
          <p className="text-sm text-gray-500">
            No donations yet.
          </p>
        )}

        {donations.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium">
                {item.event.title}
              </p>

              <p className="text-sm text-gray-500">
                Donation received
              </p>
            </div>

            <p className="font-semibold text-brand">
              ${item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
