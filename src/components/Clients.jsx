 import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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

  // Duplicate array 3 times for super smooth infinite scroll without gaps
  const marqueeLogos = [...trustedLogos, ...trustedLogos, ...trustedLogos];
  
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ clients: 0, events: 0, satisfaction: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      if (!hasAnimated) {
        setHasAnimated(true);
        // Animate Counters
        const duration = 2000;
        const steps = 60;
        let currentStep = 0;
        
        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          
          setCounters({
            clients: Math.floor(50 * progress),
            events: Math.floor(200 * progress),
            satisfaction: Math.floor(98 * progress)
          });

          if (currentStep === steps) clearInterval(timer);
        }, duration / steps);
      }
    }
  }, [inView, hasAnimated]);

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* 1. Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <span className={`text-pink-900 text-xs font-bold uppercase tracking-[0.3em] mb-4 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Our Partners
        </span>
        <h2 className={`text-4xl md:text-5xl font-serif text-gray-900 mb-6 transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Trusted by <span className="italic text-pink-900">Industry Leaders</span>
        </h2>
        <div className="w-20 h-1 bg-gray-100 mx-auto rounded-full"></div>
      </div>

      {/* 2. Infinite Logo Marquee */}
      <div className={`relative w-full overflow-hidden transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Side Fades for Premium Look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Moving Track */}
        <div className="flex w-max animate-marquee hover:pause">
          {marqueeLogos.map((client, index) => (
            <div 
              key={`${client.name}-${index}`} 
              className="flex items-center justify-center mx-8 md:mx-12 w-32 md:w-48 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              {/* Removed 'grayscale' class so logos show real colors */}
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-full h-auto object-contain max-h-12 md:max-h-16" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. Stats Section */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-gray-100 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Stat 1 */}
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-serif text-gray-900 font-medium mb-2 group-hover:text-pink-900 transition-colors duration-300">
              {counters.clients}+
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Corporate Clients
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center group border-t md:border-t-0 md:border-l md:border-r border-gray-100 py-6 md:py-0">
            <div className="text-5xl md:text-6xl font-serif text-gray-900 font-medium mb-2 group-hover:text-pink-900 transition-colors duration-300">
              {counters.events}+
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Events Managed
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-serif text-gray-900 font-medium mb-2 group-hover:text-pink-900 transition-colors duration-300">
              {counters.satisfaction}%
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Client Satisfaction
            </div>
          </div>

        </div>
      </div>

      {/* Custom Styles for Infinite Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move 1/3 because we tripled the array */
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Pause animation on hover for better UX */
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default Clients;