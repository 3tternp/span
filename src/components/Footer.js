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
