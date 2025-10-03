"use client";
import { useEffect, useState } from "react";

export default function ImmigrationUpdates({ asModal = false }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/immigration-feed", { cache: "no-store" });
        const json = await res.json();
        setItems(json.items || []);
      } catch {}
    })();
  }, []);

  const list = (
    <ul className="space-y-2 list-disc list-inside text-sm text-white/90">
      {items.map((it, i) => (
        <li key={i}>
          <span className="text-brand-orange">
            {new Date(it.date).toLocaleDateString()}
          </span>{" "}
          — {it.title}
          {it.source ? <span className="text-white/60"> · {it.source}</span> : null}
          {it.url ? (
            <>
              {" "}—{" "}
              <a className="underline" href={it.url} target="_blank" rel="noopener noreferrer">
                Read
              </a>
            </>
          ) : null}
        </li>
      ))}
      {items.length === 0 && <li className="text-white/60">No updates yet.</li>}
    </ul>
  );

  if (!asModal) {
    return (
      <div className="rounded-2xl border border-white/10 p-5 bg-black/20">
        <h2 className="text-xl font-semibold text-brand-orange mb-3">Immigration Updates</h2>
        {list}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-brand-orange text-brand-orange px-5 py-3 font-medium hover:border-brand-orange/70"
      >
        View Immigration Updates
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-brand-black text-white rounded-2xl w-full max-w-lg mx-4 p-6 border border-brand-orange">
            <h2 className="text-xl font-semibold text-brand-orange mb-4">Immigration Updates</h2>
            {list}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-xl bg-brand-orange text-black py-2 font-medium hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
