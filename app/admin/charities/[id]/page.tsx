type CharityPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CharityPage({
  params
}: CharityPageProps) {
  const { id } = await params;
  return (
    <main className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        Charity Profile
      </p>

      <h1 className="text-4xl font-bold">
        Charity {id}
      </h1>

      <div className="rounded-3xl border bg-white p-6 shadow-soft">
        <p className="text-gray-600">
          View donation history, linked events, and verification status.
        </p>
      </div>
    </main>
  );
}
