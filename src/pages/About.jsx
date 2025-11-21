import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          {/* <h2 className="about-title">About Dreamzmedia</h2> */}
          <p className="about-subtitle">Crafting Unforgettable Experiences Since 2010</p>
          <div className="title-divider"></div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Left Column - Text Content */}
          <div className="about-text">
            {/* Introduction */}
            <div className="about-intro">
              <h3>Your Vision, Our Expertise</h3>
              <p>
                Dreamzmedia stands as Chennai's premier event management company, 
                transforming ordinary moments into extraordinary memories. With over 
                a decade of experience, we have mastered the art of creating seamless, 
                impactful events that resonate with your audience and exceed expectations.
              </p>
            </div>

            {/* Features Grid */}
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>Precision Planning</h4>
                <p>Meticulous attention to detail ensures every aspect of your event is perfectly executed.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">💡</div>
                <h4>Creative Innovation</h4>
                <p>Fresh, innovative ideas that make your event unique and memorable.</p>
              </div>
              
              
              <div className="feature-card">
                <div className="feature-icon">⏱️</div>
                <h4>Timely Execution</h4>
                <p>We respect deadlines and deliver exceptional results on time, every time.</p>
              </div>
            </div>

            {/* Mission Section */}
            {/* <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To redefine event management standards in Chennai by delivering 
                bespoke solutions that blend creativity with flawless execution.
                 
                We believe every event tells a story, and we're here to make yours unforgettable.
              </p>
            </div> */}

            {/* Statistics */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Events Managed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Corporate Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="about-benefits">
            <div className="benefits-card">
              <h4>Why Choose Dreamzmedia?</h4>
              <ul className="benefits-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>End-to-end event solutions</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Experienced professional team</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Customized event strategies</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Latest technology integration</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Budget-friendly packages</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <div className="cta-content">
            <h3>Ready to Create Something Amazing?</h3>
            <p>Let's discuss how we can bring your vision to life</p>
            <button className="cta-button">Get Started Today</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

 




