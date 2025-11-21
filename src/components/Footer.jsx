import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-main">
          {/* Left Section - Questions */}
          <div className="footer-questions">
            <h3>What is the process for working with Dreamzmedia Events?</h3>
            <div className="questions-list">
              <p>Do you offer customized packages for different types of events?</p>
              <p>How can I get a quote or consultation from Dreamzmedia Events?</p>
            </div>
          </div>

          {/* Right Section - Links & Address */}
          <div className="footer-info">
            {/* Quick Links */}
            <div className="quick-links">
              <h4>Quick Links</h4>
              <div className="links-grid">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#eventscope">Eventscope</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#faqs">FAQs</a>
              </div>
            </div>

            {/* Address */}
            <div className="address">
              <h4>Address</h4>
              <div className="address-details">
                <p>
                  <br />
                  Arcod  Rd,<br />
                  Vadapalani,<br />
                  Chennai, Tamil Nadu 600077
                </p>
                <p>+91 9876543210</p>
                <p>dreamzmedia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          
          <div className="copyright">
            <p>©2025 | Dreamzmedia Events | All Rights Reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;