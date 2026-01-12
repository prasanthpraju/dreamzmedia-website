 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    image:
      "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
    description:
      "Professional event management for corporate gatherings, conferences, and business meetings with precision and excellence",
  },
  {
    id: 3,
    title: "Wedding Events",
    image:
      "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Copper-Events/copper-events-01.jpg",
    description:
      "Magical wedding celebrations with perfect planning and execution for your special day",
  },
  {
    id: 4,
    title: "School Events",
    image:
      "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
    description:
      "Memorable school functions, annual days, and educational events with creative excellence",
  },
  {
    id: 2,
    title: "Birthday Parties",
    image:
      "https://surpriseplanner.in/assets/photo/product/product_other_5240_1633185491.jpg",
    description:
      "Fun-filled birthday celebrations for all ages with innovative themes and concepts",
  },
];

const OurMajorService = () => {
  const navigate = useNavigate();
  const [isVisible] = useState(true); // always visible

  const handleCardClick = (serviceId) => {
    switch (serviceId) {
      case 1:
        navigate("/conference");
        break;
      case 2:
        navigate("/birthday");
        break;
      case 3:
        navigate("/wedding-events");
        break;
      case 4:
        navigate("/schoolevent");
        break;
      default:
        navigate("/services");
    }
  };

  return (
    <section className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 transition-all duration-1000 opacity-100">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200/35 rounded-full blur-3xl animate-wave-move"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-200/35 rounded-full blur-3xl animate-wave-move-reverse"></div>

        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-pink-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 bg-rose-300/20 rounded-full animate-pulse-delayed"></div>

        <div className="absolute top-20 right-16 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-lg rotate-45 animate-float-diagonal shadow-xl"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-bl from-rose-400/15 to-pink-400/15 rounded-full animate-float-spiral shadow-xl"></div>
        <div className="absolute top-40 left-32 w-16 h-16 bg-pink-400/20 rounded-lg animate-float-bounce shadow-xl"></div>
        <div className="absolute bottom-32 right-24 w-28 h-28 bg-rose-400/15 rounded-full animate-float-elastic shadow-xl"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-diagonal-pattern animate-diagonal-move"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-scan-line"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/30 to-transparent animate-scan-line-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-pink-900">Major Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional event management services tailored to make your
            occasions truly memorable and stress-free
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl border border-gray-200 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0 hover:-translate-y-3"
                  : "opacity-0 translate-y-10"
              } cursor-pointer overflow-hidden`}
              onClick={() => handleCardClick(service.id)}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-900 to-rose-900 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center text-pink-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Service</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-900 to-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-pink-900 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
          </button>
        </div>
      </div>

      {/* Global CSS */}
      <style>{`
        @keyframes wave-move {0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(20px,15px) scale(1.1)}50%{transform:translate(40px,0) scale(1.05)}75%{transform:translate(20px,-15px) scale(1.1)}}
        @keyframes wave-move-reverse {0%,100%{transform:translate(0,0) scale(1)}25%{transform:translate(-15px,10px) scale(1.08)}50%{transform:translate(-30px,0) scale(1.1)}75%{transform:translate(-15px,-10px) scale(1.08)}}
        @keyframes pulse-slow {0%,100%{transform:scale(1);opacity:.2}50%{transform:scale(1.3);opacity:.4}}
        @keyframes pulse-delayed {0%,100%{transform:scale(1);opacity:.2}50%{transform:scale(1.2);opacity:.3}}
        @keyframes float-diagonal {0%,100%{transform:translate(0,0) rotate(45deg)}50%{transform:translate(15px,-15px) rotate(60deg)}}
        @keyframes float-spiral {0%{transform:translate(0,0) rotate(0)}100%{transform:translate(0,0) rotate(360deg)}}
        @keyframes float-bounce {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes float-elastic {0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-12px) scale(1.1)}}
        @keyframes diagonal-move {0%{transform:translate(0,0)}100%{transform:translate(30px,30px)}}
        @keyframes scan-line {0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}

        .animate-wave-move{animation:wave-move 15s ease-in-out infinite}
        .animate-wave-move-reverse{animation:wave-move-reverse 18s ease-in-out infinite}
        .animate-pulse-slow{animation:pulse-slow 8s ease-in-out infinite}
        .animate-pulse-delayed{animation:pulse-delayed 10s ease-in-out infinite}
        .animate-float-diagonal{animation:float-diagonal 12s ease-in-out infinite}
        .animate-float-spiral{animation:float-spiral 20s linear infinite}
        .animate-float-bounce{animation:float-bounce 6s ease-in-out infinite}
        .animate-float-elastic{animation:float-elastic 9s ease-in-out infinite}
        .animate-diagonal-move{animation:diagonal-move 40s linear infinite}
        .animate-scan-line{animation:scan-line 8s linear infinite}
        .animate-scan-line-delayed{animation:scan-line 8s linear infinite 4s}

        .bg-diagonal-pattern{
          background-image:
          linear-gradient(45deg, rgba(244,114,182,.05) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(244,114,182,.05) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(244,114,182,.05) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(244,114,182,.05) 75%);
          background-size:20px 20px;
        }

        .line-clamp-2{
          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }
      `}</style>
    </section>
  );
};

export default OurMajorService;
