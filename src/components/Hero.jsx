 import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const texts = ['Chennai'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background with Mouse Parallax */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-orb-move"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-orb-move delay-2000"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 animate-float-delayed shadow-2xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-float-slow shadow-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg animate-float-delayed-slow shadow-2xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>

      {/* Animated cursor follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-20 mix-blend-multiply animate-pulse"
        style={{
          left: `${mousePosition.x - 12}px`,
          top: `${mousePosition.y - 12}px`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content with Enhanced Animations */}
            <div className={`space-y-10 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                    The Best Event
                  </span>
                  <span className="block mt-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient-shift">
                    Management Company
                  </span>
                  <span className="block mt-4 animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                    in{' '}
                    <span className="relative inline-block">
                      <span className="text-purple-600 animate-text-glow">
                        {texts[currentText]}
                      </span>
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-100 animate-underline"></span>
                    </span>
                  </span>
                </h1>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce shadow-lg">
                  🎯 Since 2015
                </div>
              </div>

              <div className="space-y-6">
                {[
                  'End-to-End Event Solutions – From Concept to Celebration',
                  '100+ Corporate Clients & 10+ Government Organizations Served',
                  'Creative, Customized Experiences That Leave a Lasting Impact',
                  'Local Expertise with a Global Event Standard',
                  'On-Time, On-Budget and On-Point – Every Time'
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start group transform transition-all duration-500 hover:translate-x-3 hover:scale-105"
                    style={{ 
                      transitionDelay: `${index * 150 + 500}ms`,
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300 shadow-lg"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                    </div>
                    <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form with Enhanced Animations */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
            }`}>
              <div className="relative">
                <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 relative overflow-hidden">
                  {/* Form background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating elements around form */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center relative">
                      <span className="relative">
                        Book for{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                          free consultation
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-underline"></span>
                      </span>
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {[
                        { type: 'text', placeholder: 'Name' },
                        { type: 'text', placeholder: 'Phone' },
                        { type: 'email', placeholder: 'Email' },
                        { type: 'text', placeholder: 'Company Name' },
                        { type: 'text', placeholder: 'Location' }
                      ].map((field, index) => (
                        <div key={index} className="relative group">
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-5 py-4 bg-white/80 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-500 group-hover:border-purple-300 group-hover:scale-105 shadow-lg"
                          />
                          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500 blur-sm group-hover:blur-0"></div>
                        </div>
                      ))}
                      
                      <button
                        type="submit"
                        className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl group overflow-hidden"
                      >
                        <span className="relative z-10">BOOK A FREE CONSULTATION</span>
                        
                        {/* Button shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        {/* Button glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      </button>
                    </form>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-blue-300/30 rounded-full animate-float"></div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-20 h-20 bg-purple-300/30 rounded-full animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
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
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { text-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6); }
        }
        @keyframes slide-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes underline {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.1); }
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
        .animate-gradient-shift { 
          background-size: 200% auto;
          animation: gradient-shift 3s ease-in-out infinite; 
        }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-underline { animation: underline 2s ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-size-200 {
          background-size: 200% auto;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;