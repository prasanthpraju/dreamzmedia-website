 import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your consultation request! We will contact you soon.');
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      location: ''
    });
  };

  const features = [
    {
      title: "End-to-End Event Solutions",
      description: "From Concept to Celebration"
    },
    {
      title: "500+ Corporate Clients",
      description: "Trusted by leading companies"
    },
    {
      title: "Creative Customized Experiences",
      description: "That Leave a Lasting Impact"
    }
  ];

  const contactInfo = [
    {
      detail: "123 Arcord Road, Vadapalani, Chennai - 600017",
      type: "location"
    },
    {
      detail: "+91 98765 43210",
      type: "phone"
    },
    {
      detail: "info@dreamzmedia.com",
      type: "email"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50"
      style={{ marginTop: '80px' }}
    >
      {/* Background Animation - Matching OurMajorService */}
      <div className="absolute inset-0">
        {/* Wave-like gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200/35 rounded-full blur-3xl animate-wave-move"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-200/35 rounded-full blur-3xl animate-wave-move-reverse"
          style={{ transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.01}px)` }}
        ></div>
        
        {/* Pulsing circles */}
        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-pink-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 bg-rose-300/20 rounded-full animate-pulse-delayed"></div>
        
        {/* Geometric floating shapes */}
        <div className="absolute top-20 right-16 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-lg rotate-45 animate-float-diagonal shadow-xl"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-bl from-rose-400/15 to-pink-400/15 rounded-full animate-float-spiral shadow-xl"></div>
        <div className="absolute top-40 left-32 w-16 h-16 bg-pink-400/20 rounded-lg animate-float-bounce shadow-xl"></div>
        <div className="absolute bottom-32 right-24 w-28 h-28 bg-rose-400/15 rounded-full animate-float-elastic shadow-xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-diagonal-pattern animate-diagonal-move"></div>
        </div>

        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-scan-line"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/30 to-transparent animate-scan-line-delayed"></div>
      </div>

      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-20 mix-blend-multiply"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-pink-600">Dreamzmedia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's Create Unforgettable Experiences Together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 lg:mb-16 transform transition-all duration-700 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center"
            >
              <div className=" ">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Contact Form Section */}
          <div className={`transform transition-all duration-700 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Hover Gradient Overlay */}
              <div className=" "></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-600">Get in touch with our event experts</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to- bg-pink-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-pink-700 hover:to-rose-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    BOOK A FREE CONSULTATION
                  </button>
                </form>
              </div>

              {/* Animated Border */}
              <div className=" ">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          </div>

          {/* Map & Contact Info Section */}
          <div className={`space-y-8 transform transition-all duration-700 delay-900 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Map Section */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Hover Gradient Overlay */}
              <div className=" "></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">Come discuss your event ideas with us</p>
                </div>
                
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.382709414885!2d80.21443253677057!3d13.05059829655838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e94571bb8b%3A0x5e4eab3021eae855!2sdreamzmedia!5e0!3m2!1sen!2sin!4v1761650704799!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dreamzmedia Chennai Office Location"
                    className="rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                  ></iframe>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{info.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>

             
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="group relative   p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl lg:text-3xl font-bold text-balck mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-black text-lg mb-6">
              Let's discuss your event vision and bring it to life
            </p>
            <button className="bg-white text-pink-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              CALL NOW: +91 98765 43210
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles - Same as OurMajorService */}
      <style jsx>{`
        @keyframes wave-move {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(20px, 15px) scale(1.1); }
          50% { transform: translate(40px, 0px) scale(1.05); }
          75% { transform: translate(20px, -15px) scale(1.1); }
        }
        @keyframes wave-move-reverse {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(-15px, 10px) scale(1.08); }
          50% { transform: translate(-30px, 0px) scale(1.1); }
          75% { transform: translate(-15px, -10px) scale(1.08); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.4; }
        }
        @keyframes pulse-delayed {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
        }
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0px, 0px) rotate(45deg); }
          50% { transform: translate(15px, -15px) rotate(60deg); }
        }
        @keyframes float-spiral {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(8px, -12px) rotate(90deg); }
          50% { transform: translate(0px, -20px) rotate(180deg); }
          75% { transform: translate(-8px, -12px) rotate(270deg); }
          100% { transform: translate(0px, 0px) rotate(360deg); }
        }
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0px); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(-5px); }
          75% { transform: translateY(-15px); }
        }
        @keyframes float-elastic {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-12px) scale(1.1); }
          50% { transform: translateY(-8px) scale(0.9); }
          75% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes diagonal-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-wave-move { animation: wave-move 15s ease-in-out infinite; }
        .animate-wave-move-reverse { animation: wave-move-reverse 18s ease-in-out infinite 2s; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-pulse-delayed { animation: pulse-delayed 10s ease-in-out infinite 1s; }
        .animate-float-diagonal { animation: float-diagonal 12s ease-in-out infinite; }
        .animate-float-spiral { animation: float-spiral 20s linear infinite; }
        .animate-float-bounce { animation: float-bounce 6s ease-in-out infinite; }
        .animate-float-elastic { animation: float-elastic 9s ease-in-out infinite 1.5s; }
        .animate-diagonal-move { animation: diagonal-move 40s linear infinite; }
        .animate-scan-line { animation: scan-line 8s linear infinite; }
        .animate-scan-line-delayed { animation: scan-line 8s linear infinite 4s; }
        
        .bg-diagonal-pattern {
          background-image: linear-gradient(45deg, rgba(244, 114, 182, 0.05) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(244, 114, 182, 0.05) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(244, 114, 182, 0.05) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(244, 114, 182, 0.05) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }
      `}</style>
    </section>
  );
};

export default Contact;