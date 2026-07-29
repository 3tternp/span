import { motion } from 'framer-motion'
import { Shield, Crosshair, Server } from 'lucide-react'

const categories = [
  {
    Icon: Shield,
    title: 'Governance, Risk & Compliance',
    desc: 'Navigating complex regulatory landscapes to build trust, reduce risk, and ensure business resilience.',
    skills: [
      'IS Audits', 'Policy Development', 'ISO 27001', 'SOC 2 Type I & II',
      'PCI DSS', 'HIPAA', 'GDPR', 'NIST Framework',
      'COBIT', 'Gap Analysis', 'Compliance Readiness', 'Risk Assessment',
    ],
  },
  {
    Icon: Crosshair,
    title: 'Offensive Security & VAPT',
    desc: 'Identifying and exploiting vulnerabilities before adversaries do — strengthening defenses through real-world attack simulation.',
    skills: [
      'Penetration Testing', 'Vulnerability Assessment', 'Cloud Security (AWS & Azure)',
      'API Security Testing', 'Network VAPT', 'Web Application Testing',
      'Red Teaming', 'Ethical Hacking', 'Reconnaissance & Enumeration',
      'Exploit Development', 'Ransomware Analysis', 'OWASP Top 10',
    ],
  },
  {
    Icon: Server,
    title: 'Infrastructure & Operations',
    desc: 'Securing and hardening enterprise infrastructure through proven frameworks, monitoring, and incident management.',
    skills: [
      'SIEM Management', 'CSOC Operations', 'Firewall & Server Hardening',
      'CIS Benchmark', 'Network Security', 'System Administration (Windows & Linux)',
      'Database Security (MSSQL, MySQL, Oracle, PostgreSQL)',
      'Endpoint Protection', 'Incident Response', 'Threat Intelligence',
      'Log Analysis & Correlation', 'Security Architecture',
    ],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 relative"
      style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.97) 0%, rgba(13,25,18,0.93) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label justify-center text-center mb-4">
            &gt;&nbsp;Skills &amp; Abilities
          </div>
          <h2 className="text-[42px] md:text-[50px] font-bold gradient-text mb-5">
            Areas of Expertise
          </h2>
          <p className="text-muted text-[17px] leading-relaxed max-w-[640px] mx-auto">
            Multidisciplinary cybersecurity expertise spanning governance, offensive security,
            and infrastructure operations — trusted by organizations to design and implement
            comprehensive security programs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative rounded-2xl p-8 border border-white/10 overflow-hidden group cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl
                bg-gradient-to-r from-accent to-accent-2
                scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* macOS dots */}
              <div className="flex items-center gap-[6px] mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4
                border border-accent/30"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,157,0.18), rgba(0,184,255,0.18))' }}>
                <cat.Icon size={22} className="text-accent" />
              </div>

              <h3 className="font-mono text-[17px] font-bold text-white mb-3">{cat.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed mb-5">{cat.desc}</p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j}
                    className="font-mono text-[11.5px] font-medium px-3 py-1 rounded-full
                      bg-accent/10 border border-accent/25 text-white/90 tracking-wide
                      transition-all duration-200 hover:bg-accent/22 hover:border-accent/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
