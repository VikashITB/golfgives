import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import PageHeader from "@/components/page-header";
import { formatCurrency, formatDate } from "@/lib/format";
import EmptyState from "@/components/empty-state";

export const dynamic = 'force-dynamic';

export default async function DashboardDonationsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in" as any);
  }

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
    }
  });

  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Donations"
        title="Incoming Support"
        text="Track donations received across all your events."
      />

      {donations.length === 0 ? (
        <EmptyState
          title="No donations yet"
          text="When supporters contribute, they will appear here."
        />
      ) : (
        <div className="space-y-4">
          {donations.map((item: any) => (
            <div
              key={item.id}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">
                    {item.event.title}
                  </p>

                  <p className="text-sm text-gray-500">
                    {formatDate(item.createdAt)}
                  </p>
                </div>

                <p className="text-lg font-bold text-brand">
                  {formatCurrency(item.amount)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
