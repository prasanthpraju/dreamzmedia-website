 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LiveStreaming = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quickLinks = ["MarriageCard", "StageFlowerDecoration", "Entertainment", "MehndiDesigner", "Orchestra", "Beautician", "CatersService", "ReturnGift", "LiveStreaming"];

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" },
    { id: 2, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    { id: 3, src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    { id: 4, src: "https://images.unsplash.com/photo-1558603668-6576f3919d69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    { id: 5, src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80" },
    { id: 6, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" }
  ];

  const openModal = (image) => {
    const index = images.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeModal = () => setSelectedImage(null);

  const navigateImage = (direction) => (e) => {
    e.stopPropagation();
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pt-32 pb-12 px-6 text-center border-b border-gray-100">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-4">Live Streaming</h1>
        <div className="w-24 h-1.5 bg-pink-900 mx-auto mt-4"></div>
      </div>

       <div className="absolute top-24 left-4 md:top-32 md:left-10 z-10">
          <button  
            onClick={() => navigate('/')} 
            className="group flex items-center gap-2 cursor-pointer text-gray-600 hover:text-pink-900 transition-colors duration-300"
          >
            {/* Icon */}
            <div className="p-2 rounded-full border border-gray-400 group-hover:border-pink-900 group-hover:bg-pink-900 transition-all duration-300">
              <svg 
                className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:text-white transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            
            {/* Text (Hidden on very small screens, visible on mobile+) */}
            <span className="text-[10px]   md:text-xs font-bold uppercase tracking-[0.2em] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              Back
            </span>
          </button>
        </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h3 className="text-2xl font-serif font-bold text-pink-900 mb-8 border-l-4 border-pink-900 pl-4">Collections</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button onClick={() => navigate(`/${link.toLowerCase()}`)} className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-pink-900 hover:translate-x-2 cursor-pointer w-full text-left ${link === 'LiveStreaming' ? 'text-pink-900' : 'text-gray-400'}`}>
                    {link.replace(/([A-Z])/g, ' $1').trim()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} onClick={() => openModal(image)} className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm">
              <img src={image.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <button className="bg-white text-pink-950 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl border border-white cursor-pointer hover:bg-pink-900 hover:text-white hover:border-pink-900">
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer" onClick={closeModal}>
          <button className="absolute top-6 right-6 text-white/60 hover:text-white p-2 transition-colors cursor-pointer z-50" onClick={closeModal}>✕</button>
          <button className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors cursor-pointer z-50" onClick={navigateImage(-1)}>←</button>
          <button className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors cursor-pointer z-50" onClick={navigateImage(1)}>→</button>
          <img src={selectedImage.src} alt="" className="max-w-full max-h-[90vh] object-contain shadow-2xl cursor-default" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default LiveStreaming;