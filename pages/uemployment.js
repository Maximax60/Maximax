export default function Unemployment() {
  return (
    <div style={{padding:24,fontFamily:"Arial, sans-serif",lineHeight:1.6}}>
      <h1>Unemployment / Chomaj / Desempleo</h1>

      <p><strong>Kreyòl:</strong> Telechaje fòm nan epi kontakte nou si w bezwen èd.</p>
      <p><strong>English:</strong> Download the form and contact us if you need help.</p>
      <p><strong>Español:</strong> Descargue el formulario y contáctenos si necesita ayuda.</p>

      <p style={{marginTop:16}}>
        <a href="/unemployment.pdf" style={{padding:"10px 16px",border:"1px solid #FFA500",borderRadius:8}}>
          ⬇️ Download Unemployment PDF
        </a>
        <span style={{marginLeft:12}}>
          <a href="/" style={{color:"#FFA500"}}>← Home</a>
        </span>
      </p>
    </div>
  );
}
