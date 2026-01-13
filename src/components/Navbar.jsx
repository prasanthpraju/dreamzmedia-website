 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const logoFilter = (!isScrolled && isHome && !isMenuOpen) ? "brightness(0) invert(1)" : "none";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/events" },
    { name: "Services", path: "/WhatWeDo" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 relative">

          {/* --- LOGO: Adaptive Positioning --- */}
          {/* Mobile: Standard Left | Desktop: Absolute "Overlapping" Masthead */}
          <div className="relative lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 z-50 lg:pl-4 transition-all duration-300">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img 
                src={logo} 
                className="w-28 sm:w-32 md:w-40 lg:w-56 transition-all duration-500 hover:opacity-90" 
                alt="Dreamzmedia" 
                style={{ filter: logoFilter }} 
              />
            </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <div className="flex space-x-12">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group py-2
                      ${!isScrolled && isHome 
                        ? "text-white/90 hover:text-white" 
                        : "text-gray-600 hover:text-pink-900"
                      } ${isActive ? "text-pink-500" : ""}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-[2px] bg-current transform -translate-x-1/2 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* --- DESKTOP CTA --- */}
          <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
             <Link to="/contact">
              <button
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 hover:-translate-y-0.5
                ${!isScrolled && isHome 
                  ? "border-white/30 text-white hover:bg-white hover:text-black hover:border-white" 
                  : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Get in Touch
              </button>
            </Link>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="lg:hidden z-50">
            <button onClick={toggleMenu} className="p-2 focus:outline-none touch-manipulation">
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 rounded-full transition-all duration-300 ${!isScrolled && isHome && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "w-6 rotate-45 translate-y-2 bg-black" : "w-6"}`} />
                <span className={`h-0.5 rounded-full transition-all duration-300 ${!isScrolled && isHome && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 rounded-full transition-all duration-300 ${!isScrolled && isHome && !isMenuOpen ? "bg-white" : "bg-black"} ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2 bg-black" : "w-6"}`} />
              </div>
            </button>
          </div>

        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-500 cubic-bezier(0.77, 0, 0.175, 1) lg:hidden flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ height: '100dvh' }} // Use dynamic viewport height
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif text-gray-900 hover:text-pink-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
             <button className="mt-8 px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-xl">
               Start Project
             </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;