export default function Tax() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-orange to-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Tax Services</h1>
        <p className="mt-2 text-white/85">Personal & Business tax prep san tèt chaje.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="/tax/forms" className="rounded-xl bg-brand-orange text-black px-5 py-3 font-medium hover:opacity-90 text-center">
            Download IRS Forms
          </a>
          <a href="/contact" className="rounded-xl border border-brand-orange text-brand-orange px-5 py-3 font-medium hover:border-brand-orange/70 text-center">
            Upload Your Documents
          </a>
        </div>

        <p className="mt-10 text-sm text-white/80">W-2, 1099, Schedule C, Form 8888, ID, prèv adrès, elatriye.</p>
      </section>
    </main>
  );
}const forms = [
  { name: "W-2 — Wage and Tax Statement", url: "https://www.irs.gov/forms-pubs/about-form-w-2" },
  { name: "1099-MISC — Miscellaneous Income", url: "https://www.irs.gov/forms-pubs/about-form-1099-misc" },
  { name: "W-4 — Employee’s Withholding Certificate", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  { name: "Schedule C — Profit or Loss from Business", url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040" },
  { name: "Form 8888 — Direct Deposit (Allocation of Refund)", url: "https://www.irs.gov/forms-pubs/about-form-8888" },
];

export default function TaxForms() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold">Downloading Forms — Tax Services</h1>
        <p className="mt-2 text-sm opacity-80">
          Telechaje fòm ofisyèl IRS yo. Chak “Download” mennen w dirèk sou paj IRS la pou dènye vèsyon an.
        </p>

        <ul className="mt-6 space-y-4">
          {forms.map((f) => (
            <li key={f.url} className="rounded-2xl border p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium">{f.name}</span>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border px-4 py-2 text-sm hover:shadow"
                  aria-label={`Download ${f.name} from IRS website`}
                >
                  Download (IRS)
                </a>
              </div>
              <p className="mt-2 text-xs opacity-70">
                IRS link:{" "}
                <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {f.url}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
