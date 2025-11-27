// WhatWeDo.jsx
import React from "react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const services = [
    {
       
      title: "Stress-Free Planning",
      description:
        "We manage every detail for seamless Corporate and government events.",
    },
    {
       
      title: "Strengthen Team Bonds",
      description: "Events designed to foster collaboration and trust.",
    },
    {
       
      title: "Align with Your Vision",
      description: "We create events that reflect your company's values.",
    },
    {
       
      title: "Trusted Reliability",
      description: "250+ events delivered for 100+ clients, flawlessly.",
    },
    {
       
      title: "Cultural Integrity",
      description: "We blend heritage and modernity for engaging experiences.",
    },
    {
       
      title: "Boost Engagement",
      description: "Corporate Events that enhance morale and your brand.",
    },
  ];

  const eventImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="text-pink-900">Do</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating unforgettable experiences through meticulous planning,
            creative execution, and a passion for bringing your vision to life.
          </p>
        </div>

        {/* Event Gallery Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {eventImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-pink-900">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 hover:border-pink-300 transform hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-900/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 bg-gradient-to-r from-pink-900 to-pink-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-pink-200 font-semibold">Events Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-pink-200 font-semibold">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-pink-200 font-semibold">Success Rate</div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Create Something{" "}
              <span className="text-pink-900">Amazing?</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your next event and turn your vision into an
              unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-pink-900 text-white px-8 py-4 rounded-xl font-semibold   transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </Link>
              {/* <Link 
                to="/culturalevents" 
                className="border-2 border-pink-900 text-pink-900 px-8 py-4 rounded-xl font-semibold hover:bg-pink-900 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                View Our Events
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
