'use client'
import Link from 'next/link'
import { useState } from 'react'

const tabData = {
  z: {
    headers: ['Parameter', '2×12V DC', '4×12V DC'],
    rows: [
      ['Typ zariadenia', 'ET 2000', 'ET 2000'],
      ['Typ pohonu', 'Samonosná tuhá náprava s diferenciálom', 'Samonosná tuhá náprava s diferenciálom'],
      ['Rýchlosť vpred / vzad', '0–15 km/h / 0–7 km/h', '0–15 km/h / 0–7 km/h'],
      ['Najmenší priemer otáčania', '6,5 m', '6,5 m'],
      ['Hmotnosť traktora', '380 kg', '480 kg'],
      ['Max. ťahaný náklad', '300 kg / 1 300 kg*', '400 kg / 1 300 kg*'],
      ['Max. celková hmotnosť', '680 kg / 1 680 kg*', '880 kg'],
      ['Max. ťažná sila (asfalt)', '2 800 N', '3 650 N'],
      ['Brodenie', '150 mm pri 5 km/h', '150 mm pri 5 km/h'],
      ['Max. sklon povrchu', '10° (17%)', '10° (17%)'],
      ['Max. veľkosť prekážky', '120 mm', '120 mm'],
      ['Prevádzková teplota', '−5°C až +40°C', '−5°C až +40°C'],
      ['Prevádzková vlhkosť', '30–80% (bez kondenzácie)', '30–80% (bez kondenzácie)'],
      ['Hladina akustického tlaku', '66 dBA', '66 dBA'],
    ]
  },
  b: {
    headers: ['Parameter', '2×12V DC', '4×12V DC'],
    rows: [
      ['Typ batérií', 'Hawker XFC – trakčné (bez údržby)', 'Hawker XFC – trakčné (bez údržby)'],
      ['Kapacita', '158 Ah', '316 Ah'],
      ['Hmotnosť konfigurácie', '380 kg', '480 kg'],
      ['Životnosť (60% vybitie)', '1 200 ZVEI cyklov', '1 200 ZVEI cyklov'],
      ['Životnosť (80% vybitie)', '800 cyklov', '800 cyklov'],
      ['Menovitá prevádzková teplota', '30°C', '30°C'],
      ['Doplňovanie destilovanej vody', 'Nie je potrebné', 'Nie je potrebné'],
    ]
  },
  n: {
    headers: ['Parameter', 'Hodnota'],
    rows: [
      ['Typ nabíjačky', 'Hawker XFC schválená nabíjačka'],
      ['Vstupné napätie', '240V AC (sieť)'],
      ['Výstupné napätie', '24V DC'],
      ['Prúd nabíjačky (opcia)', '40A'],
      ['Nabíjanie počas prevádzky', 'Kdekoľvek – bez poškodenia batérií'],
      ['Odporúčané skladovanie', 'Plne nabité, 20°C, sucho'],
    ]
  }
}

const videos = [
  { id: 'I7Z70rEkqOM', label: 'Tichý chod traktora' },
  { id: 'Cfy4jgR9W-o', label: 'Jazda v teréne' },
  { id: 'fLnGy33aTTY', label: 'Prevoz traktora' },
  { id: 'cJbF7qgYVOU', label: 'Jazda v teréne' },
  { id: '7MlTOTEkZIw', label: 'Jazda s vlečkou' },
  { id: '6EyL3EoOSRc', label: 'Príves 600 kg' },
  { id: 'Tox78aF9JGE', label: 'Radlica na sneh' },
  { id: '2fQrQQxhaTo', label: 'Pluh' },
  { id: 'udw-Vbazfhs', label: 'Kosenie / Zametanie' },
]

const galleryImgs = Array.from({length:15},(_,i)=>{
  const n = String(i+1).padStart(2,'0')
  return {src:`https://www.etraktor.sk/images/galeria/elektricky-malotraktor-${n}.JPG`,alt:`ET 2000`}
})

export default function Etraktor() {
  const [tab, setTab] = useState('z')
  const [vSlide, setVSlide] = useState(0)
  const perView = 3
  const maxSlide = videos.length - perView

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{minHeight:'75vh'}}>
        <div className="hero-bg" style={{backgroundImage:"url('https://www.etraktor.sk/images/elektricky-malotraktor.jpg')"}}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">Vlastný produkt Etraktor, s.r.o.</p>
              <h1 className="hero-title">Elektrický<br/>malotraktor<br/><span>ET 2000</span></h1>
              <p className="hero-subtitle">Traktor, ktorý šetrí Vašu peňaženku i životné prostredie!</p>
              <p className="hero-desc">Nulové emisie, tichá prevádzka a minimálne prevádzkové náklady. Moderná alternatíva k spaľovacím motorom pre záhradu, poľnohospodárstvo aj priemysel.</p>
              <div className="hero-btns">
                <Link href="/kontakt" className="btn-primary">Dopytovať cenu</Link>
                <a href="#parametre" className="btn-outline">Technické parametre</a>
              </div>
            </div>
            <div><img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 2000" className="hero-right-img"/></div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container"><div className="hero-stats">
            <div className="hstat"><div className="hstat-val">90%</div><div className="hstat-label">Účinnosť motora</div></div>
            <div className="hstat"><div className="hstat-val">0</div><div className="hstat-label">Lokálnych emisií</div></div>
            <div className="hstat"><div className="hstat-val">66 dBA</div><div className="hstat-label">Hladina hluku</div></div>
            <div className="hstat"><div className="hstat-val">15 km/h</div><div className="hstat-label">Max. rýchlosť</div></div>
          </div></div>
        </div>
      </section>

      {/* PREČO ELEKTRICKÝ */}
      <section className="white" id="preco">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">Inteligentnejší pohon</span>
              <h2 className="section-title">Prečo elektrický malotraktor?</h2>
              <p>Elektrický malotraktor sa vyznačuje vyššou účinnosťou využitia energie ako klasické benzínové (resp. naftové) motory. Účinnosť spaľovacích motorov je cca 15–20%. U elektrických motoroch sa to pohybuje okolo 90%.</p>
              <br/><p>Elektromotor má niekoľko súčastí, pri činnosti nedochádza k treniu, takže jeho životnosť je bez ohľadu na ložiská takmer neobmedzená.</p>
              <br/><p>Samotná jazda na elektrickom traktore je veľmi jednoduchá. Maximálny záberový moment od nulových otáčkach je pôžitkom pri jazde. Brzdenie je s 90% postačujúce elektromotorom, ktorý spätne dobíja akumulátory (rekuperuje).</p>
              <br/>
              <div className="eff-item">
                <div className="eff-row"><span className="eff-name">Elektrický motor ET 2000</span><span className="eff-pct">90%</span></div>
                <div className="eff-bar-bg"><div className="eff-bar green" style={{width:'90%'}}></div></div>
              </div>
              <div className="eff-item" style={{marginTop:'1rem'}}>
                <div className="eff-row"><span className="eff-name">Spaľovací motor (benzín/nafta)</span><span className="eff-pct" style={{color:'#78909c'}}>15–20%</span></div>
                <div className="eff-bar-bg"><div className="eff-bar gray" style={{width:'18%'}}></div></div>
              </div>
            </div>
            <div>
              <div className="stats-row" style={{marginBottom:'1.5rem'}}>
                <div className="stat-card"><div className="stat-card-val">90%</div><div className="stat-card-label">Účinnosť</div></div>
                <div className="stat-card"><div className="stat-card-val">0</div><div className="stat-card-label">Emisie</div></div>
                <div className="stat-card"><div className="stat-card-val">66 dBA</div><div className="stat-card-label">Hluk</div></div>
                <div className="stat-card"><div className="stat-card-val">~∞</div><div className="stat-card-label">Životnosť</div></div>
              </div>
              <img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 2000 v akcii" style={{width:'100%',borderRadius:'var(--radius)',boxShadow:'var(--shadow)',objectFit:'cover',maxHeight:260}}/>
            </div>
          </div>
        </div>
      </section>

      {/* VÝHODY A VYUŽITIE */}
      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">Výhody zariadenia</span>
              <h2 className="section-title">Výhody ET 2000</h2>
              <div className="check-list">
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Vysoký výkon</strong> – maximálny záberový moment od nulových otáčok, plynulá regulácia 0–15 km/h</span></div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Tichá prevádzka</strong> – len 66 dBA, vhodný do obytných zón a uzavretých priestorov</span></div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Nulové emisie</strong> – žiadne miestne emisie z výfuku, ideálny pre sklady a skleníky</span></div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Jednoduchá obsluha</strong> – komfortná jazda, automatická regulácia rýchlosti</span></div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Nízke prevádzkové náklady</strong> – minimum pohyblivých dielov, bez oleja a filtrov</span></div>
                <div className="check-item"><svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg><span><strong>Rekuperácia energie</strong> – 90% brzdenia dobíja akumulátory späť</span></div>
              </div>
            </div>
            <div>
              <span className="tag">Možnosti použitia</span>
              <h2 className="section-title">Kde ho využijete</h2>
              <div className="features-grid" style={{gridTemplateColumns:'1fr 1fr',marginTop:0}}>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div><div><div className="feature-title">V domácnosti</div><div className="feature-desc">Úpravy záhrady a pozemku</div></div></div>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div><div className="feature-title">Lesohospodárstvo</div><div className="feature-desc">Práce v lese</div></div></div>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div className="feature-title">Poľnohospodárstvo</div><div className="feature-desc">Orba, kosenie, zber</div></div></div>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></div><div><div className="feature-title">Priemysel</div><div className="feature-desc">Sklady, skleníky</div></div></div>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></svg></div><div><div className="feature-title">Samospráva</div><div className="feature-desc">Obce a parky</div></div></div>
                <div className="feature-item"><div className="feature-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div><div className="feature-title">Certifikované</div><div className="feature-desc">Spĺňa normy</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICKÉ PARAMETRE */}
      <section className="white" id="parametre">
        <div className="container">
          <span className="tag">ET 2000 – Špecifikácie</span>
          <h2 className="section-title">Technické parametre</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',marginBottom:'2.5rem'}}>
            <img src="https://www.etraktor.sk/images/rozmerythumb1.png" alt="Rozmery 1" style={{borderRadius:'var(--radius)',boxShadow:'var(--shadow)',width:'100%'}}/>
            <img src="https://www.etraktor.sk/images/rozmerythumb2.png" alt="Rozmery 2" style={{borderRadius:'var(--radius)',boxShadow:'var(--shadow)',width:'100%'}}/>
            <img src="https://www.etraktor.sk/images/rozmerythumb3.png" alt="Rozmery 3" style={{borderRadius:'var(--radius)',boxShadow:'var(--shadow)',width:'100%'}}/>
          </div>
          <div className="tabs" id="param-tabs">
            {[['z','Základné'],['b','Batérie'],['n','Nabíjanie']].map(([k,l])=>(
              <button key={k} className={`tab-btn${tab===k?' active':''}`} onClick={()=>setTab(k)}>{l}</button>
            ))}
          </div>
          <div className="tab-pane active">
            <table className="spec-table">
              <thead><tr>{tabData[tab as keyof typeof tabData].headers.map((h,i)=><th key={i}>{h}</th>)}</tr></thead>
              <tbody>{tabData[tab as keyof typeof tabData].rows.map((r,i)=>(
                <tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>
              ))}</tbody>
            </table>
            {tab==='b' && <img src="https://www.etraktor.sk/images/bateria.png" alt="Batéria" style={{maxWidth:300,borderRadius:'var(--radius)',boxShadow:'var(--shadow)',marginTop:'1.5rem'}}/>}
            {tab==='n' && <img src="https://www.etraktor.sk/images/nabijanie.png" alt="Nabíjanie" style={{maxWidth:380,borderRadius:'var(--radius)',boxShadow:'var(--shadow)',marginTop:'1.5rem'}}/>}
          </div>
        </div>
      </section>

      {/* DOJAZD */}
      <section className="bg">
        <div className="container">
          <span className="tag">Kapacita a výdrž</span>
          <h2 className="section-title">Dojazd malotraktora</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem'}}>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/dojazd1.jpg" alt="Dojazd 2×12V" style={{width:'100%',height:'auto',minHeight:160,objectFit:'contain',background:'#f5f7f5'}}/>
              <div className="img-card-body">
                <div className="img-card-title">Konfigurácia 2×12V DC <span className="badge-std" style={{marginLeft:6}}>štandard</span></div>
                <div className="img-card-desc">Hmotnosť 380 kg · Kapacita 158 Ah · Štandardná konfigurácia pre záhradné a poľnohospodárske práce.</div>
              </div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/dojazd2.jpg" alt="Dojazd 4×12V" style={{width:'100%',height:'auto',minHeight:160,objectFit:'contain',background:'#f5f7f5'}}/>
              <div className="img-card-body">
                <div className="img-card-title">Konfigurácia 4×12V DC <span className="badge-opt" style={{marginLeft:6}}>opcia</span></div>
                <div className="img-card-desc">Hmotnosť 480 kg · Kapacita 316 Ah · Rozšírená kapacita pre náročné priemyselné nasadenie.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRÍSLUŠENSTVO */}
      <section className="white">
        <div className="container">
          <span className="tag">Rozšírené možnosti</span>
          <h2 className="section-title">Príslušenstvo</h2>
          <div className="three-col">
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/prislusenstvosumar.jpg" alt="Kompletný sortiment" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Kompletný sortiment</div><div className="img-card-desc">Jarkovače, hrobkovače, vyorávače, oborávacie kolesá, pasívne kypriče, plečky, vlečky, valce.</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/prislusenstvo.jpg" alt="Predná radlica na sneh" style={{width:'100%',height:200,objectFit:'cover'}}/>
              <div className="img-card-body"><div className="img-card-title">Predná radlica na sneh</div><div className="img-card-desc">Robustné prevedenie s výmenným gumovým britom. Nastaviteľný uhol ±15° a ±30°.</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/zadnyzaves.png" alt="Zadný záves" style={{width:'100%',height:200,objectFit:'contain',padding:'1rem',background:'white'}}/>
              <div className="img-card-body"><div className="img-card-title">Zadný záves</div><div className="img-card-desc">Univerzálny zadný záves pre pluh, vyorávač zemiakov, brány a ďalšie príslušenstvo.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFIKÁTY */}
      <section className="white">
        <div className="container">
          <span className="tag">Normy a certifikácia</span>
          <h2 className="section-title">Certifikované zariadenie</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',maxWidth:600}}>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/certifikat1.jpg" alt="Certifikát 1" style={{width:'100%',height:220,objectFit:'contain',padding:'1rem',background:'white'}}/>
              <div className="img-card-body"><div className="img-card-title">Certifikát 1</div></div>
            </div>
            <div className="img-card">
              <img src="https://www.etraktor.sk/images/certifikat2.jpg" alt="Certifikát 2" style={{width:'100%',height:220,objectFit:'contain',padding:'1rem',background:'white'}}/>
              <div className="img-card-body"><div className="img-card-title">Certifikát 2</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOTOGALÉRIA */}
      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag">ET 2000 v akcii</span>
          <h2 className="section-title">Fotogaléria</h2>
          <p className="section-desc" style={{color:'rgba(255,255,255,0.7)'}}>Kliknite na fotografiu pre zväčšenie.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.6rem'}}>
            {galleryImgs.map((img,i)=>(
              <div key={i} style={{position:'relative',overflow:'hidden',borderRadius:8,cursor:'pointer',aspectRatio:'4/3'}}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOGALÉRIA */}
      <section style={{padding:'5rem 0',background:'#111111',overflow:'hidden'}}>
        <div style={{maxWidth:1180,margin:'0 auto',padding:'0 2rem 2rem'}}>
          <span className="tag" style={{borderColor:'rgba(255,255,255,0.3)',color:'white',background:'rgba(255,255,255,0.15)'}}>ET 2000 v akcii</span>
          <h2 className="section-title" style={{color:'white'}}>Videogaléria</h2>
        </div>
        <div style={{position:'relative',padding:'0 60px',maxWidth:1180,margin:'0 auto'}}>
          <button style={{position:'absolute',left:0,top:'50%',transform:'translateY(-60%)',zIndex:10,background:'rgba(45,122,58,0.9)',border:'none',color:'white',fontSize:'2rem',width:52,height:52,borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}
            onClick={()=>setVSlide(Math.max(0,vSlide-1))}>&#8249;</button>
          <div style={{overflow:'hidden'}}>
            <div style={{display:'flex',gap:'1.5rem',transition:'transform 0.45s',transform:`translateX(-${vSlide*(33.333+0.5)}%)`}}>
              {videos.map((v)=>(
                <div key={v.id} style={{minWidth:'calc(33.333% - 1rem)',flexShrink:0}}>
                  <div style={{position:'relative',paddingBottom:'56.25%',height:0,overflow:'hidden',borderRadius:10,background:'#000'}}>
                    <iframe src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`} title={v.label} allowFullScreen loading="lazy"
                      style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}}/>
                  </div>
                  <div style={{textAlign:'center',color:'rgba(255,255,255,0.7)',fontSize:'0.82rem',fontWeight:600,textTransform:'uppercase',letterSpacing:1,marginTop:'0.6rem'}}>{v.label}</div>
                </div>
              ))}
            </div>
          </div>
          <button style={{position:'absolute',right:0,top:'50%',transform:'translateY(-60%)',zIndex:10,background:'rgba(45,122,58,0.9)',border:'none',color:'white',fontSize:'2rem',width:52,height:52,borderRadius:'50%',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}
            onClick={()=>setVSlide(Math.min(maxSlide,vSlide+1))}>&#8250;</button>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container"><div className="cta-inner">
          <div>
            <h2>Získajte cenovú ponuku</h2>
            <p>Aktuálny cenník ET 2000 vám poskytneme na vyžiadanie. Cena závisí od konfigurácie akumulátorov a príslušenstva.</p>
          </div>
          <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <Link href="/kontakt" className="btn-primary" style={{background:'white',color:'var(--green-dark)'}}>Napísať správu</Link>
            <a href="tel:+421907933648" className="btn-outline">+421 907 933 648</a>
          </div>
        </div></div>
      </section>

      {/* REFERENCIE */}
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
    </>
  )
}
