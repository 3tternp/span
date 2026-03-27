import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const skillCategories = [
  {
    title: "Security Operations",
    description: "Protecting infrastructure through proactive defense, monitoring, and rapid threat response.",
    skills: [
      "Incident Response",
      "Threat Intelligence",
      "SIEM Management",
      "Security Architecture",
      "Network Security",
      "Endpoint Protection",
      "Log Analysis",
      "Threat Hunting"
    ]
  },
  {
    title: "Offensive Security",
    description: "Identifying and exploiting vulnerabilities before adversaries do, strengthening your defenses.",
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Testing",
      "API Security Testing",
      "Network VAPT",
      "Social Engineering",
      "Red Teaming",
      "OWASP Top 10"
    ]
  },
  {
    title: "Compliance & GRC",
    description: "Navigating complex regulatory landscapes to build trust and ensure business resilience.",
    skills: [
      "GDPR",
      "HIPAA",
      "SOC2 Type I & II",
      "ISO/IEC 27001",
      "CCPA",
      "PCI DSS",
      "NIST Framework",
      "CIS Controls"
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
                <h2>Areas of Expertise</h2>
                <p>Multidisciplinary cybersecurity expertise spanning technical assessments, security operations, and regulatory compliance — trusted by organizations to design and implement comprehensive security programs.</p>
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
