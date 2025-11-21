import React from "react";
import "./ImageSlider.css";
                         
// Import your images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // Duplicate for smooth infinite scroll
  const doubleImages = [...images, ...images];

  return (
    <section className="image-slider">
        <h2 style={{textAlign:"center"}}    className="section-title">Our Work <span style={{color:'#7c3aed'}}>Showcase</span> </h2>
      {/* Top row */}
      <div className="slider-row slider-row-top">
        <div className="slider-track">
          {doubleImages.map((img, index) => (
            <div key={index} className="slide-item">
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="slider-row slider-row-bottom">
        <div className="slider-track">
          {doubleImages.map((img, index) => (
            <div key={index} className="slide-item">
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;







