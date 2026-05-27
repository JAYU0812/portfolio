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
        }

        body {
          margin: 0;
          padding: 0;
          background: #e5e7eb;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        /* ---------------- PAGE ---------------- */

        .resume-page {
          width: 210mm;
          min-height: 297mm;
          background: #fff;
          margin: 20px auto;
          padding: 14mm 16mm;
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

        .section-title {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #111;
          border-bottom: 1.5px solid #111;
          padding-bottom: 4px;
          margin-bottom: 8px;
          margin-top: 14px;
        }

        .name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #111;
          margin: 0 0 4px 0;
        }

        .title-line {
          font-size: 13px;
          color: #444;
          margin: 0 0 2px 0;
        }

        .contact-line {
          font-size: 11px;
          color: #333;
          margin: 0;
          line-height: 1.6;
        }

        .contact-line a {
          color: #333;
          text-decoration: none;
        }

        .body-text {
          font-size: 12px;
          color: #333;
          line-height: 1.5;
          margin: 0 0 6px 0;
        }

        .job-title {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          margin: 0 0 2px 0;
        }

        .job-meta {
          font-size: 11px;
          color: #666;
          margin: 0 0 6px 0;
        }

        .bullet-list {
          margin: 4px 0 0 0;
          padding-left: 16px;
          list-style-type: disc;
        }

        .bullet-list li {
          font-size: 12px;
          color: #333;
          line-height: 1.5;
          margin-bottom: 3px;
        }

        .project-name {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          margin: 0 0 2px 0;
        }

        .project-url {
          font-size: 11px;
          color: #555;
          font-family: 'IBM Plex Mono', monospace;
          margin: 0 0 4px 0;
        }

        .edu-degree {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          margin: 0 0 1px 0;
        }

        .edu-meta {
          font-size: 11.5px;
          color: #444;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        /* ---------------- SKILLS ---------------- */

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .skill-tag {
          font-size: 11px;
          background: #f0f0f0;
          color: #111;
          padding: 3px 10px;
          border-radius: 2px;
          font-weight: 500;
        }

        /* ---------------- LAYOUT ---------------- */

        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 24px;
        }

        .header-bar {
          border-bottom: 2px solid #111;
          padding-bottom: 12px;
          margin-bottom: 2px;
        }

        .header-contact-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0 24px;
          margin-top: 8px;
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

          .header-contact-row {
            flex-direction: column;
            gap: 6px;
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
            fontFamily: "IBM Plex Sans, sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
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
            Full Stack Developer | Web & App Development
          </p>

          <div className="header-contact-row">
            <p className="contact-line">jay0812soni@gmail.com</p>
            <p className="contact-line">+91 79903 61109</p>
            <p className="contact-line">github.com/JAYU0812</p>
            <p className="contact-line">jaysoniexe.wuaze.com</p>
          </div>
        </div>

        {/* CAREER OBJECTIVE */}
        <h2 className="section-title">Career Objective</h2>

        <p className="body-text">
          Aspiring Full Stack Developer seeking opportunities to build scalable
          web and mobile applications and contribute to impactful real-world
          solutions using modern technologies.
        </p>

        {/* PROFILE SUMMARY */}
        <h2 className="section-title">Profile Summary</h2>

        <p className="body-text">
          Final-year B.Tech IT student with strong hands-on experience in
          full-stack development, including building and deploying web
          applications and Play Store apps. Freelanced for local businesses
          such as kirana stores, medical shops, and salons, helping them
          transition from offline to online platforms through custom websites.
        </p>

        {/* SKILLS */}
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL",
            "Supabase",
            "Session Management",
            "Password Hashing",
            "C++",
            "Android / Play Store",
          ].map((s) => (
            <span className="skill-tag" key={s}>
              {s}
            </span>
          ))}
        </div>

        {/* EXPERIENCE */}
        <h2 className="section-title">Experience</h2>

        <p className="job-title">Freelance Web Developer</p>

        <p className="job-meta">Self-employed | 2023 – Present</p>

        <ul className="bullet-list">
          <li>
            Designed, developed, and deployed custom websites for local
            businesses including kirana stores, medical shops, and salons.
          </li>

          <li>
            Enabled businesses to establish an online presence and reach a
            wider customer base.
          </li>

          <li>
            Handled full project lifecycle independently — from requirements
            gathering to deployment.
          </li>
        </ul>

        {/* PROJECTS */}
        <h2 className="section-title">Projects</h2>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">
            ParichaySammelan — Android App (Play Store)
          </p>

          <ul className="bullet-list">
            <li>
              Developed a community app for the Soni community to register and
              participate in Parichay Sammelan events.
            </li>

            <li>
              Published on the Google Play Store with active users.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">KITAAB — Jeweller Ledger System</p>

          <ul className="bullet-list">
            <li>
              Built a ledger management system for jewellers to track
              transactions.
            </li>

            <li>
              Designed for non-technical shopkeepers to simplify day-to-day
              accounting.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">SoniSamaj Community Platform</p>

          <ul className="bullet-list">
            <li>
              Created a web platform to connect community members and improve
              social interaction within the Soni community.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">
            Chandrakala Jewellers — Business Website
          </p>

          <p className="project-url">
            chandrakalajewellers.wuaze.com
          </p>

          <ul className="bullet-list">
            <li>
              Developed a website to help the business establish an online
              presence and attract more customers.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">
            INFLIX — Streaming Platform (In Progress)
          </p>

          <ul className="bullet-list">
            <li>
              Building a Netflix-style streaming platform tailored for the
              Indian market.
            </li>

            <li>
              Includes subscription system, admin panel, and video streaming
              functionality.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <p className="project-name">
            Hackathon Attendance System
          </p>

          <ul className="bullet-list">
            <li>
              Developed a QR code and geolocation-based attendance system during
              a college hackathon.
            </li>

            <li>
              Secured 5th rank in the hackathon.
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
              Gandhinagar University | Final Year (2025)
            </p>
          </div>

          <div>
            <p className="edu-degree">
              HSC (12th Grade)
            </p>

            <p className="edu-meta">
              BAPS Raysan, Gandhinagar | 80% | May 2023
            </p>
          </div>

          <div>
            <p className="edu-degree">
              SSC (10th Grade)
            </p>

            <p className="edu-meta">
              St. John's School, Khedbrahma | 84% | May 2021
            </p>
          </div>

        </div>

        {/* CERTIFICATIONS */}
        <h2 className="section-title">Certifications</h2>

        <p className="body-text">
          C++ Programming — A Grade | 2023
        </p>

        {/* LEADERSHIP */}
        <h2 className="section-title">Leadership</h2>

        <ul className="bullet-list">
          <li>Class Representative — Gandhinagar University</li>
          <li>Group Leader — 11th and 12th Grade</li>
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