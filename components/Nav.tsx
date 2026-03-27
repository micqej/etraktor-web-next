'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Domov' },
  { href: '/palety', label: 'Transportné palety' },
  { href: '/zariadenia', label: 'Jednoúčelové zariadenia' },
  { href: '/vyroba', label: 'Výroba' },
  { href: '/etraktor', label: 'eTRAKTOR' },
  { href: '/kontakt', label: 'Kontakt', cta: true },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav id="mainNav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img
              className="nav-logo-img"
              src="/logo.jpg"
              alt="etraktor.sk"
              style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}
            />
            <span className="nav-logo-sk">etraktor.sk</span>
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`${pathname === l.href ? 'active' : ''} ${l.cta ? 'nav-cta' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
      </div>
    </>
  )
}
