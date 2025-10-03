// netlify/functions/immigration-feed.js
import { parseStringPromise } from "xml2js";

// Official feeds
const FEEDS = [
  { url: "https://www.uscis.gov/news/rss", source: "USCIS" },
  { url: "https://www.dhs.gov/rss.xml", source: "DHS" },
  {
    url: "https://www.federalregister.gov/documents/search.rss?conditions%5Bterm%5D=immigration",
    source: "Federal Register"
  }
];

// Parse RSS/Atom to a simple list
async function parseFeed(xml, source) {
  const data = await parseStringPromise(xml, { explicitArray: false });
  const ch = data.rss?.channel || data.feed; // rss or atom

  if (data.rss && ch?.item) {
    const items = Array.isArray(ch.item) ? ch.item : [ch.item];
    return items.map(it => ({
      title: (it.title || "").trim(),
      url: (it.link || "").trim(),
      date: new Date(it.pubDate || it.date || it.updated || it.published || Date.now()),
      source
    }));
  }

  if (data.feed && ch?.entry) {
    const entries = Array.isArray(ch.entry) ? ch.entry : [ch.entry];
    return entries.map(e => ({
      title: (e.title?._ || e.title || "").toString().trim(),
      url: (typeof e.link === "string" ? e.link : (e.link?.href || e.link?.[0]?.href || "")).trim(),
      date: new Date(e.updated || e.published || Date.now()),
      source
    }));
  }

  return [];
}

export async function handler() {
  try {
    const all = [];
    for (const f of FEEDS) {
      const res = await fetch(f.url, { headers: { "User-Agent": "MaximaxSiteBot/1.0" } });
      const xml = await res.text();
      const items = await parseFeed(xml, f.source);
      all.push(...items);
    }

    // dedupe by URL/title, sort newest first, keep 20
    const seen = new Set();
    const merged = all
      .filter(it => {
        const key = (it.url || it.title).toLowerCase();
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => b.date - a.date)
      .slice(0, 20)
      .map(it => ({
        title: it.title,
        url: it.url,
        date: it.date.toISOString(),
        source: it.source
      }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=900", // 15 min
        "Access-Control-Allow-Origin": "*" // allow your site to fetch
      },
      body: JSON.stringify({ items: merged })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
}
