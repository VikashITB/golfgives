import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          404 Error
        </p>

        <h1 className="mt-3 text-4xl font-bold">Page Not Found</h1>

        <p className="mt-4 text-gray-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 font-semibold text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
