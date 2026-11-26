import { useState, useEffect } from 'react'
import headerImg from '../assets/img/header-img.jpg'
import MatrixRain from './MatrixRain.jsx'

const ROLES = [
  'Cybersecurity Manager',
  'ISO 27001:2022 Lead Auditor',
  'SIEM & CSOC Operations',
  'VAPT & Red Teaming',
]

// Types each role out, holds it, deletes it, moves to the next.
// With "reduce motion" it just shows the first role.
function useTypewriter(items, hold = 1800) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [s, setS] = useState({ i: 0, text: reduce ? items[0] : '', del: false })

  useEffect(() => {
    if (reduce) return
    const word = items[s.i % items.length]
    let delay = s.del ? 35 : 80
    if (!s.del && s.text === word) delay = hold
    else if (s.del && s.text === '') delay = 350
    const id = setTimeout(() => {
      setS(p => {
        const w = items[p.i % items.length]
        if (!p.del && p.text === w) return { ...p, del: true }
        if (p.del && p.text === '') return { i: p.i + 1, text: '', del: false }
        return { ...p, text: p.del ? w.slice(0, p.text.length - 1) : w.slice(0, p.text.length + 1) }
      })
    }, delay)
    return () => clearTimeout(id)
  }, [s, items, hold, reduce])

  return s.text
}

export default function Banner() {
  const role = useTypewriter(ROLES)

  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-14 md:pt-14 md:pb-20">
      {/* digital rain: kept to the right and faded out behind the text */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)', maskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)' }}>
        <div className="absolute inset-0"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 18%, #000 75%)', maskImage: 'linear-gradient(to right, transparent 18%, #000 75%)' }}>
          <MatrixRain className="w-full h-full" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md border border-rule font-mono text-[11px] font-bold tracking-widest uppercase text-accent glass">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            Open to remote roles &amp; consulting
          </p>

          <p className="font-mono text-[13px] text-muted mb-1" aria-hidden="true">
            <span className="text-defense">prem@purple-team</span>:~$ whoami
          </p>
          <p className="font-mono text-[15px] mb-5 min-h-[1.6em]" aria-label="Prem Basnet, Cybersecurity Manager and ISO 27001:2022 Lead Auditor, working in GRC, IS audit and SIEM and CSOC operations">
            <span aria-hidden="true">
              <span className="text-muted">&gt; </span>Prem Basnet<span className="text-muted"> · </span>
              <span className="text-accent">{role}</span>
              <span className="inline-block w-[7px] h-[15px] ml-0.5 align-[-2px] bg-accent caret-blink" />
            </span>
          </p>

          <span aria-hidden="true" className="team-rule mb-5" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-5 max-w-2xl">
            I help organisations pass their <span className="text-defense italic">audits</span> and catch <span className="text-offense italic">real attacks</span>.
          </h1>
          <p className="text-[17px] text-muted max-w-xl mb-7">
            Ten years across IS audit, GRC, penetration testing and cloud security on AWS and Azure.
            These days I run SIEM and CSOC operations, and I&apos;ve led ISO 27001 certification and
            surveillance audits for clients across Nepal and Europe.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href="/Prem-Basnet-CV.pdf" download
              className="btn-glow px-6 py-3 rounded-full font-semibold no-underline">
              Download CV
            </a>
            <a href="mailto:basnetprem524@gmail.com" className="underline underline-offset-4 decoration-rule hover:decoration-accent">Email me</a>
            <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-accent">LinkedIn</a>
            <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:decoration-accent">GitHub</a>
          </div>
        </div>

        <div className="relative lg:ml-auto w-full max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[26px] blur-2xl opacity-60"
            style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--offense) 45%, transparent), color-mix(in srgb, var(--accent) 55%, transparent), color-mix(in srgb, var(--defense) 45%, transparent))', opacity: 'calc(var(--glow) * 1.6)' }} />
          <img
            src={headerImg}
            alt="Prem Basnet"
            width="500" height="625"
            fetchPriority="high"
            className="relative w-full aspect-[4/5] object-cover object-top rounded-[22px] border border-rule bg-tint"
          />
        </div>
      </div>
    </section>
  )
}
