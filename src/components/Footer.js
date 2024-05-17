import React from 'react';
import './Footer.css'; // Import your CSS file for styling

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Astra</h3>
        </div>
        <div className="footer-right">
         <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
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
