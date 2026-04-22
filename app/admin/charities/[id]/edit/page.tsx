type CharityEditProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CharityEditPage({
  params
}: CharityEditProps) {
  const { id } = await params;
  return (
    <main className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        Edit Charity
      </p>

      <h1 className="text-4xl font-bold">
        Charity {id}
      </h1>

      <form className="max-w-2xl space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
        <input
          placeholder="Charity name"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <textarea
          placeholder="Description"
          className="min-h-[140px] w-full rounded-2xl border px-4 py-3 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          Update Charity
        </button>
      </form>
    </main>
  );
}
