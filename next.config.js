export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>MAXIMAX MULTI SERVICES</h1>
      <p>MAXIMAX ALWAYS STAY MAXIMIZED</p>
    </div>
  );
} = {};
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Konfigirasyon pou lang
  i18n: {
    locales: ["en", "ht", "es"], // English, Kreyòl, Español
    defaultLocale: "en",
  },

  // Redirect opsyonèl pou unemployment PDF la
  async redirects() {
    return [
      {
        source: "/unemployment-download",
        destination: "/unemployment.pdf", // mete PDF la nan folder public/
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
