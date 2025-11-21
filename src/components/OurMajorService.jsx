import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurMajorService.css";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    image:
      "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
  },
  {
    id: 3,
    title: "Wedding Events",
    image:
      "https://www.weddingsutra.com/images/Vendor_Images/Wedding_Planners/Copper-Events/copper-events-01.jpg",
  },
  {
    id: 4,
    title: "School Events",
    image:
      "https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg",
  },
  {
    id: 2,
    title: "Birthday Parties",
    image:
      "https://surpriseplanner.in/assets/photo/product/product_other_5240_1633185491.jpg",
  },
];

const OurMajorService = () => {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    // // Navigate to service detail page with the service ID
    // navigate(`/service/${serviceId}`);
    
    // Alternative: If you want to navigate to different routes based on service type
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
    <section className="our-services">
      <h2 className="section-title">Our Major <span style={{color:'#7c3aed'}}>Services</span> </h2>
      <div className="services-container">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => handleCardClick(service.id)}
            style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable
          >
            <div className="circle-img">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMajorService;