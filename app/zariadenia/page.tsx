import Link from 'next/link'

export default function Zariadenia() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="tag">Priemyselná automatizácia</span>
          <h1>Jednoúčelové zariadenia</h1>
          <p>Vytvoríme Vám zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky a ďalšie.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">Ukážky realizácií</span>
          <h2 className="section-title">Naše realizácie</h2>
          <div className="three-col">
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/linka-dveri.jpg" alt="Linka dverí" style={{width:'100%',height:220,objectFit:'contain',padding:'0.5rem',background:'var(--bg)'}}/>
              <div className="img-card-body"><div className="img-card-title">Linka dverí pre školiace stredisko</div><div className="img-card-desc">Kompletné riešenie na kľúč vrátane konštrukčného vývoja a montáže.</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/kontrolne-pripravky.jpg" alt="Kontrolné prípravky" style={{width:'100%',height:220,objectFit:'contain',padding:'0.5rem',background:'var(--bg)'}}/>
              <div className="img-card-body"><div className="img-card-title">Kontrolné prípravky</div><div className="img-card-desc">Presné kontrolné prípravky pre výrobné linky a QA procesy.</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/nasypny-vazaci-modul.jpg" alt="Násypný vážiaci modul" style={{width:'100%',height:220,objectFit:'contain',padding:'0.5rem',background:'var(--bg)'}}/>
              <div className="img-card-body"><div className="img-card-title">Násypný vážiaci modul</div><div className="img-card-desc">Špeciálne zariadenie pre presné váženie a dávkovanie materiálu.</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="green-dark">
        <div className="container">
          <span className="tag">Náš postup</span>
          <h2 className="section-title">Vývoj produktu A – Z</h2>
          <div className="four-col" style={{marginTop:'2rem'}}>
            <div style={{textAlign:'center',padding:'1.5rem 1rem'}}>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'3rem',fontWeight:900,color:'var(--accent)',lineHeight:1,marginBottom:'0.75rem'}}>01</div>
              <h4 style={{fontWeight:700,marginBottom:'0.5rem',color:'white'}}>Rešerš &amp; Koncept</h4>
              <p style={{fontSize:'0.85rem',opacity:0.7,lineHeight:1.5}}>Rešerš aktuálnych riešení vo svete, koncepty a plány nákladov.</p>
            </div>
            <div style={{textAlign:'center',padding:'1.5rem 1rem'}}>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'3rem',fontWeight:900,color:'var(--accent)',lineHeight:1,marginBottom:'0.75rem'}}>02</div>
              <h4 style={{fontWeight:700,marginBottom:'0.5rem',color:'white'}}>Konštrukcia</h4>
              <p style={{fontSize:'0.85rem',opacity:0.7,lineHeight:1.5}}>Dodávateľ konštrukčnej dokumentácie, konštrukčný vývoj.</p>
            </div>
            <div style={{textAlign:'center',padding:'1.5rem 1rem'}}>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'3rem',fontWeight:900,color:'var(--accent)',lineHeight:1,marginBottom:'0.75rem'}}>03</div>
              <h4 style={{fontWeight:700,marginBottom:'0.5rem',color:'white'}}>Výroba &amp; Montáž</h4>
              <p style={{fontSize:'0.85rem',opacity:0.7,lineHeight:1.5}}>Realizačná činnosť výroby produktu, montáž a oživenie.</p>
            </div>
            <div style={{textAlign:'center',padding:'1.5rem 1rem'}}>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:'3rem',fontWeight:900,color:'var(--accent)',lineHeight:1,marginBottom:'0.75rem'}}>04</div>
              <h4 style={{fontWeight:700,marginBottom:'0.5rem',color:'white'}}>Certifikácia</h4>
              <p style={{fontSize:'0.85rem',opacity:0.7,lineHeight:1.5}}>Dokumentácia a certifikácia v spolupráci s TISR.</p>
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
          <div><h2>Máte špecifické požiadavky?</h2><p>Vytvoríme zariadenie na kľúč – od konceptu po certifikáciu.</p></div>
          <Link href="/kontakt" className="btn-primary" style={{background:'white',color:'var(--green-dark)'}}>Kontaktujte nás</Link>
        </div></div>
      </section>
    </>
  )
}
