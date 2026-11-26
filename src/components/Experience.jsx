import Section from './Section.jsx'

const experiences = [
  {
    title: 'Manager, SIEM & CSOC',
    company: 'Cyber Universe Europe',
    period: 'January 2026 – Present',
    type: 'Full-time',
    highlights: [
      'Lead SIEM operations and CSOC monitoring for European client environments, working remotely with a distributed international team',
      'Configure and optimize SIEM use cases, correlation rules, and threat detection workflows',
      'Oversee incident triage, investigation, and coordinated remediation across distributed teams',
      'Deliver security metrics, incident reporting, and compliance dashboards to international stakeholders',
    ],
  },
  {
    title: 'Manager, SIEM & CSOC',
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
    title: 'Team Lead, IS Audit & GRC',
    company: 'Vairav Technology',
    period: '2023 – November 2025',
    type: 'Full-time',
    highlights: [
      'Led and mentored the IS audit and GRC team, overseeing scope, quality, and timely delivery of engagements',
      'Served as reviewer for ISO 27001 certification, renewal, and surveillance audits',
      'Directed full-phase penetration testing and cloud security audit engagements on AWS & Azure',
      'Reported audit findings, risk posture, and remediation plans to senior management and clients',
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
    title: 'IS Audit and GRC Analyst and ISO',
    company: 'Vairav Technology',
    period: '2021 – 2023',
    type: 'Full-time',
    highlights: [
      'Developed, reviewed, and updated organizational security policies in compliance with ISO 27001:2022',
      'Conducted IS audits, gap analysis, and risk assessments across business units',
      'Supported cloud security audits and penetration testing engagements on AWS & Azure platforms',
      'Served as Information Security Officer (ISO), coordinating compliance efforts across teams',
    ],
  },
  {
    title: 'Senior Security Engineer',
    company: 'Vairav Technology',
    period: '2019 – 2021',
    type: 'Full-time',
    highlights: [
      'Led a team conducting VAPT (vulnerability assessment & penetration testing) across web/mobile applications, networks, and server environments',
      'Performed technology audits of applications, network infrastructure, and server environments for enterprise clients',
      'Mentored junior security engineers on penetration testing methodologies and reporting standards',
      'Delivered remediation guidance and technical findings to stakeholders',
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

const RECENT = 4

function Role({ exp }) {
  return (
    <li className="relative pl-9 pb-8 last:pb-0">
      <span aria-hidden="true" className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-paper"
        style={{ boxShadow: '0 0 14px 2px color-mix(in srgb, var(--accent) 60%, transparent)' }} />
      <article className="glass p-5">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
          <h3 className="font-serif text-xl leading-snug">{exp.title}</h3>
          <span className="font-mono text-[12px] text-accent whitespace-nowrap">{exp.period}</span>
        </div>
        <p className="text-muted mb-3">
          {exp.company} <span className="font-mono text-[11px] uppercase tracking-wider ml-1 px-2 py-0.5 rounded-full border border-rule">{exp.type}</span>
        </p>
        <ul className="space-y-1.5 text-[15px]">
          {exp.highlights.map((pt, j) => (
            <li key={j} className="relative pl-5">
              <span aria-hidden="true" className="absolute left-0 text-accent font-mono">&rsaquo;</span>
              {pt}
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}

export default function Experience() {
  const recent = experiences.slice(0, RECENT)
  const earlier = experiences.slice(RECENT)

  return (
    <Section id="experience" label="Career history" title="Professional experience"
      intro="Ten years across security operations, IS audit, penetration testing and compliance.">
      <div className="grid lg:grid-cols-[1.7fr_1fr] gap-10">
        <div>
          <p className="mb-6 font-mono text-[13px]">
            <a href="/Prem-Basnet-CV.pdf" download className="text-accent underline underline-offset-4">&darr; download my CV (PDF)</a>
          </p>
          <div className="relative">
            <span aria-hidden="true" className="absolute left-[6px] top-3 bottom-3 w-px"
              style={{ background: 'linear-gradient(180deg, var(--offense), var(--accent) 50%, var(--defense))', opacity: 0.55 }} />
            <ol className="relative">
              {recent.map((exp, i) => <Role key={i} exp={exp} />)}
            </ol>

            <details className="group relative pl-9 mt-8">
              <summary className="glass cursor-pointer list-none px-5 py-3.5 flex items-center justify-between font-mono text-[13px] hover:text-accent">
                <span>earlier roles ({earlier.length}) · 2016 – 2022</span>
                <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <ol className="relative mt-8">
                {earlier.map((exp, i) => <Role key={i} exp={exp} />)}
              </ol>
            </details>
          </div>
        </div>

        <aside>
          <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent mb-5">Education</h3>
          <ul className="space-y-4">
            {education.map((edu, i) => (
              <li key={i} className="glass p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${edu.status === 'Running' ? 'border-accent text-accent' : 'border-rule text-muted'}`}>
                    {edu.status === 'Running' ? 'ongoing' : 'completed'}
                  </span>
                  <span className="font-mono text-[12px] text-muted">{edu.period}</span>
                </div>
                <p className="font-medium leading-snug">{edu.degree}</p>
                <p className="text-muted text-[14px]">{edu.institution}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}
