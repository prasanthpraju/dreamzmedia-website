import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    events: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);

      // Improved counter animation with easing
      const duration = 4000; // Increased duration for slower animation
      const steps = 150; // More steps for smoother animation
      const stepDuration = duration / steps;

      const targetValues = {
        events: 500,
        clients: 250,
        years: 12,
        satisfaction: 98,
      };

      Object.keys(targetValues).forEach((key) => {
        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;

          // Easing function for smooth acceleration and deceleration
          const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
          const progress = easeOutQuart(currentStep / steps);

          const currentValue = Math.floor(targetValues[key] * progress);

          setCounters((prev) => ({
            ...prev,
            [key]: currentValue,
          }));

          if (currentStep === steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [inView]);

  const features = [
    {
      title: "Precision Planning",
      description:
        "Meticulous attention to detail ensures every aspect of your event is perfectly executed.",
    },
    {
      title: "Creative Innovation",
      description:
        "Fresh, innovative ideas that make your event unique and memorable.",
    },
    {
      title: "Timely Execution",
      description:
        "We respect deadlines and deliver exceptional results on time, every time.",
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous quality checks ensure every event meets our high standards.",
    },
  ];

  const benefits = [
    "End-to-end event solutions",
    "Experienced professional team",
    "Customized event strategies",
    "Latest technology integration",
    "Budget-friendly packages",
    "24/7 customer support",
    "Vendor management & coordination",
    "On-site event supervision",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We understand your vision, requirements, and budget to create a customized plan.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Detailed event planning with timelines, budgets, and creative concepts.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "Seamless implementation with professional team and quality vendors.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Perfect event execution with post-event follow-up and feedback.",
    },
  ];

  const teamStats = [
    { number: "25+", label: "Expert Team Members" },
    { number: "50+", label: "Trusted Vendors" },
    { number: "15+", label: "Event Categories" },
    { number: "24/7", label: "Support Available" },
  ];

  const services = [
    {
      title: "Corporate Events",
      items: ["Conferences", "Product Launches", "Seminars", "Team Building"],
    },
    {
      title: "Social Events",
      items: ["Weddings", "Birthdays", "Anniversaries", "Family Functions"],
    },
    {
      title: "Special Events",
      items: [
        "Exhibitions",
        "Award Ceremonies",
        "Fashion Shows",
        "Charity Events",
      ],
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50"
      style={{ marginTop: "80px", scrollBehavior: "smooth" }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-16 w-64 h-64 lg:w-96 lg:h-96 bg-pink-200/20 rounded-full blur-3xl animate-orb-move"></div>
        <div className="absolute bottom-10 -right-16 w-64 h-64 lg:w-96 lg:h-96 bg-rose-200/20 rounded-full blur-3xl animate-orb-move delay-2000"></div>

        <div className="absolute top-16 left-8 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full animate-float shadow-lg"></div>
        <div className="absolute top-32 right-12 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-rose-400/10 to-pink-400/10 rounded-lg rotate-45 animate-float-delayed shadow-lg"></div>
        <div className="absolute bottom-32 left-12 w-20 h-20 lg:w-28 lg:h-28 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full animate-float-slow shadow-lg"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-pink-900">Dreamzmedia</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 lg:mb-4 font-medium">
            Crafting Unforgettable Experiences Since 2010
          </p>
          <div className="w-20 lg:w-24 h-0.5 lg:h-1 bg-gradient-to-r from-pink-900 to-rose-900 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Introduction */}
            <div
              className={`space-y-6 transform transition-all duration-700 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Your Vision,{" "}
                <span className="text-pink-900">Our Expertise</span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed lg:leading-loose">
                Dreamzmedia stands as Chennai's premier event management
                company, transforming ordinary moments into extraordinary
                memories. With over a decade of experience, we have mastered the
                art of creating seamless, impactful events that resonate with
                your audience and exceed expectations.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed lg:leading-loose">
                Our team of passionate professionals combines creativity with
                technical expertise to deliver events that not only meet but
                surpass your expectations. From intimate gatherings to
                large-scale corporate functions, we handle every detail with
                precision and care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100 hover:-translate-y-2"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 150}ms`,
                  }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div
              className={`space-y-6 transform transition-all duration-700 delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="text-2xl font-bold text-gray-900">Our Process</h4>
              <div className="grid gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">
                        {step.title}
                      </h5>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Additional Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Benefits Card */}
            <div
              className={`transform transition-all duration-700 delay-600 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-500">
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                  Why Choose <span className="text-pink-900">Dreamzmedia?</span>
                </h4>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li
                      key={benefit}
                      className="flex items-start transform transition-all duration-500"
                      style={{
                        transitionDelay: `${800 + index * 100}ms`,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(20px)",
                        opacity: isVisible ? 1 : 0,
                      }}
                    >
                      <span className="text-pink-900 text-lg mr-4 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Offered */}
            <div
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Our Services
              </h4>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="border-l-4 border-pink-900 pl-4"
                  >
                    <h5 className="text-lg font-bold text-gray-900 mb-2">
                      {service.title}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item, itemIndex) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-pink-50 text-pink-900 rounded-full text-sm border border-pink-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics with Improved Animation */}
            <div
              className={`space-y-6 transform transition-all duration-700 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h4 className="text-2xl font-bold text-gray-900 text-center">
                Our Achievements
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-pink-900 mb-2 transition-all duration-500">
                    {counters.events}+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Events Managed
                  </div>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-pink-900 mb-2 transition-all duration-500">
                    {counters.clients}+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Corporate Clients
                  </div>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-pink-900 mb-2 transition-all duration-500">
                    {counters.years}+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 bg-white/50 rounded-2xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-pink-900 mb-2 transition-all duration-500">
                    {counters.satisfaction}%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div
              className={`grid grid-cols-2 gap-4 transform transition-all duration-700 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {teamStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-white/30 rounded-xl backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-xl lg:text-2xl font-bold text-pink-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Vision Section */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-16 lg:mb-20 transform transition-all duration-1000 delay-1100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To redefine event management standards by delivering bespoke
              solutions that blend creativity with flawless execution. We
              believe every event tells a story, and we're here to make yours
              unforgettable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h4>
            <p className="text-gray-600 leading-relaxed">
              To be Chennai's most trusted event management partner, known for
              innovation, reliability, and creating magical experiences that
              leave lasting impressions on every client and guest.
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(-5px) rotate(3deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
        }
        @keyframes orb-move {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(30px, 20px) scale(1.05);
          }
        }
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(15px, 15px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 9s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-orb-move {
          animation: orb-move 25s ease-in-out infinite;
        }
        .animate-grid-move {
          animation: grid-move 25s linear infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(244, 114, 182, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(244, 114, 182, 0.08) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default About;
