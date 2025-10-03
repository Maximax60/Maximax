export const metadata = { title: "MAXIMAX — Immigration Services" };

export default function ImmigrationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-orange to-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Immigration Services</h1>
        <p className="mt-2 text-white/85">
          Ranpli fòm, tradiksyon, ak preparasyon dokiman (USCIS). Nou rete sou pwosedi ofisyèl yo.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.uscis.gov/forms/all-forms"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brand-orange text-black px-5 py-3 font-medium hover:opacity-90 text-center"
          >
            Download USCIS Forms
          </a>
          <a href="/contact" className="rounded-xl border border-brand-orange text-brand-orange px-5 py-3 font-medium hover:border-brand-orange/70 text-center">
            Upload Required Docs
          </a>
        </div>

        <ul className="mt-10 list-disc list-inside text-white/85 space-y-1 text-sm">
          <li>Affidavit of Support, Adjustment of Status, Work Authorization, elatriye.</li>
          <li>N ap revize dosye w yo pou presizyon avan soumèt.</li>
        </ul>
      </section>
    </main>
  );
}
