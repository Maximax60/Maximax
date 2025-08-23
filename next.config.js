

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
