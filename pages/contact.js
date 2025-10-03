const FORM_EMBED = "https://docs.google.com/forms/d/e/1FAIpQLScJi6AbRPK5Rxnk71bJgAL8vGO2cD8S3k8IfcXjTi-Ojz_DPg/viewform?embedded=true";
const WHATSAPP_NUMBER = "1XXXXXXXXXX"; // <- ranplase ak nimewo ofisyèl la

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-orange to-brand-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-white/85">Ekriven sou WhatsApp oswa ranpli fòm lan.</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-brand-orange text-black px-5 py-3 font-medium hover:opacity-90">
            Message on WhatsApp
          </a>
          <a href="https://forms.gle/969Tpe8ScPX7avU9A" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-brand-orange text-brand-orange px-5 py-3 font-medium hover:border-brand-orange/70">
            Open Google Form
          </a>
        </div>

        <div className="mt-10">
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10" style={{paddingTop: "150%"}}>
            <iframe src={FORM_EMBED} className="absolute inset-0 w-full h-full" frameBorder="0" marginHeight="0" marginWidth="0" title="MAXIMAX Contact Form">Loading…</iframe>
          </div>
        </div>

        <div className="mt-8 text-sm text-white/70">
          <p>Email: contact@maximaxmultiservices.com</p>
          <p>Orlando, FL</p>
        </div>
      </section>
    </main>
  );
}
