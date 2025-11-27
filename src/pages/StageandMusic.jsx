 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StageandMusic = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quickLinks = [
    "Conference",
    "DealersMeet", 
    "CulturalEvents",
    "StageandMusic",
    "CSRActivities",
    "CorporateGift",
    "EventsCatering"
  ];

  const stageImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Concert Stage Setup",
      category: "concert",
      description: "Professional concert stage setups with advanced sound and lighting systems for unforgettable performances"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571266028245-69dd19057a02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "DJ Performance",
      category: "dj",
      description: "High-energy DJ performances with state-of-the-art mixing equipment and visual effects"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Live Band Performance",
      category: "band",
      description: "Dynamic live band performances with professional audio engineering and stage management"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571974599782-87624638275f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lighting Effects",
      category: "lighting",
      description: "Spectacular lighting effects and visual displays that create immersive atmospheres"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "Sound System Setup",
      category: "audio",
      description: "Professional sound system installations with crystal-clear audio quality for any venue size"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Festival Stage",
      category: "festival",
      description: "Large-scale festival stage productions with comprehensive audio-visual solutions"
    }
  ];

  const filteredImages = stageImages.filter(image =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    image.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (image) => {
    const index = stageImages.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % stageImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(stageImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? stageImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(stageImages[prevIndex]);
  };

  const handleNavigation = (link) => {
    const path = link.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${path}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Pink 900 */}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Quick Links Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gradient-to-b from-pink-50 to-white rounded-2xl p-6 shadow-lg border border-pink-100 sticky top-32">
              <div className="border-b-2 border-pink-200 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-pink-900">Our Services</h3>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="w-full text-left px-4 py-4 rounded-xl hover:bg-white text-pink-800 hover:text-pink-900 font-semibold transition-all duration-200 hover:shadow-md border border-transparent hover:border-pink-200 bg-white/50"
                      onClick={() => handleNavigation(link)}
                    >
                      {link.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Search and Description Section */}
            <div className="bg-gradient-to-r from-pink-50 to-pink-25 rounded-2xl p-8 mb-8 shadow-lg border border-pink-100">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-pink-900 mb-4">
                  Professional Stage & Music Productions
                </h2>
                <p className="text-lg text-pink-700 mb-6 leading-relaxed">
                  From intimate gatherings to large-scale concerts, we deliver unforgettable 
                  audio-visual experiences with state-of-the-art equipment and professional 
                  technical expertise.
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search setups by title, category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-gray-900 placeholder-pink-400 shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 px-2">
              <p className="text-pink-700 font-semibold">
                Showing {filteredImages.length} of {stageImages.length} stage setups
                {searchTerm && (
                  <span className="text-pink-500 ml-2">
                    for "{searchTerm}"
                  </span>
                )}
              </p>
            </div>

            {/* Stage Images Grid */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <div key={image.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          className="bg-white text-pink-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-pink-50"
                          onClick={() => openModal(image, index)}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Quick View
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{image.title}</h3>
                        <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full font-semibold capitalize whitespace-nowrap ml-2">
                          {image.category}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* No Results Message */
              <div className="text-center py-16 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
                <div className="flex justify-center mb-4">
                  <svg className="w-20 h-20 text-pink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-900 mb-3">No setups found</h3>
                <p className="text-pink-700 text-lg max-w-md mx-auto">
                  Try adjusting your search terms or browse all stage setup categories
                </p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 bg-pink-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-800 transition-colors duration-200"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-0 right-0 bg-white/90 hover:bg-white text-pink-900 rounded-full p-2 z-20 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            {stageImages.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-900 rounded-full p-3 z-20 shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={prevImage}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-pink-900 rounded-full p-3 z-20 shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={nextImage}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Counter */}
            {stageImages.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
                {currentIndex + 1} / {stageImages.length}
              </div>
            )}

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              
              {/* Info Section */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">{selectedImage.title}</h3>
                    <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold capitalize whitespace-nowrap">
                      {selectedImage.category}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-pink-900 text-white py-4 px-8 rounded-xl font-semibold hover:bg-pink-800 transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
                    Book This Setup
                  </button>
                  <button className="flex-1 border-2 border-pink-900 text-pink-900 py-4 px-8 rounded-xl font-semibold hover:bg-pink-50 transition-colors duration-200 text-lg">
                    View Similar Setups
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <button 
          className="bg-pink-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 text-lg"
          onClick={() => navigate(-1)}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </button>
      </div>
    </div>
  );
};

export default StageandMusic;