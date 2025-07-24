import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "🎯 Vulnerability Assessment & Penetration Testing",
      description: "Advanced Network & Server-Side Security Analysis",
      imgUrl: projImg1,
    },
    {
      title: "🔍 Information Security Auditing",
      description: "Comprehensive Security Audit & Risk Assessment",
      imgUrl: projImg2,
    },
    {
      title: "✅ Regulatory Compliance",
      description: "GDPR, CCPA, HIPAA, SOC2, ISO/IEC 27001 Expertise",
      imgUrl: projImg3,
    },
    {
      title: "🛡️ Security Architecture",
      description: "Enterprise Security Framework Design",
      imgUrl: projImg4,
    },
    {
      title: "📊 Risk Management",
      description: "Strategic Risk Assessment & Mitigation",
      imgUrl: projImg5,
    },
    {
      title: "🔐 Incident Response",
      description: "Cybersecurity Incident Management & Recovery",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeInUp": ""}>
                <h2>🚀 Featured Projects & Expertise</h2>
                <p>As a seasoned cybersecurity practitioner, I've led numerous high-impact security initiatives spanning technical audits, vulnerability assessments, and penetration testing across network and server infrastructures. My expertise as a GRC Analyst encompasses comprehensive compliance readiness for HIPAA, CCPA, GDPR, ISO/IEC 27001, and SOC2 frameworks, ensuring organizations meet the highest security standards.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} size={12} sm={6} md={4} className="mb-4">
                                <ProjectCard {...project} />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
