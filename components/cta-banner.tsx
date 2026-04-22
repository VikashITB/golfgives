export default function CtaBanner() {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="rounded-3xl bg-brand px-6 py-10 text-white md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Ready to Host an Event?</h2>
              <p className="mt-2 text-white/80">
                Launch your next charity tournament with GolfGives.
              </p>
            </div>

            <button className="rounded-full bg-white px-6 py-3 font-semibold text-brand">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
