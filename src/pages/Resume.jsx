import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: #f8fafc;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        /* ---------------- PAGE ---------------- */

        .resume-page {
          width: 210mm;
          min-height: 297mm;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          margin: 20px auto;
          padding: 12mm 15mm;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border-radius: 24px;
        }

        /* ---------------- PRINT ---------------- */

        @page {
          size: A4;
          margin: 8mm;
        }

        @media print {

          html,
          body {
            width: 210mm;
            background: white !important;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-hidden {
            display: none !important;
          }

          .resume-page {
            width: 194mm !important;
            min-height: auto !important;
            margin: 0 auto !important;
            padding: 4mm 8mm !important;
            box-shadow: none !important;
            background: white !important;
            border: none !important;
            border-radius: 0 !important;
            backdrop-filter: none !important;
          }

          .section-title {
            margin: 8px 0 4px 0 !important;
            font-size: 9px !important;
            padding-bottom: 2px !important;
          }

          .body-text {
            font-size: 10.5px !important;
            line-height: 1.35 !important;
          }

          .job-title,
          .project-name,
          .edu-degree {
            font-size: 11px !important;
          }

          .job-meta,
          .project-url,
          .edu-meta {
            font-size: 9.5px !important;
            margin: 1px 0 2px 0 !important;
          }

          .bullet-list {
            padding-left: 12px !important;
            margin-top: 2px !important;
          }

          .bullet-list li {
            font-size: 9.5px !important;
            line-height: 1.3 !important;
            margin-bottom: 1px !important;
          }

          .skills-grid {
            gap: 4px !important;
            margin-top: 3px !important;
          }

          .skill-tag {
            font-size: 9px !important;
            padding: 1px 6px !important;
            background: #f1f5f9 !important;
          }

          .section-title,
          .job-title,
          .project-name,
          .edu-degree {
            page-break-after: avoid;
          }

          ul,
          li,
          p,
          .project-block,
          .skills-grid {
            page-break-inside: avoid;
          }
        }

        /* ---------------- TYPOGRAPHY ---------------- */

        .name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 27px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #111;
        }

        .title-line {
          font-size: 13px;
          color: #444;
          margin-top: 4px;
          font-weight: 500;
        }

        .contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 20px;
          margin-top: 8px;
          font-size: 11px;
          color: #222;
        }

        .header-bar {
          border-bottom: 2px solid #111;
          padding-bottom: 11px;
        }

        .section-title {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          border-bottom: 1.5px solid #111;
          padding-bottom: 4px;
          margin: 14px 0 8px 0;
        }

        .body-text {
          font-size: 12px;
          color: #222;
          line-height: 1.6;
        }

        .job-title {
          font-size: 13px;
          font-weight: 700;
          color: #111;
        }

        .job-meta {
          font-size: 11px;
          color: #555;
          margin: 2px 0 5px 0;
        }

        .bullet-list {
          padding-left: 16px;
          margin-top: 4px;
        }

        .bullet-list li {
          font-size: 12px;
          line-height: 1.55;
          color: #222;
          margin-bottom: 3px;
        }

        .project-block {
          margin-bottom: 10px;
        }

        .project-name {
          font-size: 13px;
          font-weight: 700;
          color: #111;
        }

        .project-url {
          font-size: 10.5px;
          color: #555;
          font-family: 'IBM Plex Mono', monospace;
          margin: 2px 0 4px 0;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 5px;
        }

        .skill-tag {
          font-size: 11px;
          background: #f0f0f0;
          padding: 3px 10px;
          border-radius: 2px;
          font-weight: 500;
        }

        .edu-degree {
          font-size: 13px;
          font-weight: 700;
        }

        .edu-meta {
          font-size: 11.5px;
          color: #444;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 24px;
        }

        /* ---------------- MOBILE ---------------- */

        @media screen and (max-width: 768px) {

          .resume-page {
            width: 100%;
            min-height: auto;
            margin: 0;
            padding: 24px;
            box-shadow: none;
          }

          .two-col {
            grid-template-columns: 1fr;
          }

          .contact-row {
            flex-direction: column;
            gap: 5px;
          }
        }

      `}</style>

      {/* CONTROL BAR */}

      <div
        className="print-hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          paddingTop: "24px",
          marginBottom: "20px"
        }}
      >
        <Link
          to="/"
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            color: "#1e293b",
            padding: "10px 24px",
            border: "1px solid rgba(226, 232, 240, 0.8)",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
          }}
        >
          ← Back to Portfolio
        </Link>
        <button
          onClick={handlePrint}
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "10px 28px",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: 600,
            boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)"
          }}
        >
          🖨 Print / Save as PDF
        </button>
      </div>

      {/* RESUME */}

      <div className="resume-page">

        {/* HEADER */}

        <div className="header-bar">

          <h1 className="name">SONI JAYKUMAR HASMUKH</h1>

          <p className="title-line">
            Full Stack Developer | Web & Mobile App Developer
          </p>

          <div className="contact-row">
            <span>jay0812soni@gmail.com</span>
            <span>+91 79903 61109</span>
            <span>Ahmedabad, Gujarat, India</span>
            <span>https://github.com/JAYU0812</span>
            <span>https://jaysoniexe.wuaze.com</span>
          </div>

        </div>

        {/* SUMMARY */}

        <h2 className="section-title">Professional Summary</h2>

        <p className="body-text">
          Full Stack Developer specializing in Flutter, React, Node.js,
          Supabase, PostgreSQL, and modern web technologies. Experienced in
          building scalable business applications with strong focus on
          Flutter development, React development, Node.js backend APIs,
          Supabase integration, REST APIs, Offline-First architecture,
          Realtime systems, database design, and PropTech solutions.
        </p>

        {/* SKILLS */}

        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {[
            "Flutter",
            "Dart",
            "React.js",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PHP",
            "REST APIs",
            "Supabase",
            "PostgreSQL",
            "MySQL",
            "Isar Database",
            "BLoC",
            "Riverpod",
            "Git",
            "GitHub",
            "VS Code",
            "Android Studio",
            "Postman",
            "Vercel",
            "XAMPP",
            "Offline-First",
            "Realtime Synchronization",
            "Database Design",
            "Authentication",
            "Business Operations",
            "PropTech Solutions"
          ].map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>

        {/* EXPERIENCE */}

        <h2 className="section-title">Experience</h2>

        <p className="job-title">
          NB Property Tech
        </p>

        <p className="job-meta">
          Full Stack Developer Intern • July 2026 – Present • Science City, Ahmedabad
        </p>

        <p className="body-text" style={{ marginTop: "4px" }}>
          PropTech & Business Operations
        </p>

        <ul className="bullet-list">
          <li>Developing production-ready Flutter applications for real estate business workflows.</li>
          <li>Building scalable Node.js backend APIs to support property management systems.</li>
          <li>Working with Supabase PostgreSQL for persistent cloud database management.</li>
          <li>Designing realtime synchronization systems for instant data propagation.</li>
          <li>Implementing Offline-First architecture ensuring uninterrupted local app usage.</li>
          <li>Building business automation tools to streamline property team operations.</li>
          <li>Contributing to product architecture design and system scalability planning.</li>
          <li>Collaborating with the development team to review code and meet sprint goals.</li>
          <li>Developing and maintaining the live PropKart CRM software platform.</li>
          <li style={{ listStyleType: "none", marginTop: "4px", fontSize: "11px", color: "#555" }}>
            <strong>Technologies:</strong> Flutter, Dart, Node.js, Express.js, Supabase, PostgreSQL, Isar Database, Git
          </li>
        </ul>

        <p className="job-title" style={{ marginTop: "10px" }}>
          Tech-Craft
        </p>

        <p className="job-meta">
          React Developer Intern • 15 Days • <a href="https://tech-craft.org" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>tech-craft.org</a>
        </p>

        <ul className="bullet-list">
          <li>Developed the complete static dashboard UI using React.js.</li>
          <li>Built reusable React components to ensure modular frontend architecture.</li>
          <li>Created Doctor Cards to present healthcare provider information dynamically.</li>
          <li>Implemented Patient List display to manage and view patient details.</li>
          <li>Developed an Appointment Form to capture scheduling details.</li>
          <li>Added Search Patient functionality for fast patient profile retrieval.</li>
          <li>Implemented Department Filtering to categorize clinical data.</li>
          <li>Added Appointment Creation functionality to schedule sessions.</li>
          <li>Added Appointment Deletion functionality to cancel bookings.</li>
          <li>Displayed Statistics Cards to visualize key performance metrics.</li>
          <li>Project Link: <a href="https://hospital-dashboard-woad-gamma.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>hospital-dashboard-woad-gamma.vercel.app</a></li>
          <li style={{ listStyleType: "none", marginTop: "4px", fontSize: "11px", color: "#555" }}>
            <strong>Concepts:</strong> Props, useState, map(), filter()
          </li>
        </ul>

        <p className="job-title" style={{ marginTop: "10px" }}>
          Freelance Full Stack Web Developer
        </p>

        <p className="job-meta">
          Freelance • 2023 – Present
        </p>

        <ul className="bullet-list">
          <li>
            Designed, developed, and deployed websites and web applications for 5+ businesses including salons, medical stores, and kirana stores.
          </li>
          <li>
            Built responsive and mobile-friendly user interfaces improving user engagement and accessibility.
          </li>
          <li>
            Managed frontend, backend, database integration, deployment, and maintenance independently.
          </li>
          <li>
            Reduced development time by building reusable templates and components.
          </li>
          <li>
            Delivered projects successfully with zero major post-launch issues reported.
          </li>
        </ul>

        

        {/* PROJECTS */}

        <h2 className="section-title">Projects</h2>

        <div className="project-block">
          <p className="project-name">
            PropKart — Production Live Property CRM
          </p>

          <p className="project-url">
            <a href="https://propkart.vercel.app" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>https://propkart.vercel.app</a>
          </p>

          <ul className="bullet-list">
            <li>Developed a production-ready Property CRM platform featuring Offline-First Architecture and Realtime Synchronization.</li>
            <li>Built comprehensive Property & Requirement Management modules, a Telecaller CRM, and a Smart Matching engine.</li>
            <li>Implemented dashboard analytics, secure authentication, PostgreSQL database, and API integrations.</li>
            <li style={{ listStyleType: "none", marginTop: "4px", fontSize: "11px", color: "#555" }}>
              <strong>Technology Stack:</strong> Flutter, Node.js, Supabase, PostgreSQL, Isar Database
            </li>
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            Hospital Management Dashboard — React Web App
          </p>

          <p className="project-url">
            <a href="https://hospital-dashboard-woad-gamma.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "#2563eb" }}>https://hospital-dashboard-woad-gamma.vercel.app/</a>
          </p>

          <ul className="bullet-list">
            <li>Built a responsive Hospital Management Dashboard using React.js.</li>
            <li>Features include Doctor Cards, Patient List, Appointment Form, Search Patient, Department Filtering, and Statistics Cards.</li>
            <li>Added functionality for creating and deleting appointments seamlessly.</li>
            <li style={{ listStyleType: "none", marginTop: "4px", fontSize: "11px", color: "#555" }}>
              <strong>Concepts & Tech:</strong> React, Props, useState, map(), filter()
            </li>
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            ParichaySammelan — Android App (Google Play Store)
          </p>

          <ul className="bullet-list">
            <li>
              Developed and published a community event registration app on
              Google Play Store.
            </li>

            <li>
              Implemented user registration, profile management, and event
              participation features.
            </li>
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            KITAAB — Jeweller Ledger Management System
          </p>

          <ul className="bullet-list">
            <li>
              Built a ledger system for jewellery businesses to track daily
              transactions digitally.
            </li>

            <li>
              Designed a simple and efficient UI for non-technical users.
            </li>
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            SoniSamaj — Community Web Platform
          </p>

          <ul className="bullet-list">
            <li>
              Developed a community networking platform connecting members and improving social interaction.
            </li>

            <li>
              Implemented profile management, member discovery, and responsive user interface features.
            </li>
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            Chandrakala Jewellers — Business Website + CRM dashboard for GST billing
          </p>

          <p className="project-url">
          
          </p>

          <ul className="bullet-list">
            <li>
              Developed and deployed a responsive business website helping the jewellery business establish an online presence.
            </li>

            <li>
              Improved customer reach and visibility through digital transformation.
            </li>
            <li>
              GST billing CRM software for Chandrakala Jewellers
            </li>
          </ul>
        </div>
        <div className="project-block">
          <p className="project-name">
            Hackathon Attendance System
          </p>

          <ul className="bullet-list">
            <li>
              Developed a QR and geolocation-based attendance system during a
              hackathon competition.
            </li>

            <li>
              Secured 5th rank among competing teams.
            </li>
          </ul>
        </div>

        {/* EDUCATION */}

        <h2 className="section-title">Education</h2>

        <div className="two-col">

          <div>
            <p className="edu-degree">
              B.Tech — Information Technology
            </p>

            <p className="edu-meta">
              Gandhinagar University | Expected 2027
            </p>
          </div>

          <div>
            <p className="edu-degree">
              HSC — 12th Grade
            </p>

            <p className="edu-meta">
              BAPS Raysan, Gandhinagar | 80%
            </p>
          </div>

          <div>
            <p className="edu-degree">
              SSC — 10th Grade
            </p>

            <p className="edu-meta">
              St. John's School, Khedbrahma | 84%
            </p>
          </div>

        </div>

        {/* CERTIFICATIONS */}

        <h2 className="section-title">Certifications</h2>

        <ul className="bullet-list">
          <li>
            Flutter Development Internship (3 Months)
          </li>
          <li>
            React Development Internship — Tech-Craft
          </li>
          <li>
            C++ Programming Certification — A Grade
          </li>
        </ul>

        {/* ACHIEVEMENTS */}

        <h2 className="section-title">Achievements</h2>

        <ul className="bullet-list">
          <li>
            Developed the live PropKart Property CRM.
          </li>
          <li>
            Built production-ready Flutter applications.
          </li>
          <li>
            Designed Offline-First and Realtime architecture.
          </li>
          <li>
            Developed scalable backend APIs using Node.js and Supabase.
          </li>
          <li>
            Built full-stack applications across Real Estate, Healthcare, Jewellery, and Community platforms.
          </li>
        </ul>

        {/* LEADERSHIP */}

        <h2 className="section-title">Leadership & Activities</h2>

        <ul className="bullet-list">
          <li>
            Class Representative — Gandhinagar University
          </li>

          <li>
            Group Leader during Higher Secondary Education
          </li>
        </ul>

        {/* LANGUAGES */}

        <h2 className="section-title">Languages</h2>

        <p className="body-text">
          English | Hindi | Gujarati
        </p>

      </div>
        

    </>
  );
}
