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
              <h3>Astra — Cybersecurity Excellence</h3>
              <p>Protecting digital assets through rigorous security assessments, strategic compliance programs, and innovative security architecture. Your trusted partner in building cyber resilience.</p>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-right">
              <h4>Quick Links</h4>
              <div className="footer-nav-links">
                <a href="#home">Home</a>
                <a href="#skills">Expertise</a>
                <a href="#certifications">Credentials</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </Col>
          <Col lg={4} md={12} className="mb-4">
            <div className="footer-right">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/3tternp" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.instagram.com/astra.x3/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100051820911738" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
              <p className="footer-email">basnetprem524@gmail.com</p>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Astra — Prem Basnet. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
