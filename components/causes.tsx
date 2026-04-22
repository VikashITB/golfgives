const causes = [
  "Youth Education",
  "Medical Support",
  "Clean Water Access",
  "Community Sports"
];

export default function Causes() {
  return (
    <section id="causes" className="py-16">
      <div className="container">
        <div className="rounded-3xl bg-brand p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em]">
            Supported Causes
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Where Every Donation Goes
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {causes.map((cause) => (
              <div
                key={cause}
                className="rounded-2xl bg-white/10 px-5 py-4 font-medium"
              >
                {cause}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
