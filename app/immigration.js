"use client";
import { useState } from "react";

export default function ImmigrationPage() {
  const [open, setOpen] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-orange to-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Immigration Services</h1>
        <p className="mt-2 text-white/85">
          MAXIMAX Multi Services ede ou ak aplikasyon Family-Based Green Card ak Naturalization (N-400).
        </p>

        {/* Family-Based Green Card */}
        <div className="mt-8 border border-white/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === "i130" ? null : "i130")}
            className="w-full text-left px-5 py-3 bg-black/30 font-semibold text-brand-orange"
          >
            Family-Based Green Card (Form I-130)
          </button>
          {open === "i130" && (
            <div className="px-5 py-4 space-y-4 bg-black/20 text-sm">
              <div>
                <h3 className="font-bold text-white/90">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Petitioner dwe sitwayen ameriken oswa green card holder</li>
                  <li>Relasyon dwe reyèl, pa maryaj fo</li>
                  <li>US Citizen ka soumèt pou mari/madanm, pitit, paran, frè/sè</li>
                  <li>Green Card Holder ka soumèt pou mari/madanm, pitit selibatè</li>
                  <li>Pa gen entèdiksyon legal grav</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white/90">Documents Needed</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Form I-130</li>
                  <li>Prèv sitwayènte/residans (passport, naturalization certificate, green card)</li>
                  <li>Sètifika nesans/maryaj/divòs</li>
                  <li>Prèv relasyon (foto, kontra lwaye, kont bank)</li>
                  <li>Frè aplikasyon USCIS</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* N-400 Naturalization */}
        <div className="mt-6 border border-white/20 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === "n400" ? null : "n400")}
            className="w-full text-left px-5 py-3 bg-black/30 font-semibold text-brand-orange"
          >
            Naturalization (Form N-400)
          </button>
          {open === "n400" && (
            <div className="px-5 py-4 space-y-4 bg-black/20 text-sm">
              <div>
                <h3 className="font-bold text-white/90">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Green card depi 5 ane, oswa 3 ane si marye ak US citizen</li>
                  <li>Prezans fizik omwen mwatye nan tan sa a Ozetazini</li>
                  <li>Rezidans kontinyèl, pa twòp vwayaj deyò</li>
                  <li>Good moral character</li>
                  <li>Konnen li, ekri, pale anglè (dispans posib)</li>
                  <li>Pase egzamen civics</li>
                  <li>Fè sèman fidelite a US</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white/90">Documents Needed</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Form N-400</li>
                  <li>Green Card (kopi devan/dèyè)</li>
                  <li>State ID oswa Driver’s License</li>
                  <li>Tax returns (3 dènye ane)</li>
                  <li>2 foto paspò (si aplikab)</li>
                  <li>Dokiman maryaj/divòs</li>
                  <li>Dokiman militè (si genyen)</li>
                  <li>Frè aplikasyon USCIS</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
