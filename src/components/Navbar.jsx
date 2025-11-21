// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">
          <div className="nav-logo">
  <a href="/">
    <img
      src="/src/assets/logo.png"
      alt="Dreamzmedia Logo"
      className="logo-img"
    />
  </a>
</div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <span className="nav-separator">|</span>
          <a href="about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <span className="nav-separator">|</span>
          <a href="events" className="nav-link" onClick={() => setIsMenuOpen(false)}>Events</a>
          <span className="nav-separator">|</span>
          <a href="whatwedo" className="nav-link" onClick={() => setIsMenuOpen(false)}>Whatwedo</a>
          <span className="nav-separator">|</span>
          <a href="contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          {/* <span className="nav-separator">|</span>
          <a href="#careers" className="nav-link" onClick={() => setIsMenuOpen(false)}>Careers</a>
          <span className="nav-separator">|</span>
          <a href="#faqs" className="nav-link" onClick={() => setIsMenuOpen(false)}>FAQs</a> */}
        </div>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="hamburger-line hamburger-line-1"></span>
          <span className="hamburger-line hamburger-line-2"></span>
          <span className="hamburger-line hamburger-line-3"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


