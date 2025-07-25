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
  }, [delta, loopNum, isDeleting, text, toRotate, period])

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                <span className="tagline">✨ Welcome to World of Astra ✨</span>
                <h1>{`Hi! I'm Prem Basnet`}</h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Information Security Professional", "GRC Analyst", "Compliance Officer"]'><span className="wrap">{text}</span></span></h1>
                  <p>🛡️ An experienced cybersecurity Professional with over 9 years of experience in protecting critical systems and data. Specializing in security audits, vulnerability assessments, compliance frameworks, and leading innovative security initiatives that safeguard organizations against evolving cyber threats.</p>
                  <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}>
                    Explore My Work <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
