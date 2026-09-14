/**
 * Centralized Project Dataset
 * Single source of truth for all projects across Home, Projects, and Resume pages.
 */

export const projects = [
  {
    id: "propkart",
    title: "PropKart — Enterprise Real-Estate CRM & OS",
    category: "PropTech Operating System",
    filterCategory: "crm",
    date: "Late 2025 – Present",
    status: "Production Live v2.1.1",
    badge: "Live: propkart.nbpropertytech.com",
    version: "v2.1.1 (Build 11)",
    tagline: "Apple-inspired operating system for real estate desks with 2ms Offline-First local latency and sub-second lead ingestion.",
    description:
      "Architected as Lead Mobile & Full-Stack Architect at NB Property Tech / NB Developers. An enterprise-scale real-estate operating system managing high-volume rental and re-sale portfolios across metropolitan hubs. Features an embedded Isar NoSQL local database (2–8ms read latency), bi-directional realtime synchronization with Supabase PostgreSQL via Node.js micro-APIs, and an automated multi-channel lead ingestion triad.",
    tech: [
      "Flutter",
      "Dart",
      "BLoC & Riverpod",
      "Isar NoSQL (v3.1.0)",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "Meta Ads Webhook",
      "Phoenix WebSockets",
      "Realtime Sync"
    ],
    liveUrl: "https://propkart.nbpropertytech.com",
    playStoreUrl: null,
    featured: true,
    metrics: {
      readLatency: "2ms – 8ms",
      writeLatency: "10ms – 25ms",
      ingestVelocity: "<1s Webhook Push",
      debounceWindow: "100ms Socket Batching",
      refreshInterval: "45s Debounced Poller"
    },
    highlights: [
      "Offline-First Architecture: Embedded Isar NoSQL database yielding 2–8ms read latency for hundreds of listings, delivering perceived zero-latency (0ms wait) with zero blocking UI spinners",
      "Deterministic Conflict Resolution: Outbox mutation queue with strict timestamp-based Server-Wins policy to prevent stale overwrites across low-connectivity field environments",
      "Supabase Realtime Stream Batching: 100ms debounce batch timer grouping high-frequency Phoenix Channel socket events into atomic transactional writes (isar.writeTxn), eliminating UI stutter",
      "Multi-Channel Lead Ingestion Triad: Sub-second (<1s) webhook push for Meta Lead Ads (Facebook & Instagram Graph API) + 10-minute automated Google Sheets reconciliation poller, stress-tested for 50+ burst submissions",
      "Intelligent Lead Engine: Evaluates lead completeness (0–100%), classifies buyer/tenant/owner personas, and generates one-tap personalized WhatsApp dispatches and dialer links",
      "Session Hygiene & Zero Data Leakage: Dedicated SessionCleanup orchestrator on logout/401 tearing down WebSockets, clearing tokens, wiping Isar collections, and purging in-memory state"
    ]
  },
  {
    id: "gitsphere",
    title: "GitSphere — Visual Git Control Center & Repository Intelligence",
    category: "Developer Tools & Desktop Engine",
    filterCategory: "tools",
    date: "2025",
    status: "Desktop Release v1.0.0",
    badge: "Windows Desktop App (v1.0.0)",
    version: "v1.0.0",
    tagline: "Desktop visual Git control room unifying multi-account switching, collaborator sync ledgers, and README execution.",
    description:
      "A desktop-first visual Git control center and repository intelligence engine built with Flutter and native C++ Win32/DWM integration. Replaces arcane command-line workflows with an interactive 4-stage visual pipeline, multi-account GitHub credential switching in SQLite, push authorship tracking, and a semantic README understanding engine that categorizes setup/dev/test/build shell scripts into 1-click executable actions.",
    tech: [
      "Flutter Desktop",
      "Dart",
      "Flutter Riverpod 2.6+",
      "GoRouter 14.8+",
      "SQLite (FFI)",
      "GitHub REST API v3",
      "Native Process Runner",
      "Inno Setup 6",
      "Win32 / DWM"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Semantic README Intelligence: Automatically parses repository README.md, generates tech stack badges & architecture maps, and organizes shell commands into 1-click executable actions",
      "Multi-Account GitHub Switcher: Securely persists credentials in local SQLite, switching Git identities (user.name & user.email) instantly without terminal re-authentication collisions",
      "Collaborator Sync Ledger: Real-time remote commit attribution tagging 'I pushed' vs. 'Collaborator @user pushed', tracking who took the pull or who is N commits behind",
      "Interactive 4-Stage Visual Git Pipeline: Glassmorphic visualizer across Working Tree → Staging Area → Local Commit Branch → GitHub Cloud Remote with real-time diff counters",
      "Production Distribution: Packaged with Inno Setup 6 (12MB installer setup wizard) and portable standalone ZIP with SHA-256 integrity validation"
    ]
  },
  {
    id: "chandrakala-jewellers",
    title: "Chandrakala Jewellers — Commercial Platform & ERP Suite",
    category: "Luxury E-Commerce & Retail ERP",
    filterCategory: "crm",
    date: "Late 2025",
    status: "Live Commercial Platform",
    badge: "Live: chandrakalajewellers.in",
    tagline: "Commercial storefront + Proprietary GST Billing Engine + Physical Barcode Tag Printer desktop app.",
    description:
      "A complete proprietary retail ecosystem for Chandrakala Jewellers. Comprises three integrated systems: (1) A high-performance commercial showroom on a live custom domain, (2) An internal GST billing and tax invoicing engine computing metal purity, hallmark charges, making expenses, and multi-tier tax invoices, and (3) A specialized Flutter desktop application for printing physical barcode jewellery tags (139.7 x 190.5mm, 22-slot staggered layout with central strip tags) with HUID tracking.",
    tech: [
      "React",
      "Flutter Desktop",
      "Tailwind CSS",
      "Supabase PostgreSQL",
      "GST Billing Engine",
      "Thermal Barcode Printing",
      "HUID Tracking",
      "WhatsApp Automation"
    ],
    liveUrl: "https://chandrakalajewellers.in",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live commercial domain deployment on custom domain: chandrakalajewellers.in",
      "Proprietary GST billing software with automated metal purity, hallmark fees, making charges, and CGST/SGST invoices",
      "Dedicated Flutter physical label printing software for printing 22 staggered barcode jewellery tags with central tail strips",
      "Full Hallmark Unique Identification (HUID) and gross/net weight verification system",
      "Click-to-inquire automated WhatsApp customer order routing"
    ]
  },
  {
    id: "parichay-sammelan",
    title: "Parichay Sammelan — Web & Play Store App",
    category: "Community Platform & Mobile App",
    filterCategory: "mobile",
    date: "June 2025",
    status: "Play Store & Web",
    badge: "Google Play Store Released",
    tagline: "Community matchmaking platform and event registration app published on Google Play Store.",
    description:
      "A community matchmaking and event registration platform compiled into a native Android application published on the Google Play Store. Features verified user profiles, Razorpay digital payment checkout for event ticketing, and an anti-fraud QR code generator and verification scanner for venue entry.",
    tech: [
      "React",
      "Android",
      "PHP",
      "MySQL",
      "Razorpay",
      "QR Verification",
      "Google Play Console"
    ],
    liveUrl: "https://parichay-sammelan.wuaze.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan&pcampaignid=web_share",
    packageName: "com.hssolutiontech.ParichaySammelan",
    featured: true,
    highlights: [
      "Published and maintained live on the Google Play Store (com.hssolutiontech.ParichaySammelan)",
      "High-speed QR code ticketing and on-ground scanner for instant event check-in",
      "Integrated secure payment gateway workflows for delegate registration fees",
      "Multi-parameter filtering by education, native town, and family genealogy"
    ]
  },
  {
    id: "kitaab",
    title: "KITAAB — Jeweller Ledger App",
    category: "Fintech & Mobile App",
    filterCategory: "mobile",
    date: "August 2025",
    status: "Play Store Released",
    badge: "Google Play Store Released",
    tagline: "Smart daily ledger management app for jewellery retailers, published on Google Play Store.",
    description:
      "A specialized financial ledger application tailored for traditional jewellery retailers to replace manual paper bahi-khata. Published on the Google Play Store in August 2025. Designed with an ultra-intuitive, non-technical touch UI to record credit/debit transactions, customer balances, and daily sales ledgers with cloud and offline backup.",
    tech: [
      "Android",
      "PHP",
      "MySQL",
      "JavaScript",
      "Ledger Accounting",
      "Google Play Console"
    ],
    liveUrl: "https://jeweller-ledger.wuaze.com",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.jeweller.ledger&pcampaignid=web_share",
    packageName: "com.jeweller.ledger",
    featured: true,
    highlights: [
      "Published and live on the Google Play Store (com.jeweller.ledger)",
      "Simplifies complex retail debit/credit accounting for traditional non-tech merchants",
      "Automated daily balance aggregation and transaction ledger PDF export",
      "Adopted by local retail jewellers to eliminate paper register discrepancies"
    ]
  },
  {
    id: "pg-management",
    title: "Hostel & PG Accommodation Management ERP",
    category: "Real Estate & Hospitality ERP",
    filterCategory: "crm",
    date: "2025",
    status: "Completed Platform",
    badge: "Cloud Accommodation ERP",
    tagline: "Resident onboarding, bed allocation, floor occupancy analytics, and automated PDF fee receipts.",
    description:
      "A full-scale hostel and PG accommodation ERP engineered with React and Supabase PostgreSQL. Automates resident KYC onboarding, room/bed inventory allocation across floors, automated fee structure computation with jsPDF invoice/receipt generation, and spreadsheet reporting with XLSX.",
    tech: [
      "React",
      "Supabase",
      "PostgreSQL",
      "jsPDF & AutoTable",
      "XLSX Engine",
      "Tailwind CSS"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Room & Bed Allocation: Real-time tracking of single, double, and triple sharing vacancies across floors",
      "Automated Fee Invoicing: Custom jsPDF billing engine generating professional digital receipts and fee vouchers",
      "Resident KYC Vault: Digital management of identity documentation, parent contacts, and payment history",
      "Financial Export: Excel XLSX report compilation for monthly revenue auditing and occupancy projections"
    ]
  },
  {
    id: "hackathon-attendance",
    title: "Smart Geofenced Attendance System",
    category: "IoT & Smart Systems",
    filterCategory: "systems",
    date: "2025",
    status: "Hackathon Winner",
    badge: "5th Rank in Hackathon",
    tagline: "Anti-proxy attendance monitoring using the spherical Haversine GPS algorithm + dynamic QR.",
    description:
      "Engineered during an intensive hackathon competition where our team secured 5th rank among competing engineering teams. The platform prevents proxy attendance by coupling rolling time-based dynamic QR codes with exact GPS coordinates validated through the spherical Haversine trigonometric distance formula.",
    tech: [
      "JavaScript",
      "Haversine Algorithm",
      "Geolocation API",
      "QR Code System",
      "PHP",
      "MySQL"
    ],
    liveUrl: "https://attend-system.wuaze.com",
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Secured 5th position among competitive collegiate teams in hackathon",
      "Programmed mathematical Haversine spherical trigonometric formula for sub-meter geofencing",
      "Rolling QR code cryptographic tokens to eliminate proxy check-ins",
      "Supervisor dashboard with realtime geo-location audit logs"
    ]
  },
  {
    id: "hospital-dashboard",
    title: "Hospital Management Dashboard",
    category: "Healthcare & Clinical CRM",
    filterCategory: "web",
    date: "2025",
    status: "Live on Vercel",
    badge: "Tech-Craft Internship",
    tagline: "Modular clinical management dashboard built with React and Node.js.",
    description:
      "Created during a competitive React & Node internship at Tech-Craft. Features comprehensive doctor profiles, dynamic patient management, clinical department filtering, appointment scheduling/cancellation, and real-time statistics visualizations.",
    tech: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "State Management",
      "Component Architecture",
      "Vercel"
    ],
    liveUrl: "https://hospital-dashboard-woad-gamma.vercel.app/",
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Built dynamic scheduling interface with instant patient search and filtering",
      "Doctor directory cards categorized by medical department specialties",
      "Real-time visual statistics cards for bed occupancy and daily patient counts",
      "Deployed and maintained live on Vercel with high responsiveness"
    ]
  },
  {
    id: "soni-samaj",
    title: "Soni Samaj Community Directory",
    category: "Community Platform",
    filterCategory: "web",
    date: "February 2025",
    status: "Foundational Project",
    badge: "First Production Project",
    tagline: "Comprehensive community networking directory connecting members and families.",
    description:
      "The foundational first project that launched Jay's software engineering journey in February 2025. Built to connect members of the community across Gujarat, featuring family tree linkages, occupation and location-based profile indexing, and fast relational database search.",
    tech: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Relational Database",
      "Search Engine"
    ],
    liveUrl: "https://sonisamaj.wuaze.com",
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Jay's foundational software project, launched in February 2025",
      "Designed normalized relational database schema for family hierarchies",
      "Fast multi-parameter search by city, native village, and occupation",
      "Mobile-friendly directory layout adopted by community families"
    ]
  }
];
