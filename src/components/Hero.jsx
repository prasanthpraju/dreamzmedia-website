 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
// Ensure image paths are correct
import heroEvent1 from "../assets/e10.jpg";
import heroEvent2 from "../assets/e2.jpg";
import heroEvent3 from "../assets/e8.jpg";
import heroEvent4 from "../assets/e1.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroBackgrounds = [heroEvent1, heroEvent2, heroEvent3, heroEvent4];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroBackgrounds.length - 1 : prev - 1));

  return (
    // Use 100dvh for mobile browsers to avoid address bar jumping
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black font-sans selection:bg-pink-900 selection:text-white">
      
      {/* 1. BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
            {/* Gradients: Heavy on mobile bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-80 lg:opacity-40" />
          </div>
        ))}
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 lg:px-12 flex flex-col justify-center pt-12 lg:pt-20">
        
        <div className={`max-w-5xl transition-all duration-1000 ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6 lg:mb-8 border border-white/20 px-4 py-2 lg:px-5 lg:py-2 rounded-full backdrop-blur-sm bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
            <span className="text-pink-100 text-[10px] font-bold uppercase tracking-[0.25em]">Est. 2010 • Chennai</span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-serif tracking-tight mb-6 lg:mb-8 leading-[1.1] lg:leading-[0.9]">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]">Crafting</span>
            <span className="block font-light italic text-gray-300 mt-2 text-5xl sm:text-7xl md:text-8xl lg:text-[7rem]">
              Timeless Moments.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-sm sm:max-w-xl leading-relaxed border-l-2 border-pink-900 pl-4 lg:pl-6 mb-8 lg:mb-12">
            Chennai's premier event architects. We blend strategy, design, and technology to create immersive experiences that linger in memory.
          </p>

          {/* 3. CTA Group with Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            
            {/* Link to Contact Page */}
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-pink-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Start Planning
              </button>
            </Link>

            {/* Link to Portfolio/Events Page */}
            <Link to="/events" className="w-full sm:w-auto">
              <button className="w-full group flex justify-center items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                View Portfolio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>

          </div>

        </div>
      </div>

      {/* 4. CONTROLS */}
      <div className="absolute bottom-8 right-6 lg:bottom-12 lg:right-12 z-20 flex items-center gap-4 lg:gap-8">
        <div className="text-white font-serif text-xl lg:text-2xl">
          0{currentSlide + 1} <span className="text-white/30 text-sm lg:text-lg mx-2 font-sans">/</span> <span className="text-white/30 text-lg font-sans">0{heroBackgrounds.length}</span>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={prevSlide} 
            className="w-10 h-10 lg:w-12 lg:h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95"
          >
            ←
          </button>
          <button 
            onClick={nextSlide} 
            className="w-10 h-10 lg:w-12 lg:h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all active:scale-95"
          >
            →
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;