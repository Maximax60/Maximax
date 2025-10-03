"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/dako", label: "Dakò" },
  { href: "/tax", label: "Tax" },
  { href: "/immigration", label: "Immigration" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-brand-orange font-semibold tracking-wide">
          MAXIMAX MULTI SERVICES
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm ${
                  active ? "text-brand-orange" : "text-white/85 hover:text-brand-orange"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/forms"
            className="rounded-xl bg-brand-orange text-black px-3 py-2 text-sm font-medium hover:opacity-90"
          >
            Forms
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-orange border border-brand-orange/40 rounded-lg px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-brand-black">
          <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 ${
                    active ? "text-brand-orange" : "text-white/85 hover:text-brand-orange"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/forms"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-brand-orange text-black px-3 py-2 text-sm font-medium text-center"
            >
              Forms
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
