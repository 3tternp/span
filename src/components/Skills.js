import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const skillCategories = [
  {
    title: "Governance, Risk & Compliance",
    description: "Navigating complex regulatory landscapes to build trust, reduce risk, and ensure business resilience.",
    skills: [
      "IS Audits",
      "Policy Development",
      "ISO 27001",
      "SOC 2 Type I & II",
      "PCI DSS",
      "HIPAA",
      "GDPR",
      "NIST Framework",
      "COBIT",
      "Gap Analysis",
      "Compliance Readiness",
      "Risk Assessment"
    ]
  },
  {
    title: "Offensive Security & VAPT",
    description: "Identifying and exploiting vulnerabilities before adversaries do — strengthening defenses through real-world attack simulation.",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Cloud Security (AWS & Azure)",
      "API Security Testing",
      "Network VAPT",
      "Web Application Testing",
      "Red Teaming",
      "Ethical Hacking",
      "Reconnaissance & Enumeration",
      "Exploit Development",
      "Ransomware Analysis",
      "OWASP Top 10"
    ]
  },
  {
    title: "Infrastructure & Operations",
    description: "Securing and hardening enterprise infrastructure through proven frameworks, monitoring, and incident management.",
    skills: [
      "SIEM Management",
      "CSOC Operations",
      "Firewall & Server Hardening",
      "CIS Benchmark",
      "Network Security",
      "System Administration (Windows & Linux)",
      "Database Security (MSSQL, MySQL, Oracle, PostgreSQL)",
      "Endpoint Protection",
      "Incident Response",
      "Threat Intelligence",
      "Log Analysis & Correlation",
      "Security Architecture"
    ]
  }
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
              <div className="section-header text-center">
                <div className="section-label section-label--center">Skills &amp; Abilities</div>
                <h2>Areas of Expertise</h2>
                <p>Multidisciplinary cybersecurity expertise spanning governance, offensive security, and infrastructure operations — trusted by organizations to design and implement comprehensive security programs.</p>
              </div>
              <Row className="mt-5">
                {skillCategories.map((category, index) => (
                  <Col md={4} key={index} className="mb-4">
                    <div className="skill-category-card">
                      <h4>{category.title}</h4>
                      <p className="category-desc">{category.description}</p>
                      <div className="skill-tags">
                        {category.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
