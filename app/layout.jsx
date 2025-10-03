import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = { title: "MAXIMAX", description: "MAXIMAX Multi Services" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-white">
        <NavBar />
        {children}
        <footer className="mt-16 border-t border-white/10 text-center text-white/60 py-6">
          © {new Date().getFullYear()} MAXIMAX MULTI SERVICES
        </footer>
      </body>
    </html>
  );
}
