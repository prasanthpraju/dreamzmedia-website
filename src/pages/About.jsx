 import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  
  // --- Animation State for Counters ---
  const [counters, setCounters] = useState({ events: 0, clients: 0, years: 0 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
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
  }, [inView]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-100 relative">
      
      {/* --- FIXED BACK BUTTON --- 
          1. Changed 'top-8' to 'top-28' to clear any Navigation Bars.
          2. Added 'z-50' to force it on top of other layers.
      */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-28 left-6 md:top-32 md:left-10 flex items-center gap-2 text-gray-400 hover:text-pink-900 transition-colors duration-300 cursor-pointer group z-50"
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-widest">Go Back</span>
      </button>

      {/* 1. HERO SECTION */}
      <div className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="text-pink-900 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
          Since 2010
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-8 leading-tight">
          We turn bold ideas into <br/>
          <span className="italic text-pink-900">unforgettable realities.</span>
        </h1>
        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
          Dreamzmedia is Chennai’s premier event management company. We combine creative vision with logistical precision to craft events that leave a lasting impact.
        </p>
      </div>

      {/* 2. STATS BAR */}
      <div ref={ref} className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 text-center divide-x divide-gray-200">
          <div>
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">{counters.years}+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">{counters.events}+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Events Managed</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">{counters.clients}+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* 3. WHO WE ARE */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative group">
          <div className="absolute inset-0 bg-pink-900 transform translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Our Team" 
            className="relative w-full h-[500px] object-cover rounded-sm shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">More than just planners.</h2>
          <p className="text-gray-600 leading-loose mb-6">
            We are a team of designers, strategists, and technical experts. While others focus on checklists, we focus on the narrative. Every light fixture, every sound cue, and every floral arrangement is placed with purpose.
          </p>
          <p className="text-gray-600 leading-loose mb-8">
            Whether it is a global corporate summit or an intimate family wedding, our promise remains the same: <strong>Flawless execution.</strong>
          </p>
          
          <div className="flex gap-4">
            <div className="h-1 w-16 bg-pink-900"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-pink-900">The Dreamz Standard</p>
          </div>
        </div>
      </div>

      {/* 4. OUR EXPERTISE */}
      <div className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Expertise</h2>
            <p className="text-gray-400">Four pillars of our service excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div 
              onClick={() => navigate('/events')}
              className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
            >
              <div className="h-10 w-10 bg-pink-600 mb-6 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Corporate</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Conferences, Dealers Meets, and CSR activities executed with professionalism.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 group-hover:text-white transition-colors">Explore &rarr;</span>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => navigate('/wedding-events')}
              className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
            >
              <div className="h-10 w-10 bg-pink-600 mb-6 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Weddings</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">From Mehndi to Reception, we curate timeless moments of love.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 group-hover:text-white transition-colors">Explore &rarr;</span>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => navigate('/schoolevent')}
              className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
            >
              <div className="h-10 w-10 bg-pink-600 mb-6 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-serif mb-3">School Events</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">Carnivals, Annual Days, and Cultural Fests managed with energy.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 group-hover:text-white transition-colors">Explore &rarr;</span>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => navigate('/stageandmusic')}
              className="bg-white/5 p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
            >
              <div className="h-10 w-10 bg-pink-600 mb-6 flex items-center justify-center rounded-full">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-serif mb-3">Production</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">State-of-the-art Sound, Light, and Stage fabrication services.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-pink-400 group-hover:text-white transition-colors">Explore &rarr;</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CTA SECTION */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">Let's create something extraordinary.</h2>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-pink-900 text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg cursor-pointer"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default About;