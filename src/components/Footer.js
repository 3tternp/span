import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.png';
import navIcon1 from './linkedin.png';
import navIcon2 from './facebook.png';
import navIcon3 from './instagram.png';
import './Footer.css'; // Import your CSS file for styling

//export const Footer = () => {
export const Footer = ({ activeLink, onUpdateActiveLink }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/prem-basnet524/"><img src={navIcon1} alt="" /></a>
                  <a href="https://www.facebook.com/profile.php?id=100051820911738"><img src={navIcon2} alt="" /></a>
                  <a href="https://www.instagram.com/astra.x3/"><img src={navIcon3} alt="" /></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Astra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
