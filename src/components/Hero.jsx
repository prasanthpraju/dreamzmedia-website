import React, { useState, useEffect } from "react";
// Ensure image paths are correct
import heroEvent1 from "../assets/e10.jpg";
import heroEvent2 from "../assets/e2.jpg";
import heroEvent3 from "../assets/e8.jpg";
import heroEvent4 from "../assets/e1.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroBackgrounds = [heroEvent1, heroEvent2, heroEvent3, heroEvent4];

  // Modern Classic Data Presentation
  // const stats = [
  //   { id: 1, label: "Experience", value: "Since 2010" },
  //   { id: 2, label: "Events Executed", value: "200+" },
  //   { id: 3, label: "Client Rating", value: "5.0 ★" },
  // ];

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000); // Slower, 6s rotation for elegance

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* 1. BACKGROUND SLIDER (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0">
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Advanced Gradient Overlay: Dark Top/Bottom, lighter Center */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />

            {/* Texture Overlay (Optional: adds a 'grain' for film look) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </div>
        ))}
      </div>

      {/* 2. MAIN CONTENT */}
      {/* pt-32 ensures content is pushed down, clearing your Navbar */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-32 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Eyebrow Text */}
          <div className="mb-6 flex items-center justify-center space-x-4">
            <span className="h-[3px] w-8 bg-pink-800/50"></span>
            <span className="text-pink-200 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium font-['Montserrat']">
              Premier Event Management
            </span>
            <span className="h-[3px] w-8 bg-pink-800/50"></span>
          </div>

          {/* Main Headline: Modern Classic Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight font-['Cormorant_Garamond'] font-light">
            We Create <br />
            <span className="italic font-normal bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 bg-clip-text text-transparent">
              Masterpieces
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl mx-auto text-gray-200 text-lg sm:text-xl font-light font-['Montserrat'] leading-relaxed opacity-90">
            From intimate gatherings to grand celebrations in Chennai.
            <br className="hidden md:block" />
            We curate moments that last a lifetime.
          </p>
        </div>
      </div>

      {/* 5. SLIDE DOTS (Vertical Right) */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "h-8 bg-pink-800"
                : "h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
