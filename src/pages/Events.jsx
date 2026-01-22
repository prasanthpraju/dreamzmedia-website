 import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Corporate", "Wedding", "School", "Birthday", "Services"];

  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventsData = [
    // --- Corporate ---
    { id: 1, title: "Conference", category: "Corporate", img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop", link: "/conference" },
    { id: 2, title: "Dealers Meet", category: "Corporate", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80", link: "/dealersmeet" },
    { id: 3, title: "CSR Activities", category: "Corporate", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80", link: "/csractivities" },
    { id: 4, title: "Corporate Gifting", category: "Corporate", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1000&q=80", link: "/corporategift" },
    
    // --- Wedding ---
    { id: 5, title: "Wedding Planning", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", link: "/marriagecard" },
    { id: 6, title: "Stage & Flower", category: "Wedding", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1000&q=80", link: "/stageflowerdecoration" },
    { id: 7, title: "Mehndi Designer", category: "Wedding", img: "https://images.unsplash.com/photo-1604907952086-a67b5f543666?auto=format&fit=crop&w=1000&q=80", link: "/mehndidesigner" },
    { id: 8, title: "Orchestra", category: "Wedding", img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=1000&q=80", link: "/orchestra" },

    // --- School ---
    { id: 9, title: "School Events", category: "School", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80", link: "/schoolevent" },
    { id: 10, title: "Carnival", category: "School", img: "https://images.unsplash.com/photo-1533237264986-641521d3c95d?auto=format&fit=crop&w=1000&q=80", link: "/carnival" },
    { id: 11, title: "Trophies & Gifts", category: "School", img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1000&q=80", link: "/trophiesandgift" },
    { id: 12, title: "Banner & Arch", category: "School", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80", link: "/bannerandarch" },

    // --- Birthday ---
    { id: 13, title: "Birthday Themes", category: "Birthday", img: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&w=1000&q=80", link: "/themes" },
    { id: 14, title: "Balloon Decor", category: "Birthday", img: "https://images.unsplash.com/photo-1533294160622-d5fece760826?auto=format&fit=crop&w=1000&q=80", link: "/balloondecoration" },
    { id: 15, title: "Magic Show", category: "Birthday", img: "https://images.unsplash.com/photo-1582234032488-b21025d08246?auto=format&fit=crop&w=1000&q=80", link: "/magicshow" },

    // --- Services ---
    { id: 16, title: "Catering", category: "Services", img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80", link: "/eventscatering" },
    { id: 17, title: "Stage & Music", category: "Services", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80", link: "/stageandmusic" },
    { id: 18, title: "Videography", category: "Services", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80", link: "/videographyandphotography" },
    { id: 19, title: "Light & Sound", category: "Services", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80", link: "/lightandsound" },
  ];

  const filteredEvents = activeTab === "All" 
    ? eventsData 
    : eventsData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100">
      
      {/* Header */}
      <div className="relative pt-32 pb-12 text-center px-4 bg-gradient-to-b from-stone-50 to-white">
        
        {/* Back Button */}
        <div className="absolute top-28 left-4 md:left-8 z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-sm cursor-pointer font-bold uppercase tracking-widest text-gray-500 hover:text-pink-900 transition-colors"
          >
            <div className="p-2 rounded-full border border-gray-300 hover:border-pink-900 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </div>
          </button>
        </div>

        <span className="text-pink-900 tracking-[0.3em] text-xs font-bold uppercase mb-4 block animate-in fade-in slide-in-from-bottom-3">
          Our Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
          Curated Experiences
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 font-light leading-relaxed text-sm md:text-base">
          Explore our diverse range of event expertise, from corporate summits to dream weddings.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 mb-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center min-w-max space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  px-6 py-2 rounded-full cursor-pointer text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border
                  ${activeTab === cat 
                    ? "bg-pink-900 text-white border-pink-900 shadow-md" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-pink-900 hover:text-pink-900"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((item) => (
            <div 
              key={item.id} 
              onClick={() => navigate(item.link)}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 h-72"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-pink-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                  {item.category}
                </span>
                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                  <h3 className="text-xl md:text-2xl font-serif text-white font-medium">
                    {item.title}
                  </h3>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-pink-900 group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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