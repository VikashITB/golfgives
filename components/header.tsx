import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import AuthButtons from "@/components/auth-buttons";

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Causes", href: "#causes" },
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "/dashboard" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href={"/" as any} className="text-xl font-bold text-brand">
          GolfGives
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href as any}
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <AuthButtons />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
