import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const toRotate = [ "Information Security Professional", "GRC Analyst", "Compliance Officer" ];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, loopNum, isDeleting, text])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <span className="tagline">Cybersecurity Expert &amp; Security Consultant</span>
                  <h1>{`Hi, I'm Prem Basnet`}</h1>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>An experienced cybersecurity professional with over 9 years of experience protecting critical systems and sensitive data. Specializing in security audits, vulnerability assessments, compliance frameworks, and strategic security initiatives that safeguard organizations against evolving cyber threats.</p>
                  <div className="banner-btns">
                    <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                      Explore My Work <ArrowRightCircle size={22} />
                    </button>
                    <a href="#contact" className="banner-btn-outline">
                      Get In Touch
                    </a>
                  </div>
                  <div className="stats-row">
                    <div className="stat-item">
                      <h3>9+</h3>
                      <span>Years Experience</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <h3>50+</h3>
                      <span>Security Audits</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <h3>30+</h3>
                      <span>Compliance Projects</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <h3>20+</h3>
                      <span>VAPT Engagements</span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <img src={headerImg} alt="Prem Basnet - Cybersecurity Professional" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
