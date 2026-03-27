import { Container, Row, Col } from "react-bootstrap";
import { Award } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const certifications = [
  {
    abbr: "CEH",
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    category: "Offensive Security"
  },
  {
    abbr: "CISA",
    name: "Certified Information Systems Auditor",
    issuer: "ISACA",
    category: "Audit & Assurance"
  },
  {
    abbr: "Sec+",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    category: "Security Fundamentals"
  },
  {
    abbr: "ISO 27001",
    name: "Lead Auditor",
    issuer: "BSI / PECB",
    category: "Information Security Management"
  },
  {
    abbr: "OSCP",
    name: "Offensive Security Certified Professional",
    issuer: "OffSec",
    category: "Penetration Testing"
  },
  {
    abbr: "CDPSE",
    name: "Certified Data Privacy Solutions Engineer",
    issuer: "ISACA",
    category: "Data Privacy"
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
                <p>Industry-recognized certifications validating expertise across cybersecurity, penetration testing, compliance, and information security management.</p>
              </div>
              <Row className="mt-5">
                {certifications.map((cert, index) => (
                  <Col md={4} sm={6} key={index} className="mb-4">
                    <div className="cert-card">
                      <div className="cert-badge">
                        <Award size={20} />
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
