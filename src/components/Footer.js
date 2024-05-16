import React from 'react';
import './Footer.css'; // Import your CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Company Name</h3>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-right">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Astra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
