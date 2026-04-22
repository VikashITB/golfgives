type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function DonateSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const params = await searchParams;

  return (
    <main className="container py-16 text-center">
      <h1 className="text-4xl font-bold">
        Donation Successful 🎉
      </h1>

      <p className="mt-4 text-gray-600">
        Thank you for supporting GolfGives.
      </p>

      {params.session_id && (
        <p className="mt-2 text-sm text-gray-500">
          Session ID: {params.session_id}
        </p>
      )}
    </main>
  );
}
