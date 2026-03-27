'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

export default function KontaktPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="tag">Kontakt</span>
          <h1>Kontaktujte nás</h1>
          <p>Ozvite sa nám – radi preberieme Vaše požiadavky a navrhneme riešenie.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="tag">Napíšte nám</span>
              <h2 className="section-title">Správa</h2>
              {sent ? (
                <div style={{ background: 'var(--bg2)', padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: "'Barlow Condensed'", fontWeight: 800, fontSize: '1.5rem', color: 'var(--green-dark)' }}>Správa odoslaná!</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Ozveme sa Vám čo najskôr.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Meno a priezvisko *</label>
                    <input type="text" required placeholder="Ján Novák" />
                  </div>
                  <div className="form-group">
                    <label>E-mail *</label>
                    <input type="email" required placeholder="jan@firma.sk" />
                  </div>
                  <div className="form-group">
                    <label>Telefón</label>
                    <input type="tel" placeholder="+421 900 000 000" />
                  </div>
                  <div className="form-group">
                    <label>Firma</label>
                    <input type="text" placeholder="Názov spoločnosti" />
                  </div>
                  <div className="form-group">
                    <label>Správa *</label>
                    <textarea required placeholder="Popíšte Váš projekt alebo požiadavku..." />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                    Odoslať správu
                  </button>
                </form>
              )}
            </div>

            <div>
              <span className="tag">Kontaktné údaje</span>
              <h2 className="section-title">Kde nás nájdete</h2>
              <div className="contact-info">
                <div className="contact-info-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Adresa</strong>
                    <p>Duklianska 1376/17<br />085 01 Bardejov</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>E-mail</strong>
                    <p><a href="mailto:info@etraktor.sk" style={{ color: 'var(--green)' }}>info@etraktor.sk</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Telefón</strong>
                    <p><a href="tel:+421900000000" style={{ color: 'var(--green)' }}>+421 900 000 000</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">🏢</span>
                  <div>
                    <strong>Firemné údaje</strong>
                    <p>IČO: 52134539<br />DIČ: 2120911815</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Pracovná doba</strong>
                    <p>Po – Pi: 8:00 – 17:00<br />So – Ne: zatvorené</p>
                  </div>
                </div>
              </div>

              {/* MAPA */}
              <div style={{ marginTop: '2rem', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5!2d21.2756!3d49.2956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE3JzQ0LjIiTiAyMcKwMTYnMzIuMiJF!5e0!3m2!1ssk!2ssk!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
