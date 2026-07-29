import { Linkedin, Github, Instagram } from 'lucide-react'

const navLinks = [
  { href: '#home',          label: 'Home'        },
  { href: '#skills',        label: 'Skills'      },
  { href: '#experience',    label: 'Experience'  },
  { href: '#certifications',label: 'Credentials' },
  { href: '#projects',      label: 'Work'        },
  { href: '#contact',       label: 'Contact'     },
]

const social = [
  { href: 'https://www.linkedin.com/in/prem-basnet524/', Icon: Linkedin,  label: 'LinkedIn'  },
  { href: 'https://github.com/3tternp',                  Icon: Github,    label: 'GitHub'    },
  { href: 'https://www.instagram.com/astra.x3/',         Icon: Instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 relative border-t border-white/10"
      style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(13,25,18,0.93) 100%)' }}
    >
      {/* top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #00FF9D 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <h3 className="text-[22px] font-bold gradient-text mb-2">Prem Basnet</h3>
            <p className="font-mono text-[12px] text-accent mb-4 uppercase tracking-widest">
              Information Security Officer &amp; Auditor
            </p>
            <p className="text-[14px] text-muted leading-relaxed mb-6">
              Protecting digital assets through rigorous security assessments, strategic compliance
              programs, and innovative security architecture. Based in Kathmandu, Nepal — available
              for global engagements.
            </p>
            <div className="flex items-center gap-3">
              {social.map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center
                    no-underline transition-all duration-300 hover:-translate-y-0.5
                    hover:bg-accent/15 hover:border-accent/40 hover:shadow-[0_6px_18px_rgba(0,255,157,0.2)]">
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}
                  className="text-[14px] text-muted no-underline transition-colors hover:text-accent w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Email',    value: 'basnetprem524@gmail.com', href: 'mailto:basnetprem524@gmail.com' },
                { label: 'Phone',   value: '+977-9861375054',          href: 'tel:+9779861375054'             },
                { label: 'Location',value: 'Anamnagar, Kathmandu, Nepal', href: null                          },
              ].map(item => (
                <div key={item.label}>
                  <div className="font-mono text-[10px] text-muted/60 uppercase tracking-widest mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-[14px] text-white/80 no-underline hover:text-accent transition-colors">{item.value}</a>
                    : <span className="text-[14px] text-white/80">{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-muted/60 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Prem Basnet. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted/40 text-center">
            Anamnagar, Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}
