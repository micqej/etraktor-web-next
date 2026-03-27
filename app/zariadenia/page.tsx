import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jednoúčelové zariadenia – Etraktor, s.r.o.',
  description: 'Testovacie zariadenia, montážne prípravky a kontrolné prípravky na kľúč podľa požiadaviek zákazníka.',
}

export default function ZariadeniaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Priemyselná automatizácia</span>
          <h1>Jednoúčelové zariadenia</h1>
          <p>Zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">O produkte</span>
              <h2 className="section-title">Zariadenia na mieru</h2>
              <p style={{ marginBottom: '1rem' }}>
                Každé jednoúčelové zariadenie je navrhnuté presne pre konkrétny výrobný alebo testovací proces. Pracujeme s klientom od prvého konceptu až po finálne odovzdanie a zaškolenie obsluhy.
              </p>
              <p>
                Naše zariadenia spĺňajú všetky požiadavky európskych noriem a sú certifikované v spolupráci s TISR.
              </p>
            </div>
            <div>
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/zariadenia.jpg" alt="Jednoúčelové zariadenia" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <span className="tag">Typy zariadení</span>
          <h2 className="section-title">Čo vyrábame</h2>
          <div className="cards-grid">
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/zariadenia.jpg" alt="Testovacie zariadenia" className="card-img" />
              <div className="card-body">
                <h3>Testovacie zariadenia</h3>
                <p>Zariadenia pre funkčné testovanie dielov a zostáv. Automatické vyhodnotenie výsledkov a archivácia dát.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/zariadenia2.jpg" alt="Montážne prípravky" className="card-img" />
              <div className="card-body">
                <h3>Montážne prípravky</h3>
                <p>Prípravky pre presné a opakovateľné montážne operácie. Ergonomický dizajn pre pohodlnú prácu operátora.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/zariadenia3.jpg" alt="Kontrolné prípravky" className="card-img" />
              <div className="card-body">
                <h3>Kontrolné prípravky</h3>
                <p>Meracie a kontrolné prípravky pre zabezpečenie kvality výroby. Rýchla a spoľahlivá kontrola rozmerov.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
          <span className="tag">Normy a certifikácia</span>
          <h2 className="section-title">Bezpečnosť na prvom mieste</h2>
          <div className="extras-grid">
            {[
              'STN EN ISO 12100:2011 – Bezpečnosť strojov',
              'STN EN 1175 – Priemyselné vozíky',
              'CE certifikácia',
              'Analýza rizík',
              'Pevnostné výpočty',
              'Dokumentácia a návody',
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
              <h2>Potrebujete zariadenie na mieru?</h2>
              <p>Opíšte nám Váš problém a navrhneme optimálne riešenie.</p>
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
