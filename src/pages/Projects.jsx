import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "PropKart — Property CRM",
      category: "PropTech Platform",
      description:
        "Production-ready Property CRM platform featuring offline-first architecture, realtime synchronization, property and requirement management, telecaller CRM, smart matching, and analytics dashboard.",
      tech: ["Flutter", "Dart", "Node.js", "Express.js", "Supabase", "PostgreSQL", "Isar Database", "Git"],
      link: "https://propkart.vercel.app",
      gradient: "from-violet-500 to-purple-600",
      hoverText: "For PropKart, I engineered the Flutter client, designed the PostgreSQL schema on Supabase, and wrote the Node.js APIs for realtime synching."
    },
    {
      title: "Hospital Management Dashboard",
      category: "Healthcare Platform",
      description:
        "Interactive hospital management dashboard built using React with Doctor Cards, Patient List, Appointment Form, Search Patient, Department Filtering, and Statistics Cards.",
      tech: ["React", "JavaScript", "Props", "useState", "map()", "filter()", "Tailwind CSS"],
      link: "https://hospital-dashboard-woad-gamma.vercel.app/",
      gradient: "from-cyan-500 to-teal-600",
      hoverText: "I built this dashboard during a 15-day React internship at Tech-Craft, utilizing key hooks and components for medical scheduling."
    },
    {
      title: "Parichay Sammelan Platform",
      category: "Community Platform",
      description:
        "Full-stack web & Android application for community registration, event participation, QR verification, and secure payment workflows.",
      tech: ["React", "JavaScript", "PHP", "MySQL", "Cordova", "Responsive UI"],
      link: "https://parichay-sammelan.wuaze.com",
      gradient: "from-blue-500 to-indigo-600",
      hoverText: "I developed this community portal using PHP/MySQL, implemented Razorpay payment checkout, and published its Android web wrapper."
    },
    {
      title: "KITAAB — Jeweller Ledger System",
      category: "Business Management",
      description:
        "Smart ledger management system for jewellers with transaction tracking, authentication, and mobile-friendly interface.",
      tech: ["PHP", "MySQL", "JavaScript", "Authentication", "Responsive Design"],
      link: "https://jeweller-ledger.wuaze.com",
      gradient: "from-purple-500 to-pink-600",
      hoverText: "I designed and deployed this ledger database for retail jewellers, providing non-technical shop owners a simple digitizing ledger tool."
    },
    {
      title: "Soni Samaj Community Directory",
      category: "Community Platform",
      description:
        "Advanced community directory with member profiles, family management, search filtering, and location-based discovery.",
      tech: ["PHP", "MySQL", "JavaScript", "Search System", "Database Design"],
      link: "https://sonisamaj.wuaze.com",
      gradient: "from-emerald-500 to-green-600",
      hoverText: "I built this community search directory, incorporating complex SQL querying to enable fast location-based profile filtering."
    },
    {
      title: "Chandrakala Jewellers Website",
      category: "Business Website",
      description:
        "Modern jewellery business website with premium UI, customer engagement flow, and Razorpay payment integration.",
      tech: ["React", "Tailwind CSS", "Payment Gateway", "Responsive UI"],
      link: "https://chandrakalajewellers.wuaze.com",
      gradient: "from-yellow-500 to-orange-600",
      hoverText: "I coded this premium landing page for a jewellery storefront, integrating custom booking alerts and invoice layouts."
    },
    {
      title: "Hackathon Attendance System",
      category: "Smart System",
      description:
        "QR + GPS-based attendance monitoring system using Haversine algorithm for accurate location validation.",
      tech: ["JavaScript", "Geolocation API", "QR System", "PHP"],
      link: "https://attend-system.wuaze.com",
      gradient: "from-cyan-500 to-blue-600",
      hoverText: "For this hackathon project, I programmed the GPS distance validation algorithm and QR scanning. We won 5th place!"
    },
    {
      title: "INFLIX Streaming Platform",
      category: "Streaming Platform",
      description:
        "Netflix-inspired streaming platform featuring subscriptions, authentication, admin dashboard, and scalable video delivery.",
      tech: ["React", "Supabase", "Authentication", "Streaming UI"],
      link: "#",
      gradient: "from-red-500 to-rose-600",
      hoverText: "I developed the subscription panels, admin video manager, and integrated Auth0/Supabase security checks in this streaming app."
    }
  ];

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="bg-transparent text-slate-800 py-10">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6 tracking-tight">
            Building Real-World <span className="text-blue-600">Digital Products</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A showcase of web applications, mobile platforms, and business tools I've built to solve practical workflow problems.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { count: "8+", label: "Production Projects", desc: "Real-world production-ready web and mobile apps." },
            { count: "5+", label: "Businesses Digitized", desc: "Local stores and companies with successful digital transitions." },
            { count: "2+", label: "Years Experience", desc: "Total time spent writing and refactoring software architectures." },
            { count: "1", label: "Play Store App", desc: "Android package developed, compiled, and published live." }
          ].map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => handleMascotSpeak(stat.desc)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm text-center hover:-translate-y-1 transition duration-300 cursor-help"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-1">{stat.count}</h3>
              <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-3 text-slate-950">Featured Projects</h3>
          <p className="text-slate-600 text-base">
            Hover over any project card to let me explain my exact role and tech stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMascotSpeak(project.hoverText)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="group bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/40 overflow-hidden hover:-translate-y-2 hover:shadow-md transition duration-300 flex flex-col h-full"
            >
              {/* TOP HEADER */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <p className="text-xs uppercase tracking-wider opacity-90 mb-2 font-medium">
                  {project.category}
                </p>
                <h4 className="text-xl font-bold leading-tight">
                  {project.title}
                </h4>
              </div>

              {/* CONTENT BODY */}
              <div className="p-7 flex flex-col flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition text-sm font-medium shadow-sm hover:scale-105 duration-200"
                  >
                    View Project
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
