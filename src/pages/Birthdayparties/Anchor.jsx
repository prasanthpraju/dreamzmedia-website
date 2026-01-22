import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Birthdayparties/Anchor/b1.png";
import img2 from "../../assets/Birthdayparties/Anchor/b2.png";
import img3 from "../../assets/Birthdayparties/Anchor/b3.png";
import img4 from "../../assets/Birthdayparties/Anchor/b4.png";
import img5 from "../../assets/Birthdayparties/Anchor/b5.png";
import img6 from "../../assets/Birthdayparties/Anchor/b6.png";
import img7 from "../../assets/Birthdayparties/Anchor/b7.png";
import img8 from "../../assets/Birthdayparties/Anchor/b8.png";
import img9 from "../../assets/Birthdayparties/Anchor/b9.png";
import img10 from "../../assets/Birthdayparties/Anchor/b10.png";
import img11 from "../../assets/Birthdayparties/Anchor/b11.png";
import img12 from "../../assets/Birthdayparties/Anchor/b12.png";
import img13 from "../../assets/Birthdayparties/Anchor/b13.png";

// 2. CHANGE: Component Name
const Anchor = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. SHARED: This list stays the same for ALL Birthday Party pages
  // so the Sidebar looks consistent.
  const quickLinks = [
    "Anchor",
    "BalloonDecoration",
    "CartoonCharacters",
    "Entertainment",
    "KidsDelicious",
    "MagicShow",
    "ReturnGift",
    "SoundAndLight",
    "StageAndBackdrop",
    "Tattoos",
    "Terrace",
    "Themes",
  ];

   const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
  ];

  // --- Handlers (Keep these exactly the same) ---
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with Back Button */}
      <div className="relative pt-32 pb-12 px-6 text-center border-b border-gray-100">
        
        {/* Back Button */}
        <div className="absolute top-24 left-4 md:top-32 md:left-10 z-10">
          <button
           onClick={() => navigate(-1)}

            className="group flex items-center gap-2 cursor-pointer text-gray-600 hover:text-pink-900 transition-colors duration-300"
          >
            <div className="p-2 rounded-full border border-gray-400 group-hover:border-pink-900 group-hover:bg-pink-900 transition-all duration-300">
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-gray-600 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              Back
            </span>
          </button>
        </div>

        {/* 5. CHANGE: Page Title */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-4">
          Anchor & Hosting
        </h1>
        <div className="w-24 h-1.5 bg-pink-900 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h3 className="text-2xl font-serif font-bold text-pink-900 mb-8 border-l-4 border-pink-900 pl-4">
              Collections
            </h3>
            <ul className="space-y-5">
              {quickLinks.map((link, idx) => {
                // Determine if this link is the active one
                // 6. CHANGE: Update "Anchor" to match current page for highlighting
                const isActive = link === "Anchor"; 
                
                return (
                  <li key={idx}>
                    <button
                      onClick={() =>
                        navigate(`/${link.toLowerCase()}`)
                      }
                      className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-pink-900 hover:translate-x-2 cursor-pointer w-full text-left ${
                        isActive ? "text-pink-900 border-r-2 border-pink-900" : "text-gray-400"
                      }`}
                    >
                      {/* Adds spaces to CamelCase (e.g. BalloonDecoration -> Balloon Decoration) */}
                      {link.replace(/([A-Z])/g, " $1").trim()}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => openModal(image)}
                className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm"
              >
                <img
                  src={image.src}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <button className="bg-white text-pink-950 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-xl border border-white cursor-pointer hover:bg-pink-900 hover:text-white hover:border-pink-900">
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - Same for all */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md cursor-pointer"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white p-2 transition-colors cursor-pointer z-50"
            onClick={closeModal}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors cursor-pointer z-50"
            onClick={navigateImage(-1)}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-4 transition-colors cursor-pointer z-50"
            onClick={navigateImage(1)}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Anchor;