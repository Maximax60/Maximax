// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAXIMAX Multi Services",
  description: "Immigration, tax, and document services for the community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-neutral-800 bg-black/80 backdrop-blur z-20 sticky top-0">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
              <div className="flex items-center gap-2">
                {/* Placeholder logo circle */}
                <div className="w-9 h-9 rounded-full bg-[#FF9F43] flex items-center justify-center font-bold text-xs">
                  MAXI
                </div>
                <div className="leading-tight">
                  <p className="font-semibold tracking-wide">
                    MAXIMAX Multi Services
                  </p>
                  <p className="text-xs text-neutral-400 uppercase">
                    MAXIMAX ALWAY MAXIMIZED
                  </p>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-5 text-sm">
                <a href="/" className="hover:text-[#FF9F43]">Home</a>
                <a href="/immigration" className="hover:text-[#FF9F43]">Immigration</a>
                <a href="/tax" className="hover:text-[#FF9F43]">Tax</a>
                <a href="/forms-upload" className="hover:text-[#FF9F43]">Upload</a>
                <a href="/forms" className="hover:text-[#FF9F43]">US Forms</a>
                <a href="/alerte" className="hover:text-[#FF9F43]">ALERTE</a>
              </nav>

              {/* Lang switcher placeholder */}
              <div className="flex items-center gap-1 text-xs">
                <button className="px-2 py-1 rounded border border-neutral-700 hover:border-[#FF9F43]">
                  Kreyòl
                </button>
                <button className="px-2 py-1 rounded border border-neutral-700 hover:border-[#FF9F43]">
                  English
                </button>
                <button className="px-2 py-1 rounded border border-neutral-700 hover:border-[#FF9F43]">
                  Español
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-neutral-900 py-4 text-xs text-center text-neutral-500">
            © {new Date().getFullYear()} MAXIMAX Multi Services · MAXIMAX ALWAY MAXIMIZED
          </footer>
        </div>
      </body>
    </html>
  );
}
