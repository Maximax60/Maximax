// app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#FF9F43] mb-3">
            Immigration · Tax · Forms · Translation
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sèvis legal & dokiman pou kominote a,
            <span className="text-[#FF9F43]"> san tèt chaje.</span>
          </h1>
          <p className="text-sm text-neutral-300 mb-6">
            MAXIMAX Multi Services ede w ak papye imigrasyon, taks, benefis gouvènman,
            tradiksyon ofisyèl, ak ranpli fòm sou entènèt. Nou travay an{" "}
            <b>Kreyòl, English, Español</b>.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/immigration"
              className="px-4 py-2 rounded-full bg-[#FF9F43] text-black text-sm font-semibold hover:bg-[#ffb567]"
            >
              Randevou Immigration
            </a>
            <a
              href="/forms-upload"
              className="px-4 py-2 rounded-full border border-neutral-700 text-sm hover:border-[#FF9F43]"
            >
              Upload dokiman w
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-400">
            Nou disponib pou randevou an pèsòn oswa sou entènèt.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="border border-neutral-800 rounded-2xl p-4">
            <p className="text-xs text-[#FF9F43] font-semibold mb-1">
              Sèvis prensipal
            </p>
            <ul className="space-y-1 text-neutral-200">
              <li>• Fòm USCIS & konsiltasyon imigrasyon</li>
              <li>• Ranpli taks (individual & small business)</li>
              <li>• SNAP, Medicaid, SSI, Section 8 forms</li>
              <li>• Tradiksyon sètifika nesans, maryaj, divòs, elatriye</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="border border-neutral-800 rounded-2xl p-3">
              <p className="font-semibold text-neutral-100">AI Assistant</p>
              <p className="text-neutral-400 mt-1">
                Chat ak MAXIMAX pou ede w konprann ki fòm ou bezwen.
              </p>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-3">
              <p className="font-semibold text-neutral-100">Online Portal</p>
              <p className="text-neutral-400 mt-1">
                Kliyan ka kreye kont, upload papye, epi resevwa resi otomatik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
