 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10); // Trigger shadow earlier
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/events" },
    { name: "Services", path: "/WhatWeDo" }
  ];

  return (
    <>
      <nav
        // HEIGHT DEFINITION: h-16 (mobile) and h-20 (desktop)
        // This matches the margins in HeroSection
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 flex items-center h-16 lg:h-20 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">

            {/* --- LOGO --- */}
            <div className="flex-shrink-0 z-50">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src={logo} 
                  className="w-28 md:w-36 object-contain" 
                  alt="Dreamzmedia" 
                />
              </Link>
            </div>

            {/* --- DESKTOP MENU --- */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-[11px] font-bold uppercase tracking-[0.2em] py-2 relative group transition-colors duration-300
                        ${isActive ? "text-pink-600" : "text-gray-800 hover:text-pink-600"}`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-1/2 h-[2px] bg-pink-600 transform -translate-x-1/2 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* --- RIGHT CTA --- */}
            <div className="hidden lg:block z-50">
               <Link to="/contact">
                <button
                  className="px-6 py-2.5 cursor-pointer rounded-sm text-[10px] font-bold uppercase tracking-widest border border-gray-900 bg-gray-900 text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg"
                >
                  Get in Touch
                </button>
              </Link>
            </div>

            {/* --- MOBILE HAMBURGER --- */}
            <div className="lg:hidden z-50">
              <button onClick={() => setIsMenuOpen(true)} className="p-2">
                 <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-4 h-0.5 bg-black ml-auto"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                 </div>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER --- */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.77, 0, 0.175, 1) lg:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
           <img src={logo} className="w-24" alt="Logo" />
           <button onClick={() => setIsMenuOpen(false)} className="p-2 text-2xl text-gray-500 hover:text-black">&times;</button>
        </div>
        <div className="flex flex-col px-8 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-3"
            >
              {item.name}
            </Link>
          ))}
           <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full mt-4 py-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                Start Project
              </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;  