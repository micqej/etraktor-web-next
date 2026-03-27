import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Výroba – Etraktor, s.r.o.',
  description: 'CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba pod vlastnou strechou v Bardejove.',
}

export default function VyrobaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Kompletná výroba</span>
          <h1>Výroba pod vlastnou strechou</h1>
          <p>CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/vyroba.jpg" alt="Výroba" />
            </div>
            <div>
              <span className="tag">Naša výrobňa</span>
              <h2 className="section-title">Vlastná výroba v Bardejove</h2>
              <p style={{ marginBottom: '1rem' }}>
                Disponujeme vlastným výrobným závodom v Bardejove, kde realizujeme celý výrobný proces – od prvého rezu plechu až po finálne odovzdanie produktu zákazníkovi.
              </p>
              <p>
                Vďaka vlastnej výrobe dokážeme garantovať kvalitu, skrátiť dodacie lehoty a flexibilne reagovať na zmeny v požiadavkách zákazníka.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <span className="tag">Technológie</span>
          <h2 className="section-title">Naše vybavenie</h2>
          <div className="cards-grid">
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/vyroba.jpg" alt="CNC pálenie" className="card-img" />
              <div className="card-body">
                <h3>CNC pálenie</h3>
                <p>Presné CNC pálenie plechov laserovou technológiou. Vysoká presnosť, čistý rez, minimálny odpad materiálu.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/vyroba2.jpg" alt="CNC ohýbanie" className="card-img" />
              <div className="card-body">
                <h3>CNC ohýbanie</h3>
                <p>Ohýbanie plechov na CNC ohraňovacom lise. Presné uhly, opakovateľná presnosť, rôzne hrúbky materiálu.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/vyroba3.jpg" alt="Elektrické rozvádzače" className="card-img" />
              <div className="card-body">
                <h3>Elektrické rozvádzače</h3>
                <p>Výroba elektrických rozvádzačov a riadiacich systémov. Kompletná elektroinštalácia pre naše zariadenia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <span className="tag">Kapacity</span>
          <h2 className="section-title">Čo dokážeme</h2>
          <div className="extras-grid">
            {[
              'CNC pálenie plechov do hr. 20mm',
              'CNC ohýbanie plechov do hr. 10mm',
              'Zváračské práce – MIG/MAG, TIG',
              'Výroba elektrických rozvádzačov',
              'Povrchová úprava – striekanie práškovými farbami',
              'Montáž a inštalácia u zákazníka',
              'Záručný a pozáručný servis',
              'Náhradné diely a modernizácia',
            ].map((s, i) => (
              <div key={i} className="extra-item">
                <div className="extra-dot" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Máte záujem o výrobu?</h2>
              <p>Kontaktujte nás a pripravíme nezáväznú cenovú ponuku.</p>
            </div>
            <Link href="/kontakt" className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
