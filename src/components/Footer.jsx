 import React, { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Eventscope', href: '#eventscope' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' }
  ];

  const socialLinks = [
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com', label: 'Instagram' },
    { icon: 'fab fa-twitter', href: 'https://www.twitter.com', label: 'Twitter' },
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com', label: 'Facebook' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: 'fas fa-phone', href: 'tel:+919876543210', label: 'Call' }
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: 'Arcod Rd, Vadapalani, Chennai, Tamil Nadu 600077' },
    { icon: 'fas fa-phone-alt', text: '+91 9876543210' },
    { icon: 'fas fa-envelope', text: 'dreamzmedia@gmail.com' }
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
    <footer ref={footerRef} className="relative bg-[#132440] text-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">

        {/* Main Content */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Left Section */}
          <div className="space-y-6 lg:space-y-8 p-4 lg:p-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white leading-tight">
              What is the process for working with Dreamzmedia Events?
            </h3>

            <div className="space-y-3 lg:space-y-4">
              <p className="text-gray-300 text-sm lg:text-base">
                Do you offer customized packages for different types of events?
              </p>
              <p className="text-gray-300 text-sm lg:text-base">
                How can I get a quote or consultation from Dreamzmedia Events?
              </p>
            </div>

            <button className="bg-[#1e385f] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#2a4a7a] transition-all w-full">
              Get a Free Consultation
            </button>
          </div>

          {/* Right Section */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Quick Links */}
            <div>
              <h4 className="text-lg lg:text-xl font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg lg:text-xl font-bold mb-4">Address & Contact</h4>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start">
                    <i className={`${info.icon} text-gray-400 mr-3`}></i>
                    <p className="text-gray-300 text-sm">{info.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e385f] mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 bg-[#1e385f] rounded-xl flex items-center justify-center hover:bg-[#2a4a7a] transition"
              >
                <i className={`${social.icon} text-gray-300`}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              ©{currentYear} | <span className="text-white font-bold">Dreamzmedia Events</span> | All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs mt-1">Crafting Unforgettable Experiences in Chennai</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
