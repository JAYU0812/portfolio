import React from "react";

export default function About() {
  const handleMascotSpeak = (text) => {
    window.dispatchEvent(new CustomEvent("mascot-speak", { detail: { text } }));
  };

  const techDescriptions = {
    "Flutter": "I write cross-platform mobile apps using Flutter and Dart.",
    "React JS": "I construct fast, component-driven web interfaces using React.js.",
    "Node.js": "I build asynchronous backends and server architectures with Node.js.",
    "Express.js": "I design secure REST API routing tables using Express.js.",
    "Supabase": "I use Supabase for realtime databases, cloud storage, and secure authentication.",
    "PostgreSQL": "I design normalized, efficient relational databases with PostgreSQL.",
    "MySQL": "I manage database storage and write optimized SQL queries in MySQL.",
    "Isar Database": "I use Isar for high-performance, local offline-first database synchronization.",
    "Tailwind CSS": "I style modern web interfaces rapidly using Tailwind CSS classes.",
    "JavaScript": "I develop complex client-side applications with ES6+ JavaScript.",
    "Dart": "I write OOP-focused, typed code for Flutter apps using Dart.",
    "PHP": "I construct server-side scripts and handle legacy deployments using PHP.",
    "REST APIs": "I design standard REST API endpoints for frontend-backend communication.",
    "Git & GitHub": "I use Git and GitHub for version control and collaborating in agile teams.",
    "Firebase": "I integrate Firebase for cloud notifications and analytics.",
    "Vite": "I use Vite as a modern, blazing-fast bundler for React projects.",
    "Vercel": "I deploy frontend web applications instantly using Vercel hosting.",
    "Android Studio": "I compile and test Android applications using Android Studio.",
    "VS Code": "VS Code is my primary IDE for coding JavaScript, Flutter, and Node.",
    "Postman": "I test backend API responses and payload contracts with Postman.",
    "XAMPP": "I manage local Apache and MySQL testing servers with XAMPP.",
    "C++": "I learned core OOP, data structures, and algorithms through C++."
  };

  const services = [
    {
      title: "Modern Web Development",
      description: "Building fast, scalable, and responsive web applications using React and Tailwind CSS.",
      hoverText: "I focus on clean component architectures, state management, and performance optimization."
    },
    {
      title: "Business Websites",
      description: "Creating professional websites for businesses to improve online visibility, customer engagement, and digital presence.",
      hoverText: "I help retail stores and services move online to grow their organic audience."
    },
    {
      title: "Android Applications",
      description: "Developing Android apps and WebView applications for communities, startups, and businesses.",
      hoverText: "I build responsive, offline-ready Android applications and publish them on Google Play."
    },
    {
      title: "Backend & APIs",
      description: "Building backend systems, authentication flows, REST APIs, and database integrations.",
      hoverText: "I design secure Node.js backend routers, Supabase integrations, and relational database schemas."
    },
    {
      title: "UI/UX & Responsive Design",
      description: "Designing clean, mobile-friendly, and intuitive user interfaces focused on user experience and performance.",
      hoverText: "I design with a focus on modern aesthetics, glassmorphism, readability, and ergonomics."
    },
    {
      title: "Deployment & Optimization",
      description: "Deploying and optimizing applications using Vercel, hosting platforms, GitHub workflows, and performance best practices.",
      hoverText: "I configure static site generation, clean hosting paths, and CI/CD pipelines."
    }
  ];

  return (
    <div className="bg-transparent text-slate-800 py-10">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
              Full Stack Developer
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6 tracking-tight">
              Building Modern Web Experiences & Digital Solutions
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I’m Soni Jaykumar Hasmukh — a Full Stack Developer focused on building scalable, modern, and user-friendly web and mobile applications.
              <br /><br />
              I specialize in Flutter, React, Node.js, Supabase, and Offline-First systems. I love helping businesses and communities digitize through beautiful, high-performance software.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                onMouseEnter={() => handleMascotSpeak("Let's browse my portfolio projects together! Hover over any card for details.")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition shadow-sm text-sm font-medium"
              >
                View Projects
              </a>

              <a
                href="/contact"
                onMouseEnter={() => handleMascotSpeak("Ready to discuss a project? Drop me a message on the contact page!")}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="border border-slate-300 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-slate-50 transition shadow-sm text-sm font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT STATS GRID */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { num: "5+", label: "Businesses Digitized", desc: "Helped salons, medical stores, and retail stores build digital products." },
              { num: "2+", label: "Years Experience", desc: "Years of building interactive codebases and software." },
              { num: "8+", label: "Real-World Projects", desc: "Including Property CRM, community platform, and digital ledgers." },
              { num: "1", label: "Play Store App", desc: "Live event registration app published on the Google Play Store." }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                onMouseEnter={() => handleMascotSpeak(stat.desc)}
                onMouseLeave={() => handleMascotSpeak(null)}
                className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm p-6 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-600 mb-1">{stat.num}</h3>
                <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT ME BRIEF */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div 
          onMouseEnter={() => handleMascotSpeak("I always ensure my architectures are responsive, local-first (offline-friendly), and secure.")}
          onMouseLeave={() => handleMascotSpeak(null)}
          className="bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm p-10"
        >
          <h3 className="text-3xl font-bold text-slate-950 mb-6">About Me</h3>
          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <p>
              I help retail businesses, startups, and local communities build strong digital presences through responsive websites, scalable web applications, and feature-rich Android apps.
            </p>
            <p>
              My development philosophy revolves around clean architecture, component modularity, offline compatibility (Offline-First), realtime sync database design, and high-performance user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">What I Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMascotSpeak(service.hoverText)}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm p-7 hover:-translate-y-1 hover:border-blue-200 transition duration-300"
            >
              <h4 className="text-lg font-bold mb-3 text-slate-950">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {Object.keys(techDescriptions).map((tech) => (
            <div
              key={tech}
              onMouseEnter={() => handleMascotSpeak(techDescriptions[tech])}
              onMouseLeave={() => handleMascotSpeak(null)}
              className="bg-white/60 backdrop-blur-md border border-white/40 rounded-xl shadow-sm p-4 text-center font-semibold text-slate-700 hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition cursor-help text-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
