/**
 * Structured Resume Data
 * Complete, verified, and chronological information for ATS print and digital viewing.
 */

export const resumeData = {
  personal: {
    name: "SONI JAYKUMAR HASMUKH",
    title: "Lead Mobile & Full Stack Software Engineer | Flutter & React Specialist",
    email: "jay0812soni@gmail.com",
    phone: "+91 79903 61109",
    location: "Ahmedabad, Gujarat, India",
    github: "https://github.com/JAYU0812",
    linkedin: "https://linkedin.com/in/sonijay1908",
    portfolio: "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app/"
  },

  summary:
    "Lead Mobile & Full Stack Software Engineer specializing in Flutter, React, Node.js, and Supabase. Deep expertise in high-performance Offline-First architectures (Isar NoSQL yielding 2–8ms reads), realtime distributed synchronization, publishing native apps on Google Play Store, and building end-to-end enterprise CRM operating systems with multi-channel webhook pipelines and custom GST calculation engines. Currently serving as Lead Mobile & Full-Stack Architect at NB Developers.",

  skills: {
    mobile: [
      "Flutter & Flutter Desktop",
      "Dart",
      "Isar NoSQL (Offline-First)",
      "BLoC & Riverpod",
      "Android Studio",
      "Google Play Console Publishing",
      "Win32 / DWM Desktop Integration"
    ],
    frontend: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Component Architecture",
      "Responsive UI/UX"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "PHP",
      "Phoenix WebSockets",
      "Meta Ads Webhooks & Graph API",
      "Google Sheets API v4",
      "Authentication (Supabase Auth / JWT)"
    ],
    database: [
      "Isar NoSQL (Embedded Local DB)",
      "SQLite (FFI)",
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "Database Schema Design",
      "Relational Modeling"
    ],
    tools: [
      "Git & GitHub",
      "Inno Setup 6 (Windows Installer)",
      "Thermal Barcode Label Printing",
      "PerformanceLogger & Telemetry",
      "Postman",
      "VS Code",
      "Vercel",
      "QR Cryptographic Systems",
      "Haversine Geolocation"
    ]
  },

  experience: [
    {
      company: "NB Developers (NB Property Tech)",
      role: "Lead Mobile & Full-Stack Architect",
      period: "July 2025 – Present",
      location: "Science City, Ahmedabad",
      description: "PropTech Enterprise Operating System (PropKart v2.1.1, Build 11)",
      technologies: ["Flutter", "Dart", "BLoC", "Riverpod", "Isar NoSQL", "Supabase", "PostgreSQL", "Node.js", "Meta Graph API", "Phoenix WebSockets"],
      bullets: [
        "Architected and maintained the production PropKart Real-Estate CRM & OS (v2.1.1, live on propkart.nbpropertytech.com) — evolved from the initial NB Listings platform — serving brokerage desks and field agent teams with 2ms–8ms read latency via embedded Isar NoSQL.",
        "Engineered the NB-HRMS Enterprise ERP platform (Next.js 14, Hasura GraphQL, Prisma v6, PostgreSQL, Redis, live on crm.nbdeveloper.co.in) featuring AES-256 field encryption for identity documents, append-only audit logging, and OpenAI Whisper voice note transcription.",
        "Built TechDrive: an enterprise cloud document vault and visual storage analytics portal (Flutter, BLoC, Firebase Firestore, FL Chart storage distribution engine).",
        "Created the Legacy Tower Campaign presentation platform with automated sub-2s Google Sheets webhook routing for instant high-ticket investor lead follow-ups.",
        "Implemented deterministic conflict resolution using an outbox mutation queue with timestamp Server-Wins policy, and a 100ms debounced stream batching pipeline for Phoenix WebSockets."
      ]
    },
    {
      company: "Tech-Craft",
      role: "React & Node Developer Intern",
      period: "Late 2025",
      location: "Remote / Ahmedabad",
      description: "Healthcare Clinical Management Dashboard",
      technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Props", "useState", "Vercel"],
      bullets: [
        "Engineered the complete frontend architecture for the Hospital Management Dashboard (live: hospital-dashboard-woad-gamma.vercel.app).",
        "Developed modular UI components including dynamic Doctor Profile Cards, searchable Patient Listings, and Department Filters.",
        "Implemented appointment scheduling, modification, and cancellation workflows with responsive form input validation.",
        "Created visual clinical statistics summary cards to visualize bed occupancy rates and daily patient volumes."
      ]
    },
    {
      company: "Flutter Development Internship",
      role: "Mobile App Developer Intern",
      period: "Mid 2025 (3 Months)",
      location: "Ahmedabad, India",
      description: "Mobile Architecture & Cross-Platform Engineering",
      technologies: ["Flutter", "Dart", "State Management", "BLoC", "Riverpod", "Android Studio"],
      bullets: [
        "Completed intensive 3-month engineering training focused on cross-platform mobile application architecture with Flutter & Dart.",
        "Implemented reactive state management patterns (BLoC, Riverpod) and repository design patterns for clean code separation.",
        "Acquired mobile build optimization, local caching, and native wrapper knowledge directly leveraged in Google Play Store releases."
      ]
    },
    {
      company: "Freelance Full Stack Developer",
      role: "Independent Software Consultant",
      period: "2023 – Present",
      location: "Ahmedabad, Gujarat",
      description: "Digital Transformation & Business Software Solutions",
      technologies: ["React", "Flutter Desktop", "PHP", "MySQL", "Tailwind CSS", "GST Billing Engine", "Barcode Label Printing"],
      bullets: [
        "Digitized 5+ offline businesses including jewellery retail showrooms, medical pharmacies, grocery kirana stores, and beauty salons.",
        "Architected the complete Chandrakala Jewellers ERP ecosystem: live commercial platform (chandrakalajewellers.in), proprietary GST billing engine, and Flutter physical label barcode printing software (22-slot staggered jewellery tags with central strips & HUID tracking).",
        "Managed end-to-end software lifecycles: requirement discovery, UI design, backend development, database provisioning, domain deployment, and maintenance."
      ]
    }
  ],

  projects: [
    {
      name: "PropKart — Enterprise Property CRM & OS (v2.1.1)",
      url: "https://propkart.nbpropertytech.com",
      displayUrl: "propkart.nbpropertytech.com",
      badge: "Production Live v2.1.1",
      technologies: "Flutter, Dart, BLoC/Riverpod, Node.js, Supabase, PostgreSQL, Isar DB, Meta Webhooks",
      bullets: [
        "Production-ready PropTech platform (evolved from NB Listings) engineered with an Offline-First architecture (2–8ms reads) and realtime cloud synchronization.",
        "Features Property & Client Requirement Management, Meta Lead Ads campaign inbox, Telecaller CRM workflow, smart property-matching algorithms, and analytics."
      ]
    },
    {
      name: "NB-HRMS — Enterprise CRM, HRMS & ERP Suite",
      url: "https://crm.nbdeveloper.co.in",
      displayUrl: "crm.nbdeveloper.co.in",
      badge: "Production Live",
      technologies: "Next.js 14, TypeScript, Express 5, Prisma v6, PostgreSQL 15, Hasura GraphQL, Redis, AES-256, Cloudinary, LiveKit, Whisper AI",
      bullets: [
        "Comprehensive Human Resource & Enterprise ERP system deployed live on crm.nbdeveloper.co.in with AES-256 field encryption for identity documents.",
        "Hasura GraphQL layer with unified PostgreSQL relationship stitching, append-only audit logs, and LiveKit WebRTC video rooms."
      ]
    },
    {
      name: "GitSphere — Visual Git Control Center & Repository Intelligence",
      url: "https://github.com/JAYU0812",
      displayUrl: "Windows Desktop Release (v1.0.0)",
      badge: "Desktop App v1.0.0",
      technologies: "Flutter Desktop, Dart, Riverpod 2.6+, SQLite (FFI), GitHub REST API v3, Native Process Runner, Inno Setup 6",
      bullets: [
        "Architected desktop visual Git control room replacing command-line friction with a 4-stage visual pipeline (Working Tree → Staging → Commit Branch → GitHub Cloud).",
        "Engineered multi-account GitHub credential switcher in SQLite and collaborator commit attribution tracking.",
        "Built semantic README intelligence engine parsing repository documentation into 1-click executable shell actions.",
        "Packaged production installer via Inno Setup 6 (12.07 MB) and portable standalone ZIP with SHA-256 validation."
      ]
    },
    {
      name: "Chandrakala Jewellers — Commercial Platform & ERP Suite",
      url: "https://chandrakalajewellers.in",
      displayUrl: "chandrakalajewellers.in",
      badge: "Live Commercial Platform",
      technologies: "React, Flutter Desktop, Tailwind CSS, Custom GST Engine, Thermal Barcode Tag Printing, HUID",
      bullets: [
        "Commercial storefront on custom production domain showcasing handcrafted jewellery with click-to-inquire automated ordering.",
        "Engineered proprietary GST billing CRM computing metal purity, hallmark charges, making expenses, and tax invoices.",
        "Built specialized Flutter desktop application for printing physical barcode jewellery tags (22 staggered slots with central tail strips) with HUID tracking."
      ]
    },
    {
      name: "Parichay Sammelan — Web & Android App",
      url: "https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan&pcampaignid=web_share",
      displayUrl: "Google Play Store (com.hssolutiontech.ParichaySammelan)",
      badge: "Play Store Released",
      technologies: "React, Android, PHP, MySQL, QR Scanner, Razorpay, Google Play Console",
      bullets: [
        "Published community matchmaking and registration application on the Google Play Store and web.",
        "Integrated secure payment gateway workflows and an automated QR-code verification system for physical venue check-ins."
      ]
    },
    {
      name: "KITAAB — Jeweller Ledger System",
      url: "https://play.google.com/store/apps/details?id=com.jeweller.ledger&pcampaignid=web_share",
      displayUrl: "Google Play Store (com.jeweller.ledger)",
      badge: "Play Store Released",
      technologies: "Android, PHP, MySQL, Ledger Accounting, Google Play Console",
      bullets: [
        "Specialized mobile ledger app published on Google Play Store to digitize paper bahi-khata for jewellery merchants.",
        "Features intuitive credit/debit tracking, automated daily balance computation, and customer balance export."
      ]
    },
    {
      name: "TechDrive — Enterprise Cloud Storage & Document Vault",
      url: "https://techdrive.nbpropertytech.com/",
      displayUrl: "techdrive.nbpropertytech.com",
      badge: "Production Live",
      technologies: "Flutter, Dart, BLoC, Firebase Auth, Cloud Firestore, FL Chart, Dio",
      bullets: [
        "Enterprise cloud document repository deployed live at techdrive.nbpropertytech.com for blueprints, legal deeds, and property files.",
        "Interactive storage usage charts built with FL Chart, department permission isolation, and 2-stage recycle recovery bin."
      ]
    },
    {
      name: "NB Legacy Tower — Luxury Infrastructure Campaign Portal",
      url: "https://nblegacy.nbdeveloper.co.in/",
      displayUrl: "nblegacy.nbdeveloper.co.in",
      badge: "Production Live",
      technologies: "Flutter Web, Cloud Firestore, Firebase Analytics, Google Sheets Webhook, GoRouter",
      bullets: [
        "Commercial campaign platform deployed live at nblegacy.nbdeveloper.co.in for NB Infra Projects' flagship development.",
        "Dynamic unit selector and sub-2-second Google Sheets webhook routing delivering instant high-ticket investor inquiries to sales telecallers."
      ]
    },
    {
      name: "Smart Geofenced Attendance System",
      url: "https://attend-system.wuaze.com",
      displayUrl: "Hackathon Award (5th Rank)",
      badge: "5th Place Award",
      technologies: "JavaScript, Haversine Spherical Distance Algorithm, QR System, PHP",
      bullets: [
        "Awarded 5th rank in hackathon competition for developing an anti-proxy geolocation attendance monitoring platform.",
        "Employed the Haversine trigonometric formula to validate physical coordinates against dynamic QR attendance tokens."
      ]
    },
    {
      name: "Hospital Management Dashboard",
      url: "https://hospital-dashboard-woad-gamma.vercel.app/",
      displayUrl: "hospital-dashboard-woad-gamma.vercel.app",
      badge: "Live on Vercel",
      technologies: "React, Node.js, Tailwind CSS, Component State",
      bullets: [
        "Interactive clinical management platform with Doctor Cards, Patient Lists, Department Filtering, and Statistics Cards.",
        "Built during Tech-Craft internship featuring full appointment booking and patient record management."
      ]
    },
    {
      name: "Soni Samaj Community Directory",
      url: "https://sonisamaj.wuaze.com",
      displayUrl: "First Production Project (Feb 2025)",
      badge: "Foundational Project",
      technologies: "PHP, MySQL, Relational Database, Search Indexing",
      bullets: [
        "Jay's foundational software project, launched in February 2025 connecting community families across Gujarat.",
        "Features relational database structure for family hierarchies and multi-attribute search by city, native village, and profession."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech — Information Technology",
      institution: "Gandhinagar University",
      period: "Expected 2027",
      detail: "Focused on Software Architecture, Database Systems, and Mobile Application Development."
    },
    {
      degree: "HSC — Higher Secondary (12th Grade)",
      institution: "BAPS Swaminarayan Vidyamandir, Raysan, Gandhinagar",
      period: "Completed — 80%",
      detail: "Science stream with strong focus on Mathematics and Computer Science."
    },
    {
      degree: "SSC — Secondary School (10th Grade)",
      institution: "St. John's High School, Khedbrahma",
      period: "Completed — 84%",
      detail: "Solid foundation in Science and Mathematics."
    }
  ],

  certifications: [
    "Flutter Mobile Development Internship (3 Months) — Comprehensive Mobile Engineering",
    "React & Node Development Internship — Tech-Craft (Clinical Dashboard Architecture)",
    "C++ Object-Oriented Programming Certification — Grade A"
  ],

  achievements: [
    "Lead Architect of PropKart Property CRM on propkart.nbpropertytech.com (v2.1.1, Build 11).",
    "Pioneered Offline-First local database sync architecture using embedded Isar NoSQL (2–8ms reads) and Supabase PostgreSQL.",
    "Engineered sub-second multi-channel lead ingestion triad routing Meta Lead Ads & Google Sheets into real estate telecaller desks.",
    "Architected GitSphere (v1.0.0), a Windows desktop visual Git control center with SQLite multi-account switching and 4-stage visual pipeline.",
    "Successfully developed and published 2 applications to the Google Play Store (Parichay Sammelan & KITAAB).",
    "Won 5th Rank in Hackathon for Geofenced QR Haversine Attendance System.",
    "Engineered complete Chandrakala Jewellers ERP: live commercial domain, custom GST billing CRM, and Flutter 22-slot barcode tag printer."
  ],

  leadership: [
    "Class Representative (CR) — Gandhinagar University (Facilitating student-faculty coordination and technical workshops)",
    "Group Leader & Student Coordinator during Higher Secondary Education"
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Hindi", level: "Full Professional / Fluent" },
    { name: "Gujarati", level: "Native Language" }
  ]
};
