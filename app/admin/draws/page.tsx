import PageHeader from "@/components/page-header";
import Link from "next/link";

const draws = [
  {
    id: "draw-1",
    title: "Weekend Giveaway",
    entries: 142
  },
  {
    id: "draw-2",
    title: "VIP Course Pass",
    entries: 89
  }
];

export default function AdminDrawsPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Draws"
        title="Raffles & Giveaways"
        text="Manage promotional draws for supporters."
      />

      <div className="flex justify-end">
        <Link
          href="/admin/draws/new"
          className="rounded-full bg-brand px-5 py-3 font-semibold text-white"
        >
          New Draw
        </Link>
      </div>

      <div className="space-y-4">
        {draws.map((draw) => (
          <Link
            key={draw.id}
            href={`/admin/draws/${draw.id}`}
            className="block rounded-3xl border bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">
                {draw.title}
              </p>

              <p className="text-sm text-gray-500">
                {draw.entries} entries
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
