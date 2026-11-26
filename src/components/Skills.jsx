import Section from './Section.jsx'
import WindowDots from './WindowDots.jsx'

const categories = [
  {
    team: 'purple', label: 'Governance', path: 'governance',
    title: 'Governance, Risk & Compliance',
    desc: 'Navigating complex regulatory landscapes to build trust, reduce risk, and ensure business resilience.',
    skills: [
      'IS Audits', 'Policy Development', 'ISO 27001', 'SOC 2 Type I & II',
      'PCI DSS', 'HIPAA', 'GDPR', 'NIST Framework',
      'COBIT', 'Gap Analysis', 'Compliance Readiness', 'Risk Assessment',
    ],
  },
  {
    team: 'red', label: 'Red team', path: 'red-team',
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
    team: 'blue', label: 'Blue team', path: 'blue-team',
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

const TEAM_CLASS = { purple: 'team-purple', red: 'team-red', blue: 'team-blue' }

export default function Skills() {
  return (
    <Section id="skills" label="Skills &amp; abilities" title="Offence, defence and governance"
      intro="Red team, blue team, and the governance that ties them together: that is where purple team work lives.">
      <div className="grid lg:grid-cols-3 gap-6">
        {categories.map(c => (
          <article key={c.title} className={`glass p-6 flex flex-col ${TEAM_CLASS[c.team]}`}>
            <div className="flex items-center justify-between mb-5">
              <WindowDots />
              <span className="font-mono text-[11px] uppercase tracking-widest team-text">~/{c.path}</span>
            </div>
            <h3 className="font-serif text-2xl leading-snug mb-2">{c.title}</h3>
            <p className="text-[15px] text-muted mb-5">{c.desc}</p>
            <ul className="flex flex-wrap gap-2" aria-label={`${c.title} skills`}>
              {c.skills.map(sk => <li key={sk} className="chip">{sk}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
