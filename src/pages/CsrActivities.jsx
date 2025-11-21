import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CsrActivities.css";

const CsrActivities = () => {
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

  const csrImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2085&q=80",
      title: "Tree Plantation Drive",
      category: "environment"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Education Support Program",
      category: "education"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Community Health Camp",
      category: "healthcare"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Skill Development Workshop",
      category: "empowerment"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551833086-759741006b2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Clean Water Initiative",
      category: "sanitation"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Women Empowerment Program",
      category: "empowerment"
    }
  ];

  const filteredImages = csrImages.filter(image =>
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
    const path = link.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${path}`);
  };

  return (
    <div className="csr-activities-page">
      <div className="csr-content-wrapper">
        <div className="quick-links-sidebar">
          <h3 className="quick-links-title">Quick Links</h3>
          <ul className="quick-links-list">
            {quickLinks.map((link, index) => (
              <li key={index} className="quick-link-item">
                <button 
                  className="quick-link-btn"
                  onClick={() => handleNavigation(link)}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="content-area">
          <h2 className="content-title">CSR Activities</h2>
          
          <p className="content-description">
            Making a positive impact on society through meaningful Corporate Social Responsibility initiatives. 
            We partner with organizations to create sustainable change in education, environment, healthcare, 
            and community development.
          </p>


          <div className="images-grid">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                <div className="image-container">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="csr-image"
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
              <p>No CSR activities found matching your search.</p>
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

export default CsrActivities;