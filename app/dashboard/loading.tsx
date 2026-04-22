export default function DashboardLoading() {
  return (
    <main className="space-y-4">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-32 animate-pulse rounded-3xl bg-gray-200" />
        <div className="h-32 animate-pulse rounded-3xl bg-gray-200" />
        <div className="h-32 animate-pulse rounded-3xl bg-gray-200" />
      </div>
    </main>
  );
}
