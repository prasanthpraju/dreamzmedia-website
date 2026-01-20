  import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    image: "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
    description: "Precision-managed gatherings for summits, conferences, and executive meets.",
  },
  {
    id: 3,
    title: "Wedding Events",
    image: "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Copper-Events/copper-events-01.jpg",
    description: "Curating timeless moments for your most special day with elegance and grace.",
  },
  {
    id: 4,
    title: "School Events",
    image: "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
    description: "Creating vibrant and memorable annual days, sports meets, and carnivals.",
  },
  {
    id: 2,
    title: "Birthday Parties",
    image: "https://surpriseplanner.in/assets/photo/product/product_other_5240_1633185491.jpg",
    description: "Innovative themes and joyous celebrations for milestones of every age.",
  },
];

const OurMajorService = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    switch (serviceId) {
      case 1: navigate("/conference"); break;
      case 2: navigate("/birthday"); break;
      case 3: navigate("/wedding-events"); break;
      case 4: navigate("/schoolevent"); break;
      default: navigate("/services");
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white font-sans selection:bg-pink-100 selection:text-pink-900">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 lg:mb-24 text-center">
        <span className="text-pink-900 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in-up">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 tracking-tight">
          Curated <span className="italic text-pink-900">Services</span>
        </h2>
        <div className="w-16 h-0.5 bg-gray-200 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We bring a blend of strategic planning and creative design to every event, ensuring an experience that resonates.
        </p>
      </div>

      {/* 2. Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Logic:
            - Mobile: grid-cols-1 (Stacked)
            - Tablet: grid-cols-2 (Side by side)
            - Desktop: grid-cols-4 (Row)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              className="group relative cursor-pointer flex flex-col items-center max-w-sm mx-auto sm:max-w-none w-full"
            >
              
              {/* Image Container - Aspect 4/5 for Medium Portrait Size */}
              <div className="relative w-full overflow-hidden aspect-[4/5] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                />
                
                {/* Overlay & Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <span className="bg-white text-pink-950 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-pink-900 hover:text-white border border-white">
                    View Details
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="pt-6 text-center w-full px-2 group-hover:-translate-y-1 transition-transform duration-500">
                <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-3 group-hover:text-pink-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 font-light">
                  {service.description}
                </p>
                
                {/* Minimal line decoration */}
                <div className="w-8 h-px bg-gray-300 mx-auto mt-4 transition-all duration-500 group-hover:w-16 group-hover:bg-pink-900"></div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurMajorService;