 import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./Conference.css";

const Conference = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <div className="conference-page min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Pink gradient orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-orb-move"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl animate-orb-move delay-2000"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }}
        ></div>
        
        {/* Pink floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-float shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-lg rotate-45 animate-float-delayed shadow-2xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-float-slow shadow-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-lg animate-float-delayed-slow shadow-2xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-20 mix-blend-multiply"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      <div className="relative z-10 pt-24 pb-16">
        <div className="conference-content-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Links Sidebar */}
          <div className={`quick-links-sidebar bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-6 transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h3 className="quick-links-title text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="quick-links-list space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="quick-link-item">
                  <button 
                    className="quick-link-btn w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group relative overflow-hidden"
                    onClick={() => handleNavigation(link)}
                  >
                    <span className="relative z-10 flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      {link.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    
                    {/* Pink hover background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-xl"></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Area */}
          <div className={`content-area bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-6 lg:p-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="content-title text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conference <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Services</span>
            </h2>
            
            <p className="content-description text-lg text-gray-700 mb-8 leading-relaxed">
              Professional conference solutions for corporate events, international summits, 
              and business seminars. We provide comprehensive event management services including 
              venue setup, technical support, and networking facilitation to ensure your conference 
              is a resounding success.
            </p>

            {/* Search Bar */}
            <div className="search-container mb-8">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search conference services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 shadow-lg"
                />
                <svg 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Images Grid */}
            <div className="images-section">
              <div className="images-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div 
                    key={image.id} 
                    className={`image-card bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="image-container relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="conference-image w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <button 
                          className="view-button bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 hover:text-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
                          onClick={() => openModal(image)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="image-info p-6">
                      <h3 className="image-title text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                      <span className="image-category bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* No Results Message */}
            {filteredImages.length === 0 && (
              <div className="no-results text-center py-12">
                <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg">No conference services found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 scale-95 hover:scale-100" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 shadow-lg" onClick={closeModal}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="modal-image w-full h-96 object-cover"
            />
            <div className="modal-info p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-pink-600 font-semibold mb-4">Category: {selectedImage.category}</p>
              <p className="text-gray-700">Professional conference setup with full technical support and amenities. Perfect for corporate events, seminars, and business meetings with state-of-the-art facilities.</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="back-button-container fixed bottom-8 left-8 z-30">
        <button 
          className="back-button bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 hover:text-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </button>
      </div>

      {/* Background Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes float-delayed-slow {
          0%, 100% { transform: translateY(-5px) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes orb-move {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 30px) scale(1.1); }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed-slow { animation: float-delayed-slow 9s ease-in-out infinite 2s; }
        .animate-orb-move { animation: orb-move 20s ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(244, 114, 182, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(244, 114, 182, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .conference-content-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .conference-content-wrapper {
            grid-template-columns: 300px 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Conference;