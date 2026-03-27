import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const experiences = [
  {
    title: "CSOC & SIEM Manager",
    company: "Vairav Technology",
    period: "November 2025 – Present",
    type: "Full-time",
    highlights: [
      "Configure, manage, and optimize SIEM to collect logs, correlate events, and detect security threats in real time",
      "Oversee security incident triage, investigate root causes, coordinate containment, and lead remediation efforts",
      "Define SOC processes, workflows, and SLAs; ensure continuous monitoring effectiveness",
      "Develop and tune SIEM use cases, integrate threat intelligence, and reduce false positives",
      "Produce security metrics, incident reports, and compliance dashboards for management and auditors"
    ]
  },
  {
    title: "Information Security Officer",
    company: "Vairav Technology",
    period: "January 2023 – October 2025",
    type: "Full-time",
    highlights: [
      "Developed, reviewed, and updated organizational security policies in compliance with ISO 27001:2022",
      "Led and supported multiple IS audit and GRC projects, ensuring scope compliance and smooth project execution",
      "Conducted cloud security audits and full-phase penetration testing on AWS & Azure platforms",
      "Served as reviewer for ISO 27001 certification, renewal, and surveillance audits"
    ]
  },
  {
    title: "Lecturer",
    company: "NAMI College",
    period: "February 2025 – November 2025",
    type: "Part-time",
    highlights: [
      "Delivered Networking course to undergraduate students",
      "Mentored students in applying practical networking skills in real-world scenarios"
    ]
  },
  {
    title: "Visiting Tutor",
    company: "Islington College",
    period: "January 2022 – June 2022",
    type: "Part-time",
    highlights: [
      "Delivered courses on Ethical Hacking, Security Auditing, and Penetration Testing",
      "Mentored students in applying practical cybersecurity skills and industry tools"
    ]
  },
  {
    title: "System & Network Administrator & Security Auditor",
    company: "Rigo Technology",
    period: "December 2016 – December 2018",
    type: "Full-time",
    highlights: [
      "Installed, configured, and maintained Windows & Linux servers (Ubuntu, Debian, CentOS) with CIS benchmark hardening",
      "Configured and managed firewalls, switches, and endpoint security solutions",
      "Conducted network and system security audits including vulnerability assessments and compliance checks",
      "Managed database environments (MSSQL, MySQL, Oracle, PostgreSQL) with focus on security and integrity"
    ]
  }
];

const education = [
  {
    degree: "M.Sc. Information Technology",
    institution: "Islington College",
    period: "2024 – 2027",
    status: "Running"
  },
  {
    degree: "BSc. Computer Science & Information Technology",
    institution: "Madan Bhandari Memorial College",
    period: "2012 – 2017",
    status: "Completed"
  },
  {
    degree: "+2 Science (Computer)",
    institution: "Ambition Academy H.S.S",
    period: "2010 – 2012",
    status: "Completed"
  }
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
              <div className="section-header text-center">
                <h2>Professional Experience</h2>
                <p>9+ years of progressive cybersecurity experience spanning security operations, IS auditing, penetration testing, and compliance across multiple industries.</p>
              </div>
              <Row className="mt-5">
                <Col lg={8} className="mb-5">
                  <h3 className="subsection-title">Work History</h3>
                  <div className="timeline">
                    {experiences.map((exp, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                          <div className="timeline-header">
                            <h4 className="timeline-title">{exp.title}</h4>
                            <span className="timeline-period">{exp.period}</span>
                          </div>
                          <div className="timeline-company">
                            <span>{exp.company}</span>
                            <span className="timeline-type">{exp.type}</span>
                          </div>
                          <ul className="timeline-highlights">
                            {exp.highlights.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={4}>
                  <h3 className="subsection-title">Education</h3>
                  <div className="education-list">
                    {education.map((edu, index) => (
                      <div className="education-card" key={index}>
                        <div className="edu-status">
                          <span className={`edu-badge ${edu.status === 'Running' ? 'edu-badge--active' : ''}`}>
                            {edu.status}
                          </span>
                          <span className="edu-period">{edu.period}</span>
                        </div>
                        <h5 className="edu-degree">{edu.degree}</h5>
                        <span className="edu-institution">{edu.institution}</span>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
