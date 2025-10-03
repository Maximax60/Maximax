export const metadata = { title: "MAXIMAX — Downloading Forms (Tax Services)" };

const forms = [
  { name: "W-2 — Wage and Tax Statement", url: "https://www.irs.gov/forms-pubs/about-form-w-2" },
  { name: "1099-MISC — Miscellaneous Income", url: "https://www.irs.gov/forms-pubs/about-form-1099-misc" },
  { name: "W-4 — Employee’s Withholding Certificate", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  { name: "Schedule C — Profit or Loss from Business", url: "https://www.irs.gov/forms-pubs/about-schedule-c-form-1040" },
  { name: "Form 8888 — Direct Deposit (Allocation of Refund)", url: "https://www.irs.gov/forms-pubs/about-form-8888" },
];

export default function TaxFormsPage() {
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
