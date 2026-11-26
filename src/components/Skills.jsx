import Section from './Section.jsx'

const categories = [
  {
    title: 'Governance, Risk & Compliance',
    desc: 'Navigating complex regulatory landscapes to build trust, reduce risk, and ensure business resilience.',
    skills: [
      'IS Audits', 'Policy Development', 'ISO 27001', 'SOC 2 Type I & II',
      'PCI DSS', 'HIPAA', 'GDPR', 'NIST Framework',
      'COBIT', 'Gap Analysis', 'Compliance Readiness', 'Risk Assessment',
    ],
  },
  {
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

export default function Skills() {
  return (
    <Section id="skills" title="Skills" tint
      intro="Mostly compliance and audit work, penetration testing, and running security operations.">
      <dl className="divide-y divide-rule border-y border-rule">
        {categories.map(c => (
          <div key={c.title} className="py-6 grid md:grid-cols-[200px_1fr] gap-2 md:gap-8">
            <dt className="font-serif text-xl leading-snug">{c.title}</dt>
            <dd>
              <p className="text-muted mb-3">{c.desc}</p>
              <p className="text-[15px] leading-relaxed">{c.skills.join(' · ')}</p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
