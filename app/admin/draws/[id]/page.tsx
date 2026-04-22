type DrawPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DrawPage({
  params
}: DrawPageProps) {
  const { id } = await params;
  return (
    <main className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        Draw Details
      </p>

      <h1 className="text-4xl font-bold">
        {id}
      </h1>

      <div className="rounded-3xl border bg-white p-6 shadow-soft">
        <p className="text-gray-600">
          View participants, status, and winner selection.
        </p>
      </div>
    </main>
  );
}
