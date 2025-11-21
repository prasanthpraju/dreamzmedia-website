 import React, { useState } from 'react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

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

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section - Questions & CTA */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                What is the process for working with Dreamzmedia Events?
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-purple-100 group-hover:text-white transition-colors duration-300">
                    Do you offer customized packages for different types of events?
                  </p>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <p className="text-purple-100 group-hover:text-white transition-colors duration-300">
                    How can I get a quote or consultation from Dreamzmedia Events?
                  </p>
                </div>
              </div>

              <button className="group relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 w-full">
                <span className="relative z-10">Get a Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Section - Links & Contact */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center text-purple-100 hover:text-white transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Address & Contact
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <i className={`${item.icon} text-purple-400 mt-1 mr-3 group-hover:text-pink-400 transition-colors duration-300 w-4`}></i>
                    <p className="text-purple-100 group-hover:text-white transition-colors duration-300 flex-1">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/30 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center hover:border-purple-400/50 hover:from-purple-700/40 hover:to-pink-700/40 transform hover:scale-110 transition-all duration-300"
                aria-label={social.label}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <i className={`${social.icon} text-purple-300 group-hover:text-white transition-colors duration-300`}></i>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-purple-200 text-sm">
              ©{currentYear} | <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">Dreamzmedia Events</span> | All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;