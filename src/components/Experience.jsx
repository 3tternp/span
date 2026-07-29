import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    title: 'CSOC & SIEM Manager',
    company: 'Vairav Technology',
    period: 'November 2025 – Present',
    type: 'Full-time',
    highlights: [
      'Configure, manage, and optimize SIEM to collect logs, correlate events, and detect security threats in real time',
      'Oversee security incident triage, investigate root causes, coordinate containment, and lead remediation efforts',
      'Define SOC processes, workflows, and SLAs; ensure continuous monitoring effectiveness',
      'Develop and tune SIEM use cases, integrate threat intelligence, and reduce false positives',
      'Produce security metrics, incident reports, and compliance dashboards for management and auditors',
    ],
  },
  {
    title: 'Information Security Officer',
    company: 'Vairav Technology',
    period: 'January 2023 – October 2025',
    type: 'Full-time',
    highlights: [
      'Developed, reviewed, and updated organizational security policies in compliance with ISO 27001:2022',
      'Led and supported multiple IS audit and GRC projects, ensuring scope compliance and smooth project execution',
      'Conducted cloud security audits and full-phase penetration testing on AWS & Azure platforms',
      'Served as reviewer for ISO 27001 certification, renewal, and surveillance audits',
    ],
  },
  {
    title: 'Lecturer',
    company: 'NAMI College',
    period: 'February 2025 – November 2025',
    type: 'Part-time',
    highlights: [
      'Delivered Networking course to undergraduate students',
      'Mentored students in applying practical networking skills in real-world scenarios',
    ],
  },
  {
    title: 'Visiting Tutor',
    company: 'Islington College',
    period: 'January 2022 – June 2022',
    type: 'Part-time',
    highlights: [
      'Delivered courses on Ethical Hacking, Security Auditing, and Penetration Testing',
      'Mentored students in applying practical cybersecurity skills and industry tools',
    ],
  },
  {
    title: 'System & Network Administrator & Security Auditor',
    company: 'Rigo Technology',
    period: 'December 2016 – December 2018',
    type: 'Full-time',
    highlights: [
      'Installed, configured, and maintained Windows & Linux servers (Ubuntu, Debian, CentOS) with CIS benchmark hardening',
      'Configured and managed firewalls, switches, and endpoint security solutions',
      'Conducted network and system security audits including vulnerability assessments and compliance checks',
      'Managed database environments (MSSQL, MySQL, Oracle, PostgreSQL) with focus on security and integrity',
    ],
  },
]

const education = [
  { degree: 'M.Sc. Information Technology',            institution: 'Islington College',                  period: '2024 – 2027', status: 'Running'   },
  { degree: 'BSc. Computer Science & IT',              institution: 'Madan Bhandari Memorial College',    period: '2012 – 2017', status: 'Completed' },
  { degree: '+2 Science (Computer)',                    institution: 'Ambition Academy H.S.S',             period: '2010 – 2012', status: 'Completed' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 relative"
      style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.98) 0%, rgba(10,10,25,0.95) 100%)' }}
    >
      {/* subtle accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #00FF9D 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <div className="section-label justify-center mb-4">&gt;&nbsp;Career History</div>
          <h2 className="text-[42px] md:text-[50px] font-bold gradient-text mb-5">
            Professional Experience
          </h2>
          <p className="text-muted text-[17px] leading-relaxed max-w-[640px] mx-auto">
            9+ years of progressive cybersecurity experience spanning security operations, IS auditing,
            penetration testing, and compliance across multiple industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12">

          {/* Timeline */}
          <div>
            <h3 className="flex items-center gap-2 text-[20px] font-semibold text-white mb-8
              pb-3 border-b border-white/10">
              <Briefcase size={18} className="text-accent" /> Work History
            </h3>

            <div className="relative pl-8">
              {/* vertical line */}
              <div className="absolute left-[7px] top-1 bottom-0 w-px"
                style={{ background: 'linear-gradient(180deg, #00FF9D 0%, rgba(0,184,255,0.3) 100%)' }} />

              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative mb-7 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                >
                  {/* dot */}
                  <div className="absolute -left-[25px] top-4 w-3.5 h-3.5 rounded-full pulse-ring
                    border-2 border-[#0a0a0a]"
                    style={{ background: 'linear-gradient(135deg, #00FF9D, #00B8FF)' }} />

                  <motion.div
                    className="rounded-2xl p-5 border border-white/[0.09] border-l-2
                      transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,255,157,0.1)] group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                      borderLeftColor: 'rgba(0,255,157,0.25)',
                      backdropFilter: 'blur(10px)',
                    }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                      <h4 className="text-[15px] font-bold text-white leading-tight">{exp.title}</h4>
                      <span className="font-mono text-[11px] font-semibold text-accent whitespace-nowrap shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[13px] text-muted">{exp.company}</span>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide
                        text-white/55 border border-accent-2/25 bg-accent-2/10">
                        {exp.type}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((pt, j) => (
                        <li key={j} className="text-[13px] text-muted leading-relaxed pl-4 relative">
                          <span className="absolute left-0 text-accent font-bold text-[16px] leading-[1.3]">›</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-[20px] font-semibold text-white mb-8
              pb-3 border-b border-white/10">
              <GraduationCap size={18} className="text-accent" /> Education
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="rounded-2xl p-5 border border-white/[0.09]
                    transition-all duration-300 hover:border-accent/30
                    hover:shadow-[0_6px_20px_rgba(0,255,157,0.08)]"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-[10px] font-semibold px-2.5 py-1 rounded-full
                      uppercase tracking-wider
                      ${edu.status === 'Running'
                        ? 'bg-accent/20 border border-accent/40 text-accent'
                        : 'bg-white/10 border border-white/20 text-white/55'
                      }`}>
                      {edu.status}
                    </span>
                    <span className="font-mono text-[12px] text-muted">{edu.period}</span>
                  </div>
                  <h5 className="text-[14px] font-semibold text-white leading-snug mb-1.5">{edu.degree}</h5>
                  <span className="text-[13px] text-muted">{edu.institution}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
