import React from "react";
// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

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
            <li>100+ Corporate Clients & 10+ Government Organizations Served</li>
            <li>
              Creative, Customized Experiences That Leave a Lasting Impact
            </li>
            <li>Local Expertise with a Global Event Standard</li>
            <li>On-Time, On-Budget and On-Point – Every Time</li>
          </ul>
        </div>

        {/* Right Form */}
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
    </section>
  );
};

export default HeroSection;
