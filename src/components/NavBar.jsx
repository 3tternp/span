import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Instagram, Facebook, Menu, X } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/img/logo.png'

const navLinks = [
  { href: '#home',          label: 'Home',       id: 'home'          },
  { href: '#skills',        label: 'Skills',     id: 'skills'        },
  { href: '#experience',    label: 'Experience', id: 'experience'    },
  { href: '#certifications',label: 'Credentials',id: 'certifications'},
  { href: '#projects',      label: 'Work',       id: 'projects'      },
  { href: '#contact',       label: 'Contact',    id: 'contact'       },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/prem-basnet524/',               Icon: Linkedin,  label: 'LinkedIn'  },
  { href: 'https://www.facebook.com/profile.php?id=100051820911738',   Icon: Facebook,  label: 'Facebook'  },
  { href: 'https://www.instagram.com/astra.x3/',                       Icon: Instagram, label: 'Instagram' },
  { href: 'https://github.com/3tternp',                                 Icon: Github,    label: 'GitHub'    },
]

export default function NavBar() {
  const [scrolled, setScrolled]     = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'py-3 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10'
        : 'py-5 bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="w-11 shrink-0 transition-transform hover:scale-105">
          <img src={logo} alt="Prem Basnet" className="w-full" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`relative px-4 py-2 text-[14px] font-medium tracking-wide transition-colors duration-300 group no-underline ${
                activeLink === link.id ? 'text-accent' : 'text-white/70 hover:text-accent'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full
                bg-gradient-to-r from-accent to-accent-2 transition-all duration-300 ${
                activeLink === link.id ? 'w-3/4' : 'w-0 group-hover:w-3/4'
              }`} />
            </a>
          ))}
        </div>

        {/* Desktop right: socials + CTA */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center
                transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/15 hover:border-accent/40
                hover:shadow-[0_6px_20px_rgba(0,255,157,0.2)]"
            >
              <Icon size={15} className="text-white/70 group-hover:text-accent transition-colors" />
            </a>
          ))}
          <HashLink to="#contact" className="no-underline ml-2">
            <button className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-wide text-[#0a0a0a]
              bg-gradient-to-r from-accent to-accent-2
              transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0_10px_28px_rgba(0,255,157,0.45)]">
              Hire Me
            </button>
          </HashLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-accent transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => { setActiveLink(link.id); setMobileOpen(false) }}
                  className={`py-3 text-[14px] font-medium border-b border-white/5 no-underline transition-colors ${
                    activeLink === link.id ? 'text-accent' : 'text-white/70 hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-4">
                {socialLinks.map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center
                      hover:bg-accent/15 hover:border-accent/40 transition-all">
                    <Icon size={15} className="text-white/70" />
                  </a>
                ))}
                <HashLink to="#contact" className="ml-auto no-underline">
                  <button className="px-5 py-2 rounded-full font-bold text-[13px] text-[#0a0a0a]
                    bg-gradient-to-r from-accent to-accent-2">
                    Hire Me
                  </button>
                </HashLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
