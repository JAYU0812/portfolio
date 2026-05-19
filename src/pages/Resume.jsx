import React from "react";

export default function Resume() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* PRINT CSS */}
      <style>
        {`
          @page {
            size: A4;
            margin: 0;
          }

          @media print {

            body {
              background: white;
            }

            .print-hidden {
              display: none;
            }

            .resume-page {
              width: 210mm;
              height: 297mm;
              margin: 0;
              box-shadow: none;
              overflow: hidden;
            }
          }
        `}
      </style>

      <div className="bg-gray-300 min-h-screen py-6">

        {/* PRINT BUTTON */}
        <div className="flex justify-center mb-6 print-hidden">

          <button
            onClick={handlePrint}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            🖨 Print / Save A4 PDF
          </button>

        </div>

        {/* RESUME */}
        <div
          className="
            resume-page
            bg-white
            mx-auto
            shadow-2xl
            grid
            grid-cols-[30%_70%]
          "
          style={{
            width: "210mm",
            height: "297mm",
          }}
        >

          {/* LEFT SIDE */}
          <div className="bg-gray-100 p-6 overflow-hidden">

            {/* CONTACT */}
            <div className="mb-6">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                CONTACT
              </h3>

              <div className="space-y-2 text-[12px] text-gray-700">

                <p>Email: jay0812soni@gmail.com</p>

                <p>Phone: +91 79903 61109</p>

                <p>Portfolio: jaysoniexe.wuaze.com</p>

                <p>GitHub: github.com/JAYU0812</p>

              </div>

            </div>

            {/* EDUCATION */}
            <div className="mb-6">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                EDUCATION
              </h3>

              <div className="space-y-4 text-[12px] text-gray-700">

                <div>

                  <p className="font-bold">
                    B.Tech IT
                  </p>

                  <p>
                    Gandhinagar University (Final Year)
                  </p>

                </div>

                <div>

                  <p className="font-bold">
                    HSC (12th)
                  </p>

                  <p>
                    80% — May 2023
                  </p>

                  <p>
                    BAPS Raysan, Gandhinagar
                  </p>

                </div>

                <div>

                  <p className="font-bold">
                    SSC (10th)
                  </p>

                  <p>
                    84% — May 2021
                  </p>

                  <p>
                    St. John’s School, Khedbrahma
                  </p>

                </div>

              </div>

            </div>

            {/* SKILLS */}
            <div className="mb-6">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                SKILLS
              </h3>

              <ul className="list-disc list-inside space-y-1 text-[12px] text-gray-700">

                <li>HTML, CSS, JavaScript</li>
                <li>PHP</li>
                <li>MySQL, Supabase</li>
                <li>Session Management</li>
                <li>Password Hashing</li>

              </ul>

            </div>

            {/* LEADERSHIP */}
            <div className="mb-6">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                LEADERSHIP
              </h3>

              <p className="text-[12px] text-gray-700">
                Class Representative (College)
              </p>

              <p className="text-[12px] text-gray-700">
                Group Leader (11th & 12th)
              </p>

            </div>

            {/* CERTIFICATIONS */}
            <div className="mb-6">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                CERTIFICATIONS
              </h3>

              <p className="text-[12px] text-gray-700">
                C++ Programming (A Grade) — 2023
              </p>

            </div>

            {/* LANGUAGES */}
            <div>

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                LANGUAGES
              </h3>

              <p className="text-[12px] text-gray-700">
                English, Hindi, Gujarati
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 overflow-hidden">

            {/* NAME */}
            <div className="mb-6">

              <h1 className="text-4xl font-bold tracking-[4px]">
                JAY SONI
              </h1>

              <p className="text-gray-500 mt-2">
                Full Stack Developer | Web & App Development
              </p>

            </div>

            {/* CAREER OBJECTIVE */}
            <div className="mb-5">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                CAREER OBJECTIVE
              </h3>

              <p className="text-[13px] text-gray-700 leading-relaxed">
                Aspiring Full Stack Developer seeking opportunities to build scalable web and mobile
                applications, and contribute to impactful real-world solutions using modern technologies.
              </p>

            </div>

            {/* PROFILE SUMMARY */}
            <div className="mb-5">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                PROFILE SUMMARY
              </h3>

              <p className="text-[13px] text-gray-700 leading-relaxed mb-3">
                Final-year B.Tech IT student with strong hands-on experience in full-stack development,
                including building and deploying web applications and Play Store apps.
              </p>

              <p className="text-[13px] text-gray-700 leading-relaxed">
                Freelanced for local businesses such as kirana stores, medical shops, and salons,
                helping them transition from offline to online platforms through custom websites.
              </p>

            </div>

            {/* EXPERIENCE */}
            <div className="mb-5">

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-3">
                EXPERIENCE
              </h3>

              <div className="text-[13px] text-gray-700">

                <h4 className="font-bold text-[15px] mb-2">
                  Freelance Web Developer
                </h4>

                <p className="mb-1">
                  Developed websites for kirana stores, medical shops, and salons
                </p>

                <p className="mb-1">
                  Enabled businesses to establish online presence and reach more customers
                </p>

                <p>
                  Handled design, development, and deployment independently
                </p>

              </div>

            </div>

            {/* PROJECTS */}
            <div>

              <h3 className="text-xs font-bold tracking-[3px] border-b pb-2 mb-4">
                PROJECTS
              </h3>

              <div className="space-y-4 text-[13px] text-gray-700">

                {/* PROJECT 1 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    ParichaySammelan (Play Store)
                  </h4>

                  <p>
                    Developed an app for Soni community to register and participate in Parichay Sammelan events
                  </p>

                  <p>
                    Published on Play Store with active users
                  </p>

                </div>

                {/* PROJECT 2 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    KITAAB - Jeweller Ledger
                  </h4>

                  <p>
                    Built a simple ledger system for jewellers to manage transactions easily
                  </p>

                  <p>
                    Designed for non-technical shopkeepers to simplify accounting
                  </p>

                </div>

                {/* PROJECT 3 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    SoniSamaj Community Platform
                  </h4>

                  <p>
                    Created a platform to connect members of Soni community and improve social interaction
                  </p>

                </div>

                {/* PROJECT 4 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    Chandrakala Jewellers Website
                  </h4>

                  <p>
                    Developed website helping business shift from offline to online presence
                  </p>

                  <p>
                    Live: chandrakalajewellers.wuaze.com
                  </p>

                </div>

                {/* PROJECT 5 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    INFLIX Streaming Platform (In Progress)
                  </h4>

                  <p>
                    Building a Netflix-like streaming platform for India
                  </p>

                  <p>
                    Includes subscription system, admin panel, and video streaming
                  </p>

                </div>

                {/* PROJECT 6 */}
                <div>

                  <h4 className="font-bold text-[15px]">
                    Hackathon Attendance System
                  </h4>

                  <p>
                    Developed QR + geolocation-based attendance system
                  </p>

                  <p>
                    Achieved 5th rank in hackathon
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}