import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transportné palety – Etraktor, s.r.o.',
  description: 'Nerobotické aj robotické transportné palety pre automobilový priemysel. Robotické zásobníky a logistické riešenia na kľúč.',
}

export default function PaletyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Logistika & Automotív</span>
          <h1>Transportné palety</h1>
          <p>Základný kameň modernej logistiky. Nerobotické aj robotické palety pre automobilový priemysel, robotické zásobníky.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/palety.jpg" alt="Transportné palety" />
            </div>
            <div>
              <span className="tag">O produkte</span>
              <h2 className="section-title">Palety na mieru</h2>
              <p style={{ marginBottom: '1rem' }}>
                Navrhujeme a vyrábame transportné palety presne podľa požiadaviek zákazníka. Každá paleta je optimalizovaná pre konkrétny diel a výrobný proces.
              </p>
              <p>
                Spolupracujeme s poprednými spoločnosťami v automobilovom priemysle a dodávame riešenia, ktoré zvyšujú efektivitu logistiky a znižujú náklady.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="container">
          <span className="tag">Typy produktov</span>
          <h2 className="section-title">Čo ponúkame</h2>
          <div className="cards-grid">
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/palety.jpg" alt="Nerobotické palety" className="card-img" />
              <div className="card-body">
                <h3>Nerobotické palety</h3>
                <p>Klasické transportné palety pre manuálnu manipuláciu. Pevná konštrukcia, dlhá životnosť, jednoduchá údržba.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/palety2.jpg" alt="Robotické palety" className="card-img" />
              <div className="card-body">
                <h3>Robotické palety</h3>
                <p>Palety pre automatizované pracovné stanice. Presná geometria, kompatibilita s robotickými systémami.</p>
              </div>
            </div>
            <div className="card">
              <img src="https://www.etraktor.sk/wp-content/uploads/2022/01/palety3.jpg" alt="Robotické zásobníky" className="card-img" />
              <div className="card-body">
                <h3>Robotické zásobníky</h3>
                <p>Zásobníkové systémy pre automatické podávanie dielov. Inteligentné riešenia pre Vašu výrobnú linku.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <span className="tag">Proces</span>
          <h2 className="section-title">Ako to funguje</h2>
          <div className="extras-grid" style={{ marginTop: '2rem' }}>
            {[
              { num: '01', title: 'Analýza požiadaviek', desc: 'Dôkladne analyzujeme Vaše potreby a výrobný proces.' },
              { num: '02', title: '3D návrh', desc: 'Vytvoríme presný 3D model palety v CAD softvéri.' },
              { num: '03', title: 'Výroba', desc: 'Výroba v našom vlastnom závode v Bardejove.' },
              { num: '04', title: 'Testovanie', desc: 'Každá paleta prechádza dôkladnou kontrolou kvality.' },
            ].map((s) => (
              <div key={s.num} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', fontFamily: "'Barlow Condensed'", fontWeight: 900, color: 'var(--gold)', marginBottom: '0.5rem' }}>{s.num}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed'", fontSize: '1.3rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--green-dark)' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Zaujali vás naše palety?</h2>
              <p>Kontaktujte nás a dohodneme sa na stretnutí alebo nezáväznej konzultácii.</p>
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
