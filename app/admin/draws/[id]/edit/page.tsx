type DrawEditProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DrawEditPage({
  params
}: DrawEditProps) {
  const { id } = await params;
  return (
    <main className="space-y-6">
      <h1 className="text-4xl font-bold">
        Edit Draw {id}
      </h1>

      <form className="max-w-2xl space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
        <input
          placeholder="Draw title"
          className="h-12 w-full rounded-2xl border px-4"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          Update Draw
        </button>
      </form>
    </main>
  );
}
