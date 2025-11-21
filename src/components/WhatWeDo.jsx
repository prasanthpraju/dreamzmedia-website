// WhatWeDo.jsx
import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const services = [
    {
      icon: '🌤',
      title: 'Stress-Free Planning',
      description: 'We manage every detail for seamless Corporate and government events.'
    },
    {
      icon: '🌧',
      title: 'Strengthen Team Bonds',
      description: 'Events designed to foster collaboration and trust.'
    },
    {
      icon: '🍷',
      title: 'Align with Your Vision',
      description: 'We create events that reflect your company\'s values.'
    },
    {
      icon: '💶',
      title: 'Trusted Reliability',
      description: '250+ events delivered for 100+ clients, flawlessly.'
    },
    {
      icon: '💷',
      title: 'Cultural Integrity',
      description: 'We blend heritage and modernity for engaging experiences.'
    },
    {
      icon: '💸',
      title: 'Boost Engagement',
      description: 'Corporate Events that enhance morale and your brand.'
    }
  ];

  return (
    <div className="what-we-do-container">
      <div className="left-section">
        <h2>What do we do?</h2>
        <div className="image-placeholder">
          {/* Replace with actual image */}
          <div className="placeholder-content">
            <span>Image Placeholder</span>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;