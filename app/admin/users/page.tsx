import PageHeader from "@/components/page-header";

const users = [
  {
    name: "Ryan Cole",
    email: "ryan@golfgives.com",
    role: "Organizer"
  },
  {
    name: "Sarah Miles",
    email: "sarah@golfgives.com",
    role: "Donor"
  },
  {
    name: "Admin Team",
    email: "admin@golfgives.com",
    role: "Admin"
  }
];

export default function AdminUsersPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Users"
        title="Platform Users"
        text="Monitor organizers, donors, and administrators."
      />

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.email}
            className="rounded-3xl border bg-white p-6 shadow-soft"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

              <p className="text-sm font-medium text-brand">
                {user.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
