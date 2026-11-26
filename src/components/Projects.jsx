import Section from './Section.jsx'
import WindowDots from './WindowDots.jsx'

const projects = [
  {
    team: 'purple',
    title: 'Cloud Security Audits — AWS & Azure',
    description: 'Full-phase cloud security assessments covering configuration reviews, IAM analysis, network controls, and remediation guidance for AWS and Azure environments.',
    tags: ['AWS', 'Azure', 'Cloud VAPT', 'IAM Review', 'Config Audit'],
  },
  {
    team: 'purple',
    title: 'IS Audit & GRC Programs',
    description: 'End-to-end information security audit engagements — scoping, control assessment, gap analysis, risk register development, and executive reporting.',
    tags: ['IS Audit', 'Risk Register', 'ISO 27001', 'Gap Analysis'],
  },
  {
    team: 'red',
    title: 'VAPT Engagements',
    description: 'Comprehensive network, web application, and API penetration testing engagements using industry-standard methodologies, from reconnaissance through remediation.',
    tags: ['Penetration Testing', 'Web App', 'API Security', 'Network VAPT'],
  },
  {
    team: 'purple',
    title: 'Regulatory Compliance',
    description: 'Compliance readiness assessments and implementation support across multiple frameworks — helping organizations achieve and maintain certification.',
    tags: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR', 'COBIT'],
  },
  {
    team: 'blue',
    title: 'CSOC & SIEM Operations',
    description: 'Design and management of Security Operations Centers — SIEM deployment, use case development, threat intelligence integration, and 24/7 monitoring.',
    tags: ['SIEM', 'SOC', 'Threat Intelligence', 'Incident Response'],
  },
  {
    team: 'purple',
    title: 'Security Policy Development',
    description: 'Developing, reviewing, and updating organizational security policies, standards, and procedures aligned with ISO 27001:2022 and industry best practices.',
    tags: ['Policy Writing', 'ISO 27001:2022', 'ISMS', 'Standards'],
  },
]

const TEAM = {
  purple: { label: 'Governance', cls: 'team-purple' },
  red:    { label: 'Red team',   cls: 'team-red'    },
  blue:   { label: 'Blue team',  cls: 'team-blue'   },
}

export default function Projects() {
  return (
    <Section id="projects" label="Services" title="How I can help"
      intro="The kinds of work I take on, as an employee or as a consultant.">
      <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <li key={p.title} className={`glass p-6 flex flex-col ${TEAM[p.team].cls}`}>
            <div className="flex items-center justify-between mb-5">
              <WindowDots />
              <span className="font-mono text-[11px] uppercase tracking-widest team-text">{TEAM[p.team].label}</span>
            </div>
            <h3 className="font-serif text-xl leading-snug mb-2">{p.title}</h3>
            <p className="text-[15px] text-muted mb-4">{p.description}</p>
            <ul className="flex flex-wrap gap-2 mt-auto" aria-label="Topics">
              {p.tags.map(t => <li key={t} className="chip">{t}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-center">
        Have something like this on your plate?{' '}
        <a href="#contact" className="text-accent underline underline-offset-4">Tell me about it</a>.
      </p>
    </Section>
  )
}
