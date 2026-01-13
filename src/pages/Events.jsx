 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Corporate", "Wedding", "School", "Services"];

  const eventsData = [
    // --- Corporate ---
    { id: 1, title: "Conference", category: "Corporate", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80", link: "/conference" },
    { id: 2, title: "Dealers Meet", category: "Corporate", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", link: "/dealersmeet" },
    { id: 3, title: "CSR Activities", category: "Corporate", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80", link: "/csractivities" },
    { id: 4, title: "Corporate Gifting", category: "Corporate", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", link: "/corporategift" },
    
    // --- Wedding ---
    { id: 5, title: "Wedding Planning", category: "Wedding", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", link: "/wedding-events" },
    { id: 6, title: "Stage & Flower", category: "Wedding", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80", link: "/stageflowerdecoration" },
    { id: 7, title: "Mehndi Designer", category: "Wedding", img: "https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?auto=format&fit=crop&w=800&q=80", link: "/mehndidesigner" },
    { id: 8, title: "Marriage Cards", category: "Wedding", img: "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?auto=format&fit=crop&w=800&q=80", link: "/marriagecard" },

    // --- School ---
    { id: 9, title: "School Events", category: "School", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", link: "/schoolevent" },
    { id: 10, title: "Carnival", category: "School", img: "https://images.unsplash.com/photo-1533237264986-641521d3c95d?auto=format&fit=crop&w=800&q=80", link: "/carnival" },
    { id: 11, title: "Trophies & Gifts", category: "School", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", link: "/trophiesandgift" },

    // --- Services/Entertainment ---
    { id: 12, title: "Catering", category: "Services", img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80", link: "/eventscatering" },
    { id: 13, title: "Stage & Music", category: "Services", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80", link: "/stageandmusic" },
    { id: 14, title: "Videography", category: "Services", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", link: "/videographyandphotography" },
    { id: 15, title: "Light & Sound", category: "Services", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", link: "/lightandsound" },
    { id: 16, title: "Cultural Events", category: "Services", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", link: "/culturalevents" },
  ];

  const filteredEvents = activeTab === "All" 
    ? eventsData 
    : eventsData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100">
      
      {/* 1. Header Section */}
      <div className="relative pt-32 pb-12 text-center px-4 bg-gradient-to-b from-stone-50 to-white">
        
        {/* Back to Home Button */}
        <div className="absolute top-28 left-4 md:left-8 z-10">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-pink-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="hidden md:inline">Home</span>
          </button>
        </div>

        <span className="text-pink-900 tracking-[0.3em] text-xs font-bold uppercase mb-4 block animate-fade-in">
          Our Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
          Curated Experiences
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed text-sm md:text-base">
          From grand corporate summits to intimate weddings, explore our diverse range of event expertise.
        </p>
      </div>

      {/* 2. Filter Tabs (Sticky & Horizontal Scroll) */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center min-w-max space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300
                  ${activeTab === cat 
                    ? "bg-pink-900 text-white shadow-md" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.link)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-gray-200 h-64 md:aspect-[3/2] md:h-auto"
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient (Darker on hover for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text Content - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-pink-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">
                  {item.category}
                </span>
                <div className="flex items-end justify-between">
                  <h3 className="text-xl md:text-2xl font-serif text-white font-medium">
                    {item.title}
                  </h3>
                  
                  {/* Arrow Icon that appears/slides on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Events;