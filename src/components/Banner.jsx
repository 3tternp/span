import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import headerImg from '../assets/img/header-img.jpg'

const ROLES = ['Information Security Officer', 'CSOC & SIEM Manager', 'GRC & IS Auditor']

const stats = [
  { value: '9+',  label: 'Years Experience'      },
  { value: '50+', label: 'Security Audits'        },
  { value: '7',   label: 'Compliance Frameworks'  },
  { value: '9',   label: 'Certifications'         },
]

function useTypewriter(items, period = 2000) {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    const tick = () => {
      const i = loopNum % items.length
      const full = items[i]
      const updated = isDeleting
        ? full.substring(0, text.length - 1)
        : full.substring(0, text.length + 1)

      setText(updated)

      if (isDeleting) setDelta(d => d / 2)
      if (!isDeleting && updated === full) { setIsDeleting(true); setDelta(period) }
      else if (isDeleting && updated === '') { setIsDeleting(false); setLoopNum(n => n + 1); setDelta(500) }
    }
    const ticker = setInterval(tick, delta)
    return () => clearInterval(ticker)
  }, [delta, loopNum, isDeleting, text, items, period])

  return text
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Banner() {
  const typedText = useTypewriter(ROLES)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(13,25,18,0.95) 50%, rgba(15,36,23,0.97) 100%)',
      }}
    >
      {/* radial glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00B8FF 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md
                bg-green-400/[0.08] border border-green-400/25
                font-mono text-[11px] font-bold text-green-400 tracking-[1.5px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                Available for Consulting Engagements
              </span>
            </motion.div>

            {/* Tagline pill */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-5 py-2.5 rounded-full text-[15px] font-semibold tracking-wide mb-5
                border border-white/20 glow"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.15), rgba(0,184,255,0.15))', backdropFilter: 'blur(10px)' }}>
                Information Security Officer &amp; Auditor
              </span>
            </motion.div>

            {/* Terminal prompt */}
            <motion.div variants={itemVariants}>
              <span className="block font-mono text-[13px] text-accent/85 tracking-tight mb-3">
                <span className="text-accent-2">prem@security</span>:~$ whoami
                <span className="inline-block w-2 h-[14px] ml-1 bg-accent align-[-2px] caret-blink" />
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants}
              className="text-[58px] md:text-[68px] font-bold leading-[1.05] mb-4 gradient-text"
              style={{ lineHeight: '1.08' }}>
              Hi, I&apos;m<br />Prem Basnet
            </motion.h1>

            {/* Typewriter role */}
            <motion.h2 variants={itemVariants}
              className="text-[28px] md:text-[34px] font-bold mb-4 typewriter-cursor"
              style={{ color: '#00FF9D', minHeight: '44px', display: 'block' }}>
              {typedText}
            </motion.h2>

            {/* Location */}
            <motion.div variants={itemVariants}
              className="flex items-center gap-1.5 text-[13px] text-white/45 mb-5">
              <MapPin size={13} className="text-accent shrink-0" />
              Anamnagar, Kathmandu, Nepal
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants}
              className="text-[17px] leading-relaxed text-muted mb-8 max-w-[520px]">
              Information Security Officer &amp; Auditor with 9+ years of experience in cybersecurity,
              IS audit, GRC, penetration testing, and cloud security (AWS &amp; Azure). Skilled in
              implementing security policies, conducting risk assessments, and ensuring compliance with
              ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, NIST, and COBIT.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-7 py-4 rounded-full font-bold text-[16px] text-[#0a0a0a]
                  bg-gradient-to-r from-accent to-accent-2
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(0,255,157,0.45)] group"
              >
                View Experience
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#contact"
                className="px-7 py-4 rounded-full font-semibold text-[16px] text-white no-underline
                  border-2 border-white/25 transition-all duration-300
                  hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:bg-accent/10">
                Get In Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-[28px] font-bold gradient-text leading-none mb-1">{s.value}</div>
                    <div className="font-mono text-[11px] text-muted uppercase tracking-wide whitespace-nowrap">{s.label}</div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-9 bg-white/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="float relative">
              <div className="absolute -inset-4 rounded-[28px] opacity-40 blur-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.3), rgba(0,184,255,0.3))' }} />
              <img
                src={headerImg}
                alt="Prem Basnet – Information Security Officer"
                className="relative w-full max-w-[420px] rounded-[24px]"
                style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
