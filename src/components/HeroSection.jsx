import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Array of background images
  const backgroundImages = [
    "https://storage.unitedwebnetwork.com/files/1189/7a7dab9865d31598b26943a1b8083f6d.webp",
    "https://varioproductions.com/wp-content/uploads/2023/03/Image20220111161351-1024x576.jpg",
    "https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Mumbai.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Background Images Container for Animation */}
      <div className="hero-backgrounds">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-slide ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            The Best Event <br />
            Management Company <br />
            in <span>Chennai</span>
          </h1>

          <ul className="hero-list">
            <li>End-to-End Event Solutions – From Concept to Celebration</li>
            <li>100+ Corporate Clients </li>
            <li>Creative, Customized Experiences That Leave a Lasting Impact</li>
            <li>Local Expertise with a Global Event Standard</li>
            <li>On-Time, On-Budget and On-Point—Every Time</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="hero-form-wrapper">
          <div className="hero-form">
            <h3>
              Book for <span className="highlight">free consultation</span>
            </h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Location" />
              <button type="submit">BOOK A FREE CONSULTATION</button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <a href="tel:+911234567890" className="icon call">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/911234567890" className="icon whatsapp">
          <FaWhatsapp />
        </a>
        <a href="mailto:info@example.com" className="icon email">
          <FaEnvelope />
        </a>
        <a href="#chat" className="icon chat">
          <FaComments />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;