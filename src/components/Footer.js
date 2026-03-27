import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={5} md={6} className="mb-4">
            <div className="footer-left">
              <h3>Prem Basnet</h3>
              <p className="footer-role">Information Security Officer &amp; Auditor</p>
              <p>Protecting digital assets through rigorous security assessments, strategic compliance programs, and innovative security architecture. Based in Kathmandu, Nepal — available for global engagements.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-right">
              <h4>Quick Links</h4>
              <div className="footer-nav-links">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#certifications">Credentials</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-right">
              <h4>Contact</h4>
              <div className="footer-contact-info">
                <p className="footer-contact-item">
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:basnetprem524@gmail.com">basnetprem524@gmail.com</a>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-label">Phone</span>
                  <a href="tel:+9779861375054">+977-9861375054</a>
                </p>
                <p className="footer-contact-item">
                  <span className="footer-contact-label">Location</span>
                  <span>Anamnagar, Kathmandu, Nepal</span>
                </p>
              </div>
              <div className="social-links mt-3">
                <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/astra.x3/" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prem Basnet. All rights reserved. | Anamnagar, Kathmandu, Nepal</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
