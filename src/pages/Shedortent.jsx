import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shedortent.css";

const Shedortent = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const quickLinks = [
    "Stage",
    "Lightandsound", 
    "Shedortent",
    "Carnival",
    "Choreography",
    "Videographyandphotography",
    "Bannerandarch",
    "Trophiesandgift"
  ];

  const shedTentImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "Large Event Tent",
      category: "tent"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Portable Shed Setup",
      category: "shed"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Marquee Setup",
      category: "marquee"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Canopy Tents",
      category: "canopy"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Party Tent",
      category: "party"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1532712983056-a1265b0d0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Industrial Shed",
      category: "industrial"
    }
  ];

  const filteredImages = shedTentImages.filter(image =>
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
      "Stage": "stage",
      "Lightandsound": "lightandsound", 
      "Shedortent": "shedortent",
      "Carnival": "carnival",
      "Choreography": "choreography",
      "Videographyandphotography": "videographyandphotography",
      "Bannerandarch": "bannerandarch",
      "Trophiesandgift": "trophiesandgift"
    };
    
    navigate(`/${routeMap[link]}`);
  };

  return (
    <div className="shedortent-page">
      <div className="shedortent-content-wrapper">
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

        <div className="content-area">
          <h2 className="content-title">Shed & Tent</h2>
          
          <p className="content-description">
            Professional shed and tent setups for outdoor school events, exhibitions, 
            and functions. We provide sturdy, weather-resistant structures that ensure 
            your events run smoothly regardless of weather conditions.
          </p>

          <div className="search-container">
            <div className="search-box">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search shed & tent setups..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="images-grid-three-col">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="shedortent-image"
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
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>No shed & tent setups found matching your search.</p>
            </div>
          )}
        </div>
      </div>

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
            </div>
          </div>
        </div>
      )}

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

export default Shedortent;