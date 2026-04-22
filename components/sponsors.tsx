const sponsors = ["GreenCore", "Fairway Bank", "DrivePro", "Sunline Energy"];

export default function Sponsors() {
  return (
    <section className="py-16">
      <div className="container">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Trusted By Sponsors
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {sponsors.map((item) => (
            <div
              key={item}
              className="rounded-2xl border bg-white px-6 py-5 text-center font-semibold shadow-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
