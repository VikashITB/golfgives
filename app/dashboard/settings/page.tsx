import PageHeader from "@/components/page-header";

export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Account Preferences"
        text="Manage your profile and organizer settings."
      />

      <form className="max-w-2xl space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
        <input
          placeholder="Display name"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          placeholder="Email address"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          Save Changes
        </button>
      </form>
    </main>
  );
}
