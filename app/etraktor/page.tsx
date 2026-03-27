'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function EtraktorkPage() {
  const [activeTab, setActiveTab] = useState('et2000')

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Vlastný produkt</span>
          <h1>eTRAKTOR</h1>
          <p>Elektrický malotraktor ET 2000 a ET 3000. Nulové emisie, tichá prevádzka, 90% účinnosť motora.</p>
        </div>
      </section>

      {/* TABS */}
      <section className="bg-white">
        <div className="container">
          <div className="tabs">
            <button className={`tab-btn ${activeTab === 'et2000' ? 'active' : ''}`} onClick={() => setActiveTab('et2000')}>ET 2000</button>
            <button className={`tab-btn ${activeTab === 'et3000' ? 'active' : ''}`} onClick={() => setActiveTab('et3000')}>ET 3000</button>
          </div>

          {activeTab === 'et2000' && (
            <div>
              <div className="two-col">
                <div>
                  <img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 2000" />
                </div>
                <div>
                  <span className="tag">Elektrický malotraktor</span>
                  <h2 className="section-title">ET 2000</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Prvý slovenský elektrický malotraktor vyvinutý a vyrobený spoločnosťou Etraktor, s.r.o. v Bardejove. Určený pre poľnohospodárske a komunálne práce.
                  </p>
                  <p>
                    Kombinácia modernej elektromobility a osvedčenej strojárskej tradície. Nulové emisie, minimálna hlučnosť a výnimočná účinnosť pohonu.
                  </p>
                </div>
              </div>

              <h3 style={{ fontFamily: "'Barlow Condensed'", fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--green-dark)', margin: '3rem 0 1rem' }}>
                Technické parametre ET 2000
              </h3>
              <table className="specs-table">
                <tbody>
                  <tr><td>Výkon motora</td><td>2 kW</td></tr>
                  <tr><td>Typ motora</td><td>Elektrický synchrónny BLDC</td></tr>
                  <tr><td>Napätie batérie</td><td>48 V</td></tr>
                  <tr><td>Kapacita batérie</td><td>30 Ah (LiFePO4)</td></tr>
                  <tr><td>Dojazd</td><td>až 4 hodiny nepretržitej prevádzky</td></tr>
                  <tr><td>Maximálna rýchlosť</td><td>8 km/h</td></tr>
                  <tr><td>Hmotnosť</td><td>320 kg</td></tr>
                  <tr><td>Certifikácia</td><td>TISR – Technická inšpekcia, a.s.</td></tr>
                  <tr><td>Emisie</td><td>0 (nulové)</td></tr>
                  <tr><td>Účinnosť motora</td><td>90%</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'et3000' && (
            <div>
              <div className="two-col">
                <div>
                  <img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 3000" />
                </div>
                <div>
                  <span className="tag">Elektrický malotraktor</span>
                  <h2 className="section-title">ET 3000</h2>
                  <p style={{ marginBottom: '1rem' }}>
                    Vylepšená verzia nášho elektrického malotraktora s vyšším výkonom a väčšou kapacitou batérie. ET 3000 je určený pre náročnejšie poľnohospodárske a komunálne práce.
                  </p>
                  <p>
                    Väčší dojazd, vyšší výkon a rozšírené možnosti príslušenstva. Ideálny pre profesionálne využitie.
                  </p>
                </div>
              </div>

              <h3 style={{ fontFamily: "'Barlow Condensed'", fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--green-dark)', margin: '3rem 0 1rem' }}>
                Technické parametre ET 3000
              </h3>
              <table className="specs-table">
                <tbody>
                  <tr><td>Výkon motora</td><td>3 kW</td></tr>
                  <tr><td>Typ motora</td><td>Elektrický synchrónny BLDC</td></tr>
                  <tr><td>Napätie batérie</td><td>48 V</td></tr>
                  <tr><td>Kapacita batérie</td><td>50 Ah (LiFePO4)</td></tr>
                  <tr><td>Dojazd</td><td>až 6 hodín nepretržitej prevádzky</td></tr>
                  <tr><td>Maximálna rýchlosť</td><td>10 km/h</td></tr>
                  <tr><td>Hmotnosť</td><td>380 kg</td></tr>
                  <tr><td>Certifikácia</td><td>TISR – Technická inšpekcia, a.s.</td></tr>
                  <tr><td>Emisie</td><td>0 (nulové)</td></tr>
                  <tr><td>Účinnosť motora</td><td>92%</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* VÝHODY */}
      <section className="bg-dark">
        <div className="container">
          <span className="tag">Prečo eTRAKTOR</span>
          <h2 className="section-title">Výhody elektrického pohonu</h2>
          <div className="extras-grid">
            {[
              'Nulové emisie – šetrný k životnému prostrediu',
              '90%+ účinnosť elektromotora',
              'Minimálna hlučnosť prevádzky',
              'Nízke prevádzkové náklady',
              'Jednoduchá údržba',
              'Nabíjanie zo štandardnej 230V siete',
              'Slovenský výrobok – podpora domácej ekonomiky',
              'Certifikovaný TISR',
            ].map((s, i) => (
              <div key={i} className="extra-item">
                <div className="extra-dot" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOKUMENTY */}
      <section className="bg-gray">
        <div className="container">
          <span className="tag">Na stiahnutie</span>
          <h2 className="section-title">Dokumenty a katalógy</h2>
          <p className="section-desc">Stiahnite si technickú dokumentáciu a katalógy produktov.</p>
          <div className="docs-list">
            <a href="#" className="doc-item">
              <span className="doc-icon">📄</span>
              <div className="doc-info">
                <h4>Katalóg ET 2000</h4>
                <p>Kompletný technický katalóg elektrického malotraktora ET 2000 – PDF, 2.4 MB</p>
              </div>
            </a>
            <a href="#" className="doc-item">
              <span className="doc-icon">📄</span>
              <div className="doc-info">
                <h4>Katalóg ET 3000</h4>
                <p>Kompletný technický katalóg elektrického malotraktora ET 3000 – PDF, 2.8 MB</p>
              </div>
            </a>
            <a href="#" className="doc-item">
              <span className="doc-icon">📋</span>
              <div className="doc-info">
                <h4>Certifikát TISR</h4>
                <p>Certifikát od Technickej inšpekcie SR – PDF, 0.8 MB</p>
              </div>
            </a>
            <a href="#" className="doc-item">
              <span className="doc-icon">🔧</span>
              <div className="doc-info">
                <h4>Návod na obsluhu ET 2000</h4>
                <p>Kompletný návod na obsluhu a údržbu – PDF, 5.1 MB</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Záujem o eTRAKTOR?</h2>
              <p>Kontaktujte nás pre cenovú ponuku alebo dohodnutie predvádzky.</p>
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
