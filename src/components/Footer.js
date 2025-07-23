import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Import your CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="footer-left">
              <h3>🌟 Astra - Cybersecurity Excellence</h3>
              <p>Protecting digital assets through innovative security solutions, comprehensive audits, and strategic compliance frameworks. Your trusted partner in cybersecurity.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="footer-right">
              <h4>Connect With Me</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/prem-basnet524/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/profile.php?id=100051820911738" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="https://www.instagram.com/astra.x3/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; 2025 Astra - Prem Basnet. All rights reserved. | Crafted with 💜 for Cybersecurity Excellence</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
