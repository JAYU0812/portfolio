/**
 * Chronological Career & Project Timeline
 * Showcasing Jay's rapid progression from early 2025 to leading production software today.
 */

export const timelineEvents = [
  {
    date: "October 2026",
    title: "Reward & Recognition Award — Certificate of Appreciation",
    category: "Professional Honor & Award",
    type: "work",
    badge: "Company-Wide Award",
    summary: "Awarded Certificate of Appreciation by NB Infra Projects Limited (Since 1946) for exceptional engineering performance and valuable quarterly contributions.",
    details: [
      "Formally recognized by Founder & Chairman Rahul D. Prajapati for outstanding performance, technical leadership, and unwavering commitment across NB PropertyTech softwares.",
      "Engineered and delivered core flagship platforms: PropKart Natural Language AI Search Engine, PropKart Broker Portal, and official nbpropertytech.com production platform.",
      "Honored for sustained dedication to high-availability architecture, 0-downtime database migrations (1 to 93), and engineering excellence."
    ]
  },
  {
    date: "October 2026",
    title: "PropKart Broker Portal & Ecosystem Expansion",
    category: "Enterprise Systems Architecture",
    type: "work",
    badge: "Multi-Platform Launch",
    summary: "Architected standalone PropKart Broker Portal, AI Search Engine, and official nbpropertytech.com platform.",
    details: [
      "Architected PropKart Broker Portal (Flutter Web/Mobile/Desktop + NestJS 10 + PostgreSQL 16) with dual-tier RERA approval queues, dynamic RBAC, and Hostinger SSL SMTP.",
      "Engineered Natural Language AI Search Engine in PropKart OS AppShell with PostgreSQL intent extraction and safe query telemetry across Migrations 84–93.",
      "Launched official marketing platform nbpropertytech.com with Next.js 15, Docker containerization, and automated VPS CI/CD via GitHub Actions.",
      "Upgraded NB-HRMS ERP with live GPS field trip tracking, geofence exit detection, double encryption (TRANSPORT_SECRET), data masking, and bulk lead transfers."
    ]
  },
  {
    date: "September 2026",
    title: "DevSync — Sovereign Cryptographic P2P & Serverless Relay Suite",
    category: "Cryptographic Architecture",
    type: "desktop",
    badge: "Sovereign P2P Suite",
    summary: "Architected account-per-device communication and high-speed LAN file transfer system.",
    details: [
      "Engineered sovereign cryptographic identity with on-device Ed25519 payload signing and X25519/AES-256-GCM encryption.",
      "Built hybrid networking: direct LAN transfers via embedded Shelf HTTP server + UDP discovery, with Vercel Serverless SSE relay fallback.",
      "Implemented zero-retention serverless message queueing with Upstash Redis, pruning payloads immediately upon delivery acknowledgment.",
      "Designed developer-first UX with syntax-highlighted code sharing, one-tap copy, dark mode, and local categorized file organization."
    ]
  },
  {
    date: "June 2026 – Present",
    title: "Lead Mobile & Full-Stack Architect at NB Developers (NB Property Tech)",
    category: "Full-Time Engineering",
    type: "work",
    badge: "Current Role",
    summary: "Architecting and maintaining enterprise PropTech, ERP, and cloud storage systems at NB Developers.",
    details: [
      "Engineered Offline-First Flutter client with Isar local database for PropKart CRM & OS (live: propkart.nbpropertytech.com), achieving 100/100 security audit score and Target SDK 36 Google Play readiness.",
      "Architected 95-file Mobile Foundation & Design System (20,000+ LOC) with native app shells, reactive BLoC state, contextual telecaller outcome sheets, and WebGL CanvasKit stabilization.",
      "Engineered Site Visit Historical Tracking Engine (PostgreSQL Migrations 38 & 39) with outcome synchronization and automated Round-Robin lead allocation.",
      "Launched the public PropKart Listing directory (live: listing.nbpropertytech.com) and PropKart Connect dynamic intake engine (live: propconnect.nbpropertytech.com).",
      "Architected NB-HRMS / ERP (live: crm.nbdeveloper.co.in) with Next.js 14, Hasura GraphQL, Prisma v6, PostgreSQL, AES-256 field encryption, and Whisper AI.",
      "Built TechDrive enterprise cloud document management (live: techdrive.nbpropertytech.com) and NB Legacy Tower campaign portal (live: nblegacy.nbdeveloper.co.in)."
    ]
  },
  {
    date: "September 2026",
    title: "Academic Attendance Management System — Institutional Portal",
    category: "Academic Web Architecture",
    type: "web",
    badge: "Faculty & Student Dual Gateway",
    summary: "Built institutional course register and academic compliance dashboard.",
    details: [
      "Engineered dual role-based portals for Faculty course coordinators and Student self-service presence tracking.",
      "Implemented real-time session presence logging, official register exports, and automatic 75% attendance threshold alerts.",
      "Designed clean academic UI with breadcrumb navigation, student roster tables, and parent notification triggers."
    ]
  },
  {
    date: "Late 2025",
    title: "GitSphere — Visual Git Control Center (Windows Desktop v1.0.0)",
    category: "Desktop Engineering",
    type: "desktop",
    badge: "Windows Desktop App",
    summary: "Engineered desktop-first visual Git control center and repository intelligence engine.",
    details: [
      "Built with Flutter Desktop, Dart, Riverpod, GoRouter, and native C++ Win32/DWM integration.",
      "Engineered multi-account GitHub credential switching in SQLite, eliminating terminal re-authentication collisions.",
      "Implemented 4-stage visual pipeline, remote collaborator commit tracking, and semantic README 1-click script execution.",
      "Packaged production Windows installer with Inno Setup 6 (12.07 MB) and portable standalone ZIP with SHA-256 validation."
    ]
  },
  {
    date: "Late 2025",
    title: "React & Node Developer Internship — Tech-Craft",
    category: "Internship",
    type: "internship",
    badge: "Healthcare Platform",
    summary: "Built and deployed an interactive Hospital Management Dashboard.",
    details: [
      "Engineered modular React components, custom hooks, and dynamic data filtering.",
      "Built doctor directory cards, patient record listings, and appointment scheduling flows.",
      "Created visual analytics statistics cards for clinical performance monitoring.",
      "Live deployment on Vercel: https://hospital-dashboard-woad-gamma.vercel.app/"
    ]
  },
  {
    date: "Late 2025",
    title: "Chandrakala Jewellers — Commercial Launch & GST CRM",
    category: "Commercial Production",
    type: "production",
    badge: "Live: chandrakalajewellers.in",
    summary: "Launched luxury retail jewellery storefront with custom internal GST billing engine.",
    details: [
      "Acquired and deployed custom production domain: chandrakalajewellers.in.",
      "Built proprietary GST calculation engine computing metal weight, making charges, and tax breakdown.",
      "Designed high-converting luxury UI with automated WhatsApp customer inquiry dispatch."
    ]
  },
  {
    date: "Mid 2025 (3 Months)",
    title: "Flutter Development Internship",
    category: "Internship",
    type: "internship",
    badge: "Mobile Architecture",
    summary: "Intensive 3-month mobile engineering internship mastering Flutter & Dart.",
    details: [
      "Mastered cross-platform mobile architectures, reactive state management (BLoC & Riverpod), and async workflows.",
      "Implemented clean architectural layers separating presentation, domain, and data repositories.",
      "Acquired the core mobile development skills applied directly in subsequent Google Play Store releases."
    ]
  },
  {
    date: "2025",
    title: "Smart Geofenced Attendance System — 5th Rank in Hackathon",
    category: "Hackathon Competition",
    type: "achievement",
    badge: "5th Place Award",
    summary: "Developed an anti-proxy attendance tracking system using spherical Haversine calculations.",
    details: [
      "Formulated mathematical Haversine algorithm in JavaScript for precise geofencing.",
      "Built rolling dynamic QR tokens ensuring attendees are physically present on site.",
      "Recognized by jury and awarded 5th place among dozens of competing engineering teams."
    ]
  },
  {
    date: "August 2025",
    title: "KITAAB Jeweller Ledger App — Google Play Store Release",
    category: "Mobile App Publication",
    type: "playstore",
    badge: "Google Play Store",
    summary: "Published mobile accounting ledger app to digitize traditional jewellery transactions.",
    details: [
      "Designed simple, touch-optimized credit/debit transaction interfaces for non-technical shop owners.",
      "Published production Android build onto the Google Play Store.",
      "Helped traditional retailers replace physical paper registers with reliable digital records."
    ]
  },
  {
    date: "June 2025",
    title: "Parichay Sammelan — Web & Google Play Store App",
    category: "Community Platform",
    type: "playstore",
    badge: "Google Play Store",
    summary: "Developed full-stack community matchmaking platform and released Android app.",
    details: [
      "Built web portal with secure payment checkout for event ticketing and delegate registrations.",
      "Compiled and released Android application on the Google Play Store.",
      "Engineered QR code generation and verification system for fast physical event entry."
    ]
  },
  {
    date: "February 2025",
    title: "Soni Samaj Community Directory — First Software Project",
    category: "Milestone",
    type: "first-project",
    badge: "The Genesis",
    summary: "Jay's very first production project, laying the foundation for full-stack engineering.",
    details: [
      "Built community member directory with family linkages and location-based discovery.",
      "Designed relational MySQL database schemas and PHP search filtering queries.",
      "Ignited the passion for crafting software that solves real-world human workflow problems."
    ]
  }
];
