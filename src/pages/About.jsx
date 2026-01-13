 import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  // 1. Counters Logic
  const [counters, setCounters] = useState({ events: 0, clients: 0, years: 0 });
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;
      let current = 0;
      const timer = setInterval(() => {
        current++;
        const progress = current / steps;
        setCounters({
          events: Math.floor(500 * progress),
          clients: Math.floor(250 * progress),
          years: Math.floor(14 * progress),
        });
        if (current === steps) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // 2. Data Organization (Based on your events list)
  const expertiseAreas = [
    {
      category: "Corporate & Business",
      description: "Strategic execution for high-stakes professional gatherings.",
      services: ["Conference", "Dealers Meet", "CSR Activities", "Corporate Gifting"],
      link: "/events"
    },
    {
      category: "Weddings & Social",
      description: "Curating timeless moments with elegance and cultural integrity.",
      services: ["Wedding Planning", "Stage & Flower Decor", "Mehndi Designer", "Marriage Cards", "Return Gifts"],
      link: "/wedding-events"
    },
    {
      category: "Institutional & School",
      description: "Engaging and safe environments for educational celebrations.",
      services: ["School Events", "Carnival", "Trophies & Gifts", "Cultural Events"],
      link: "/schoolevent"
    },
    {
      category: "Production & Technical",
      description: "The backbone of every great event, handled by experts.",
      services: ["Stage & Music", "Light & Sound", "Videography", "Event Catering"],
      link: "/stageandmusic"
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-stone-50 font-sans selection:bg-pink-900 selection:text-white">
      
      {/* --- SECTION 1: TYPOGRAPHIC HERO --- */}
      <div className="relative pt-40 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto border-l border-r border-gray-200 bg-white">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <span className="text-pink-900 font-bold tracking-[0.3em] uppercase text-xs mb-6 block animate-fade-in">
              Since 2010
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-[0.9] tracking-tight mb-8">
              We Engineer <br />
              <span className="italic text-pink-900">Emotions.</span>
            </h1>
            <div className="w-24 h-1.5 bg-gray-900 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Dreamzmedia is Chennai’s premier event architect. We move beyond simple planning to create immersive, narrative-driven experiences that linger in memory long after the lights go down.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
             {/* Abstract Decorative Element */}
             <div className="w-40 h-40 border-[1px] border-pink-900 rounded-full flex items-center justify-center relative">
                <div className="w-32 h-32 bg-pink-900 rounded-full flex items-center justify-center text-white text-center text-xs font-bold uppercase tracking-widest p-4">
                  Crafting<br/>Magic
                </div>
                <div className="absolute inset-0 border-t border-r border-gray-300 rounded-full animate-spin-slow"></div>
             </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: THE SPLIT STORY (Asymmetrical) --- */}
      <div className="relative bg-stone-900 text-white">
        <div className="grid lg:grid-cols-2 h-auto lg:h-[800px]">
          
          {/* Left: Image (Full Height) */}
          <div className="relative h-[500px] lg:h-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" 
              alt="Team Strategy" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12">
               <p className="font-serif text-3xl italic">"Details make the design."</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center px-8 py-20 lg:p-24">
            <h2 className="text-4xl font-serif mb-8">The Dreamz Difference</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              In a world of noise, we create resonance. Whether it's a high-stakes <strong>Corporate Conference</strong> involving global leaders, or an intimate <strong>Wedding</strong> steeped in tradition, our approach remains the same: <span className="text-white">Precision, Passion, and Perfection.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Our 45+ member team comprises designers, technical directors, and logistics experts who work in unison to handle the complex choreography of modern events.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-800 pt-12">
              <div>
                <div className="text-4xl font-serif text-pink-500 mb-1">{counters.years}+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Years</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-pink-500 mb-1">{counters.events}+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Events</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-pink-500 mb-1">{counters.clients}+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: OUR SPECTRUM (The "Menu" Layout) --- */}
      <div className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto bg-white border-l border-r border-gray-200">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Spectrum</h2>
          <p className="text-gray-500 font-light">Comprehensive expertise across four pillars</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group">
              {/* Category Header */}
              <div className="flex items-baseline justify-between border-b border-gray-900 pb-4 mb-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-pink-900 transition-colors">
                  {area.category}
                </h3>
                <span className="text-pink-900 font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 font-light">{area.description}</p>

              {/* Tag Cloud of Specific Services */}
              <div className="flex flex-wrap gap-2 mb-8">
                {area.services.map((service, i) => (
                  <span key={i} className="px-3 py-1 bg-stone-100 text-xs font-bold uppercase tracking-wider text-gray-700 border border-stone-200 group-hover:border-pink-200 group-hover:bg-pink-50 transition-colors">
                    {service}
                  </span>
                ))}
              </div>
              
              {/* Link */}
              <button 
                onClick={() => navigate(area.link)}
                className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b-2 border-transparent hover:border-pink-900 transition-all"
              >
                View Portfolio &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 4: THE VALUES (Cards) --- */}
      <div className="bg-stone-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Precision", desc: "We adhere to timelines with military discipline." },
            { title: "Innovation", desc: "We don't follow trends; we set them." },
            { title: "Integrity", desc: "Transparent pricing and honest communication." }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
               <div className="w-12 h-1 bg-pink-900 mb-6"></div>
               <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{val.title}</h3>
               <p className="text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 5: CALL TO ACTION --- */}
      <div className="relative py-32 text-center bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="relative z-10 px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Ready to make <span className="italic text-pink-500">history?</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-white text-gray-900 font-bold uppercase tracking-widest text-sm hover:bg-pink-900 hover:text-white transition-all duration-300"
          >
            Start the Conversation
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;