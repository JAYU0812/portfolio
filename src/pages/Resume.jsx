import React from "react";

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
          background: #e5e7eb;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        /* ---------------- PAGE ---------------- */

        .resume-page {
          width: 210mm;
          min-height: 297mm;
          background: #fff;
          margin: 20px auto;
          padding: 12mm 15mm;
          box-shadow: 0 4px 40px rgba(0,0,0,0.18);
        }

        /* ---------------- PRINT ---------------- */

        @page {
          size: A4;
          margin: 10mm;
        }

        @media print {

          html,
          body {
            width: 210mm;
            background: white;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-hidden {
            display: none !important;
          }

          .resume-page {
            width: 190mm !important;
            min-height: auto !important;
            margin: 0 auto !important;
            padding: 0 !important;
            box-shadow: none !important;
            background: white !important;
            page-break-after: auto;
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
          div {
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

      {/* PRINT BUTTON */}

      <div
        className="print-hidden"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "24px",
          marginBottom: "20px"
        }}
      >
        <button
          onClick={handlePrint}
          style={{
            background: "#111",
            color: "#fff",
            padding: "10px 28px",
            border: "none",
            borderRadius: "4px",
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: 600
          }}
        >
          🖨 Print / Save as PDF
        </button>
      </div>

      {/* RESUME */}

      <div className="resume-page">

        {/* HEADER */}

        <div className="header-bar">

          <h1 className="name">JAY SONI</h1>

          <p className="title-line">
            Full Stack Developer | Web & Mobile App Developer
          </p>

          <div className="contact-row">
            <span>jay0812soni@gmail.com</span>
            <span>+91 79903 61109</span>
            <span>Gandhinagar, Gujarat, India</span>
            <span>https://github.com/JAYU0812</span>
            <span>https://jaysoniexe.wuaze.com</span>
          </div>

        </div>

        {/* SUMMARY */}

        <h2 className="section-title">Professional Summary</h2>

        <p className="body-text">
          Results-driven Full Stack Developer and final-year B.Tech IT student
          with 2+ years of hands-on experience developing and deploying scalable
          web applications and Android apps. Skilled in HTML5, CSS3,
          JavaScript, PHP, MySQL, Supabase, REST APIs, Git/GitHub, and
          responsive web development. Delivered digital solutions for 5+
          businesses, enabling offline-to-online transformation. Experienced in
          complete project lifecycle management including UI design, backend
          development, authentication systems, database management, deployment,
          and maintenance.
        </p>

        {/* SKILLS */}

<h2 className="section-title">Technical Skills</h2>

<div className="skills-grid">
  {[
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "PHP",
    "C++",
    "React.js",
    "React Native",
    "Tailwind CSS",
    "Responsive Web Design",
    "MySQL",
    "Supabase",
    "Database Design",
    "CRUD Operations",
    "REST APIs",
    "Authentication & Authorization",
    "Session Management",
    "Password Hashing (bcrypt)",
    "Firebase",
    "Android App Development",
    "Google Play Store Publishing",
    "Git",
    "GitHub",
    "XAMPP",
    "Vercel Deployment",
    "InfinityFree Hosting",
    "Project Management",
    "Client Communication",
    "Problem Solving"
  ].map((skill) => (
    <span className="skill-tag" key={skill}>
      {skill}
    </span>
  ))}
</div>

        {/* EXPERIENCE */}

        <h2 className="section-title">Experience</h2>

        <p className="job-title">
          Freelance Full Stack Web Developer
        </p>

        <p className="job-meta">
        
        </p>

        <ul className="bullet-list">

          <li>
            Designed, developed, and deployed websites and web applications for
            5+ businesses including salons, medical stores, and kirana stores.
          </li>

          <li>
            Built responsive and mobile-friendly user interfaces improving user
            engagement and accessibility.
          </li>

          <li>
            Managed frontend, backend, database integration, deployment, and
            maintenance independently.
          </li>

          <li>
            Reduced development time by building reusable templates and
            components.
          </li>

          <li>
            Delivered all projects successfully with zero major post-launch
            issues reported.
          </li>

        </ul>

        {/* EDUCATION */}

        <h2 className="section-title">Education</h2>

        <div className="two-col">

          <div>
            <p className="edu-degree">
              B.Tech — Information Technology
            </p>

            <p className="edu-meta">
              Gandhinagar University | Expected 2025
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

        <p className="body-text">
          C++ Programming Certification — A Grade
        </p>
        <p className="body-text">Flutter developement internship certificate of 3 months.</p>

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

        {/* PROJECTS */}

        <h2 className="section-title">Projects</h2>

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
            Chandrakala Jewellers — Business Website
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
          </ul>
        </div>

        <div className="project-block">
          <p className="project-name">
            INFLIX — Streaming Platform
          </p>

          <ul className="bullet-list">
            <li>
              Building a Netflix-style streaming platform with authentication,
              subscriptions, admin dashboard, and video streaming.
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

        

    </>
  );
}
