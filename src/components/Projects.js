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
      title: "Cloud Security Audits — AWS & Azure",
      description: "Full-phase cloud security assessments covering configuration reviews, IAM analysis, network controls, and remediation guidance for AWS and Azure environments.",
      imgUrl: projImg1,
      tags: ["AWS", "Azure", "Cloud VAPT", "IAM Review", "Config Audit"]
    },
    {
      title: "IS Audit & GRC Programs",
      description: "End-to-end information security audit engagements — scoping, control assessment, gap analysis, risk register development, and executive reporting.",
      imgUrl: projImg2,
      tags: ["IS Audit", "Risk Register", "ISO 27001", "Gap Analysis"]
    },
    {
      title: "VAPT Engagements",
      description: "Comprehensive network, web application, and API penetration testing engagements using industry-standard methodologies, from reconnaissance through remediation.",
      imgUrl: projImg3,
      tags: ["Penetration Testing", "Web App", "API Security", "Network VAPT"]
    },
    {
      title: "Regulatory Compliance",
      description: "Compliance readiness assessments and implementation support across multiple frameworks — helping organizations achieve and maintain certification.",
      imgUrl: projImg4,
      tags: ["ISO 27001", "SOC 2", "PCI DSS", "HIPAA", "GDPR", "COBIT"]
    },
    {
      title: "CSOC & SIEM Operations",
      description: "Design and management of Security Operations Centers — SIEM deployment, use case development, threat intelligence integration, and 24/7 monitoring.",
      imgUrl: projImg5,
      tags: ["SIEM", "SOC", "Threat Intelligence", "Incident Response"]
    },
    {
      title: "Security Policy Development",
      description: "Developing, reviewing, and updating organizational security policies, standards, and procedures aligned with ISO 27001:2022 and industry best practices.",
      imgUrl: projImg6,
      tags: ["Policy Writing", "ISO 27001:2022", "ISMS", "Standards"]
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
                  <div className="section-label section-label--center">Featured Work</div>
                  <h2>Featured Work &amp; Engagements</h2>
                  <p>A selection of high-impact security engagements — from cloud security audits and penetration testing to full ISO 27001 implementation and CSOC operations — delivering measurable risk reduction across industries.</p>
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
