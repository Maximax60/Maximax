"use client";
import { useState } from "react";
import { immigrationUpdates, immigrationNotes } from "@/data/immigration-content";

export const metadata = { title: "MAXIMAX — Immigration Services" };

export default function ImmigrationPage() {
  const [open, setOpen] = useState(false); // pou modal updates yo

  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-orange to-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Immigration Services</h1>
        <p className="mt-2 text-white/85">
          Ranpli fòm, tradiksyon, ak preparasyon dokiman. Nou mete w ajou ak dènye chanjman yo.
        </p>

        {/* Aksyon prensipal yo */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.uscis.gov/forms/all-forms"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brand-orange text-black px-5 py-3 font-medium hover:opacity-90"
          >
            Download USCIS Forms
          </a>
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl border border-brand-orange text-brand-orange px-5 py-3 font-medium hover:border-brand-orange/70"
          >
            View Immigration Updates
          </button>
        </div>

        {/* NOTES / TI NOT — Accordion */}
        <div className="mt-10 rounded-2xl border border-white/10 overflow-hidden">
          <details open className="group">
            <summary className="cursor-pointer select-none bg-black/40 px-5 py-3 text-brand-orange font-semibold">
              Notes / Ti Not
            </summary>
            <ul className="bg-black/20 px-5 py-4 space-y-2 list-disc list-inside text-white/90 text-sm">
              {immigrationNotes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </details>
        </div>

        {/* Popup modal pou Updates yo */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="bg-brand-black text-white rounded-2xl w-full max-w-lg mx-4 p-6 border border-brand-orange">
              <h2 className="text-xl font-semibold text-brand-orange mb-4">Immigration Updates</h2>
              <ul className="space-y-2 list-disc list-inside text-sm text-white/90">
                {immigrationUpdates.map((u, i) => <li key={i}>{u}</li>)}
              </ul>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full rounded-xl bg-brand-orange text-black py-2 font-medium hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
