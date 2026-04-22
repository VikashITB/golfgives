import PageHeader from "@/components/page-header";

const charities = [
  "Children Health Foundation",
  "Community Relief Trust",
  "Youth Sports Access"
];

export default function AdminCharitiesPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Charities"
        title="Approved Causes"
        text="Manage verified charities available on the platform."
      />

      <div className="space-y-4">
        {charities.map((item) => (
          <div
            key={item}
            className="rounded-3xl border bg-white p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">
                {item}
              </p>

              <button className="rounded-full border px-4 py-2 text-sm font-medium">
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
