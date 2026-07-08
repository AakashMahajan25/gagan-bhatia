'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">GB<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#proof-of-work">Results</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about"      onClick={close}>About</a>
        <a href="#work"       onClick={close}>Work</a>
        <a href="#proof-of-work" onClick={close}>Results</a>
        <a href="#industries" onClick={close}>Industries</a>
        <a href="#contact"    onClick={close}>Contact</a>
      </div>
    </>
  )
}
