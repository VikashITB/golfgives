export default function NewCharityPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-4xl font-bold">Add Charity</h1>

      <form className="max-w-2xl space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
        <input
          placeholder="Charity name"
          className="h-12 w-full rounded-2xl border px-4"
        />

        <textarea
          placeholder="Description"
          className="min-h-[140px] w-full rounded-2xl border px-4 py-3"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          Save Charity
        </button>
      </form>
    </main>
  );
}
