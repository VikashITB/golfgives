import PageHeader from "@/components/page-header";

export default function AdminPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Admin"
        title="Platform Overview"
        text="Manage users, monitor activity, and review reports."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <p className="text-sm text-gray-500">Users</p>
          <p className="mt-2 text-3xl font-bold">128</p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <p className="text-sm text-gray-500">Events</p>
          <p className="mt-2 text-3xl font-bold">42</p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="mt-2 text-3xl font-bold">$8,240</p>
        </div>
      </div>
    </main>
  );
}
