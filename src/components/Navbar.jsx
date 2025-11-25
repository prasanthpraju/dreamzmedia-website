 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/culturalevents" },
    { name: "What We Do", path: "/services" }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      {/* Pink gradient bottom line */}
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
        from-pink-500 via-pink-600 to-pink-700 transform origin-left 
        transition-transform duration-1000 ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group relative">
              <img src={logo} className="w-44" alt="DreamzMedia Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-5 py-3 text-sm font-semibold transition-all duration-500 
                    relative overflow-hidden rounded-xl ${
                      location.pathname === item.path
                        ? isScrolled
                          ? "text-pink-900 bg-pink-50"
                          : "text-white bg-white/20"
                        : isScrolled
                        ? "text-gray-700 hover:text-pink-900"
                        : "text-white hover:text-pink-200"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>

                    <div
                      className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-500 origin-left rounded-xl ${
                        isScrolled
                          ? "bg-gradient-to-r from-pink-500/10 to-rose-500/10"
                          : "bg-gradient-to-r from-white/20 to-pink-500/20"
                      }`}
                    />
                  </Link>
                </div>
              ))}

              {/* Contact Button */}
              <Link to="/contact">
                <button
                  className={`ml-4 px-6 py-3 rounded-xl font-semibold transform hover:scale-105 
                  transition-all duration-300 shadow-lg ${
                    isScrolled
                      ? "bg-pink-900 text-white hover:bg-pink-800"
                      : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30"
                  }`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-12 h-12 flex flex-col items-center justify-center"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-500 ${
                    isMenuOpen
                      ? "rotate-45 top-3 bg-pink-600"
                      : `top-1 ${isScrolled ? "bg-pink-800" : "bg-white"}`
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-0"
                      : `top-3 ${isScrolled ? "bg-pink-800" : "bg-white"} opacity-100`
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-500 ${
                    isMenuOpen
                      ? "-rotate-45 top-3 bg-pink-600"
                      : `top-5 ${isScrolled ? "bg-pink-800" : "bg-white"}`
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-700 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-4 text-base font-semibold text-gray-700 hover:text-pink-900 rounded-xl transition-all duration-500"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <button className="w-full mt-4 bg-pink-900 text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;