type UserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminUserPage({
  params
}: UserPageProps) {
  const { id } = await params;
  return (
    <main className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        User Profile
      </p>

      <h1 className="text-4xl font-bold">
        User {id}
      </h1>

      <div className="rounded-3xl border bg-white p-6 shadow-soft">
        <p className="text-sm text-gray-500">
          Detailed account management view.
        </p>
      </div>
    </main>
  );
}
