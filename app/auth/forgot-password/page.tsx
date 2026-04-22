import PageHeader from "@/components/page-header";

export default function ForgotPasswordPage() {
  return (
    <main className="container py-16">
      <div className="mx-auto max-w-xl space-y-6">
        <PageHeader
          eyebrow="Recovery"
          title="Forgot Password"
          text="Enter your email and we will send reset instructions."
        />

        <form className="space-y-4 rounded-3xl border bg-white p-6 shadow-soft">
          <input
            type="email"
            placeholder="Email address"
            className="h-12 w-full rounded-2xl border px-4 outline-none"
          />

          <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
            Send Reset Link
          </button>
        </form>
      </div>
    </main>
  );
}
