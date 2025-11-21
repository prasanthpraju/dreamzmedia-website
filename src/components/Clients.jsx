import React from "react";
import "./Clients.css";

// Import logos from assets folder
import cognizant from "../assets/cognizant.png"
import Axis from "../assets/Axis.png"
import dell from "../assets/dell.png"
import HCL from "../assets/HCL.png"
import Accenture from "../assets/Accenture.png"
import Firstsource from "../assets/Firstsource.png"


const Clients = () => {
  const trustedLogos = [
    {name: "Cognizant", logo: cognizant },
    {name: "Axis", logo:Axis},
    {name:"dell", logo:dell},
    {name: "HCL" , logo:HCL},
    {name:"Accenture" ,logo:Accenture},
    {name:"Firstsource" , logo:Firstsource},
    
  ];

  // Duplicate array for smooth infinite scroll
  const doubleLogos = [...trustedLogos, ...trustedLogos];

  return (
    <section className="trusted-section">
      <div className="container">
        <h2>
          Trusted by <span className="highlight">leaders</span>
        </h2>
         
        <div className="marquee-container">
          <div className="marquee-content">
            {doubleLogos.map((company, index) => (
              <div key={index} className="logo-item">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="logo-image"
                  />
                ) : (
                  <span className="logo-text">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
