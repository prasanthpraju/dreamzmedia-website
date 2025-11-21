import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      location: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">
            The Best Event Management Company in Chennai
          </h1>
          <div className="contact-features">
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>End-to-End Event Solutions – From Concept to Celebration</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏢</span>
              <span>100+ Corporate Clients</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Creative, Customized Experiences That Leave a Lasting Impact</span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          {/* Contact Form Section */}
          <div className="form-section">
            <div className="form-header">
              <h2>Book Your Free Consultation</h2>
              <p>Let's create unforgettable experiences together</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                />
              </div>

              <button type="submit" className="consultation-btn">
                BOOK A FREE CONSULTATION
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <div className="map-header">
              <h3>Visit Our Office</h3>
              <p>Come discuss your event ideas with us</p>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.382709414885!2d80.21443253677057!3d13.05059829655838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e94571bb8b%3A0x5e4eab3021eae855!2sdreamzmedia!5e0!3m2!1sen!2sin!4v1761650704799!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dreamzmedia Chennai Office Location"
              ></iframe>
            </div>
            <div className="location-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>123 arcord road, Vadapalani ,Chennai - 600017</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <span>info@dreamzmedia.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



