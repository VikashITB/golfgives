const posts = [
  "How to Run a Successful Charity Tournament",
  "5 Ways Sponsors Add More Impact",
  "Building Community Through Golf"
];

export default function BlogPreview() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Resources
          </p>
          <h2 className="mt-2 text-3xl font-bold">Latest Articles</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <div className="h-40 rounded-2xl bg-gray-200" />
              <h3 className="mt-5 font-semibold">{post}</h3>
              <p className="mt-2 text-sm text-brand hover:underline cursor-pointer">
                Read article
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
