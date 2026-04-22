import PageHeader from "@/components/page-header";

export default function NewDrawPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="New Draw"
        title="Create Giveaway"
        text="Launch a new raffle campaign."
      />

      <form className="max-w-2xl space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
        <input
          placeholder="Draw title"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          type="date"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          Save Draw
        </button>
      </form>
    </main>
  );
}
