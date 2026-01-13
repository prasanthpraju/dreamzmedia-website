 import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "We orchestrate seamless corporate gatherings, from high-stakes board meetings to large-scale conferences. Our focus is on precision, branding, and creating an environment that fosters business connections.",
      features: ["Conferences & Seminars", "Product Launches", "Award Ceremonies"],
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=800&q=80",
      link: "/conference"
    },
    {
      title: "Wedding Planning",
      description: "Turning your dream wedding into reality. We handle everything from venue selection to the final farewell, ensuring your special day is filled with magic, elegance, and love, without the stress.",
      features: ["Destination Weddings", "Decor & Styling", "Guest Management"],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      link: "/wedding-events"
    },
    {
      title: "Social & Cultural",
      description: "Celebrating life's milestones and cultural heritage. Whether it's a vibrant music festival, a school annual day, or a private birthday bash, we bring energy and creativity to every occasion.",
      features: ["School Annual Days", "Birthday Parties", "Music Festivals"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      link: "/culturalevents"
    },
    {
      title: "Production Services",
      description: "The technical backbone of any great event. We provide top-tier audio-visual equipment, stage fabrication, and lighting designs that transform venues into immersive experiences.",
      features: ["Light & Sound", "Stage Fabrication", "Live Streaming"],
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80",
      link: "/stageandmusic"
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100">
      
      {/* 1. HERO - Minimalist */}
      <div className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto bg-gradient-to-b from-stone-50 to-white">
        <span className="text-pink-900 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          Our Services
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
          We Design <span className="italic text-pink-900">Experiences</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
          We don't just plan events; we curate moments. Explore our comprehensive suite of services designed to bring your vision to life.
        </p>
      </div>

      {/* 2. ZIG-ZAG SERVICE LIST */}
      <div className="flex flex-col gap-16 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center bg-white border border-gray-100 md:border-none shadow-xl md:shadow-none rounded-2xl md:rounded-none overflow-hidden md:overflow-visible"
          >
            
            {/* Image Side - Compact & Responsive */}
            <div className={`relative w-full h-64 md:h-96 overflow-hidden rounded-none md:rounded-lg shadow-none md:shadow-2xl ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Side */}
            <div className={`flex flex-col justify-center p-8 md:p-4 lg:p-12 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
              <div className="hidden md:block w-12 h-1 bg-pink-900 mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
              
              <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-4 group-hover:text-pink-900 transition-colors">
                {service.title}
              </h2>
              
              <p className="text-gray-500 leading-relaxed mb-6 text-sm md:text-base font-light">
                {service.description}
              </p>

              <ul className="mb-8 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-xs md:text-sm font-bold text-gray-800 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div>
                <Link to={service.link}>
                  <button className="px-6 py-3 border border-gray-200 md:border-gray-900 text-gray-900 font-bold text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-md md:rounded-none w-full md:w-auto">
                    Explore Details
                  </button>
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 3. CTA */}
      <div className="bg-stone-50 py-20 text-center px-6">
        <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-4">Have something else in mind?</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm md:text-base">
          We love unique challenges. Contact us for a custom consultation tailored to your specific needs.
        </p>
        <Link to="/contact">
          <button className="bg-pink-900 text-white px-8 py-3 rounded-sm font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg">
            Get In Touch
          </button>
        </Link>
      </div>

    </div>
  );
};

export default WhatWeDo;