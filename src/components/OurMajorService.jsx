 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    image: "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
    description: "Professional event management for corporate gatherings, conferences, and business meetings",
    gradient: "from-blue-500 to-purple-600",
    icon: "🏢"
  },
  {
    id: 3,
    title: "Wedding Events",
    image: "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Copper-Events/copper-events-01.jpg",
    description: "Magical wedding celebrations with perfect planning and execution",
    gradient: "from-pink-500 to-red-600",
    icon: "💍"
  },
  {
    id: 4,
    title: "School Events",
    image: "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
    description: "Memorable school functions, annual days, and educational events",
    gradient: "from-green-500 to-teal-600",
    icon: "🎓"
  },
  {
    id: 2,
    title: "Birthday Parties",
    image: "https://surpriseplanner.in/assets/photo/product/product_other_5240_1633185491.jpg",
    description: "Fun-filled birthday celebrations for all ages with creative themes",
    gradient: "from-yellow-500 to-orange-600",
    icon: "🎂"
  },
];

const OurMajorService = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (serviceId) => {
    switch(serviceId) {
      case 1:
        navigate('/conference');
        break;
      case 2:
        navigate('/birthday');
        break;
      case 3:
        navigate('/wedding-events');
        break;
      case 4:
        navigate('/schoolevent');
        break;
      default:
        navigate('/services');
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Major <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional event management services tailored to make your occasions truly memorable and stress-free
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => handleCardClick(service.id)}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-6">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* View More Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className="flex items-center text-purple-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>Explore Service</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Services
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurMajorService;