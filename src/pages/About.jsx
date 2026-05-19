import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">

      {/* Header */}
      <header className="flex items-center justify-between p-5 shadow-md">
        <h1 className="text-xl font-bold">Jay Soni</h1>

        <nav>
          <a href="/" className="mx-2 hover:underline">Home</a>

          <a
            href="/about"
            className="mx-2 font-semibold underline text-blue-600"
          >
            About
          </a>

          <a href="/projects" className="mx-2 hover:underline">
            Projects
          </a>

          <a href="/resume" className="mx-2 hover:underline">
            Resume
          </a>

          <a href="/contact" className="mx-2 hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Main */}
<main className="max-w-4xl mx-auto p-6">

  <h2 className="text-4xl font-bold mb-6 text-center">
    About Me
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-8">

    I help small businesses and local shops build a strong online
    presence through modern, fast, and affordable websites and mobile
    applications.

    <br /><br />

    Over time, I have designed and developed multiple real-world web
    and mobile applications that are actively used by businesses and
    communities. My focus is always on creating solutions that are
    easy to use, mobile-friendly, scalable, and useful for everyday
    customers.

    <br /><br />

    I now also build modern React-based websites using the latest
    frontend technologies and UI practices. My development approach
    focuses on responsive design, clean user experience, fast
    performance, reusable components, and scalable architecture.

    <br /><br />

    I work with technologies like React, Vite, Tailwind CSS,
    JavaScript, Supabase, APIs, and modern deployment platforms to
    create professional websites and web applications for businesses,
    startups, and communities.

    <br /><br />

    Whether it’s a kirana store, medical shop, salon, jewellery
    business, or a service-based platform, my goal is to help owners
    get more visibility, customer trust, WhatsApp inquiries, and a
    strong digital presence.

  </p>

  {/* What I Do */}
  <h3 className="text-2xl font-semibold mb-4">
    What I Do
  </h3>

  <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">

    <li>Create modern business websites using React & latest technologies</li>

    <li>Develop Android apps for small businesses</li>

    <li>Build responsive and mobile-friendly user interfaces</li>

    <li>Integrate WhatsApp ordering, payments & contact systems</li>

    <li>Create scalable frontend applications with React</li>

    <li>Provide simple, reliable and affordable digital solutions</li>

  </ul>

  {/* Skills */}
  <h3 className="text-2xl font-semibold mb-4">
    Tools & Technologies
  </h3>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">

    <div className="bg-gray-100 p-3 rounded shadow">
      React JS
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Tailwind CSS
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Vite
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      HTML
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      CSS
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      JavaScript
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      PHP
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      MySQL
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Supabase
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      REST APIs
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Flutter / Cordova
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Git & GitHub
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Vercel Deployment
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      Payment Integration
    </div>

    <div className="bg-gray-100 p-3 rounded shadow">
      WebView Apps
    </div>

  </div>

  {/* Trust Line */}
  <div className="mt-10 p-5 bg-blue-50 border-l-4 border-blue-500 rounded">

    <p className="text-gray-800 font-medium">
      I believe technology should be modern, fast, affordable, and
      useful — especially for local businesses and growing startups.
    </p>

  </div>

</main>
      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500 mt-10">
        © 2025 Jay Soni. All rights reserved.
      </footer>
    </div>
  );
}