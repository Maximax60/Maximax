export const metadata = { title: "MAXIMAX — Downloading Forms (Tax Services)" };
import Image from "next/image";

export const metadata = { title: "MAXIMAX — Dakò" };

export default function DakoPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-brand-orange">Dakò sou MAXIMAX</h1>
        <p className="mt-2 text-sm text-white/80">
          Nou la pou fè papye ou yo vin senp: Taks, Imigrasyon, Fòm ofisyèl, Tradiksyon, Résumé, elatriye.
        </p>

        {/* Foto + bio kout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-orange">
            <Image
              src="/images/owner.jpg"
              alt="MAXIMAX owner"
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-brand-orange">Misyon nou</h2>
            <p className="mt-2 leading-relaxed text-white/90">
              Sèvis klè, rapid, ak onèt. Nou gide ou etap pa etap, san kouri ni konfizyon.
              “MAXIMAX—Always Maximized.”
            </p>

            <h3 className="mt-6 font-semibold text-brand-orange">Sèvis kle</h3>
            <ul className="mt-2 list-disc list-inside text-white/90 space-y-1">
              <li>Tax Services (Personal & Business)</li>
              <li>Immigration Forms & Document Prep</li>
              <li>Translations & Résumé/Letters</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a href="/contact" className="rounded-xl bg-brand-orange text-black px-4 py-2 font-medium hover:opacity-90">
                Contact
              </a>
              <a href="/tax/forms" className="rounded-xl border border-brand-orange px-4 py-2 font-medium text-brand-orange hover:border-brand-orange/70">
                Downloading Forms
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
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
