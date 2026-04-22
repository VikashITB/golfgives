export default function Newsletter() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl bg-gray-900 px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Stay Updated
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Get New Events and Impact Stories
              </h2>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full px-5 text-gray-900 outline-none"
              />

              <button className="h-12 rounded-full bg-brand px-6 font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
