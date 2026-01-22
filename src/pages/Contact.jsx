 import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate(); // 2. Initialize navigate
  const formRef = useRef();
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    location: ''
  });

  // State for UI feedback
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Animation states
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Replace these with your actual EmailJS credentials
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          location: formData.location,
          to_name: "Dreamzmedia Team",
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormData({ name: '', phone: '', email: '', company: '', location: '' });
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Oops! Something went wrong. Please try again later.'
          });
        }
      );
  };

  const contactInfo = [
    { 
      label: "Address",
      detail: "123 Arcord Road, Vadapalani, Chennai - 600017", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      label: "Phone",
      detail: "+91 98765 43210", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    { 
      label: "Email",
      detail: "info@dreamzmedia.com", 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={ref} 
      className="min-h-screen bg-stone-50 font-sans selection:bg-pink-100 relative" // Added relative for positioning
    >
      
      {/* --- NEW: BACK BUTTON --- */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-28 left-6 md:top-32 md:left-10 flex items-center gap-2 text-gray-400 hover:text-pink-900 transition-colors duration-300 cursor-pointer group z-50"
      >
        <svg 
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-widest">Go Back</span>
      </button>

      {/* 1. Header Section */}
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-24 text-center px-6 bg-gradient-to-b from-white to-stone-50">
        <span className="text-pink-900 text-xs font-bold uppercase tracking-[0.3em] mb-4 block animate-fade-in">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
          Contact <span className="italic text-pink-900">Dreamzmedia</span>
        </h1>
        <div className="w-24 h-1 bg-pink-900 mx-auto mb-8 rounded-full"></div>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 font-light leading-relaxed">
          Ready to start planning your event? We'd love to hear from you. 
          Fill out the form below or reach out directly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* 2. Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Form */}
          <div className={`transform transition-all duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white p-10 md:p-12 shadow-2xl rounded-sm border border-gray-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -z-0"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                  Send us a Message
                </h3>

                {/* Status Message */}
                {status.message && (
                  <div className={`mb-8 p-4 text-sm font-medium text-center border-l-4 ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border-green-500' 
                      : 'bg-red-50 text-red-800 border-red-500'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 group-focus-within:text-pink-900 transition-colors">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:border-pink-900 focus:outline-none text-gray-900 placeholder-gray-300 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 group-focus-within:text-pink-900 transition-colors">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:border-pink-900 focus:outline-none text-gray-900 placeholder-gray-300 transition-colors"
                        placeholder="+91 "
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 group-focus-within:text-pink-900 transition-colors">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pb-2 border-b border-gray-300 bg-transparent focus:border-pink-900 focus:outline-none text-gray-900 placeholder-gray-300 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 group-focus-within:text-pink-900 transition-colors">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:border-pink-900 focus:outline-none text-gray-900 placeholder-gray-300 transition-colors"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2 group-focus-within:text-pink-900 transition-colors">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pb-2 border-b border-gray-300 bg-transparent focus:border-pink-900 focus:outline-none text-gray-900 placeholder-gray-300 transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-pink-900 text-white py-4 px-8 uppercase text-xs font-bold tracking-widest hover:bg-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl ${
                        loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Sending...' : 'Request Consultation'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Info & Map */}
          <div className={`space-y-12 transform transition-all duration-1000 delay-300 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
             {/* Contact Details */}
             <div className="space-y-8">
               <h3 className="text-2xl font-serif font-bold text-gray-900">Contact Information</h3>
               <div className="space-y-6">
                 {contactInfo.map((info, index) => (
                   <div key={index} className="flex items-start group">
                     <div className="w-12 h-12 bg-white border border-gray-100 shadow-sm flex items-center justify-center text-pink-900 group-hover:bg-pink-900 group-hover:text-white transition-all duration-300 shrink-0 mr-6">
                       {info.icon}
                     </div>
                     <div>
                       <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{info.label}</span>
                       <span className="text-lg text-gray-800 font-light">{info.detail}</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Map */}
             <div className="relative w-full h-[400px] bg-gray-200 shadow-lg border-8 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685370241957!2d80.20935307481944!3d13.055675487267496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266eb201103ad%3A0x7d2871f37e8c187d!2sVadapalani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709664562085!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dreamzmedia Location"
                  className="filter grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;