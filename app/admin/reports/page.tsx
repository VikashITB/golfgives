import PageHeader from "@/components/page-header";

const reports = [
  "Monthly donations summary",
  "Top performing events",
  "New user registrations",
  "Organizer growth trends"
];

export default function AdminReportsPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Reports"
        title="Insights & Analytics"
        text="Track operational metrics and fundraising growth."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((item) => (
          <div
            key={item}
            className="rounded-3xl border bg-white p-6 shadow-soft"
          >
            <p className="font-semibold">{item}</p>
            <p className="mt-2 text-sm text-gray-500">
              Generated automatically from platform data.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
