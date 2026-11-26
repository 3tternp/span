import Section from './Section.jsx'

const projects = [
  {
    title: 'Cloud Security Audits — AWS & Azure',
    description: 'Full-phase cloud security assessments covering configuration reviews, IAM analysis, network controls, and remediation guidance for AWS and Azure environments.',
    tags: ['AWS', 'Azure', 'Cloud VAPT', 'IAM Review', 'Config Audit'],
  },
  {
    title: 'IS Audit & GRC Programs',
    description: 'End-to-end information security audit engagements — scoping, control assessment, gap analysis, risk register development, and executive reporting.',
    tags: ['IS Audit', 'Risk Register', 'ISO 27001', 'Gap Analysis'],
  },
  {
    title: 'VAPT Engagements',
    description: 'Comprehensive network, web application, and API penetration testing engagements using industry-standard methodologies, from reconnaissance through remediation.',
    tags: ['Penetration Testing', 'Web App', 'API Security', 'Network VAPT'],
  },
  {
    title: 'Regulatory Compliance',
    description: 'Compliance readiness assessments and implementation support across multiple frameworks — helping organizations achieve and maintain certification.',
    tags: ['ISO 27001', 'SOC 2', 'PCI DSS', 'HIPAA', 'GDPR', 'COBIT'],
  },
  {
    title: 'CSOC & SIEM Operations',
    description: 'Design and management of Security Operations Centers — SIEM deployment, use case development, threat intelligence integration, and 24/7 monitoring.',
    tags: ['SIEM', 'SOC', 'Threat Intelligence', 'Incident Response'],
  },
  {
    title: 'Security Policy Development',
    description: 'Developing, reviewing, and updating organizational security policies, standards, and procedures aligned with ISO 27001:2022 and industry best practices.',
    tags: ['Policy Writing', 'ISO 27001:2022', 'ISMS', 'Standards'],
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="How I can help"
      intro="The kinds of work I take on, as an employee or as a consultant.">
      <ol className="divide-y divide-rule border-y border-rule">
        {projects.map(p => (
          <li key={p.title} className="py-6">
            <h3 className="font-serif text-xl leading-snug mb-1">{p.title}</h3>
            <p className="text-[15px] mb-2 max-w-2xl">{p.description}</p>
            <p className="text-[14px] text-muted">{p.tags.join(', ')}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8">
        Have something like this on your plate?{' '}
        <a href="#contact" className="underline underline-offset-4 decoration-accent hover:decoration-ink">Tell me about it</a>.
      </p>
    </Section>
  )
}
