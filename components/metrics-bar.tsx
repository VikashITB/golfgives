export default function MetricsBar() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-soft sm:grid-cols-3">
          <div>
            <p className="text-2xl font-bold text-brand">98%</p>
            <p className="text-sm text-gray-500">Organizer Satisfaction</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-brand">$2.4M+</p>
            <p className="text-sm text-gray-500">Total Donations Processed</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-brand">150+</p>
            <p className="text-sm text-gray-500">Events Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
