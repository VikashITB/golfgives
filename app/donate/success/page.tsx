import { redirect } from "next/navigation";

export default function DonateSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  if (!searchParams.session_id) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: '#0a0f0d' }}>
      <div className="max-w-md w-full text-center space-y-8">
        {/* Checkmark icon */}
        <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.2)', border: '2px solid #c9a84c' }}>
          <span className="text-5xl" style={{ color: '#e8c97a' }}>✓</span>
        </div>

        {/* Success message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-display font-bold text-[#f0ede6]">
            Thank You!
          </h1>
          <p className="text-lg" style={{ color: 'rgba(240,237,230,0.7)' }}>
            Your donation has been processed successfully.
          </p>
        </div>

        {/* Info cards */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/7 p-4" style={{ background: '#111a14' }}>
            <p className="text-sm" style={{ color: 'rgba(240,237,230,0.5)' }}>
              Donation ID
            </p>
            <p className="text-lg font-mono font-semibold text-[#e8c97a]">
              {searchParams.session_id.slice(0, 8)}...
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => window.location.href = "/"}
            className="w-full py-4 rounded-full font-semibold text-deep transition hover:brightness-110 hover:shadow-glow"
            style={{ background: 'linear-gradient(to right, #c9a84c, #b8923e)' }}
          >
            Return Home
          </button>
          <button
            onClick={() => window.location.href = "/events"}
            className="w-full py-4 rounded-full font-semibold border border-gold/30 text-gold transition hover:bg-gold/10"
          >
            View Other Campaigns
          </button>
        </div>
      </div>
    </main>
  );
}
