 import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Pink gradient orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-orb-move"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl animate-orb-move delay-2000"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }}
        ></div>
        
        {/* Pink floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-float shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-lg rotate-45 animate-float-delayed shadow-2xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full animate-float-slow shadow-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-lg animate-float-delayed-slow shadow-2xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
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

      <div className="relative z-10 pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="block" style={{animationDelay: '0.1s'}}>
                    Creative Event
                  </span>
                  <span className="block mt-4 text-pink-600">
                    Management Experts
                  </span>
                  <span className="block mt-4" style={{animationDelay: '0.3s'}}>
                    in{' '}
                    <span className="text-rose-600">
                      Chennai
                    </span>
                  </span>
                </h1>
                
                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  Since 2010
                </div>
              </div>

              <div className="space-y-4">
                {[
                  'Complete Event Planning & Execution Services',
                  '200+ Successful Events & 50+ Corporate Clients',
                  'Innovative Themes & Creative Decor Solutions',
                  'Premium Vendor Network & Quality Assurance',
                  'Budget-Friendly Packages with Premium Results'
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start group"
                  >
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-pink-700 transition-all duration-300 shadow-lg">
                  Plan Your Event
                </button>
                <button className="border-2 border-pink-500 text-pink-600 font-bold py-3 px-6 rounded-xl hover:bg-pink-50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Form - Medium Size */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
            }`}>
              <div className="relative">
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xl transition-all duration-500 relative overflow-hidden">
                  {/* Form background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-50 opacity-50"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-rose-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Get Your{' '}
                      <span className="text-pink-600">
                        Free Quote
                      </span>
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { type: 'text', placeholder: 'Your Name' },
                        { type: 'tel', placeholder: 'Phone Number' },
                        { type: 'email', placeholder: 'Email Address' },
                        { type: 'text', placeholder: 'Event Type' },
                        { type: 'text', placeholder: 'Event Date' }
                      ].map((field, index) => (
                        <div key={index} className="relative">
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-all duration-300"
                          />
                        </div>
                      ))}
                      
                      <button
                        type="submit"
                        className="w-full bg-pink-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-pink-700 transition-all duration-300 shadow-lg"
                      >
                        GET FREE QUOTE NOW
                      </button>
                    </form>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -z-10 -top-4 -left-4 w-16 h-16 bg-pink-300/30 rounded-full animate-float"></div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-14 h-14 bg-rose-300/30 rounded-full animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        @keyframes float-delayed-slow {
          0%, 100% { transform: translateY(-5px) scale(1); }
          50% { transform: translateY(-25px) scale(1.05); }
        }
        @keyframes orb-move {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 30px) scale(1.1); }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 7s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed-slow { animation: float-delayed-slow 9s ease-in-out infinite 2s; }
        .animate-orb-move { animation: orb-move 20s ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(244, 114, 182, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(244, 114, 182, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;