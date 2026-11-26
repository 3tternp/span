import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const navLinks = [
  { href: '#skills',         label: 'Skills',      id: 'skills'         },
  { href: '#experience',     label: 'Experience',  id: 'experience'     },
  { href: '#certifications', label: 'Credentials', id: 'certifications' },
  { href: '#projects',       label: 'How I can help',        id: 'projects'       },
]

export default function NavBar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  // Underline the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = id =>
    `py-1 no-underline border-b ${active === id ? 'border-ink' : 'border-transparent hover:border-muted'}`

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-rule">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 no-underline">
          <span aria-hidden="true" className="w-8 h-8 grid place-items-center bg-accent text-on-accent font-serif text-[15px] leading-none">PB</span>
          <span className="font-serif text-xl">Prem Basnet</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[15px]">
          {navLinks.map(l => (
            <a key={l.id} href={l.href} className={linkClass(l.id)}>{l.label}</a>
          ))}
          <a href="/Prem-Basnet-CV.pdf" download className="py-1 no-underline border-b border-transparent hover:border-muted">CV</a>
          <ThemeToggle />
          <a href="#contact"
            className="px-4 py-1.5 bg-accent text-on-accent no-underline hover:bg-accent-dark transition-colors">
            Contact me
          </a>
        </div>

        <button
          className="md:hidden text-[15px] py-1 px-3 border border-rule"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-rule bg-paper">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
            {navLinks.map(l => (
              <a key={l.id} href={l.href} onClick={() => setOpen(false)}
                className="py-3 border-b border-rule no-underline">{l.label}</a>
            ))}
            <a href="/Prem-Basnet-CV.pdf" download className="py-3 border-b border-rule no-underline">Download CV</a>
            <ThemeToggle className="py-3 border-b border-rule" />
            <a href="#contact" onClick={() => setOpen(false)}
              className="mt-3 px-4 py-3 bg-accent text-on-accent text-center no-underline">Contact me</a>
          </div>
        </div>
      )}
    </header>
  )
}
