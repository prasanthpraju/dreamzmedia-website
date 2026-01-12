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

  // Updated Navigation Items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/events" }, // CHANGED THIS LINK
    { name: "Services", path: "/WhatWeDo" }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/">
              {/* Add a filter drop-shadow for better visibility on dark backgrounds if needed */}
              <img src={logo} className="w-32 md:w-40 transition-all duration-300" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu - Refined Typography */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                // Dynamic Text Color Logic
                let textColor = "text-gray-800"; // Default
                if (!isScrolled && isHome) textColor = "text-white"; // White on Hero
                if (isActive) textColor = "text-pink-700"; // Active State

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative group px-2 py-2 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${textColor} hover:text-pink-600`}
                  >
                    {item.name}
                    {/* Animated Underline */}
                    <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-pink-600 transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                  </Link>
                );
              })}

              {/* Contact Button - Outline Style for Modern Look */}
              <Link to="/contact">
                <button
                  className={`ml-4 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 transform hover:scale-105
                  ${isScrolled 
                    ? "border-pink-900 text-pink-900 hover:bg-pink-900 hover:text-white" 
                    : isHome 
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 text-pink-900 focus:outline-none">
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-2"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Glass Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: 0 }}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-3xl text-gray-500">&times;</button>
          
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif font-medium text-gray-900 hover:text-pink-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="mt-4 px-8 py-3 bg-pink-900 text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;