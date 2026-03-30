import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Prem Basnet"
                />
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-label">Get In Touch</div>
                  <h2>Let's Work Together</h2>
                  <p className="contact-sub">Have a security challenge or compliance requirement? I'd love to hear about it.</p>

                  <form action="https://formsubmit.co/basnetprem524@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://basnetprem.com.np/thank-you.html" />
                    <input type="hidden" name="_template" value="table" />

                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" name="First Name" placeholder="First Name" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="text" name="Last Name" placeholder="Last Name" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="email" name="Email" placeholder="Email Address" required />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" name="Phone" placeholder="Phone No." />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" name="Message" placeholder="Tell me about your project or inquiry..." required></textarea>
                        <button type="submit"><span>Send Message</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
