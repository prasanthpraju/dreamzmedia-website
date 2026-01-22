import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import t1 from "../../assets/Birthdayparties/Tattoos/t1.png";
import t2 from "../../assets/Birthdayparties/Tattoos/t2.png";
import t3 from "../../assets/Birthdayparties/Tattoos/t3.png";
import t4 from "../../assets/Birthdayparties/Tattoos/t4.png";
import t5 from "../../assets/Birthdayparties/Tattoos/t5.png";
import t6 from "../../assets/Birthdayparties/Tattoos/t6.png";
import t7 from "../../assets/Birthdayparties/Tattoos/t7.png";
import t8 from "../../assets/Birthdayparties/Tattoos/t8.png";
import t9 from "../../assets/Birthdayparties/Tattoos/t9.png";
import t10 from "../../assets/Birthdayparties/Tattoos/t10.png";

const Tattoos = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const quickLinks = [
    "Anchor",
    "BalloonDecoration",
    "CartoonCharacters",
    "Entertainment",
    "KidsDelicious",
    "MagicShow",
    "ReturnGift",
    "SoundAndLight",
    "StageAndBackdrop",
    "Tattoos",
    "Terrace",
    "Themes",
  ];

  const images = [
    { id: 1, src: t1 },
    { id: 2, src: t2 },
    { id: 3, src: t3 },
    { id: 4, src: t4 },
    { id: 5, src: t5 },
    { id: 6, src: t6 },
    { id: 7, src: t7 },
    { id: 8, src: t8 },
    { id: 9, src: t9 },
    { id: 10, src: t10 },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pt-32 pb-12 px-6 text-center border-b border-gray-100 relative">
        <button
         onClick={() => navigate(-1)}

          className="absolute top-24 left-4 md:top-32 md:left-10 z-10 group flex items-center gap-2 text-gray-600 hover:text-pink-900 transition-colors"
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            Back
          </span>
        </button>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-4">
          Tattoos & Face Paint
        </h1>
        <div className="w-24 h-1.5 bg-pink-900 mx-auto mt-4"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-64 flex-shrink-0 sticky top-32 h-fit">
          <h3 className="text-2xl font-serif font-bold text-pink-900 mb-8 border-l-4 border-pink-900 pl-4">
            Collections
          </h3>
          <ul className="space-y-4">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => navigate(`/${link.toLowerCase()}`)}
                  className={`text-sm font-bold uppercase tracking-widest w-full text-left transition-all hover:text-pink-900 ${link === "Tattoos" ? "text-pink-900" : "text-gray-400"}`}
                >
                  {link.replace(/([A-Z])/g, " $1").trim()}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              className="group relative aspect-[3/4] bg-gray-100 cursor-pointer overflow-hidden rounded-sm"
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="bg-white px-4 py-2 text-xs font-bold uppercase">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <img
            src={selectedImage.src}
            className="max-h-[90vh] max-w-full"
            alt=""
          />
        </div>
      )}
    </div>
  );
};
export default Tattoos;
