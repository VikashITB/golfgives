export default function Loading() {
  return (
    <main className="container flex min-h-[60vh] items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-brand" />
        <p className="text-sm font-medium text-gray-500">
          Loading GolfGives...
        </p>
      </div>
    </main>
  );
}
