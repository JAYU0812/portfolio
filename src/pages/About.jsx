import React from "react";

export default function About() {
  return (
    <div className="bg-[#f8fafc] text-gray-800 min-h-screen">

      {/* HEADER */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold tracking-tight">
            Soni Jaykumar Hasmukh
          </h1>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">

            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>

            <a
              href="/about"
              className="text-blue-600 font-semibold"
            >
              About
            </a>

            <a href="/projects" className="hover:text-blue-600 transition">
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

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
              Full Stack Developer
            </p>

            <h2 className="text-5xl font-bold leading-tight text-gray-900 mb-6">

              Building Modern Web Experiences &
              Digital Solutions

            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">

              I’m Jay Soni — a Full Stack Developer focused on building
              scalable, modern, and user-friendly web applications.

              <br /><br />

              I specialize in React, JavaScript, PHP, Supabase, and
              modern frontend development, helping businesses and
              communities transition into the digital world through
              high-performance applications and clean UI/UX.

            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/projects"
                className="bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                5+
              </h3>
              <p className="text-gray-600">
                Businesses Digitized
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                2+
              </h3>
              <p className="text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                6+
              </h3>
              <p className="text-gray-600">
                Real-World Projects
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                1
              </h3>
              <p className="text-gray-600">
                Play Store App
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h3 className="text-3xl font-bold mb-8">
            About Me
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

            <p>

              I help businesses, startups, and local communities build
              strong digital platforms through modern websites,
              scalable web applications, and Android apps.

            </p>

            <p>

              Over time, I have developed multiple production-ready
              projects including community platforms, business
              websites, streaming systems, ledger management software,
              and Android applications that solve real-world problems.

            </p>

            <p>

              My development approach focuses on responsive design,
              clean architecture, reusable components, API
              integrations, authentication systems, database
              management, and fast user experiences.

            </p>

            <p>

              I work with modern technologies like React, Tailwind CSS,
              JavaScript, Supabase, PHP, MySQL, REST APIs, GitHub,
              Vercel, and deployment platforms to build reliable and
              scalable digital products.

            </p>

            <p>

              Whether it’s a jewellery business, medical shop, salon,
              kirana store, startup, or community platform — my goal is
              to help businesses improve visibility, customer trust,
              automation, and online growth.

            </p>

          </div>

        </div>

      </section>

      {/* WHAT I DO */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h3 className="text-3xl font-bold mb-10">
          What I Do
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              Modern Web Development
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Building fast, scalable, and responsive web applications
              using React, Tailwind CSS, and modern frontend
              technologies.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              Business Websites
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Creating professional websites for businesses to improve
              online visibility, customer engagement, and digital
              presence.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              Android Applications
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Developing Android apps and WebView applications for
              communities, startups, and businesses.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              Backend & APIs
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Building backend systems, authentication flows, REST APIs,
              and database integrations for scalable applications.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              UI/UX & Responsive Design
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Designing clean, mobile-friendly, and intuitive user
              interfaces focused on user experience and performance.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-1 transition">

            <h4 className="text-xl font-semibold mb-4">
              Deployment & Optimization
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Deploying and optimizing applications using Vercel,
              hosting platforms, GitHub workflows, and performance best
              practices.
            </p>

          </div>

        </div>

      </section>

      {/* TECH STACK */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h3 className="text-3xl font-bold mb-10">
          Tools & Technologies
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {[
            "React JS",
            "Tailwind CSS",
            "JavaScript",
            "HTML5",
            "CSS3",
            "PHP",
            "MySQL",
            "Supabase",
            "REST APIs",
            "Git & GitHub",
            "Firebase",
            "Vite",
            "Vercel",
            "Responsive Design",
            "Authentication",
            "Session Management",
            "Android Development",
            "WebView Apps",
            "Deployment",
            "C++"
          ].map((tech) => (

            <div
              key={tech}
              className="bg-white rounded-xl shadow-md p-4 text-center font-medium hover:shadow-xl transition"
            >
              {tech}
            </div>

          ))}

        </div>

      </section>

      {/* WHY WORK WITH ME */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">

          <h3 className="text-3xl font-bold mb-6">
            Why Work With Me
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <ul className="space-y-4 text-lg">

                <li>
                  ✅ Real-world project development experience
                </li>

                <li>
                  ✅ Modern React & full-stack development
                </li>

                <li>
                  ✅ Strong focus on responsive UI/UX
                </li>

                <li>
                  ✅ Clean and scalable architecture
                </li>

              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-lg">

                <li>
                  ✅ Fast performance & optimization
                </li>

                <li>
                  ✅ Business-focused digital solutions
                </li>

                <li>
                  ✅ Reliable deployment & maintenance
                </li>

                <li>
                  ✅ Passion for building impactful products
                </li>

              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">

        © 2025 Jay Soni. All rights reserved.

      </footer>

    </div>
  );
}
