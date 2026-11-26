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

export default function Experience() {
  return (
    <Section id="experience" title="Experience"
      intro="Ten years across security operations, IS audit, penetration testing and compliance.">
      <p className="mb-6">
        <a href="/Prem-Basnet-CV.pdf" download className="underline underline-offset-4 decoration-accent hover:decoration-ink">Download my CV (PDF)</a>
      </p>
      <div className="divide-y divide-rule border-y border-rule">
        {experiences.map((exp, i) => (
          <article key={i} className="py-6 grid md:grid-cols-[170px_1fr] gap-2 md:gap-8">
            <p className="text-[14px] text-muted">
              {exp.period}
              <span className="block">{exp.type}</span>
            </p>
            <div>
              <h3 className="font-serif text-xl leading-snug">{exp.title}</h3>
              <p className="text-muted mb-3">{exp.company}</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[15px] marker:text-muted">
                {exp.highlights.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h3 className="font-serif text-2xl mt-14 mb-4">Education</h3>
      <ul className="divide-y divide-rule border-y border-rule">
        {education.map((edu, i) => (
          <li key={i} className="py-4 grid md:grid-cols-[170px_1fr] gap-1 md:gap-8">
            <span className="text-[14px] text-muted">
              {edu.period}{edu.status === 'Running' ? ' (ongoing)' : ''}
            </span>
            <span>
              <span className="font-medium">{edu.degree}</span>
              <span className="text-muted"> — {edu.institution}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
