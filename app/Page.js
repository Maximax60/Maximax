export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom, #000000, #ff8c2a)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#fff",
      }}
    >
      {/* Lang buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          padding: "8px 24px",
          borderRadius: "999px",
          backgroundColor: "#000",
          boxShadow: "0 0 25px rgba(255, 140, 42, 0.7)",
          marginBottom: "24px",
          marginTop: "16px",
        }}
      >
        <button style={langButton(false)}>English</button>
        <button style={langButton(true)}>Kreyòl</button>
        <button style={langButton(false)}>Español</button>
      </div>

      {/* Hero section with hoodie */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          backgroundColor: "#000",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 0 40px rgba(0,0,0,0.8)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Text + description */}
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "800",
                margin: 0,
                color: "#ffae42",
              }}
            >
              MAXIMAX FM
            </h1>
            <p
              style={{
                marginTop: "8px",
                marginBottom: "4px",
                fontWeight: "600",
                color: "#ffffff",
              }}
            >
              MAXIMAX ALWAYS MAXIMIZE
            </p>
            <p
              style={{
                marginTop: "0",
                color: "#ffe0b5",
                fontSize: "14px",
              }}
            >
              MAXIMAX FM will be <strong>LIVE STREAMING SOON</strong>.  
              Rete branche ak Stratèj Vizyonè pou mizik, nouvèl ak sèvis kominotè.
            </p>
          </div>

          {/* Hoodie image */}
          <div
            style={{
              width: "100%",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #333",
              backgroundColor: "#111",
            }}
          >
            <img
              src="/hoodie-maximax-fm.png"  {/* METE NON FICHYE HOODIE A ISIT */}
              alt="MAXIMAX FM Hoodie Briyant Solèy"
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// small helper for buttons
function langButton(active) {
  return {
    border: "none",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    backgroundColor: active ? "#ff8c2a" : "#111",
    color: active ? "#000" : "#fff",
  };
}
