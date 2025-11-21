import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Conference.css";

const Conference = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const quickLinks = [
    "Conference",
    "DealersMeet", 
    "CulturalEvents",
    "StageandMusic",
    "CSRActivities",
    "CorporateGift",
    "EventsCatering"
  ];

  const conferenceImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Corporate Conference Setup",
      category: "corporate"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "International Summit",
      category: "international"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      title: "Business Seminar",
      category: "seminar"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Tech Conference",
      category: "technology"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551834322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Networking Event",
      category: "networking"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Panel Discussion",
      category: "panel"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Workshop Session",
      category: "workshop"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Award Ceremony",
      category: "awards"
    }
  ];

  const filteredImages = conferenceImages.filter(image =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleNavigation = (link) => {
    const routeMap = {
      "Conference": "conference",
      "DealersMeet": "dealersmeet", 
      "CulturalEvents": "culturalevents",
      "StageandMusic": "stageandmusic",
      "CSRActivities": "csractivities",
      "CorporateGift": "corporategift",
      "EventsCatering": "eventscatering"
    };
    
    navigate(`/${routeMap[link]}`);
  };

  return (
    <div className="conference-page">
      <div className="conference-content-wrapper">
        {/* Quick Links Sidebar */}
        <div className="quick-links-sidebar">
          <h3 className="quick-links-title">Quick Links</h3>
          <ul className="quick-links-list">
            {quickLinks.map((link, index) => (
              <li key={index} className="quick-link-item">
                <button 
                  className="quick-link-btn"
                  onClick={() => handleNavigation(link)}
                >
                  {link.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="content-area">
          <h2 className="content-title">Conference Services</h2>
          
          <p className="content-description">
            Professional conference solutions for corporate events, international summits, 
            and business seminars. We provide comprehensive event management services including 
            venue setup, technical support, and networking facilitation to ensure your conference 
            is a resounding success.
          </p>



          {/* Images Grid */}
          <div className="images-section">
            
            <div className="images-grid">
              {filteredImages.map((image) => (
                <div key={image.id} className="image-card">
                  <div className="image-container">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="conference-image"
                    />
                    <div className="image-overlay">
                      <button 
                        className="view-button"
                        onClick={() => openModal(image)}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                  <div className="image-info">
                    <h3 className="image-title">{image.title}</h3>
                    <span className="image-category">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* No Results Message */}
          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>No conference services found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>Category: {selectedImage.category}</p>
              <p>Professional conference setup with full technical support and amenities.</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="back-button-container">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Services
        </button>
      </div>
    </div>
  );
};

export default Conference;