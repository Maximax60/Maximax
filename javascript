export default function Home() {
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#000",color:"#FFA500",fontFamily:"Arial, sans-serif"}}>
      <h1>MAXIMAX MULTI SERVICES</h1>
      <p>MAXIMAX ALWAYS STAY MAXIMIZED</p>
      <div style={{marginTop:24}}>
        <a href="/unemployment" style={{padding:"10px 16px",border:"1px solid #FFA500",borderRadius:8}}>
          Go to Unemployment Page
        </a>
      </div>
    </div>
  );
}
