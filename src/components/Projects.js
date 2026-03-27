import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vulnerability Assessment & Penetration Testing",
      description: "Comprehensive network and server-side security analysis identifying critical vulnerabilities before adversaries can exploit them.",
      imgUrl: projImg1,
      tags: ["VAPT", "Network Security", "Nessus", "Burp Suite"]
    },
    {
      title: "Information Security Auditing",
      description: "End-to-end IS audit engagements covering control assessments, risk identification, and executive-level reporting.",
      imgUrl: projImg2,
      tags: ["IS Audit", "Risk Assessment", "ISO 27001", "Reporting"]
    },
    {
      title: "Regulatory Compliance",
      description: "Guiding organizations through complex compliance requirements with gap analysis, remediation roadmaps, and audit readiness.",
      imgUrl: projImg3,
      tags: ["GDPR", "HIPAA", "SOC2", "CCPA", "PCI DSS"]
    },
    {
      title: "Security Architecture",
      description: "Designing and implementing enterprise security frameworks that align with business objectives and industry best practices.",
      imgUrl: projImg4,
      tags: ["Zero Trust", "NIST", "CIS Controls", "Framework Design"]
    },
    {
      title: "Risk Management",
      description: "Strategic risk assessment and mitigation planning to reduce exposure and build organizational cyber resilience.",
      imgUrl: projImg5,
      tags: ["Risk Assessment", "Threat Modeling", "Business Continuity"]
    },
    {
      title: "Incident Response",
      description: "Rapid containment, investigation, and recovery from cybersecurity incidents, minimizing business impact and data loss.",
      imgUrl: projImg6,
      tags: ["IR Planning", "Forensics", "Recovery", "Post-Incident Review"]
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2>Featured Work &amp; Expertise</h2>
                  <p>A selection of high-impact security engagements spanning penetration testing, compliance audits, and security architecture — delivering measurable risk reduction for clients across industries.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} size={12} sm={6} md={4} className="mb-4">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
