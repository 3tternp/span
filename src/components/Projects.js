import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vulnerability Assessment and Penetration Testing",
      description: "Specially Focus on Network and Server-Side",
      imgUrl: projImg1,
    },
    {
      title: "Auditor",
      description: "Information Security Auditor",
      imgUrl: projImg2,
    },
    {
      title: "Compliance",
      description: "Familiar and work in GDPR, CCPA, HIPAA, SOC2, ISO/IEC 27001",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a cyber security practitioner I have involved in lots of technical audit prespective including Network and Server side Vulerability Assessment and Penetration Testing. Beside that as a GRC Analyst I have involved in readiness of various Compliance like HIPAA, CCPA, GDPR, ISO/IEC 27001, SOC2.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">VAPT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Audit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Compliance</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>As a cyber security practitioner I have involved in lots of technical audit prespective including Network and Server side Vulnerability Assessment and Penetration Testing</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>As a GRC Analyst I have involved in readiness of various Compliance like HIPAA, CCPA, GDPR, ISO/IEC 27001, SOC2.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
