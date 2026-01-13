 import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/events' },
    { name: 'Services', href: '/WhatWeDo' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Corporate Events', href: '/events' },
    { name: 'Wedding Planning', href: '/events' },
    { name: 'School Events', href: '/events' },
    { name: 'Catering', href: '/events' },
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com', label: 'Instagram' },
    { icon: 'fab fa-twitter', href: 'https://www.twitter.com', label: 'Twitter' },
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com', label: 'Facebook' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/919876543210', label: 'WhatsApp' }
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Arcod Road, Vadapalani, Chennai - 600017' },
    { icon: 'fas fa-phone-alt', text: '+91 98765 43210' },
    { icon: 'fas fa-envelope', text: 'info@dreamzmedia.com' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gray-900 text-white overflow-hidden font-sans">
      
      {/* Decorative Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-pink-900 via-pink-600 to-pink-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-20">

        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* 1. Brand / About Section (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-white mb-4">
              Dreamzmedia
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Crafting unforgettable experiences in Chennai since 2010. We blend strategy, creativity, and technology to bring your vision to life.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-900 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Links Section (Col Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-6">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           {/* 3. Services Section (Col Span 2) */}
           <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Section (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-pink-500 mb-6">Contact Us</h4>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-pink-900 transition-colors">
                    <i className={`${info.icon} text-xs text-gray-400 group-hover:text-white`}></i>
                  </div>
                  <p className="text-gray-400 group-hover:text-white transition-colors text-sm leading-relaxed pt-1.5">
                    {info.text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Link to="/contact">
                <button className="w-full sm:w-auto bg-white text-gray-900 px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-pink-900 hover:text-white transition-all duration-300">
                  Request Consultation
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>© {currentYear} Dreamzmedia Events. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;