// pages/immigration.js
export default function ImmigrationUpdates() {
  const box = {
    maxWidth: 900, margin: "0 auto", padding: "24px",
    fontFamily: "Arial, sans-serif", lineHeight: 1.6
  };
  const btn = {
    display: "inline-block", padding: "10px 16px",
    border: "1px solid #FFA500", borderRadius: 8, textDecoration: "none",
    color: "#FFA500", marginRight: 12, marginTop: 12
  };
  const h = { marginTop: 28, marginBottom: 8 };

  return (
    <div style={box}>
      <h1 style={{marginTop:0}}>Immigration Updates / Mizajou Imigrasyon / Actualizaciones</h1>

      {/* Quick links (official sources) */}
      <h2 style={h}>Official Sources</h2>
      <p>These are the **only** sites we track for real, up-to-date policy:</p>
      <ul>
        <li><a href="https://www.uscis.gov/newsroom" target="_blank" rel="noreferrer">USCIS Newsroom</a></li>
        <li><a href="https://www.federalregister.gov/agencies/us-citizenship-and-immigration-services" target="_blank" rel="noreferrer">Federal Register (USCIS)</a></li>
        <li><a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html" target="_blank" rel="noreferrer">U.S. State Dept. Visa Bulletin</a></li>
        <li><a href="https://www.justice.gov/eoir/press-room" target="_blank" rel="noreferrer">EOIR Press Room (Immigration Courts)</a></li>
      </ul>

      {/* Quick shortcuts for the topics you care about */}
      <h2 style={h}>Quick Shortcuts</h2>
      <ul>
        <li><a href="https://www.uscis.gov/humanitarian/temporary-protected-status" target="_blank" rel="noreferrer">TPS (Temporary Protected Status)</a></li>
        <li><a href="https://www.uscis.gov/humanitarian/refugees-and-asylum" target="_blank" rel="noreferrer">Asylum</a></li>
        <li><a href="https://www.uscis.gov/green-card" target="_blank" rel="noreferrer">Green Card (Permanent Residence)</a></li>
        <li><a href="https://www.uscis.gov/citizenship" target="_blank" rel="noreferrer">Citizenship / Naturalization</a></li>
      </ul>

      {/* Three-language short briefs */}
      <h2 style={h}>Today’s Summary (Static)</h2>
      <details open>
        <summary><strong>Kreyòl</strong></summary>
        <p>
          Pou dènye mizajou ofisyèl yo (TPS, azil, kat vèt
