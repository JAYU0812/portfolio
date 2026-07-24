import React from "react";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";

export default function Home() {
  const stats = [
    { number: "8+", label: "Production Projects", hoverText: "I have built and delivered over 8 real-world production projects!" },
    { number: "5+", label: "Businesses Digitized", hoverText: "I've helped 5+ traditional offline businesses transform into the digital era." },
    { number: "2+", label: "Years Experience", hoverText: "I have over 2 years of hands-on experience in full-stack engineering." },
    { number: "1", label: "Play Store App", hoverText: "I successfully developed and published a community app on the Google Play Store." },
  ];

  const services = [
    {
      icon: "🌐",
      title: "Modern Websites",
      description: "Professional, fast, and responsive business websites built with modern technologies.",
      hoverText: "I build SEO-optimized, highly responsive web platforms using React and Tailwind CSS."
    },
    {
      icon: "📱",
      title: "Android Apps",
      description: "Custom Android apps and WebView applications for businesses and communities.",
      hoverText: "I code robust Android apps with native wrappers, Supabase integration, and local caching."
    },
    {
      icon: "⚡",
      title: "Full Stack Development",
      description: "Frontend, backend, APIs, authentication systems, databases, and deployment.",
      hoverText: "From database schemas (PostgreSQL/MySQL) to Node.js backend APIs and frontend UI."
    },
    {
      icon: "🎨",
      title: "Modern UI/UX",
      description: "Clean interfaces focused on performance, responsiveness, and user experience.",
      hoverText: "I specialize in clean minimalism, glassmorphic interfaces, and smooth hover animations."
    },
  ];

  const projects = [
    {
      title: "PropKart Property CRM",
      description: "Production-ready Property CRM featuring Offline-First architecture, Realtime sync, and Telecaller CRM.",
      gradient: "from-violet-500 to-purple-600",
      hoverText: "PropKart is my flagship PropTech platform built with Flutter, Node.js, and Supabase. Hovering here is awesome!"
    },
    {
      title: "Parichay Sammelan Platform",
      description: "Community platform with registration, payments, QR verification, and Android support.",
      gradient: "from-blue-500 to-indigo-600",
      hoverText: "I created this full-stack portal for community events, adding security and payment gateways."
    },
    {
      title: "KITAAB Ledger System",
      description: "Jeweller ledger management system with authentication and transaction tracking.",
      gradient: "from-purple-500 to-pink-600",
      hoverText: "KITAAB is a clean ledger solution that enables non-technical retail users to track daily transactions."
    },
  ];

  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  return (
    <div className="bg-transparent overflow-x-hidden text-slate-800 py-10">
      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-5">
              Full Stack Developer
            </p>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-8 tracking-tight">
              Building
              <span className="text-blue-600"> Modern </span>
              Digital Products For Businesses
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
              I design and develop scalable websites, Android apps, and modern web applications. 
              Specializing in Flutter, React, Node.js, Supabase, and Offline-First architectures.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">
              <Link
                to="/projects"
                onMouseEnter={() => handleMascotSpeak("Click here to browse my full project list! I've worked on PropTech, Healthcare, and Jewellery ledger systems.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-slate-800 hover:-translate-y-1 transition duration-200 shadow-md"
              >
                View Projects
              </Link>

              <Link
                to="/resume"
                onMouseEnter={() => handleMascotSpeak("Click here to view my print-ready PDF resume. It fits on exactly 2 pages.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-blue-700 hover:-translate-y-1 transition duration-200 shadow-md"
              >
                View Resume
              </Link>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => handleMascotSpeak("Have a question? Hit this button to chat with me instantly on WhatsApp!")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-medium hover:bg-emerald-700 hover:-translate-y-1 transition duration-200 shadow-md"
              >
                WhatsApp Me
              </a>
            </div>

            {/* QUICK TECH TAGS */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["Flutter", "React", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm px-4 py-2 rounded-full text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[40px] blur-3xl opacity-20"></div>
            <div className="relative bg-white/50 backdrop-blur-md rounded-[40px] shadow-xl p-8 border border-white/40">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
                background="transparent"
                speed="1"
                style={{
                  width: "100%",
                  height: "350px",
                }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMascotSpeak(stat.hoverText)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-white/40 text-center hover:-translate-y-1 hover:shadow-md transition duration-300 cursor-help"
            >
              <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-600 font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
            Services
          </p>
          <h3 className="text-4xl font-bold mb-4 text-slate-900">
            What I Build
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Scalable digital solutions engineered with top-tier usability, fast load speeds, and clean interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMascotSpeak(service.hoverText)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/40 p-8 hover:-translate-y-2 hover:shadow-md hover:border-blue-200 transition duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-14">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h3 className="text-4xl font-bold text-slate-900">
              Featured Projects
            </h3>
          </div>

          <Link
            to="/projects"
            className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 hover:-translate-y-0.5 transition duration-200 shadow-sm text-sm font-medium"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMascotSpeak(project.hoverText)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="group bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/40 overflow-hidden hover:-translate-y-2 hover:shadow-md transition duration-300"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                <h4 className="text-2xl font-bold leading-tight">{project.title}</h4>
              </div>
              <div className="p-8">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 text-blue-600 font-semibold hover:gap-2 transition-all duration-200 text-sm"
                >
                  Explore Project <span className="text-base">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-widest text-blue-100 font-semibold mb-4 text-sm">
                Why Work With Me
              </p>
              <h3 className="text-4xl font-extrabold leading-tight mb-8">
                Building Real Solutions That Create Real Impact
              </h3>
              <p className="text-blue-100 leading-relaxed">
                My objective is to construct software with excellent reliability, beautiful layouts, offline capability, and high performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Modern Flutter & React",
                "Glassmorphism & Clean UI",
                "Offline-First Architectures",
                "Realtime Synchronization",
                "PostgreSQL / Supabase",
                "Productive Collaboration",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                >
                  <p className="text-base font-semibold">
                    ✅ {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-4xl font-extrabold mb-6 text-slate-900">
          Let’s Build Something Amazing
        </h3>
        <p className="text-slate-600 leading-relaxed mb-10">
          Need a robust property tech platform, healthcare dashboard, retail ledger, or community system? Let's connect.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/917990361109"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 hover:-translate-y-1 transition duration-200 shadow-md"
          >
            Contact on WhatsApp
          </a>

          <Link
            to="/contact"
            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 hover:-translate-y-1 transition duration-200 shadow-md"
          >
            Contact Page
          </Link>
        </div>
      </section>
    </div>
  );
}
