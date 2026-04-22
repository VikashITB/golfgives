"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="container flex min-h-screen items-center justify-center">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Something went wrong
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Unexpected Error
            </h1>

            <p className="mt-4 text-gray-600">
              {error.message ||
                "Please try again."}
            </p>

            <button
              onClick={reset}
              className="mt-8 rounded-full bg-brand px-6 py-3 font-semibold text-white"
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
