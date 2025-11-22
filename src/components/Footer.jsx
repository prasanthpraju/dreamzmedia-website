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
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#132440] text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute -top-20 -left-20 w-64 h-64 bg-[#132440] rounded-full blur-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}></div>
        <div className={`absolute -bottom-20 -right-20 w-72 h-72 bg-[#132440] rounded-full blur-3xl transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#132440] rounded-full blur-3xl transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Section - Questions & CTA */}
          <div className="space-y-6 lg:space-y-8">
            <div className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-white leading-tight">
                What is the process for working with Dreamzmedia Events?
              </h3>
              
              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm lg:text-base">
                    Do you offer customized packages for different types of events?
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm lg:text-base">
                    How can I get a quote or consultation from Dreamzmedia Events?
                  </p>
                </div>
              </div>

              <button className="group relative bg-[#1e385f] text-white font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:bg-[#2a4a7a] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#1e385f]/50 w-full border-2 border-[#1e385f] hover:border-[#2a4a7a]">
                <span className="relative z-10 text-sm lg:text-base">Get a Free Consultation</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          {/* Right Section - Links & Contact */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div className="space-y-4 lg:space-y-6">
              <h4 className="text-lg lg:text-xl font-bold text-white">
                Quick Links
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 py-2 lg:py-2 text-sm lg:text-base ${
                      isVisible ? `opacity-100 translate-x-0` : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="font-medium group-hover:font-semibold">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 lg:space-y-6 mt-6 md:mt-0">
              <h4 className="text-lg lg:text-xl font-bold text-white">
                Address & Contact
              </h4>
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start group p-3 transition-all duration-300 ${
                      isVisible ? `opacity-100 translate-x-0` : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 700}ms` }}
                  >
                    <i className={`${item.icon} text-gray-400 mt-0.5 mr-3 lg:mr-4 group-hover:text-white transition-colors duration-300 w-4 text-base lg:text-lg`}></i>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 flex-1 text-xs lg:text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t border-[#1e385f] mb-8 lg:mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Social Icons */}
          <div className="flex space-x-3 lg:space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-12 h-12 lg:w-14 lg:h-14 bg-[#1e385f] backdrop-blur-sm border-2 border-[#1e385f] rounded-xl flex items-center justify-center hover:border-[#2a4a7a] hover:bg-[#2a4a7a] transform hover:scale-110 hover:shadow-xl hover:shadow-[#1e385f]/30 transition-all duration-300 ${
                  isVisible ? `opacity-100 scale-100` : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
                aria-label={social.label}
              >
                <i className={`${social.icon} text-gray-400 group-hover:text-white transition-colors duration-300 text-base lg:text-lg`}></i>
                
                {/* Pulse animation on hover */}
                <div className="absolute inset-0 border-2 border-white rounded-xl opacity-0 group-hover:opacity-30 scale-110 group-hover:scale-100 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm lg:text-base">
              ©{currentYear} | <span className="text-white font-bold">Dreamzmedia Events</span> | All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs lg:text-sm mt-1 lg:mt-2">
              Crafting Unforgettable Experiences in Chennai
            </p>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className={`absolute -bottom-10 left-10 w-8 h-8 bg-[#132440] rounded-full blur-xl animate-pulse transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute -top-5 right-20 w-6 h-6 bg-[#132440] rounded-full blur-lg animate-pulse transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{animationDelay: '2s'}}></div>
        <div className={`absolute top-10 left-1/4 w-4 h-4 bg-[#132440] rounded-full blur-md animate-pulse transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{animationDelay: '1s'}}></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </footer>
  );
};

export default Footer;