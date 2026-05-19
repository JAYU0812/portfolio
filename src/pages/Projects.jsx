import React from "react";

export default function Projects() {

  const projects = [
    {
      title: "Parichay Sammelan App",
      description:
        "Web & mobile application for community registration and event management with secure payment verification and QR system.",
      tech: "HTML, CSS, JS, PHP, Cordova",
      link: "https://parichay-sammelan.wuaze.com",
    },

    {
      title: "Jeweller Ledger App",
      description:
        "Ledger management system for jewelers with secure login and offline-ready mobile support.",
      tech: "HTML, CSS, JS, PHP, SQLite",
      link: "https://jeweller-ledger.wuaze.com",
    },

    {
      title: "Soni Samaj Directory",
      description:
        "Community directory with member search, family details and location-based filtering.",
      tech: "HTML, CSS, JS, PHP",
      link: "https://sonisamaj.wuaze.com",
    },

    {
      title: "Chandrakala Jewellers Store",
      description:
        "Full e-commerce website for a jewellery business with Razorpay payment integration.",
      tech: "HTML, CSS, JS, PHP",
      link: "https://chandrakalajewellers.wuaze.com",
    },

    {
      title: "Attendance Monitoring System",
      description:
        "Smart QR-based attendance system using GPS accuracy with Haversine algorithm.",
      tech: "HTML, CSS, JS, PHP",
      link: "https://attend-system.wuaze.com",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 antialiased min-h-screen">

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between p-5 shadow-md bg-white">

        <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
          Jay Soni
        </h1>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">

          <a href="/" className="hover:underline">
            Home
          </a>

          <a href="/about" className="hover:underline">
            About
          </a>

          <a
            href="/projects"
            className="text-blue-600 font-bold underline"
          >
            Projects
          </a>

          <a href="/resume" className="hover:underline">
            Resume
          </a>

          <a href="/contact" className="hover:underline">
            Contact
          </a>

        </nav>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto p-6 lg:p-10">

        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Live Demo
              </a>

            </div>
          ))}

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-gray-500 bg-white mt-12 shadow-inner">
        © 2025 Jay Soni. All rights reserved.
      </footer>
    </div>
  );
}