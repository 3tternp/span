import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  { abbr: 'ISO 27001', name: 'ISO 27001:2022 Lead Auditor',              issuer: 'PECB / BSI',            category: 'Information Security Management'  },
  { abbr: 'CRTP',      name: 'CRTP – Certified Red Team Professional',   issuer: 'Altered Security',      category: 'Offensive Security / Red Teaming' },
  { abbr: '(ISC)²',    name: '(ISC)² CC',                                issuer: '(ISC)²',                category: 'Security Fundamentals'            },
  { abbr: 'CNSS',      name: 'CNSS: Certified Network Security Specialist',issuer:'ICSI, United Kingdom',  category: 'Network Security'                 },
  { abbr: 'AWS',       name: 'AWS Security Fundamentals',                 issuer: 'Amazon Web Services',  category: 'Cloud Security'                   },
  { abbr: 'API PCI',   name: 'API Security for PCI Compliance',           issuer: 'API Security Academy', category: 'API Security & Compliance'        },
  { abbr: 'API PT',    name: 'API Penetration Testing',                   issuer: 'API University',       category: 'Offensive Security'               },
  { abbr: 'RUS',       name: 'Ransomware Uncover Specialist',             issuer: 'ICTTF',                category: 'Threat Intelligence & Malware'    },
  { abbr: 'ECSA',      name: 'EC-Council Certified Security Analyst (ECSA)', issuer: 'EC-Council',        category: 'Penetration Testing'              },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 relative"
      style={{ background: 'linear-gradient(135deg, rgba(5,5,20,0.99) 0%, rgba(15,15,38,0.96) 100%)' }}
    >
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4  -translate-y-1/2 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #00B8FF 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center mb-4">&gt;&nbsp;Credentials</div>
          <h2 className="text-[42px] md:text-[50px] font-bold gradient-text mb-5">
            Certifications &amp; Credentials
          </h2>
          <p className="text-muted text-[17px] leading-relaxed max-w-[640px] mx-auto">
            Industry-recognized certifications validating expertise across information security
            management, offensive security, cloud, compliance, and threat intelligence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-white/10
                transition-colors duration-300 hover:border-accent/40
                hover:shadow-[0_12px_32px_rgba(0,255,157,0.15)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Badge icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-0.5
                border border-accent/30"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.18), rgba(0,184,255,0.18))' }}>
                <Award size={16} className="text-accent" />
                <span className="font-mono text-[8px] font-bold text-accent text-center leading-tight px-0.5">
                  {cert.abbr}
                </span>
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h4 className="text-[13px] font-semibold text-white leading-snug mb-1.5">{cert.name}</h4>
                <span className="font-mono text-[12px] font-medium text-accent block mb-1">{cert.issuer}</span>
                <span className="text-[10px] text-muted uppercase tracking-wide">{cert.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
