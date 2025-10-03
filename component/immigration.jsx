"use client";
import { useEffect, useState } from "react";

const SHEET_CSV = "https://docs.google.com/spreadsheets/d/.../pub?output=csv"; // <-- your CSV link

export default function ImmigrationUpdates({ asModal=false }) {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const text = await res.text();
        const lines = text.trim().split("\n");
        const [header, ...data] = lines;
        const cols = header.split(",");
        const mapped = data.map(line => {
          const cells = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/); // csv-safe split
          const obj = {};
          cols.forEach((c, i) => obj[c.trim()] = (cells[i]||"").replace(/^"|"$/g,""));
          return obj;
        });
        // newest first by date
        mapped.sort((a,b)=> new Date(b.date) - new Date(a.date));
        setRows(mapped);
      } catch (e) { console.error(e); }
    })();
  }, []);

  const list = (
    <ul className="space-y-2 list-disc list-inside text-sm text-white/90">
      {rows.map((r, i) => (
        <li key={i}>
          <span className="text-brand-orange">{r.date}</span> — {r.title}
          {r.source ? <span className="text-white/60"> · {r.source}</span> : null}
          {r.url ? (
            <> — <a className="underline" href={r.url} target="_blank" rel="noopener noreferrer">Read</a></>
          ) : null}
          {r.note ? <div className="text-white/70 text-xs mt-1">{r.note}</div> : null}
        </li>
      ))}
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
        onClick={()=>setOpen(true)}
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
              onClick={()=>setOpen(false)}
              className="mt-6 w-full rounded-xl bg-brand-orange text-black py-2 font-medium hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}use client";
import { useEffect, useState } from "react";

const SHEET_CSV = "https://docs.google.com/spreadsheets/d/.../pub?output=csv"; // <-- your CSV link

export default function ImmigrationUpdates({ asModal=false }) {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const text = await res.text();
        const lines = text.trim().split("\n");
        const [header, ...data] = lines;
        const cols = header.split(",");
        const mapped = data.map(line => {
          const cells = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/); // csv-safe split
          const obj = {};
          cols.forEach((c, i) => obj[c.trim()] = (cells[i]||"").replace(/^"|"$/g,""));
          return obj;
        });
        // newest first by date
        mapped.sort((a,b)=> new Date(b.date) - new Date(a.date));
        setRows(mapped);
      } catch (e) { console.error(e); }
    })();
  }, []);

  const list = (
    <ul className="space-y-2 list-disc list-inside text-sm text-white/90">
      {rows.map((r, i) => (
        <li key={i}>
          <span className="text-brand-orange">{r.date}</span> — {r.title}
          {r.source ? <span className="text-white/60"> · {r.source}</span> : null}
          {r.url ? (
            <> — <a className="underline" href={r.url} target="_blank" rel="noopener noreferrer">Read</a></>
          ) : null}
          {r.note ? <div className="text-white/70 text-xs mt-1">{r.note}</div> : null}
        </li>
      ))}
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
        onClick={()=>setOpen(true)}
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
              onClick={()=>setOpen(false)}
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
