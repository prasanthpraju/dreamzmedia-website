import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser"; //

const Contact = () => {
  const formRef = useRef(); //
  
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
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

    // EmailJS Integration
    emailjs   
      .send(
        "service_4d0dvsb", // Replace with your Service ID
        "template_jqiq3id", // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          location: formData.location,
          to_name: "Dreamzmedia Team", // Optional: Customize receiver name
        },
        "ZwXyGVw--MsSVKDEJ" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text); //
          setLoading(false);
          setStatus({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormData({ name: '', phone: '', email: '', company: '', location: '' }); // Reset form
          
          // Clear success message after 5 seconds
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        },
        (error) => {
          console.log(error.text); //
          setLoading(false);
          setStatus({
            type: 'error',
            message: 'Oops! Something went wrong. Please try again later.'
          });
        }
      );
  };

  const features = [
    { title: "End-to-End Event Solutions", description: "From Concept to Celebration" },
    { title: "500+ Corporate Clients", description: "Trusted by leading companies" },
    { title: "Creative Customized Experiences", description: "That Leave a Lasting Impact" }
  ];

  const contactInfo = [
    { detail: "123 Arcord Road, Vadapalani, Chennai - 600017", type: "location" },
    { detail: "+91 98765 43210", type: "phone" },
    { detail: "info@dreamzmedia.com", type: "email" }
  ];

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50"
      style={{ marginTop: '80px' }}
    >
      {/* Background Animation (Kept as is) */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200/35 rounded-full blur-3xl animate-wave-move"
          style={{ transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        {/* ... (rest of your background animations remain the same) */}
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-200/35 rounded-full blur-3xl animate-wave-move-reverse"></div>
        <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-pink-300/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 bg-rose-300/20 rounded-full animate-pulse-delayed"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-diagonal-pattern animate-diagonal-move"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-pink-900">Dreamzmedia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's Create Unforgettable Experiences Together
          </p>
          <div className="w-24 h-1 bg-pink-900 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Contact Form */}
          <div className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-600">Get in touch with our event experts</p>
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg text-sm font-medium text-center ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-900 focus:border-pink-900 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-900 focus:border-pink-900 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-900 focus:border-pink-900 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-900 focus:border-pink-900 transition-all duration-300"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-900 focus:border-pink-900 transition-all duration-300"
                        placeholder="Enter your location"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-pink-900 to-rose-900 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </span>
                    ) : (
                      'BOOK A FREE CONSULTATION'
                    )}
                  </button>
                </form>
              </div>
              
              {/* Border Decor */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-900 to-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          </div>

          {/* Map & Info Section (Kept as is) */}
          <div className={`space-y-8 transform transition-all duration-700 delay-900 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
             {/* ... Your existing map and contact info code ... */}
             <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
               <div className="relative z-10">
                 <div className="text-center mb-6">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                   <p className="text-gray-600">Come discuss your event ideas with us</p>
                 </div>
                 
                 <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-6">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683577579543!2d80.20934537575394!3d13.055802113025213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669177353ee1%3A0xe21f57732da3b437!2sVadapalani%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709825631234!5m2!1sen!2sin"
                     width="100%"
                     height="300"
                     style={{ border: 0, borderRadius: '10px' }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="Dreamzmedia Chennai Office Location"
                     className="rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                   ></iframe>
                 </div>

                 <div className="space-y-4">
                   {contactInfo.map((info, index) => (
                     <div key={index} className="group flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300">
                       <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-900 to-rose-900 rounded-full flex items-center justify-center text-white">
                         {/* Simple Icon based on type */}
                         {info.type === 'location' && <span>📍</span>}
                         {info.type === 'phone' && <span>📞</span>}
                         {info.type === 'email' && <span>✉️</span>}
                       </div>
                       <span className="text-gray-700 font-medium">{info.detail}</span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Global CSS (Retained from your original code) */}
      <style>{`
        /* ... Your existing CSS animations ... */
        .bg-diagonal-pattern {
          background-image: linear-gradient(45deg, rgba(244, 114, 182, 0.05) 25%, transparent 25%),
                            linear-gradient(-45deg, rgba(244, 114, 182, 0.05) 25%, transparent 25%),
                            linear-gradient(45deg, transparent 75%, rgba(244, 114, 182, 0.05) 75%),
                            linear-gradient(-45deg, transparent 75%, rgba(244, 114, 182, 0.05) 75%);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default Contact;