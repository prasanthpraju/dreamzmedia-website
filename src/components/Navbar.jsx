 import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Events', 'Whatwedo', 'Contact Us'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-6'
    }`}>
      {/* Animated Border Bottom */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left transition-transform duration-1000 ${
        isScrolled ? 'scale-x-100' : 'scale-x-0'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Animation */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group relative">
              <div className="relative">
                <div className="w-48 h-16 flex items-center justify-center relative overflow-hidden rounded-2xl">
                  <img 
                    src={logo} 
                    alt="DreamzMedia Logo" 
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-all duration-500 z-10 relative"
                  />
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
                {/* Floating Particles around logo */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.3s'}}></div>
              </div>
            </a>
          </div>

          {/* Desktop Menu with Enhanced Animations */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <div key={item} className="relative group">
                  <a
                    href={item.toLowerCase().replace(' ', '')}
                    className={`px-5 py-3 text-sm font-semibold transition-all duration-500 relative overflow-hidden rounded-xl ${
                      activeLink === item 
                        ? 'text-purple-600 bg-purple-50' 
                        : 'text-gray-700 hover:text-purple-600'
                    }`}
                    onMouseEnter={() => setActiveLink(item)}
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Hover Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-xl"></div>
                    
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-purple-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    {/* Floating Dots */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"></div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 flex flex-col items-center justify-center group bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full ${
                  isMenuOpen ? 'opacity-0 translate-x-4' : 'top-3 opacity-100'
                }`}></span>
                <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-700 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={item.toLowerCase().replace(' ', '')}
                className="block px-4 py-4 text-base font-semibold text-gray-700 hover:text-purple-600 rounded-xl transition-all duration-500 relative overflow-hidden group hover:bg-purple-50"
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(item);
                }}
              >
                <span className="relative z-10 flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {item}
                </span>
                
                {/* Slide-in background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-xl"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;