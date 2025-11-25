 import React, { useState, useEffect, useRef } from "react";

// Import logos from assets folder
import cognizant from "../assets/cognizant.png"
import Axis from "../assets/Axis.png"
import dell from "../assets/dell.png"
import HCL from "../assets/HCL.png"
import Accenture from "../assets/Accenture.png"
import Firstsource from "../assets/Firstsource.png"

const Clients = () => {
  const trustedLogos = [
    { name: "Cognizant", logo: cognizant },
    { name: "Axis Bank", logo: Axis },
    { name: "Dell", logo: dell },
    { name: "HCL", logo: HCL },
    { name: "Accenture", logo: Accenture },
    { name: "Firstsource", logo: Firstsource },
  ];

  // Duplicate array for smooth infinite scroll
  const doubleLogos = [...trustedLogos, ...trustedLogos];
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Counter animation for stats
  const [counters, setCounters] = useState({
    clients: 0,
    events: 0,
    satisfaction: 0
  });

  // Auto slide for mobile - always running
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(trustedLogos.length / 2));
    }, 3000);

    return () => clearInterval(interval);
  }, [trustedLogos.length]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Start counter animations
          const duration = 2000;
          const steps = 60;
          const incrementClients = 50 / steps;
          const incrementEvents = 200 / steps;
          const incrementSatisfaction = 98 / steps;

          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            setCounters({
              clients: Math.min(50, Math.floor(incrementClients * currentStep)),
              events: Math.min(200, Math.floor(incrementEvents * currentStep)),
              satisfaction: Math.min(98, Math.floor(incrementSatisfaction * currentStep))
            });

            if (currentStep === steps) {
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  // Get current slides for mobile
  const getCurrentSlides = () => {
    const startIndex = currentSlide * 2;
    return trustedLogos.slice(startIndex, startIndex + 2);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden"
    >
      {/* Light Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-200/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-200/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Hidden initially, shows on scroll */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-900 to-rose-800">Industry Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Partnered with top global companies to deliver exceptional event experiences
          </p>
        </div>
         
        {/* Desktop Marquee - Hidden on mobile */}
        <div className={`hidden md:block relative overflow-hidden py-6 md:py-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-pink-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-rose-50 to-transparent z-10"></div>
          
          <div className="flex animate-marquee-fast whitespace-nowrap">
            {doubleLogos.map((company, index) => (
              <div 
                key={index} 
                className="inline-flex items-center justify-center px-8 mx-4 group"
              >
                <div className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-300 min-w-[160px]">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto max-w-40 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 filter-none"
                      style={{ filter: 'none' }}
                    />
                  ) : (
                    <span className="text-base font-bold text-gray-700">{company.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Slider - Hidden on desktop */}
        <div className={`md:hidden relative transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center items-center space-x-4 py-6">
            {getCurrentSlides().map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center group flex-1 max-w-[140px] mx-2"
              >
                <div className="relative p-5 bg-white rounded-xl shadow-lg border-2 border-gray-100 w-full h-24 flex items-center justify-center">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-10 w-auto max-w-28 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 filter-none mx-auto"
                      style={{ filter: 'none' }}
                    />
                  ) : (
                    <span className="text-sm font-bold text-gray-700 text-center block">{company.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Indicators - Clickable but doesn't stop auto-slide */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(trustedLogos.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-pink-900 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section - Always in same line, hidden initially */}
        <div 
          ref={statsRef}
          className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 md:mt-16 p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-100 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-900 to-rose-900 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counters.clients}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight">
              Corporate Clients
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-900 to-rose-900 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counters.events}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight">
              Events Managed
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-900 to-rose-900 bg-clip-text text-transparent mb-1 sm:mb-2">
              {counters.satisfaction}%
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium leading-tight">
              Client Satisfaction
            </div>
          </div>
        </div>

        {/* Additional Info - Hidden initially */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Trusted by Fortune 500 companies and growing startups alike for exceptional event management services
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }

        .filter-none {
          filter: none !important;
        }

        /* Mobile optimization */
        @media (max-width: 480px) {
          .animate-marquee-fast {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;