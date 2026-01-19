 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    // UPDATED LAYOUT LOGIC:
    // 1. mt-16 lg:mt-20: Pushes the section down so it starts AFTER the navbar.
    // 2. h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-5rem)]: Calculates height to fill exactly the rest of the screen.
    <section className="relative w-full mt-16 lg:mt-20 h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-5rem)] overflow-hidden bg-gray-900">
      
      {/* 1. BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image: "object-cover" ensures it fills the box without distortion */}
            <div 
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[8000ms] scale-105 hover:scale-110" 
                style={{ backgroundImage: `url(${bg})` }} 
            />
            
            {/* Gradient Overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* 2. MAIN CONTENT */}
      {/* Removed extra padding-top since we are now pushing the whole section down */}
      <div className="relative z-10 h-full max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col justify-center">
        
        <div className={`max-w-4xl transition-all duration-1000 ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-pink-500"></span>
            <span className="text-pink-400 text-[11px] font-bold uppercase tracking-[0.3em]">
              Since 2010 • Chennai
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-serif leading-tight mb-6 drop-shadow-lg">
            <span className="block text-5xl md:text-6xl lg:text-7xl">Crafting</span>
            <span className="block font-light italic text-gray-200 text-5xl md:text-6xl lg:text-7xl mt-1">
              Timeless Moments.
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 font-light max-w-lg leading-relaxed mb-10 border-l border-white/30 pl-6">
            We blend strategy, design, and technology to create immersive experiences that linger in memory.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <button className="bg-white text-black px-8 py-3.5 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-pink-900 cursor-pointer hover:text-white transition-all duration-300 shadow-lg">
                Start Planning
              </button>
            </Link>

            <Link to="/events">
              <button className="group flex items-center gap-3 px-8 py-3.5 border border-white/30 text-white  rounded-sm font-bold text-[11px] cursor-pointer uppercase tracking-widest hover:bg-white/10 transition-all">
                View Portfolio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* 3. CONTROLS */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-6">
        <div className="text-white font-serif text-xl">
          0{currentSlide + 1} <span className="text-white/40 text-sm mx-1">/</span> <span className="text-white/40 text-base">0{heroBackgrounds.length}</span>
        </div>
        
        <div className="flex gap-2">
          <button onClick={prevSlide} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            ←
          </button>
          <button onClick={nextSlide} className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            →
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;