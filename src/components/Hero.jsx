import React, { useState, useEffect } from "react";
import heroEvent1 from "../assets/e10.jpg";
import heroEvent2 from "../assets/e2.jpg";
import heroEvent3 from "../assets/e8.jpg";
import heroEvent4 from "../assets/e1.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBackgrounds = [heroEvent1, heroEvent2, heroEvent3, heroEvent4];

  useEffect(() => {
    setIsVisible(true);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="min-h-[50vh] lg:min-h-[80vh] relative overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-pink-500 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span className="block">Creative Event</span>
                  <span className="block mt-2 lg:mt-4 text-pink-300">
                    Management Experts
                  </span>
                  <span className="block mt-2 lg:mt-4">
                    in <span className="text-rose-300">Chennai</span>
                  </span>
                </h1>

                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-pink-900 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Since 2010
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Complete Event Planning & Execution Services",
                  "200+ Successful Events & 50+ Corporate Clients",
                  "Innovative Themes & Creative Decor Solutions",
                  "Premium Vendor Network & Quality Assurance",
                  "Budget-Friendly Packages with Premium Results",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-white text-sm sm:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="bg-pink-900 text-white font-bold py-3 px-6 rounded-xl  transition-all duration-300 shadow-lg transform hover:scale-105">
                  Plan Your Event
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Form - MINIMAL BLUR */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-20 opacity-0 scale-95"
              }`}
            >
              <div className="relative">
                {/* Minimal blur container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-xl">
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                      Get Your <span className="text-pink-300">Free Quote</span>
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { type: "text", placeholder: "Your Name" },
                        { type: "tel", placeholder: "Phone Number" },
                        { type: "email", placeholder: "Email Address" },
                        { type: "text", placeholder: "Event Type" },
                        { type: "text", placeholder: "Event Date" },
                      ].map((field, index) => (
                        <div key={index} className="relative">
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-pink-400 focus:bg-white/15 transition-all duration-300"
                          />
                        </div>
                      ))}

                      <button
                        type="submit"
                        className="w-full bg-pink-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                      >
                        GET FREE QUOTE NOW
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
