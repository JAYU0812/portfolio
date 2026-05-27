import React from "react";

export default function Projects() {

  const projects = [

    {
      title: "Parichay Sammelan Platform",
      category: "Community Platform",
      description:
        "Full-stack web & Android application for community registration, event participation, QR verification, and secure payment workflows.",
      tech: [
        "React",
        "JavaScript",
        "PHP",
        "MySQL",
        "Cordova",
        "Responsive UI"
      ],
      link: "https://parichay-sammelan.wuaze.com",
      gradient: "from-blue-500 to-indigo-600",
    },

    {
      title: "KITAAB — Jeweller Ledger System",
      category: "Business Management",
      description:
        "Smart ledger management system for jewellers with transaction tracking, authentication, and mobile-friendly interface.",
      tech: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Authentication",
        "Responsive Design"
      ],
      link: "https://jeweller-ledger.wuaze.com",
      gradient: "from-purple-500 to-pink-600",
    },

    {
      title: "Soni Samaj Community Directory",
      category: "Community Platform",
      description:
        "Advanced community directory with member profiles, family management, search filtering, and location-based discovery.",
      tech: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Search System",
        "Database Design"
      ],
      link: "https://sonisamaj.wuaze.com",
      gradient: "from-emerald-500 to-green-600",
    },

    {
      title: "Chandrakala Jewellers Website",
      category: "Business Website",
      description:
        "Modern jewellery business website with premium UI, customer engagement flow, and Razorpay payment integration.",
      tech: [
        "React",
        "Tailwind CSS",
        "Payment Gateway",
        "Responsive UI"
      ],
      link: "https://chandrakalajewellers.wuaze.com",
      gradient: "from-yellow-500 to-orange-600",
    },

    {
      title: "Hackathon Attendance System",
      category: "Smart System",
      description:
        "QR + GPS-based attendance monitoring system using Haversine algorithm for accurate location validation.",
      tech: [
        "JavaScript",
        "Geolocation API",
        "QR System",
        "PHP"
      ],
      link: "https://attend-system.wuaze.com",
      gradient: "from-cyan-500 to-blue-600",
    },

    {
      title: "INFLIX Streaming Platform",
      category: "Streaming Platform",
      description:
        "Netflix-inspired streaming platform featuring subscriptions, authentication, admin dashboard, and scalable video delivery.",
      tech: [
        "React",
        "Supabase",
        "Authentication",
        "Streaming UI"
      ],
      link: "#",
      gradient: "from-red-500 to-rose-600",
    },

  ];

  return (

    <div className="bg-[#f8fafc] min-h-screen text-gray-800">

      {/* HEADER */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-tight">
            Jay Soni
          </h1>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>

            <a href="/about" className="hover:text-blue-600 transition">
              About
            </a>

            <a
              href="/projects"
              className="text-blue-600 font-semibold"
            >
              Projects
            </a>

            <a href="/resume" className="hover:text-blue-600 transition">
              Resume
            </a>

            <a href="/contact" className="hover:text-blue-600 transition">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">

        <div className="text-center max-w-4xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">

            Building Real-World
            <span className="text-blue-600"> Digital Products</span>

          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">

            A collection of scalable web applications, Android apps,
            business platforms, and community-driven digital solutions
            built using modern technologies and real-world problem solving.

          </p>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">

            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              6+
            </h3>

            <p className="text-gray-600">
              Production Projects
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">

            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              5+
            </h3>

            <p className="text-gray-600">
              Businesses Digitized
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">

            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              2+
            </h3>

            <p className="text-gray-600">
              Years Experience
            </p>

          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">

            <h3 className="text-4xl font-bold text-blue-600 mb-2">
              1
            </h3>

            <p className="text-gray-600">
              Play Store App
            </p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">

          <div>

            <h3 className="text-4xl font-bold mb-3">
              Featured Projects
            </h3>

            <p className="text-gray-600 text-lg">
              Real-world applications focused on scalability,
              performance, and user experience.
            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-gray-100"
            >

              {/* TOP */}

              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>

                <p className="text-sm uppercase tracking-wider opacity-90 mb-3">
                  {project.category}
                </p>

                <h4 className="text-2xl font-bold leading-tight">
                  {project.title}
                </h4>

              </div>

              {/* CONTENT */}

              <div className="p-7">

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="flex flex-wrap gap-2 mb-7">

                  {project.tech.map((item, idx) => (

                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* BUTTON */}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition"
                >

                  View Project

                  <span className="text-lg">
                    ↗
                  </span>

                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WHY THESE PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-4xl font-bold mb-6">

                Why These Projects Matter

              </h3>

              <p className="text-lg leading-relaxed text-blue-100">

                Every project here solves a real-world business or
                community problem. My focus is not just on design —
                but on scalability, usability, performance, and
                practical impact.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

                <h4 className="font-semibold text-xl mb-2">
                  Real Clients
                </h4>

                <p className="text-blue-100">
                  Developed production-ready solutions for businesses
                  and communities.
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

                <h4 className="font-semibold text-xl mb-2">
                  Full Stack
                </h4>

                <p className="text-blue-100">
                  Experience in frontend, backend, databases,
                  authentication, and deployment.
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

                <h4 className="font-semibold text-xl mb-2">
                  Scalable UI
                </h4>

                <p className="text-blue-100">
                  Built responsive and mobile-friendly interfaces using
                  modern technologies.
                </p>

              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur">

                <h4 className="font-semibold text-xl mb-2">
                  Problem Solving
                </h4>

                <p className="text-blue-100">
                  Focused on solving practical real-world operational
                  and business challenges.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <h3 className="text-4xl font-bold mb-6">

          Let’s Build Something Amazing

        </h3>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">

          Interested in working together or building a digital product?
          Let’s connect and create scalable modern solutions.

        </p>

        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:scale-105 transition"
        >
          Contact Me
        </a>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm bg-white">

        © 2025 Jay Soni. All rights reserved.

      </footer>

    </div>
  );
}