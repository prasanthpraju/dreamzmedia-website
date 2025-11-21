import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Orchestra.css";

const Orchestra = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const quickLinks = [
    "MarriageCard",
    "StageFlowerDecoration", 
    "Entertainment",
    "MehndiDesigner",
    "Orchestra",
    "Beautician",
    "CatersService",
    "ReturnGift",
    "LiveStreaming"
  ];

  const orchestraImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Classical Orchestra",
      category: "classical"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571974599782-87624638275f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "String Ensemble",
      category: "strings"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Brass Band Performance",
      category: "brass"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Traditional Indian Orchestra",
      category: "traditional"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Fusion Music Group",
      category: "fusion"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wedding March Band",
      category: "march"
    }
  ];

  const filteredImages = orchestraImages.filter(image =>
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
      "MarriageCard": "marriagecard",
      "StageFlowerDecoration": "stageflowerdecoration", 
      "Entertainment": "entertainment",
      "MehndiDesigner": "mehndidesigner",
      "Orchestra": "orchestra",
      "Beautician": "beautician",
      "CatersService": "catersservice",
      "ReturnGift": "returngift",
      "LiveStreaming": "livestreaming"
    };
    
    navigate(`/${routeMap[link]}`);
  };

  return (
    <div className="orchestra-page">
      <div className="orchestra-content-wrapper">
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
          <h2 className="content-title">Orchestra</h2>
          
          <p className="content-description">
            Elevate your wedding celebrations with the enchanting melodies of our professional orchestras. 
            From classical ensembles to traditional Indian bands, we provide musical excellence that 
            creates the perfect ambiance for your special moments.
          </p>



          <div className="images-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="orchestra-image"
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
                <div className="image-info">
                  <h3 className="image-title">{image.title}</h3>
                  <span className="image-category">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <p>No orchestra performances found matching your search.</p>
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

export default Orchestra;