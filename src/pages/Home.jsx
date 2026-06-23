import React from "react";
import { Link } from "react-router-dom";
import "@lottiefiles/lottie-player";

export default function Home() {

  const stats = [
    { number: "6+", label: "Production Projects" },
    { number: "5+", label: "Businesses Digitized" },
    { number: "2+", label: "Years Experience" },
    { number: "1", label: "Play Store App" },
  ];

  const services = [
    {
      icon: "🌐",
      title: "Modern Websites",
      description:
        "Professional, fast, and responsive business websites built with modern technologies.",
    },

    {
      icon: "📱",
      title: "Android Apps",
      description:
        "Custom Android apps and WebView applications for businesses and communities.",
    },

    {
      icon: "⚡",
      title: "Full Stack Development",
      description:
        "Frontend, backend, APIs, authentication systems, databases, and deployment.",
    },

    {
      icon: "🎨",
      title: "Modern UI/UX",
      description:
        "Clean interfaces focused on performance, responsiveness, and user experience.",
    },
  ];

  const projects = [
    {
      title: "Parichay Sammelan Platform",
      description:
        "Community platform with registration, payments, QR verification, and Android support.",
      gradient: "from-blue-500 to-indigo-600",
    },

    {
      title: "KITAAB Ledger System",
      description:
        "Jeweller ledger management system with authentication and transaction tracking.",
      gradient: "from-purple-500 to-pink-600",
    },

    {
      title: "INFLIX Streaming Platform",
      description:
        "Netflix-inspired streaming platform with subscriptions and admin dashboard.",
      gradient: "from-red-500 to-rose-600",
    },
  ];

  return (

    <div className="bg-[#f8fafc] overflow-x-hidden text-gray-800">

      {/* BACKGROUND BLURS */}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* HEADER */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-tight">
            Soni Jaykumar Hasmukh
          </h1>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">

            <Link to="/" className="text-blue-600 font-semibold">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>

            <Link to="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>

            <Link to="/resume" className="hover:text-blue-600 transition">
              Resume
            </Link>

            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-5">
              Full Stack Developer
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-8">

              Building
              <span className="text-blue-600"> Modern </span>
              Digital Products
              For Businesses & Communities

            </h2>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">

              I design and develop scalable websites, Android apps,
              and modern web applications using React, JavaScript,
              Supabase, PHP, and modern frontend technologies.

              <br /><br />

              From local businesses to community platforms —
              I help brands build strong digital experiences with
              clean UI/UX, fast performance, and real-world impact.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5">

              <Link
                to="/projects"
                className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:scale-105 transition shadow-xl"
              >
                View Projects
              </Link>

              <Link
                to="/resume"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium hover:scale-105 transition shadow-xl"
              >
                View Resume
              </Link>

              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-2xl font-medium hover:scale-105 transition shadow-xl"
              >
                WhatsApp Me
              </a>

            </div>

            {/* TECH STACK */}

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "React",
                "Tailwind CSS",
                "JavaScript",
                "PHP",
                "Supabase",
                "REST APIs",
                "MySQL",
                "Vercel",
              ].map((tech) => (

                <span
                  key={tech}
                  className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[40px] blur-3xl opacity-20"></div>

            <div className="relative bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">

              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
                background="transparent"
                speed="1"
                style={{
                  width: "100%",
                  height: "400px",
                }}
                loop
                autoplay
              ></lottie-player>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-1 transition"
            >

              <h3 className="text-5xl font-bold text-blue-600 mb-3">
                {stat.number}
              </h3>

              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-4">
            Services
          </p>

          <h3 className="text-5xl font-bold mb-6">
            What I Build
          </h3>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">

            Scalable digital products designed with performance,
            usability, and modern user experience in mind.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition"
            >

              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold mb-4">
                {service.title}
              </h4>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURED PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex items-center justify-between flex-wrap gap-5 mb-14">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Portfolio
            </p>

            <h3 className="text-5xl font-bold">
              Featured Projects
            </h3>

          </div>

          <Link
            to="/projects"
            className="bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition"
          >
            View All Projects
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
            >

              <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>

                <h4 className="text-3xl font-bold leading-tight">
                  {project.title}
                </h4>

              </div>

              <div className="p-8">

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                >
                  Explore Project →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* WHY ME */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] p-12 text-white shadow-2xl">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="uppercase tracking-widest text-blue-100 font-semibold mb-4">
                Why Work With Me
              </p>

              <h3 className="text-5xl font-bold leading-tight mb-8">

                Building Real Solutions
                That Create Real Impact

              </h3>

              <p className="text-lg text-blue-100 leading-relaxed">

                My focus is not just creating websites —
                but building scalable digital products that improve
                business growth, user engagement, automation,
                and customer experience.

              </p>

            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              {[
                "Modern React Development",
                "Responsive UI/UX",
                "Real Business Experience",
                "Scalable Architecture",
                "Fast Performance",
                "Reliable Deployment",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10"
                >

                  <p className="text-lg font-medium">
                    ✅ {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <h3 className="text-5xl font-bold mb-6">

          Let’s Build Something Amazing

        </h3>

        <p className="text-xl text-gray-600 leading-relaxed mb-10">

          Looking for a modern website, Android app,
          or scalable web platform for your business or startup?

        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/917990361109"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition shadow-xl"
          >
            Contact on WhatsApp
          </a>

          <Link
            to="/contact"
            className="bg-black text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition shadow-xl"
          >
            Contact Page
          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-gray-500 text-sm">

        © 2025 Jay Soni. All rights reserved.

      </footer>

    </div>
  );
}
