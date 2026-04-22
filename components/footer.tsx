import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-brand">GolfGives</p>
          <p className="mt-3 text-sm text-gray-500">
            Charity golf events made simple for organizers, players, and donors.
          </p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <Link href="/events" className="hover:text-brand">Events</Link>
            <Link href="/charities" className="hover:text-brand">Causes</Link>
            <Link href="/about" className="hover:text-brand">About</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-gray-500">
            <p>hello@golfgives.com</p>
            <p>+1 (000) 000-0000</p>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t pt-6 text-sm text-gray-500">
        © 2026 GolfGives. All rights reserved.
      </div>
    </footer>
  );
}
