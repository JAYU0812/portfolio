/**
 * Verified Awards, Technical Certifications & Official Offer Letters
 * Single source of truth for Home, About, Resume, and SEO Structured Data.
 */

export const CREDENTIALS = [
  {
    id: "nb-infra-award",
    type: "award",
    typeLabel: "Reward & Recognition Award",
    title: "Certificate of Appreciation — Exceptional Performance & Leadership",
    shortTitle: "NB Infra Certificate of Appreciation",
    issuer: "NB Infra Projects Limited (Since 1946)",
    location: "Science City, Ahmedabad, Gujarat",
    date: "October 2026",
    isoDate: "2026-10-15",
    signatory: "Rahul D. Prajapati (Founder & Chairman)",
    credentialId: "NB-RR-2026",
    gradeOrStatus: "Quarterly Excellence Award",
    image: "/certificates/nb-infra-certificate-of-appreciation.png",
    imageAlt: "NB Infra Projects Limited Certificate of Appreciation awarded to Soni Jaykumar Hasmukh by Rahul D. Prajapati",
    quote: "In recognition of your exceptional performance and valuable contributions throughout the quarter. Your dedication, commitment, and pursuit of excellence are truly appreciated.",
    summary: "Company-wide Reward & Recognition honor awarded for engineering leadership across PropKart OS, Natural Language AI Search, PropKart Broker Portal, and zero-downtime PostgreSQL migrations (1–93).",
    skills: ["PropTech Architecture", "Flutter SDK 36", "NestJS", "PostgreSQL", "Engineering Leadership"],
    featured: true
  },
  {
    id: "tech-craft-reactjs-cert",
    type: "certification",
    typeLabel: "Technical Certification",
    title: "ReactJS, Comprehensive Front-end Development",
    shortTitle: "Tech-Craft ReactJS Certification",
    issuer: "Tech-Craft — Crafting Skills, Creating Futures",
    location: "Ahmedabad, Gujarat",
    date: "15 July 2026",
    isoDate: "2026-07-15",
    duration: "15 Days Intensive",
    signatory: "Vruddhi Shah (Founder, Tech-Craft)",
    credentialId: "TC06260039",
    gradeOrStatus: "Verified Completion",
    image: "/certificates/tech-craft-reactjs-certificate.png",
    imageAlt: "Tech-Craft Certificate for ReactJS Comprehensive Front-end Development awarded to Soni Jaykumar Hasmukh — Certificate No. TC06260039",
    quote: "Congratulations on the successful completion of ReactJS, Comprehensive Front-end Development (Duration: 15 Days).",
    summary: "Hands-on front-end architecture and ReactJS engineering certification covering component architecture, ES6+, hooks, state management, responsive UI systems, and production deployment.",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap", "Frontend Architecture"],
    featured: true
  },
  {
    id: "tech-craft-offer-letter",
    type: "offer-letter",
    typeLabel: "Internship Offer Letter",
    title: "React JS Internship — Official Offer & Confirmation Letter",
    shortTitle: "Tech-Craft React JS Internship Offer Letter",
    issuer: "Tech-Craft",
    location: "IIM Road, Polytechnic, Opp. AMA, Ahmedabad – 380015",
    date: "01 July – 15 July 2026",
    issuedDate: "30 July 2026",
    isoDate: "2026-07-01",
    duration: "15 Days Hands-On Internship",
    signatory: "Vruddhi Shah (Founder, Tech-Craft)",
    credentialId: "TECH-CRAFT-AMD-2026",
    gradeOrStatus: "Position: React JS Intern",
    image: "/certificates/tech-craft-reactjs-offer-letter.png",
    imageAlt: "Official React JS Internship Offer Letter from Tech-Craft Ahmedabad issued to Soni Jaykumar Hasmukh signed by Founder Vruddhi Shah",
    quote: "We are pleased to offer you the internship at Tech-Craft, based in Ahmedabad. Position: React JS Intern — Frontend Development with React.js (HTML, CSS, Bootstrap, JavaScript, ES-6 and ReactJS).",
    summary: "Official internship appointment letter for Frontend Development with React.js at Tech-Craft, Ahmedabad, focusing on programming fundamentals and hands-on production frontend engineering.",
    skills: ["React.js", "ES6 JavaScript", "Bootstrap", "HTML5", "CSS3", "Hands-On Delivery"],
    featured: true
  },
  {
    id: "aiita-cpp-cert",
    type: "certification",
    typeLabel: "National Certification (ISO 9001:2008)",
    title: "Certificate in C++ Programming Course (Grade A)",
    shortTitle: "AIITA C++ Programming Certificate",
    issuer: "All India Information Technology Abhiyan (AIITA)",
    subIssuer: "National Computer Literacy Programme · Govt. of Gujarat & N.C.T. Delhi Registered",
    location: "Jadav Computer, Khedbrahma, Sabarkantha, Gujarat",
    date: "14 June 2023",
    isoDate: "2023-06-14",
    duration: "01 Apr 2023 – 31 May 2023 (2 Months)",
    signatory: "Branch Manager & President (AIITA)",
    credentialId: "GJ/037/734",
    verificationCode: "9NYQD3BRA2",
    verificationUrl: "https://www.aiita.in",
    gradeOrStatus: "Grade A (70% – 80%)",
    image: "/certificates/aiita-cpp-programming-certificate.png",
    imageAlt: "AIITA National Computer Literacy Programme Certificate in C++ Programming Course Grade A awarded to Soni Jaykumar Hasmukh — Student Code GJ/037/734",
    quote: "This certificate of excellence is awarded to Soni Jaykumar Hasmukh for successfully completing the Certificate in C++ Prog Course with Grade A.",
    summary: "ISO 9001:2008 certified national programming credential establishing foundational mastery in C++, Object-Oriented Programming (OOP), pointers, memory structures, and algorithmic problem solving.",
    skills: ["C++", "Object-Oriented Programming", "Data Structures", "Algorithms", "Memory Management"],
    featured: true
  }
];

export function getCredentialById(id) {
  return CREDENTIALS.find((c) => c.id === id);
}
