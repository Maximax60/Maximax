import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-brand-black text-white min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <footer className="mt-16 border-t border-white/10 text-center text-white/60 py-6">
        © {new Date().getFullYear()} MAXIMAX MULTI SERVICES
      </footer>
    </div>
  );
}
