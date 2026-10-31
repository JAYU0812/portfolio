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
    date: "June 2026 – Present",
    status: "Production Live v2.1.3+13 (AI Search)",
    badge: "Live: propkart.nbpropertytech.com",
    version: "v2.1.3+13 (Flutter) / v3.2.0 (API)",
    tagline: "Apple-inspired operating system for real estate desks with 2ms Offline-First local latency, Natural Language AI Search Engine, SDK 36, and 100/100 security score.",
    description:
      "Architected as Lead Mobile & Full-Stack Architect at NB Property Tech / NB Developers. Evolved from the original NB Listings foundation into a comprehensive enterprise-scale real-estate operating system managing high-volume rental and re-sale portfolios across metropolitan hubs. Features a Natural Language AI Search Engine integrated directly into the AppShell and PostgreSQL backend (spanning Migrations 84–93, persistent builder indexes, and safe query telemetry), embedded Isar NoSQL local database (2–8ms read latency), bi-directional realtime synchronization with PostgreSQL, Target SDK 36 (Android 15), Google Play Store readiness (com.nbpropertytech.propkart), universal algorithmic CAPTCHA bot defense, RFC 6238 TOTP 2FA, and automated Round-Robin lead allocation.",
    tech: [
      "Flutter",
      "Dart",
      "Target SDK 36",
      "Natural Language AI Search",
      "Isar NoSQL (v3.1.0)",
      "BLoC & Riverpod",
      "Node.js & Express 5",
      "PostgreSQL (Migrations 1–93)",
      "Supabase Realtime",
      "Meta & Housing.com Webhooks",
      "RFC 6238 TOTP 2FA",
      "Algorithmic CAPTCHA"
    ],
    liveUrl: "https://propkart.nbpropertytech.com",
    playStoreUrl: null,
    packageName: "com.nbpropertytech.propkart",
    featured: true,
    metrics: {
      readLatency: "2ms – 8ms",
      writeLatency: "10ms – 25ms",
      ingestVelocity: "<1s Webhook Push",
      securityScore: "100/100 (37/37 Checks Passed)",
      targetSdk: "Target SDK 36 (Android 15 Ready)"
    },
    highlights: [
      "Natural Language AI Search Engine: Debounced in-app intent parser and server-side NLP query interpreter mapping natural language queries (e.g., 'available property in gota') into tenant-isolated PostgreSQL results with zero raw query leakage",
      "Production Google Play Store Ready: Package ID com.nbpropertytech.propkart targeting SDK 36 with Java 17 desugaring, ProGuard obfuscation, and automated account deletion compliance",
      "Comprehensive Mobile Design System & App Shell: Architected 95-file mobile foundation (Steps 3.0–3.7 migration, 20,000+ LOC) with responsive bottom navigation, contextual outcome sheets, and full BLoC reactive state",
      "Enterprise PostgreSQL Migrations (84 to 93): Scaled database schema with persistent builder indexing, search document vectors, campaign lead manual sales reassignment, and foreign key integrity",
      "Site Visit Historical Tracking Engine: Engineered PostgreSQL Migrations 38 & 39 establishing immutable site visit audit logs, telecaller outcome sync, and CNR re-dial workflows",
      "100/100 Security Audit: Passed all 37 automated security dimensions including RFC 6238 TOTP two-factor authentication and mathematical algorithmic CAPTCHA bot defense",
      "WebGL & CanvasKit Shader Stabilization: Authored GPU shader prevention architecture eliminating web runtime crashes across low-end mobile devices and browser viewports",
      "Offline-First Architecture: Embedded Isar NoSQL database yielding 2–8ms read latency for hundreds of listings, delivering perceived zero-latency (0ms wait) with zero blocking UI spinners",
      "Deterministic Conflict Resolution: Outbox mutation queue with strict timestamp-based Server-Wins policy to prevent stale overwrites across low-connectivity field environments",
      "Multi-Channel Ingestion & Deduplication: Sub-second (<1s) webhooks for Meta Lead Ads and Housing.com with 24-hour cryptographic lead deduplication and automated Round-Robin agent routing"
    ]
  },
  {
    id: "propkart-broker",
    title: "PropKart Broker Portal — Enterprise Broker Onboarding & Governance Platform",
    category: "Enterprise Governance & Operations",
    filterCategory: "crm",
    date: "October 2026 – Present",
    status: "Production v1.0.0",
    badge: "github.com/JAYU0812/brokerportal",
    version: "v1.0.0",
    tagline: "Cross-platform broker onboarding engine with dual-tier RERA approval governance, dynamic RBAC, and Hostinger SSL SMTP mailer.",
    description:
      "Enterprise real estate broker onboarding, dual-tier approval governance, and cross-platform operations system engineered for NB PropertyTech. Built with Flutter (Web, Mobile, Desktop), NestJS 10, and an isolated PostgreSQL 16 database. Features two-tier approval queues (Queue A for state RERA verified applicants, Queue B for RERA assistance with direct auto-drafted WhatsApp integration), zero-hardcoding dynamic platform settings and RBAC with granular user permission overrides, tamper-evident audit logging, and automated credential activation via Hostinger SSL SMTP with cryptographic tokens.",
    tech: [
      "Flutter 3.x",
      "Dart",
      "NestJS 10",
      "TypeScript",
      "PostgreSQL 16",
      "Docker",
      "TypeORM",
      "Hostinger SSL SMTP",
      "JWT Auth",
      "Dynamic RBAC",
      "BLoC & Cubit"
    ],
    githubUrl: "https://github.com/JAYU0812/brokerportal",
    liveUrl: null,
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Two-Tier Approval Queues: Queue A (Fast-track RERA verified brokers) vs Queue B (RERA assistance with auto-drafted WhatsApp integration)",
      "Automated Activation Dispatch: One-click approval sending official credentials via Hostinger SSL SMTP with cryptographic auto-fill activation links",
      "Zero Hardcoding Architecture: Dynamic platform settings and RBAC stored in PostgreSQL allowing admins to update support hotlines, prefill templates, and RERA prefixes without redeploying",
      "Tamper-Evident Audit Trail: Structured audit logs recording actor, role, action, target entity, IP address, and JSON payloads with instant search and one-click JSON exporter"
    ]
  },
  {
    id: "nbpropertytech-portal",
    title: "NB PropertyTech — Official Marketing & Broker Onboarding Platform",
    category: "Production Marketing Portal",
    filterCategory: "web",
    date: "October 2026 – Present",
    status: "Production Live",
    badge: "Live: nbpropertytech.com",
    tagline: "Next.js 15 marketing portal and broker intake studio with Docker containerization and automated VPS CI/CD.",
    description:
      "The official production marketing portal and broker onboarding showcase for PropKart CRM and NB PropertyTech, live at nbpropertytech.com. Features interactive CRM/ERP product tours, multi-tenant security architecture breakdown, dynamic tier subscription studio (Silver, Gold, Platinum Enterprise), real-time client validation with database persistence, and automated GitHub Actions CI/CD to a VPS with Traefik ACME SSL reverse proxy.",
    tech: [
      "Next.js 15",
      "TypeScript 5",
      "Tailwind CSS",
      "Framer Motion",
      "PostgreSQL",
      "Docker",
      "Traefik SSL",
      "GitHub Actions CI/CD",
      "Nodemailer"
    ],
    liveUrl: "https://nbpropertytech.com",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live Production Platform: Deployed on official primary domain nbpropertytech.com with automated Let's Encrypt SSL via Traefik",
      "Next.js 15 Standalone Architecture: High-performance App Router with server-side rendering, Framer Motion animations, and zero hydration latency",
      "Automated VPS CI/CD Pipeline: GitHub Actions workflow building Docker containers and deploying directly to VPS with automated healthcheck verification",
      "Interactive Broker Onboarding Studio: Form intake pipeline with client-side validation, database persistence, and automated confirmation dispatch"
    ]
  },
  {
    id: "propkart-listing",
    title: "PropKart Listing — Public Real Estate Directory & Showcase",
    category: "Public PropTech Showcase",
    filterCategory: "web",
    date: "2026 – Present",
    status: "Production Live",
    badge: "Live: listing.nbpropertytech.com",
    tagline: "Apple-inspired public real estate showcase platform for Ahmedabad prime commercial, rental, and luxury resale properties.",
    description:
      "Official public real estate showcase directory of the PropKart ecosystem, curated strictly for prime Ahmedabad corridors (SG Highway, Sindhu Bhavan, GIFT City, Sanand, Bopal). Engineered with responsive 3D dual-tone typography, a full-width universal search engine with live filtering across localities and developers, scroll-triggered category channels (Pre-sales, Rentals, Resale), elevated property cards, instant WhatsApp routing, and real-time cross-tab synchronization via the browser's BroadcastChannel API.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite 6",
      "Tailwind CSS 3",
      "BroadcastChannel API",
      "PostgreSQL",
      "Lucide React",
      "Nginx / VPS"
    ],
    liveUrl: "https://listing.nbpropertytech.com",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live Production Deployment: Deployed on official custom domain listing.nbpropertytech.com serving verified Ahmedabad real estate listings",
      "Universal Search Engine: Full-width live search querying locality names, developers, property types, and starting price points with zero input lag",
      "3D Dual-Tone Typography & Fluid Layout: Apple-inspired minimalist light theme utilizing clamp() responsive scaling and elevated shadow aesthetics",
      "Real-time Inventory Ingestion: Synchronizes instantly with PropKart Panel via BroadcastChannel API and shared PostgreSQL APIs when properties are toggled live"
    ]
  },
  {
    id: "propkart-connect",
    title: "PropKart Connect & Panel — Dynamic Form Engine & Operations Desk",
    category: "Dynamic Form Engine & Operations Hub",
    filterCategory: "crm",
    date: "2026 – Present",
    status: "Production Live",
    badge: "Live: propconnect.nbpropertytech.com",
    tagline: "Centrally governed dynamic form wizard with session draft recovery, GPS tagging, and operations desk with 3-way lead sharing.",
    description:
      "The dynamic property intake and operations engine of the PropKart ecosystem. Comprises PropKart Connect (public intake wizard at propconnect.nbpropertytech.com) and PropKart Panel (administrative operations desk at panel.nbpropertytech.com). Forms are 100% dynamic—sections, field validations, and media limits are published from Panel without code redeployments. Features draft session recovery, GPS coordinate tagging, high-res photo/video uploads, Supabase Realtime pipeline, telecaller disposition logging, and 3-way lead sharing including client-side vector PDF dossier compilation via jsPDF.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "jsPDF",
      "Supabase Realtime",
      "PostgreSQL",
      "Node.js / Express",
      "Traefik SSL",
      "Axios"
    ],
    liveUrl: "https://propconnect.nbpropertytech.com",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "100% Centrally Governed Dynamic Forms: Custom schema engine allowing administrators to add, reorder, and configure intake fields live with versioning",
      "Public Shareable Showcase (/?view=<id>): Dynamically renders submitted property specifications, image galleries, and inquiry CTAs for buyers/tenants",
      "3-Way Dynamic Lead Sharing: Generates instant WhatsApp highlight cards, public showcase links, and multi-page vector PDF dossiers using jsPDF",
      "Robust Operations Desk: Real-time submission pipeline via WebSockets, telecaller disposition tracking, GPS inspection, and one-click promotion to active inventory"
    ]
  },
  {
    id: "nb-hrms",
    title: "NB-HRMS — Enterprise CRM, HRMS & ERP Suite",
    category: "Enterprise ERP & Workflow Engine",
    filterCategory: "crm",
    date: "June 2026 – Present",
    status: "Production Live",
    badge: "Live: crm.nbdeveloper.co.in",
    tagline: "High-security ERP & Human Resource system with AES-256 field encryption, Hasura GraphQL, and Whisper AI voice note transcription.",
    description:
      "A comprehensive Human Resource & Enterprise Resource Management System engineered for NB Developers, deployed live on crm.nbdeveloper.co.in. Features employee profile workflows, sensitive identity documentation with AES-256-CBC field encryption (Aadhaar & PAN encrypted at rest), document uploads via Cloudinary, Hasura GraphQL Engine, Redis session cache, append-only audit logging for sensitive writes, LiveKit realtime video calling, OpenAI Whisper voice transcription, and a cross-platform Flutter companion client.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Express 5",
      "Prisma v6",
      "PostgreSQL 15",
      "Hasura GraphQL",
      "Redis",
      "AES-256 Encryption",
      "Cloudinary",
      "LiveKit",
      "Whisper AI",
      "Flutter"
    ],
    liveUrl: "https://crm.nbdeveloper.co.in",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live Commercial Deployment: Accessible in production at crm.nbdeveloper.co.in for enterprise internal operations",
      "Real-Time GPS Field Trip Tracking: Tracks employee movements outside work geofences with 30m detection buffer, 12-hour session caching, and 120s expiring live map pins",
      "Double Encryption Architecture: Configured TRANSPORT_SECRET double encryption layer and AES-256-CBC field encryption for sensitive identity records",
      "Data Masking & Bulk Lead Management: Secure identity data masking and high-volume lead transfer pipelines for organizational privacy",
      "Hasura GraphQL Engine & Prisma v6: Unified data layer querying PostgreSQL with granular permission rules and automated relationship stitching",
      "Append-Only Audit Log: Computes field-level diffs on every sensitive write and stores an immutable trail of actions for regulatory compliance",
      "Real-time Collaboration: LiveKit WebRTC video rooms and OpenAI Whisper speech-to-text pipeline for audio memo transcription",
      "Cross-Platform Flutter Client: Native mobile companion application (nb_crm_flutter) for field employee check-ins and document viewing"
    ]
  },
  {
    id: "techdrive",
    title: "TechDrive — Enterprise Cloud Storage & Document Vault",
    category: "Cloud Storage & Security",
    filterCategory: "tools",
    date: "June 2026 – Present",
    status: "Production Live",
    badge: "Live: techdrive.nbpropertytech.com",
    tagline: "Centralized cloud document repository and visual storage visualizer for property blueprints, deeds, and legal contracts.",
    description:
      "An internal enterprise cloud storage and digital asset management platform engineered for NB PropertyTech, deployed live at techdrive.nbpropertytech.com. Eliminates fragmented file sharing across real estate desks by providing a unified, secure repository for CAD blueprints, property deed PDFs, client agreements, and high-resolution renders. Features interactive storage breakdown analytics with FL Chart, department folder isolation, multi-tier collaborator permissions, and a 2-stage recycle recovery bin.",
    tech: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase Auth",
      "Cloud Firestore",
      "FL Chart",
      "Dio",
      "File Handling",
      "Role-Based Access"
    ],
    liveUrl: "https://techdrive.nbpropertytech.com/",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live Production Deployment: Deployed and accessible at techdrive.nbpropertytech.com",
      "Interactive Storage Visualizer: Real-time dynamic donut and progress charts built with FL Chart categorizing Documents, Blueprints, Media, and System files",
      "Departmental Access Control: Multi-tier permission matrix (Viewer / Editor / Admin) isolating confidential legal deeds from general sales collateral",
      "Multi-Format Ingestion: High-speed uploads for architectural CAD layouts, multi-page PDFs, and high-resolution marketing media",
      "Two-Stage Recycle Bin: Safeguards against accidental deletions with 1-click document restoration and administrative permanent purging"
    ]
  },
  {
    id: "legacy-tower",
    title: "NB Legacy Tower — Luxury Infrastructure Campaign Portal",
    category: "High-Ticket Campaign Portal",
    filterCategory: "web",
    date: "June 2026 – Present",
    status: "Production Live",
    badge: "Live: nblegacy.nbdeveloper.co.in",
    tagline: "High-conversion luxury commercial presentation portal with dynamic unit configuration and sub-2s Google Sheets webhook routing.",
    description:
      "A specialized digital campaign and high-ticket investor ingestion platform engineered for NB Infra Projects' flagship commercial development, Legacy Tower, deployed live at nblegacy.nbdeveloper.co.in. Features cinematic floor plan visualizers, dynamic unit configuration (Commercial Offices, Showrooms, Luxury Residences), Firestore database synchronization, Firebase Analytics visitor tracking, and an automated Google Sheets webhook engine notifying telecallers in under 2 seconds.",
    tech: [
      "Flutter Web",
      "Dart",
      "Cloud Firestore",
      "Firebase Analytics",
      "Google Sheets Webhook",
      "GoRouter",
      "Luxury Design Tokens"
    ],
    liveUrl: "https://nblegacy.nbdeveloper.co.in/",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Live Commercial Deployment: Live in production at nblegacy.nbdeveloper.co.in",
      "Sub-2s Telecaller Ingestion: Automated webhook pipeline posting high-intent investor inquiries synchronously into Google Sheets for instant sales follow-up",
      "Dynamic Unit Configurator: Interactive investment tier and floor selector computing indicative layouts and specifications",
      "Real-time Investor Analytics: Firebase Analytics tracking visitor engagement across brochure downloads, floor plans, and walk-throughs",
      "Administrative Inbound Console: Dedicated lead dispatch and conversion tracking dashboard for campaign managers"
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
    id: "devsync",
    title: "DevSync — Sovereign Cryptographic P2P & Serverless Relay Suite",
    category: "Cryptographic P2P & Systems Architecture",
    filterCategory: "tools",
    date: "September 2026",
    status: "Production Suite v1.0.0",
    badge: "GitHub: Sovereign P2P Engine",
    version: "v1.0.0",
    tagline: "Account-per-device communication and high-speed LAN file transfer system with Ed25519 signatures, X25519 key exchange, and zero-retention Vercel SSE relay.",
    description:
      "A developer-tailored communication and high-speed file transfer ecosystem built on a sovereign account-per-device security model with zero phone/email dependencies. Employs Ed25519 cryptographic payload signing, X25519 diffie-hellman key agreements, and AES-256-GCM message encryption. Features hybrid networking: direct high-speed LAN transfer via an embedded Shelf HTTP server with UDP multicast discovery, accompanied by an automated fallback to a zero-retention Vercel Serverless SSE relay backed by Upstash Redis. Built for developers with syntax-highlighted code sharing, one-tap copy, dark mode, and categorized local file organization.",
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "AES-256-GCM",
      "Ed25519 / X25519",
      "Shelf HTTP Server",
      "UDP Multicast",
      "Vercel Serverless",
      "Server-Sent Events (SSE)",
      "Upstash Redis",
      "Hive NoSQL"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/jay0812soni-developer/devsync",
    playStoreUrl: null,
    featured: true,
    highlights: [
      "Sovereign Cryptographic Identity: Account-per-device security with on-device Ed25519 key pairs and X25519/AES-256-GCM end-to-end encryption without phone or email requirement",
      "Hybrid P2P & Serverless Fallback: Embedded Shelf HTTP server and UDP broadcast for direct multi-megabyte LAN transfers, seamlessly falling back to a Vercel Serverless SSE relay",
      "Zero-Retention Serverless Relay: Ephemeral queueing via Upstash Redis where encrypted payloads are pruned immediately upon delivery confirmation acknowledgment",
      "Developer-Centric UX: Syntax-highlighted code snippets, one-tap clipboard copy, and automatic categorization of incoming files into dedicated DevSync directories"
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
      "Robust Database Security: Configured comprehensive Row-Level Security (RLS) policies on Supabase PostgreSQL for collections, category mappings, wishlists, and product comparison matrices",
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
    id: "js-notebook",
    title: "JS-Notebook — Interactive In-Browser JavaScript Notebook & Kernel",
    category: "Developer Tools & Language Runtimes",
    filterCategory: "tools",
    date: "2026",
    status: "Interactive Tool",
    badge: "AST Kernel & CodeMirror 6",
    version: "v1.0.0",
    tagline: "Jupyter-style reactive JavaScript notebook with CodeMirror 6, Acorn AST parsing, WebSocket execution kernel, and live variable inspector.",
    description:
      "An interactive in-browser development environment and notebook runner tailored for JavaScript engineers. Combines CodeMirror 6 code editor cells and live rendered Markdown cells with an isolated Node.js execution kernel running over WebSockets. Leverages Acorn and Acorn-Walk AST parsers to inspect and extract variables in real time, rendering an interactive scope and variable inspector alongside cell outputs.",
    tech: [
      "React 19",
      "Node.js",
      "Express",
      "WebSocket (ws)",
      "CodeMirror 6",
      "Acorn AST",
      "Acorn-Walk",
      "Marked",
      "Tailwind CSS"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: false,
    highlights: [
      "AST-Powered Scope Inspector: Integrates Acorn and Acorn-Walk AST parsing to inspect declared variables, types, and values across execution cycles",
      "WebSocket Execution Kernel: Dedicated Node.js backend executing code cells via persistent WebSockets with real-time stdout/stderr streaming",
      "CodeMirror 6 & Markdown Dual Cells: Seamlessly alternate between syntax-highlighted JavaScript code execution and formatted technical documentation",
      "Interactive Execution Telemetry: Tracks per-cell execution runtime in milliseconds, kernel state (ready, busy, disconnected), and notebook storage"
    ]
  },
  {
    id: "khatabook-analyzer",
    title: "Khatabook — Offline Financial Statement Analyzer",
    category: "Fintech & Data Extraction Pipeline",
    filterCategory: "systems",
    date: "2026",
    status: "Offline Analytics Suite",
    badge: "Python Pipeline + SQLite",
    version: "v1.0.0",
    tagline: "Automated offline financial statement parser, SQLite ledger database, and reconciliation dashboard.",
    description:
      "An automated financial accounting and statement analysis tool engineered for offline processing of commercial bank statements and transaction ledgers. Features a Python data extraction pipeline that parses complex multi-page financial PDFs into structured tabular datasets, stores records in an optimized SQLite database, and presents an interactive DataTables ledger grid with automated balance reconciliation and transaction classification.",
    tech: [
      "PHP",
      "Python",
      "SQLite",
      "DataTables",
      "Bootstrap 5",
      "Financial Parsing",
      "PDF Extraction"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Automated PDF Data Extraction: Python pipeline parsing non-standard bank statements and ledger sheets into structured records",
      "Local SQLite Storage: Completely offline, air-gapped data persistence guaranteeing 100% financial confidentiality",
      "Interactive Ledger Grid: High-speed DataTables filtering, sorting, credit/debit totals, and balance reconciliation",
      "Discrepancy Detection: Flags arithmetic irregularities between running account balances and recorded transaction rows"
    ]
  },
  {
    id: "academic-ams",
    title: "Academic Attendance Management System",
    category: "Academic Portal & Course Administration",
    filterCategory: "web",
    date: "September 2026",
    status: "Institutional Portal Suite",
    badge: "Faculty & Student Dual Gateway",
    version: "v1.0.0",
    tagline: "Role-based academic course register, session presence logger, and institutional compliance dashboard.",
    description:
      "A comprehensive role-based academic portal suite engineered for college departments and course coordinators to manage student presence, course rosters, and term compliance. Features two dedicated portals: (1) A Faculty Portal for professors to log lecture sessions, record attendance statuses (Present, Absent, Excused), monitor low-attendance warning thresholds, and export official departmental registers, and (2) A Student Self-Service Portal displaying real-time subject-wise attendance percentages, lecture counts, and term compliance status against minimum 75% mandates.",
    tech: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 Design System",
      "Role-Based Routing",
      "Roster Analytics",
      "Session Storage",
      "Register Export"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Dual Role-Based Institutional Portals: Dedicated gateways for Faculty course coordinators and Student self-service compliance checking",
      "Session Course Register: Real-time attendance logging with one-tap status toggles (Present, Absent, Late), automatic percentage computation, and attendance alerts",
      "Academic Compliance Warnings: Automatic threshold flags for students below mandatory 75% course presence criteria with parent notification triggers",
      "Clean Institutional Design System: Tailored typography, breadcrumb navigation, and responsive tables designed for academic administrators"
    ]
  },
  {
    id: "j-connect",
    title: "J-Connect — Developer Tooling & Collaboration Platform",
    category: "Developer Collaboration & Ecosystem",
    filterCategory: "tools",
    date: "October 2026",
    status: "Active Architecture",
    badge: "Developer Tooling",
    version: "v1.0.0",
    tagline: "Developer ecosystem platform engineered for high-performance team collaboration, APIs, and tooling.",
    description:
      "A high-performance developer collaboration ecosystem engineered with a clean modular architecture. Comprises a Flutter client application, a NestJS TypeScript backend, migration-controlled PostgreSQL database, and a strict rulebook for security, documentation, and API standards.",
    tech: [
      "Flutter",
      "Dart",
      "NestJS 10",
      "TypeScript",
      "PostgreSQL",
      "RESTful APIs",
      "Clean Architecture"
    ],
    liveUrl: null,
    playStoreUrl: null,
    featured: false,
    highlights: [
      "Clean Modular Architecture: Strict layer separation between Flutter frontend, NestJS backend, and migration-controlled PostgreSQL schema",
      "Authoritative Backend Logic: Fully validated RESTful /api/v1/ endpoints with single-source-of-truth documentation governance",
      "Migration-Controlled Persistence: Safe database schema evolution isolating development from live environments"
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
