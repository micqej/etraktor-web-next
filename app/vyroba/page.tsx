import Link from 'next/link'

export default function Vyroba() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="tag">Kompletná výroba</span>
          <h1>Výroba pod vlastnou strechou</h1>
          <p>CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">Naša dielňa</span>
          <h2 className="section-title">Výrobné priestory</h2>
          <p className="section-desc">Pozrite si zázemie kde vznikajú naše produkty. Kliknite na foto pre zväčšenie.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/galeria/vyroba1.jpg" alt="Výroba 1" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Výrobný priestor 1</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/galeria/vyroba2.jpg" alt="Výroba 2" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Výrobný priestor 2</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/galeria/vyroba3.jpg" alt="Výroba 3" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Výrobný priestor 3</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/galeria/vyroba4.jpg" alt="Výroba 4" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Výrobný priestor 4</div></div>
            </div>
            <div className="img-card" style={{gridColumn:'span 2'}}>
              <img src="https://www.etraktor.sk/images/galeria/vyroba5.jpg" alt="Výroba 5" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Výrobný priestor 5</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag">Kapacity</span>
          <h2 className="section-title">Čo vyrábame</h2>
          <div className="three-col" style={{marginTop:'1.5rem'}}>
            <div style={{background:'white',borderRadius:12,padding:'2rem',border:'1px solid var(--border)',boxShadow:'var(--shadow)'}}>
              <div style={{width:48,height:48,background:'var(--green-pale)',border:'1px solid #b7d9b8',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 style={{fontWeight:700,marginBottom:'0.5rem'}}>CNC pálenie</h3>
              <p style={{fontSize:'0.88rem',color:'var(--text-muted)',lineHeight:1.55}}>Presné CNC pálenie kovových dielov pre potreby výroby aj zákazníkov.</p>
            </div>
            <div style={{background:'white',borderRadius:12,padding:'2rem',border:'1px solid var(--border)',boxShadow:'var(--shadow)'}}>
              <div style={{width:48,height:48,background:'var(--green-pale)',border:'1px solid #b7d9b8',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{fontWeight:700,marginBottom:'0.5rem'}}>CNC ohýbanie</h3>
              <p style={{fontSize:'0.88rem',color:'var(--text-muted)',lineHeight:1.55}}>Ohýbanie plechov a profilov s presnou toleranciou.</p>
            </div>
            <div style={{background:'white',borderRadius:12,padding:'2rem',border:'1px solid var(--border)',boxShadow:'var(--shadow)'}}>
              <div style={{width:48,height:48,background:'var(--green-pale)',border:'1px solid #b7d9b8',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'1rem'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              </div>
              <h3 style={{fontWeight:700,marginBottom:'0.5rem'}}>Elektrické rozvádzače</h3>
              <p style={{fontSize:'0.88rem',color:'var(--text-muted)',lineHeight:1.55}}>Návrh, výroba a montáž elektrických rozvádzačov.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="refs-section">
        <div className="container">
          <span className="tag">Naši partneri a referencie</span>
          <div className="refs-logos">
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/tuke.png" alt="Strojnícka fakulta TU Košice"/></div>
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/piafa.png" alt="PIAFA Vyškov"/></div>
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/uniza.png" alt="Žilinská Univerzita"/></div>
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/ref4.png" alt="Referencia 4"/></div>
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/ref5.png" alt="Referencia 5"/></div>
            <div className="ref-logo"><img src="https://www.etraktor.sk/images/ref6.png" alt="Referencia 6"/></div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container"><div className="cta-inner">
          <div><h2>Potrebujete výrobné kapacity?</h2><p>Kontaktujte nás a dohodíme detaily spolupráce.</p></div>
          <Link href="/kontakt" className="btn-primary" style={{background:'white',color:'var(--green-dark)'}}>Kontaktujte nás</Link>
        </div></div>
      </section>
    </>
  )
}
