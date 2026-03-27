import { Container, Row, Col } from "react-bootstrap";
import { Award } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const certifications = [
  {
    abbr: "ISO 27001",
    name: "Lead Auditor — ISO 27001:2022",
    issuer: "PECB / BSI",
    category: "Information Security Management"
  },
  {
    abbr: "CRTP",
    name: "Certified Red Team Professional",
    issuer: "Altered Security",
    category: "Offensive Security / Red Teaming"
  },
  {
    abbr: "(ISC)² CC",
    name: "Certified in Cybersecurity",
    issuer: "(ISC)²",
    category: "Security Fundamentals"
  },
  {
    abbr: "CNSS",
    name: "Certified Network Security Specialist",
    issuer: "ICSI, United Kingdom",
    category: "Network Security"
  },
  {
    abbr: "AWS",
    name: "AWS Security Fundamentals",
    issuer: "Amazon Web Services",
    category: "Cloud Security"
  },
  {
    abbr: "API PCI",
    name: "API Security for PCI Compliance",
    issuer: "API Security Academy",
    category: "API Security & Compliance"
  },
  {
    abbr: "API PT",
    name: "API Penetration Testing",
    issuer: "API University",
    category: "Offensive Security"
  },
  {
    abbr: "RUS",
    name: "Ransomware Uncover Specialist",
    issuer: "ICTTF",
    category: "Threat Intelligence & Malware"
  }
];

export const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
              <div className="section-header text-center">
                <h2>Certifications &amp; Credentials</h2>
                <p>Industry-recognized certifications validating expertise across information security management, offensive security, cloud, compliance, and threat intelligence.</p>
              </div>
              <Row className="mt-5">
                {certifications.map((cert, index) => (
                  <Col md={3} sm={6} key={index} className="mb-4">
                    <div className="cert-card">
                      <div className="cert-badge">
                        <Award size={18} />
                        <span className="cert-abbr">{cert.abbr}</span>
                      </div>
                      <div className="cert-info">
                        <h5>{cert.name}</h5>
                        <span className="cert-issuer">{cert.issuer}</span>
                        <span className="cert-category">{cert.category}</span>
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
