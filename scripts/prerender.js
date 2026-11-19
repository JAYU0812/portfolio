import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { projects } from "../src/data/projects.js";
import { CATEGORIES, DEVELOPER_QUESTIONS } from "../src/data/developerQuestionsData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.resolve(ROOT_DIR, "dist");
const BASE_URL = "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app";

// Helper: Escape HTML special chars
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Generate shared header markup
function renderHeader(currentPath) {
  return `
    <header style="border-bottom: 1px solid rgba(0,0,0,0.08); padding: 1.25rem 1.5rem; background: #ffffff;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
        <div>
          <a href="/" style="font-weight: 800; font-size: 1.25rem; color: #121316; text-decoration: none; letter-spacing: -0.02em;">
            Soni Jaykumar Hasmukh
          </a>
          <span style="display: block; font-size: 0.8rem; color: #656A76; margin-top: 0.15rem;">
            Lead Mobile &amp; Full-Stack Architect &bull; Ahmedabad, Gujarat
          </span>
        </div>
        <nav style="display: flex; flex-wrap: wrap; gap: 1.25rem; font-size: 0.875rem; font-weight: 600;">
          <a href="/about" style="color: ${currentPath === "/about" ? "#92400E" : "#4B5563"}; text-decoration: none;">About</a>
          <a href="/projects" style="color: ${currentPath.startsWith("/projects") ? "#92400E" : "#4B5563"}; text-decoration: none;">Projects</a>
          <a href="/developer-questions" style="color: ${currentPath.startsWith("/developer-questions") ? "#92400E" : "#4B5563"}; text-decoration: none;">Developer Q&amp;A</a>
          <a href="/resume" style="color: ${currentPath === "/resume" ? "#92400E" : "#4B5563"}; text-decoration: none;">Resume &amp; Credentials</a>
          <a href="/contact" style="color: ${currentPath === "/contact" ? "#92400E" : "#4B5563"}; text-decoration: none;">Contact</a>
        </nav>
      </div>
    </header>
  `;
}

// Generate shared footer markup
function renderFooter() {
  return `
    <footer style="border-top: 1px solid rgba(0,0,0,0.08); padding: 2.5rem 1.5rem; background: #FBF9F5; margin-top: 4rem;">
      <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <p style="font-weight: 700; font-size: 1rem; color: #121316; margin-bottom: 0.5rem;">
          Soni Jaykumar Hasmukh (Jay Soni)
        </p>
        <p style="font-size: 0.875rem; color: #656A76; max-width: 600px; margin: 0 auto 1.25rem;">
          Award-Winning Lead Mobile &amp; Full-Stack Architect based in Ahmedabad, Gujarat, India. Specialist in Flutter (SDK 36), Offline-First Architecture, Isar NoSQL (2–8ms), React, NestJS, and Enterprise PropTech.
        </p>
        <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.25rem;">
          <a href="https://github.com/JAYU0812" target="_blank" rel="noopener noreferrer" style="color: #4B5563; text-decoration: none;">GitHub</a>
          <a href="https://linkedin.com/in/sonijay1908" target="_blank" rel="noopener noreferrer" style="color: #4B5563; text-decoration: none;">LinkedIn</a>
          <a href="/certificates/nb-infra-certificate-of-appreciation.png" target="_blank" rel="noopener noreferrer" style="color: #4B5563; text-decoration: none;">NB Infra Award (Oct 2026)</a>
          <a href="/certificates/tech-craft-reactjs-certificate.png" target="_blank" rel="noopener noreferrer" style="color: #4B5563; text-decoration: none;">Tech-Craft ReactJS Certificate</a>
          <a href="/llms.txt" style="color: #4B5563; text-decoration: none;">llms.txt</a>
          <a href="/sitemap.xml" style="color: #4B5563; text-decoration: none;">Sitemap</a>
        </div>
        <p style="font-size: 0.75rem; color: #9CA3AF;">
          &copy; ${new Date().getFullYear()} Soni Jaykumar Hasmukh. All rights reserved. Registered Address: Ahmedabad, Gujarat, India (380060).
        </p>
      </div>
    </footer>
  `;
}

// Generate pre-rendered HTML body for each route
function getPageBody(route) {
  const { path: routePath, type, data } = route;
  const header = renderHeader(routePath);
  const footer = renderFooter();

  let contentHtml = "";

  if (type === "home") {
    contentHtml = `
      <main style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
        <section style="margin-bottom: 3.5rem;">
          <div style="display: inline-block; padding: 0.35rem 0.85rem; background: #FEF3C7; color: #92400E; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; margin-bottom: 1.25rem;">
            📍 Lead Architect &amp; Software Engineer in Ahmedabad, India
          </div>
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; line-height: 1.15; margin-bottom: 1rem; letter-spacing: -0.03em;">
            Soni Jaykumar Hasmukh
          </h1>
          <p style="font-size: 1.25rem; font-weight: 600; color: #C27803; margin-bottom: 1.25rem;">
            Lead Mobile &amp; Full-Stack Architect &bull; NB Developers / NB PropertyTech
          </p>
          <p style="font-size: 1.05rem; color: #4B5563; line-height: 1.7; max-width: 820px; margin-bottom: 1.75rem;">
            Award-winning Software Engineer based in Ahmedabad, Gujarat. Specialist in Flutter (Target SDK 36), Offline-First Architecture with embedded Isar NoSQL (2–8ms query latency), React, Node.js/NestJS, and Enterprise PropTech. Recipient of the Certificate of Appreciation from NB Infra Projects Limited (October 2026).
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/projects" style="display: inline-block; padding: 0.85rem 1.75rem; background: #121316; color: #ffffff; text-decoration: none; border-radius: 0.75rem; font-weight: 700; font-size: 0.95rem;">
              Explore Production Systems (20 Case Studies) &rarr;
            </a>
            <a href="/developer-questions" style="display: inline-block; padding: 0.85rem 1.75rem; background: #F3F4F6; color: #1F2937; text-decoration: none; border-radius: 0.75rem; font-weight: 700; font-size: 0.95rem; border: 1px solid #E5E7EB;">
              Technical Knowledge Hub (Q&amp;A)
            </a>
          </div>
        </section>

        <section style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.75rem; font-weight: 800; color: #121316; margin-bottom: 1.5rem;">
            Featured Engineering Systems
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
            ${projects.slice(0, 6).map(p => `
              <article style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #C27803; text-transform: uppercase;">${escapeHtml(p.category)}</span>
                <h3 style="font-size: 1.25rem; font-weight: 700; color: #121316; margin: 0.5rem 0;">
                  <a href="/projects/${p.id}" style="color: #121316; text-decoration: none;">${escapeHtml(p.title)}</a>
                </h3>
                <p style="font-size: 0.875rem; color: #4B5563; line-height: 1.6; margin-bottom: 1rem;">
                  ${escapeHtml(p.tagline || p.description.slice(0, 160) + '...')}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem;">
                  ${p.tech.slice(0, 4).map(t => `<span style="font-size: 0.75rem; background: #F3F4F6; color: #374151; padding: 0.2rem 0.5rem; border-radius: 0.35rem;">${escapeHtml(t)}</span>`).join('')}
                </div>
                <a href="/projects/${p.id}" style="font-size: 0.875rem; font-weight: 700; color: #C27803; text-decoration: none;">
                  Read Architecture Case Study &rarr;
                </a>
              </article>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 3.5rem; background: #F9FAFB; border-radius: 1.25rem; padding: 2rem; border: 1px solid #E5E7EB;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">
            Verified Credentials &amp; Certifications
          </h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem;">
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.75rem; border: 1px solid #E5E7EB;">
              <strong>Certificate of Appreciation (Reward &amp; Recognition)</strong> &mdash; NB Infra Projects Limited (Oct 2026). Signed by Chairman Rahul D. Prajapati.
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.75rem; border: 1px solid #E5E7EB;">
              <strong>ReactJS Comprehensive Front-End Development (TC06260039)</strong> &mdash; Tech-Craft Ahmedabad (July 2026).
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.75rem; border: 1px solid #E5E7EB;">
              <strong>Official React JS Internship Offer Letter</strong> &mdash; Tech-Craft Ahmedabad (July 2026).
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.75rem; border: 1px solid #E5E7EB;">
              <strong>AIITA Grade A Certificate in C++ Programming (GJ/037/734)</strong> &mdash; ISO 9001:2008 National Literacy Programme.
            </li>
          </ul>
        </section>
      </main>
    `;
  } else if (type === "project") {
    const p = data;
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; margin-bottom: 1.5rem; color: #6B7280;">
          <a href="/" style="color: #6B7280; text-decoration: none;">Home</a> &gt;
          <a href="/projects" style="color: #6B7280; text-decoration: none;">Projects</a> &gt;
          <span style="color: #121316; font-weight: 600;">${escapeHtml(p.title)}</span>
        </nav>

        <header style="margin-bottom: 2.5rem;">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #C27803; background: #FEF3C7; padding: 0.25rem 0.65rem; border-radius: 9999px;">
              ${escapeHtml(p.category)}
            </span>
            ${p.status ? `<span style="font-size: 0.75rem; font-weight: 600; color: #065F46; background: #D1FAE5; padding: 0.25rem 0.65rem; border-radius: 9999px;">${escapeHtml(p.status)}</span>` : ""}
            <span style="font-size: 0.75rem; font-weight: 600; color: #4B5563; background: #F3F4F6; padding: 0.25rem 0.65rem; border-radius: 9999px;">
              📍 Ahmedabad, Gujarat
            </span>
          </div>

          <h1 style="font-size: 2.5rem; font-weight: 800; color: #121316; line-height: 1.2; margin-bottom: 1rem; letter-spacing: -0.02em;">
            ${escapeHtml(p.title)}
          </h1>

          <p style="font-size: 1.15rem; color: #4B5563; line-height: 1.6; margin-bottom: 1.5rem;">
            ${escapeHtml(p.tagline || p.description.slice(0, 200))}
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${p.tech.map(t => `<span style="font-size: 0.8rem; font-weight: 600; background: #F3F4F6; color: #1F2937; padding: 0.35rem 0.75rem; border-radius: 0.5rem;">${escapeHtml(t)}</span>`).join('')}
          </div>

          ${p.liveUrl || p.playStoreUrl ? `
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 0.75rem 1.5rem; background: #C27803; color: #ffffff; text-decoration: none; border-radius: 0.5rem; font-weight: 700; font-size: 0.875rem;">Visit Production System &rarr;</a>` : ""}
              ${p.playStoreUrl ? `<a href="${p.playStoreUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 0.75rem 1.5rem; background: #065F46; color: #ffffff; text-decoration: none; border-radius: 0.5rem; font-weight: 700; font-size: 0.875rem;">Google Play Store &rarr;</a>` : ""}
            </div>
          ` : ""}
        </header>

        ${p.metrics ? `
          <section style="margin-bottom: 2.5rem; padding: 1.5rem; background: #F9FAFB; border-radius: 1rem; border: 1px solid #E5E7EB;">
            <h2 style="font-size: 1.25rem; font-weight: 700; color: #121316; margin-bottom: 1rem;">Key Engineering Benchmarks</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
              ${Object.entries(p.metrics).map(([key, val]) => `
                <div style="background: #ffffff; padding: 1rem; border-radius: 0.5rem; border: 1px solid #E5E7EB;">
                  <span style="font-size: 0.75rem; color: #6B7280; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 0.25rem;">${escapeHtml(key)}</span>
                  <strong style="font-size: 1rem; color: #111827;">${escapeHtml(val)}</strong>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ""}

        <article style="font-size: 1.05rem; line-height: 1.75; color: #374151; margin-bottom: 3rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">System Overview &amp; Architectural Context</h2>
          <p style="margin-bottom: 1.5rem;">${escapeHtml(p.description)}</p>

          ${p.highlights && p.highlights.length ? `
            <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin: 2rem 0 1rem;">Architectural Innovations &amp; Core Deliverables</h2>
            <ul style="padding-left: 1.5rem; margin-bottom: 2rem;">
              ${p.highlights.map(h => `<li style="margin-bottom: 0.75rem;">${escapeHtml(h)}</li>`).join('')}
            </ul>
          ` : ""}
        </article>

        <section style="border-top: 1px solid #E5E7EB; padding-top: 2rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #121316; margin-bottom: 1rem;">About the Lead Architect</h2>
          <p style="font-size: 0.95rem; color: #4B5563; line-height: 1.6;">
            <strong>Soni Jaykumar Hasmukh (Jay Soni)</strong> is an award-winning Lead Mobile &amp; Full-Stack Architect based in Ahmedabad, Gujarat, India. He architected ${escapeHtml(p.title)} and specializes in zero-downtime offline-first systems, embedded Isar NoSQL, Flutter, React, and NestJS.
          </p>
          <div style="margin-top: 1.25rem;">
            <a href="/projects" style="font-weight: 700; color: #C27803; text-decoration: none;">&larr; View All 20 Case Studies</a>
          </div>
        </section>
      </main>
    `;
  } else if (type === "qa-article") {
    const q = data;
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; margin-bottom: 1.5rem; color: #6B7280;">
          <a href="/" style="color: #6B7280; text-decoration: none;">Home</a> &gt;
          <a href="/developer-questions" style="color: #6B7280; text-decoration: none;">Developer Q&amp;A</a> &gt;
          <a href="/developer-questions/${q.categorySlug}" style="color: #6B7280; text-decoration: none;">${escapeHtml(q.category)}</a> &gt;
          <span style="color: #121316; font-weight: 600;">${escapeHtml(q.title)}</span>
        </nav>

        <header style="margin-bottom: 2.5rem;">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <span style="font-size: 0.75rem; font-weight: 700; color: #C27803; background: #FEF3C7; padding: 0.25rem 0.65rem; border-radius: 9999px;">
              ${escapeHtml(q.category)}
            </span>
            <span style="font-size: 0.75rem; font-weight: 600; color: #4B5563; background: #F3F4F6; padding: 0.25rem 0.65rem; border-radius: 9999px;">
              Difficulty: ${escapeHtml(q.difficulty || "Intermediate")}
            </span>
            <span style="font-size: 0.75rem; font-weight: 600; color: #4B5563; background: #F3F4F6; padding: 0.25rem 0.65rem; border-radius: 9999px;">
              ${escapeHtml(q.readingTime || "5 min read")}
            </span>
          </div>

          <h1 style="font-size: 2.25rem; font-weight: 800; color: #121316; line-height: 1.25; margin-bottom: 1rem; letter-spacing: -0.02em;">
            ${escapeHtml(q.question || q.title)}
          </h1>

          <p style="font-size: 0.9rem; color: #6B7280;">
            Authored by <strong>Soni Jaykumar Hasmukh (Jay Soni)</strong> &bull; Lead Mobile &amp; Full-Stack Architect in Ahmedabad, India &bull; Updated ${escapeHtml(q.updatedAt || q.publishedAt || "November 2026")}
          </p>
        </header>

        <section style="background: #FEF3C7; border-left: 4px solid #C27803; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.1rem; font-weight: 800; color: #92400E; margin-bottom: 0.5rem;">
            Quick Technical Answer Summary
          </h2>
          <p style="font-size: 1rem; line-height: 1.6; color: #78350F; margin: 0;">
            ${escapeHtml(q.shortAnswer)}
          </p>
        </section>

        <article style="font-size: 1.05rem; line-height: 1.75; color: #374151; margin-bottom: 3rem;">
          ${q.sections ? q.sections.map(s => `
            <section style="margin-bottom: 2rem;">
              <h2 style="font-size: 1.5rem; font-weight: 700; color: #121316; margin-bottom: 0.75rem;">${escapeHtml(s.title)}</h2>
              <div style="white-space: pre-line;">${escapeHtml(s.content)}</div>
            </section>
          `).join('') : `<p>${escapeHtml(q.shortAnswer)}</p>`}
        </article>

        <section style="border-top: 1px solid #E5E7EB; padding-top: 2rem;">
          <h2 style="font-size: 1.25rem; font-weight: 700; color: #121316; margin-bottom: 0.75rem;">About the Author</h2>
          <p style="font-size: 0.95rem; color: #4B5563; line-height: 1.6;">
            <strong>Soni Jaykumar Hasmukh (Jay Soni)</strong> is an award-winning Lead Mobile &amp; Full-Stack Architect based in Ahmedabad, Gujarat, India. He builds high-concurrency systems, offline-first mobile applications, and enterprise CRMs including PropKart.
          </p>
          <div style="margin-top: 1.25rem;">
            <a href="/developer-questions/${q.categorySlug}" style="font-weight: 700; color: #C27803; text-decoration: none;">&larr; More in ${escapeHtml(q.category)}</a>
          </div>
        </section>
      </main>
    `;
  } else if (type === "qa-category") {
    const cat = data;
    const catQuestions = DEVELOPER_QUESTIONS.filter(q => q.categorySlug === cat.slug);
    contentHtml = `
      <main style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
        <nav aria-label="Breadcrumb" style="font-size: 0.85rem; margin-bottom: 1.5rem; color: #6B7280;">
          <a href="/" style="color: #6B7280; text-decoration: none;">Home</a> &gt;
          <a href="/developer-questions" style="color: #6B7280; text-decoration: none;">Developer Q&amp;A</a> &gt;
          <span style="color: #121316; font-weight: 600;">${escapeHtml(cat.name)}</span>
        </nav>

        <header style="margin-bottom: 2.5rem;">
          <h1 style="font-size: 2.5rem; font-weight: 800; color: #121316; margin-bottom: 0.75rem; letter-spacing: -0.02em;">
            ${escapeHtml(cat.name)} Architecture Guides &amp; Questions
          </h1>
          <p style="font-size: 1.15rem; color: #4B5563; max-width: 800px; line-height: 1.6;">
            ${escapeHtml(cat.description)} Authored by Soni Jaykumar Hasmukh (Jay Soni), Lead Architect in Ahmedabad.
          </p>
        </header>

        <div style="display: grid; gap: 1.5rem; margin-bottom: 3rem;">
          ${catQuestions.map(q => `
            <article style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #C27803; text-transform: uppercase;">${escapeHtml(q.difficulty || "Advanced")} &bull; ${escapeHtml(q.readingTime || "5 min read")}</span>
              <h2 style="font-size: 1.35rem; font-weight: 700; color: #121316; margin: 0.5rem 0;">
                <a href="/developer-questions/${q.categorySlug}/${q.slug}" style="color: #121316; text-decoration: none;">
                  ${escapeHtml(q.title)}
                </a>
              </h2>
              <p style="font-size: 0.95rem; color: #4B5563; line-height: 1.6; margin-bottom: 1rem;">
                ${escapeHtml(q.shortAnswer)}
              </p>
              <a href="/developer-questions/${q.categorySlug}/${q.slug}" style="font-size: 0.875rem; font-weight: 700; color: #C27803; text-decoration: none;">
                Read Full Technical Guide &rarr;
              </a>
            </article>
          `).join('')}
        </div>
      </main>
    `;
  } else if (type === "qa-hub") {
    contentHtml = `
      <main style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
        <header style="margin-bottom: 3rem;">
          <div style="display: inline-block; padding: 0.35rem 0.85rem; background: #FEF3C7; color: #92400E; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; margin-bottom: 1rem;">
            Technical Knowledge Hub &bull; Ahmedabad, Gujarat
          </div>
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; line-height: 1.2; margin-bottom: 1rem; letter-spacing: -0.03em;">
            Developer Questions &amp; Architecture Guides
          </h1>
          <p style="font-size: 1.15rem; color: #4B5563; max-width: 800px; line-height: 1.6;">
            A searchable, indexable technical knowledge repository authored by Soni Jaykumar Hasmukh (Jay Soni). Grounded in real-world production architectures: PropKart CRM, Isar NoSQL (2–8ms), NestJS, PostgreSQL migrations, and Flutter SDK 36.
          </p>
        </header>

        <section style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.75rem; font-weight: 800; color: #121316; margin-bottom: 1.5rem;">Browse by Category</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
            ${Object.values(CATEGORIES).map(cat => `
              <div style="border: 1px solid #E5E7EB; border-radius: 0.875rem; padding: 1.25rem; background: #ffffff;">
                <h3 style="font-size: 1.15rem; font-weight: 700; color: #121316; margin-bottom: 0.5rem;">
                  <a href="/developer-questions/${cat.slug}" style="color: #121316; text-decoration: none;">${escapeHtml(cat.name)}</a>
                </h3>
                <p style="font-size: 0.85rem; color: #6B7280; line-height: 1.5; margin-bottom: 1rem;">
                  ${escapeHtml(cat.description)}
                </p>
                <a href="/developer-questions/${cat.slug}" style="font-size: 0.8rem; font-weight: 700; color: #C27803; text-decoration: none;">
                  Explore Questions &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="font-size: 1.75rem; font-weight: 800; color: #121316; margin-bottom: 1.5rem;">All Published Technical Questions</h2>
          <div style="display: grid; gap: 1.25rem;">
            ${DEVELOPER_QUESTIONS.map(q => `
              <article style="border: 1px solid #E5E7EB; border-radius: 0.875rem; padding: 1.25rem; background: #ffffff;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #C27803;">${escapeHtml(q.category)}</span>
                <h3 style="font-size: 1.2rem; font-weight: 700; color: #121316; margin: 0.35rem 0;">
                  <a href="/developer-questions/${q.categorySlug}/${q.slug}" style="color: #121316; text-decoration: none;">${escapeHtml(q.title)}</a>
                </h3>
                <p style="font-size: 0.875rem; color: #4B5563; line-height: 1.5; margin-bottom: 0.75rem;">${escapeHtml(q.shortAnswer)}</p>
                <a href="/developer-questions/${q.categorySlug}/${q.slug}" style="font-size: 0.8rem; font-weight: 700; color: #C27803; text-decoration: none;">Read Guide &rarr;</a>
              </article>
            `).join('')}
          </div>
        </section>
      </main>
    `;
  } else if (type === "projects-list") {
    contentHtml = `
      <main style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem;">
        <header style="margin-bottom: 3rem;">
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; margin-bottom: 1rem; letter-spacing: -0.03em;">
            Production Software Systems &amp; Case Studies
          </h1>
          <p style="font-size: 1.15rem; color: #4B5563; max-width: 820px; line-height: 1.6;">
            A portfolio of 20 production systems engineered by Soni Jaykumar Hasmukh (Jay Soni) in Ahmedabad, India. Includes enterprise offline-first CRMs, Google Play Store published applications, cryptographic P2P engines, and commercial ERPs.
          </p>
        </header>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.75rem;">
          ${projects.map(p => `
            <article style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #C27803; text-transform: uppercase;">${escapeHtml(p.category)}</span>
              <h2 style="font-size: 1.25rem; font-weight: 700; color: #121316; margin: 0.5rem 0;">
                <a href="/projects/${p.id}" style="color: #121316; text-decoration: none;">${escapeHtml(p.title)}</a>
              </h2>
              <p style="font-size: 0.875rem; color: #4B5563; line-height: 1.6; margin-bottom: 1rem;">
                ${escapeHtml(p.tagline || p.description.slice(0, 160) + '...')}
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem;">
                ${p.tech.slice(0, 4).map(t => `<span style="font-size: 0.75rem; background: #F3F4F6; color: #374151; padding: 0.2rem 0.5rem; border-radius: 0.35rem;">${escapeHtml(t)}</span>`).join('')}
              </div>
              <a href="/projects/${p.id}" style="font-size: 0.875rem; font-weight: 700; color: #C27803; text-decoration: none;">
                View Deep Dive Architecture &rarr;
              </a>
            </article>
          `).join('')}
        </div>
      </main>
    `;
  } else if (type === "about") {
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem;">
        <header style="margin-bottom: 2.5rem;">
          <div style="display: inline-block; padding: 0.35rem 0.85rem; background: #FEF3C7; color: #92400E; border-radius: 9999px; font-size: 0.8rem; font-weight: 700; margin-bottom: 1rem;">
            Lead Mobile &amp; Full-Stack Architect &bull; Ahmedabad, Gujarat
          </div>
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; margin-bottom: 1rem; letter-spacing: -0.02em;">
            About Soni Jaykumar Hasmukh (Jay Soni)
          </h1>
          <p style="font-size: 1.2rem; font-weight: 600; color: #C27803; margin-bottom: 1.5rem;">
            Lead Mobile &amp; Full-Stack Architect at NB Developers / NB PropertyTech, Science City, Ahmedabad
          </p>
        </header>

        <section style="font-size: 1.05rem; line-height: 1.75; color: #374151; margin-bottom: 3rem;">
          <p style="margin-bottom: 1.5rem;">
            I am a Software Engineer and Lead Architect based in <strong>Ahmedabad, Gujarat, India</strong>. I specialize in designing and delivering enterprise production systems with a focus on Flutter (Target SDK 36), offline-first architectures utilizing embedded Isar NoSQL (2–8ms query performance), React 19, Node.js/NestJS, and resilient PostgreSQL databases.
          </p>
          <p style="margin-bottom: 1.5rem;">
            In October 2026, I was honored with the <strong>Certificate of Appreciation (Reward &amp; Recognition Award)</strong> by NB Infra Projects Limited (Since 1946), signed by Founder &amp; Chairman Rahul D. Prajapati, for exceptional quarterly engineering leadership, zero-downtime architecture, and production delivery of the PropKart CRM platform.
          </p>
          <p style="margin-bottom: 1.5rem;">
            I have also completed verified industry credentials in Ahmedabad, including the <em>ReactJS Comprehensive Front-end Development Certificate</em> (Certificate No: TC06260039) from Tech-Craft, the <em>React JS Frontend Development Internship</em> at Tech-Craft, and an <em>AIITA Grade A Certificate in C++ Programming</em> (GJ/037/734) under the National Computer Literacy Programme.
          </p>
        </section>

        <section style="margin-bottom: 3rem; background: #F9FAFB; border-radius: 1rem; padding: 2rem; border: 1px solid #E5E7EB;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">Official Certifications &amp; Credentials</h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem;">
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid #E5E7EB;">
              <strong>NB Infra Projects Certificate of Appreciation</strong> (October 2026) &mdash; Awarded by Rahul D. Prajapati (Founder &amp; Chairman, NB Infra Projects Limited, Since 1946).
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid #E5E7EB;">
              <strong>Tech-Craft ReactJS Comprehensive Development Certificate</strong> (TC06260039, July 2026) &mdash; Authorized by Vruddhi Shah (Founder, Tech-Craft, Ahmedabad).
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid #E5E7EB;">
              <strong>Tech-Craft React JS Internship Offer Letter</strong> (July 2026) &mdash; 7 Shivalik Plaza, IIM Road, Polytechnic, Ahmedabad.
            </li>
            <li style="padding: 1rem; background: #ffffff; border-radius: 0.5rem; border: 1px solid #E5E7EB;">
              <strong>AIITA C++ Programming Grade A Certificate</strong> (GJ/037/734, June 2023) &mdash; ISO 9001:2008 Certified National Programme.
            </li>
          </ul>
        </section>
      </main>
    `;
  } else if (type === "resume") {
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem;">
        <header style="margin-bottom: 2.5rem; border-bottom: 1px solid #E5E7EB; padding-bottom: 2rem;">
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; margin-bottom: 0.5rem;">
            Soni Jaykumar Hasmukh (Jay Soni)
          </h1>
          <p style="font-size: 1.15rem; font-weight: 600; color: #C27803; margin-bottom: 0.75rem;">
            Lead Mobile &amp; Full-Stack Architect &bull; Ahmedabad, Gujarat, India (380060)
          </p>
          <p style="font-size: 0.95rem; color: #4B5563;">
            Email: jay0812soni@gmail.com &bull; Phone / WhatsApp: +91 79903 61109 &bull; GitHub: github.com/JAYU0812
          </p>
        </header>

        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">Executive Summary</h2>
          <p style="font-size: 1.05rem; line-height: 1.7; color: #374151;">
            Lead Mobile &amp; Full-Stack Architect with deep expertise in Flutter (Dart, Target SDK 36), offline-first system engineering (Isar NoSQL sub-8ms reads), React 19, Node.js/NestJS, and enterprise PostgreSQL architectures. Proven track record delivering 20 production systems and 2 published Google Play Store applications.
          </p>
        </section>

        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">Experience</h2>
          <div style="border-left: 2px solid #C27803; padding-left: 1.5rem; margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #121316;">Lead Mobile &amp; Full-Stack Architect</h3>
            <p style="font-size: 0.875rem; color: #6B7280; margin-bottom: 0.5rem;">NB Developers / NB PropertyTech, Science City, Ahmedabad &bull; June 2026 &ndash; Present</p>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #374151;">
              Architected and deployed PropKart (v2.1.3+13), a flagship enterprise CRM with sub-8ms embedded Isar NoSQL reads, natural language AI search engine in PostgreSQL (Migrations 84&ndash;93), Target SDK 36 compliance, and 100/100 security audit score.
            </p>
          </div>
          <div style="border-left: 2px solid #E5E7EB; padding-left: 1.5rem; margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; color: #121316;">React JS Intern &mdash; Frontend Development</h3>
            <p style="font-size: 0.875rem; color: #6B7280; margin-bottom: 0.5rem;">Tech-Craft, IIM Road, Ahmedabad &bull; July 2026</p>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #374151;">
              Completed intensive commercial front-end development with React.js, component architecture, responsive Tailwind styling, and API integration. Awarded Certificate TC06260039.
            </p>
          </div>
        </section>

        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">Education</h2>
          <p style="font-size: 1rem; color: #374151;">
            <strong>B.Tech in Information Technology</strong> &mdash; Gandhinagar University, Gujarat, India (Expected 2027)
          </p>
        </section>
      </main>
    `;
  } else if (type === "contact") {
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem;">
        <header style="margin-bottom: 2.5rem;">
          <h1 style="font-size: 2.75rem; font-weight: 800; color: #121316; margin-bottom: 1rem; letter-spacing: -0.02em;">
            Contact Soni Jaykumar Hasmukh
          </h1>
          <p style="font-size: 1.15rem; color: #4B5563; line-height: 1.6;">
            Connect with Jay Soni for enterprise software engineering, mobile architecture consulting, and project inquiries in Ahmedabad, Gujarat, or globally.
          </p>
        </header>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
          <div style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
            <h2 style="font-size: 1.15rem; font-weight: 700; color: #121316; margin-bottom: 0.5rem;">Direct Email</h2>
            <p style="font-size: 0.95rem; color: #4B5563; margin-bottom: 0.75rem;">For formal proposals, inquiries, and consulting.</p>
            <a href="mailto:jay0812soni@gmail.com" style="color: #C27803; font-weight: 700; text-decoration: none;">jay0812soni@gmail.com &rarr;</a>
          </div>
          <div style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
            <h2 style="font-size: 1.15rem; font-weight: 700; color: #121316; margin-bottom: 0.5rem;">Phone &amp; WhatsApp</h2>
            <p style="font-size: 0.95rem; color: #4B5563; margin-bottom: 0.75rem;">Direct line for technical discussions.</p>
            <a href="tel:+917990361109" style="color: #C27803; font-weight: 700; text-decoration: none;">+91 79903 61109 &rarr;</a>
          </div>
          <div style="border: 1px solid #E5E7EB; border-radius: 1rem; padding: 1.5rem; background: #ffffff;">
            <h2 style="font-size: 1.15rem; font-weight: 700; color: #121316; margin-bottom: 0.5rem;">Location &amp; Office</h2>
            <p style="font-size: 0.95rem; color: #4B5563; margin-bottom: 0.75rem;">Science City, Ahmedabad, Gujarat, India (380060).</p>
            <span style="color: #065F46; font-weight: 700;">Open to Remote &amp; On-Site Consultations</span>
          </div>
        </div>
      </main>
    `;
  } else if (type === "demo") {
    contentHtml = `
      <main style="max-width: 960px; margin: 0 auto; padding: 3rem 1.5rem; text-align: center;">
        <h1 style="font-size: 2.5rem; font-weight: 800; color: #121316; margin-bottom: 1rem;">
          ${escapeHtml(data.title)}
        </h1>
        <p style="font-size: 1.15rem; color: #4B5563; max-width: 600px; margin: 0 auto 2rem;">
          ${escapeHtml(data.description)}
        </p>
        <a href="/projects" style="display: inline-block; padding: 0.75rem 1.5rem; background: #121316; color: #ffffff; text-decoration: none; border-radius: 0.5rem; font-weight: 700;">
          &larr; Return to Projects
        </a>
      </main>
    `;
  }

  return `${header}${contentHtml}${footer}`;
}

// Generate complete list of routes
function buildRouteCatalog() {
  const routes = [
    {
      path: "/",
      type: "home",
      title: "Soni Jaykumar Hasmukh | Lead Mobile & Full Stack Architect | Ahmedabad, India",
      description: "Portfolio of Soni Jaykumar Hasmukh (Jay Soni) — Award-winning Lead Mobile & Full-Stack Architect based in Ahmedabad, Gujarat. Specialist in Flutter (SDK 36), React, Node.js/NestJS, Isar NoSQL (2-8ms reads), and Offline-First PropTech systems.",
      keywords: "Soni Jaykumar, Jay Soni, Engineer in Ahmedabad, Software Engineer Ahmedabad, Full Stack Developer Ahmedabad, Flutter Developer Ahmedabad, Lead Mobile Architect Ahmedabad, React Developer Gujarat, Offline First Architecture, Isar Database, PropKart CRM, NestJS Developer India",
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${BASE_URL}/#person`,
            "name": "Soni Jaykumar Hasmukh",
            "alternateName": ["Jay Soni", "Jaykumar Soni", "Jayu Soni"],
            "url": `${BASE_URL}/`,
            "image": `${BASE_URL}/og-cover.svg`,
            "jobTitle": "Lead Mobile & Full-Stack Architect",
            "description": "Award-Winning Lead Mobile & Full-Stack Architect specializing in Flutter, React, NestJS, Isar NoSQL (Offline-First), and Enterprise PropTech.",
            "telephone": "+91 79903 61109",
            "email": "jay0812soni@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "380060",
              "addressCountry": "IN"
            }
          },
          {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            "url": `${BASE_URL}/`,
            "name": "Soni Jaykumar Hasmukh — Portfolio",
            "description": "Portfolio and Technical Case Studies of Jay Soni, Lead Mobile & Full-Stack Architect in Ahmedabad, Gujarat, India."
          }
        ]
      }
    },
    {
      path: "/about",
      type: "about",
      title: "About Soni Jaykumar Hasmukh | Lead Mobile Architect Ahmedabad",
      description: "Discover the background, leadership experience, verified certifications, and technical vision of Soni Jaykumar Hasmukh (Jay Soni) in Ahmedabad, Gujarat.",
      keywords: "About Jay Soni, Soni Jaykumar Hasmukh, Software Engineer Ahmedabad, Flutter Architect Gujarat, Tech-Craft Certificate, NB Infra Award",
      schema: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "About Soni Jaykumar Hasmukh",
        "description": "Professional background, verified certifications, and career accomplishments of Soni Jaykumar Hasmukh, Lead Mobile & Full Stack Architect in Ahmedabad.",
        "url": `${BASE_URL}/about`
      }
    },
    {
      path: "/projects",
      type: "projects-list",
      title: "Production Software Systems & Case Studies | Jay Soni Ahmedabad",
      description: "Explore 20 production software systems engineered by Jay Soni: PropKart CRM, Isar NoSQL (2-8ms), published Google Play Store applications, and enterprise platforms.",
      keywords: "Jay Soni Projects, PropKart CRM, Flutter Apps Ahmedabad, Software Projects Gujarat, Isar Database Case Study",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Production Software Systems by Jay Soni",
        "url": `${BASE_URL}/projects`
      }
    },
    {
      path: "/resume",
      type: "resume",
      title: "Verified Curriculum Vitae & Credentials | Soni Jaykumar Hasmukh",
      description: "Official resume, work experience at NB Developers, verified credentials (NB Infra, Tech-Craft, AIITA), and education of Soni Jaykumar Hasmukh.",
      keywords: "Jay Soni Resume, Soni Jaykumar Hasmukh CV, Software Engineer Resume Ahmedabad, Flutter Architect Resume",
      schema: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "Resume & Credentials — Soni Jaykumar Hasmukh",
        "url": `${BASE_URL}/resume`
      }
    },
    {
      path: "/contact",
      type: "contact",
      title: "Contact Soni Jaykumar Hasmukh | Lead Architect Ahmedabad",
      description: "Connect with Soni Jaykumar Hasmukh (Jay Soni) in Ahmedabad, Gujarat. Reach out via email, WhatsApp, or 1-tap Google connection.",
      keywords: "Contact Jay Soni, Hire Flutter Developer Ahmedabad, Software Consultant Gujarat, Jay Soni Phone",
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Soni Jaykumar Hasmukh",
        "url": `${BASE_URL}/contact`
      }
    },
    {
      path: "/developer-questions",
      type: "qa-hub",
      title: "Developer Questions & Architecture Guides | Jay Soni Technical Hub",
      description: "Technical knowledge hub authored by Soni Jaykumar Hasmukh. Deep dives into Flutter, Isar NoSQL, offline-first architectures, NestJS, and CRM engineering.",
      keywords: "Developer Questions, Flutter Architecture, Isar NoSQL Guide, Offline First Flutter, Jay Soni Knowledge Base, Engineer in Ahmedabad",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Developer Questions & Answers Technical Knowledge Hub",
        "url": `${BASE_URL}/developer-questions`
      }
    },
    {
      path: "/medical-demo",
      type: "demo",
      title: "Medical Store POS & Inventory System Demo | Jay Soni",
      description: "Interactive demo of a high-speed pharmacy POS and inventory management system engineered for retail operations.",
      keywords: "Medical Store POS Demo, Pharmacy Software, Jay Soni Demo",
      data: {
        title: "Medical Store POS & Inventory System Demo",
        description: "Interactive demo demonstrating batch tracking, expiry alerts, and high-speed GST counter checkout for pharmacies."
      }
    },
    {
      path: "/kirana-demo",
      type: "demo",
      title: "Kirana & Retail Supermarket OS Demo | Jay Soni",
      description: "Interactive retail POS demo with fast barcode lookup, khata ledger integration, and daily revenue metrics.",
      keywords: "Kirana Store POS Demo, Supermarket Software, Jay Soni Retail Demo",
      data: {
        title: "Kirana & Retail Supermarket OS Demo",
        description: "Interactive demo demonstrating high-speed retail checkout, local barcode scanning, and multi-tier pricing."
      }
    },
    {
      path: "/salon-demo",
      type: "demo",
      title: "Luxury Salon Appointment & Stylist OS Demo | Jay Soni",
      description: "Interactive demo for appointment scheduling, stylist slot booking, and client loyalty tracking.",
      keywords: "Salon Management Demo, Appointment Scheduling Software, Jay Soni Demo",
      data: {
        title: "Luxury Salon Appointment & Stylist OS Demo",
        description: "Interactive demo demonstrating appointment booking, stylist slot allocations, and customer loyalty ledgers."
      }
    }
  ];

  // 8 QA Categories
  for (const cat of Object.values(CATEGORIES)) {
    routes.push({
      path: `/developer-questions/${cat.slug}`,
      type: "qa-category",
      title: `${cat.name} Architecture & Solutions | Jay Soni Technical Hub`,
      description: `${cat.description} Authored by Soni Jaykumar Hasmukh (Jay Soni), Lead Architect based in Ahmedabad.`,
      keywords: `${cat.name}, Software Architecture, Engineering Guides, Jay Soni Ahmedabad, Developer Questions`,
      data: cat,
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${cat.name} Architecture Guides`,
        "description": cat.description,
        "url": `${BASE_URL}/developer-questions/${cat.slug}`
      }
    });
  }

  // 15 QA Articles
  for (const q of DEVELOPER_QUESTIONS) {
    routes.push({
      path: `/developer-questions/${q.categorySlug}/${q.slug}`,
      type: "qa-article",
      title: `${q.title} | Jay Soni Architecture Guide`,
      description: q.shortAnswer.slice(0, 160),
      keywords: `${q.title}, ${q.category}, Offline First, Software Architecture, Jay Soni, Engineer in Ahmedabad`,
      data: q,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "QAPage",
            "mainEntity": {
              "@type": "Question",
              "name": q.question || q.title,
              "text": q.shortAnswer,
              "answerCount": 1,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": q.shortAnswer,
                "author": {
                  "@type": "Person",
                  "name": "Soni Jaykumar Hasmukh",
                  "jobTitle": "Lead Mobile & Full Stack Architect",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Ahmedabad",
                    "addressRegion": "Gujarat",
                    "addressCountry": "IN"
                  }
                }
              }
            }
          },
          {
            "@type": "TechArticle",
            "headline": q.title,
            "description": q.shortAnswer,
            "author": {
              "@type": "Person",
              "name": "Soni Jaykumar Hasmukh",
              "url": `${BASE_URL}/`
            },
            "inLanguage": "en-US",
            "mainEntityOfPage": `${BASE_URL}/developer-questions/${q.categorySlug}/${q.slug}`
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
              { "@type": "ListItem", "position": 2, "name": "Developer Questions", "item": `${BASE_URL}/developer-questions` },
              { "@type": "ListItem", "position": 3, "name": q.category, "item": `${BASE_URL}/developer-questions/${q.categorySlug}` },
              { "@type": "ListItem", "position": 4, "name": q.title, "item": `${BASE_URL}/developer-questions/${q.categorySlug}/${q.slug}` }
            ]
          }
        ]
      }
    });
  }

  // 20 Project Case Studies
  for (const p of projects) {
    routes.push({
      path: `/projects/${p.id}`,
      type: "project",
      title: `${p.title} | Case Study by Jay Soni`,
      description: `${p.tagline || p.description.slice(0, 155)} Built by Soni Jaykumar Hasmukh in Ahmedabad.`,
      keywords: `${p.title}, ${p.category}, ${p.tech.slice(0, 5).join(", ")}, Jay Soni, Engineer in Ahmedabad`,
      data: p,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "name": p.title,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Android, iOS, Web, Windows",
            "description": p.tagline || p.description,
            "author": {
              "@type": "Person",
              "name": "Soni Jaykumar Hasmukh",
              "url": `${BASE_URL}/`
            }
          },
          {
            "@type": "TechArticle",
            "headline": `${p.title} — Architectural Case Study`,
            "description": p.tagline || p.description,
            "author": {
              "@type": "Person",
              "name": "Soni Jaykumar Hasmukh",
              "jobTitle": "Lead Mobile & Full Stack Architect",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            },
            "inLanguage": "en-US",
            "mainEntityOfPage": `${BASE_URL}/projects/${p.id}`
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
              { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE_URL}/projects` },
              { "@type": "ListItem", "position": 3, "name": p.title, "item": `${BASE_URL}/projects/${p.id}` }
            ]
          }
        ]
      }
    });
  }

  return routes;
}

// Main prerender process
function runPrerender() {
  console.log(`[Prerender] Starting static pre-rendering for all routes...`);

  const templatePath = path.resolve(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`[Prerender ERROR] Base template not found at ${templatePath}. Run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");
  const routes = buildRouteCatalog();

  console.log(`[Prerender] Loaded ${routes.length} total routes to generate.`);

  let generatedCount = 0;

  for (const route of routes) {
    const canonicalUrl = `${BASE_URL}${route.path === "/" ? "" : route.path}`;
    const escapedTitle = escapeHtml(route.title);
    const escapedDesc = escapeHtml(route.description);
    const escapedKeywords = escapeHtml(route.keywords);
    const pageBodyHtml = getPageBody(route);
    const schemaJson = JSON.stringify(route.schema, null, 2);

    // 1. Replace Title
    let html = baseHtml.replace(/<title>.*?<\/title>/s, `<title>${escapedTitle}</title>`);

    // 2. Replace Meta Title
    html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${escapedTitle}" />`);

    // 3. Replace Meta Description
    html = html.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${escapedDesc}" />`);

    // 4. Replace Meta Keywords
    html = html.replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${escapedKeywords}" />`);

    // 5. Replace Canonical Link (CRITICAL: Every route gets its exact self-referencing canonical URL!)
    html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonicalUrl}" />`);

    // 6. Replace Open Graph Tags
    html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${escapedTitle}" />`);
    html = html.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${escapedDesc}" />`);
    html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonicalUrl}" />`);

    // 7. Replace Twitter Card Tags
    html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${escapedTitle}" />`);
    html = html.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${escapedDesc}" />`);

    // 8. Inject Route-Specific JSON-LD Schema
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">\n${schemaJson}\n    </script>\n  </head>`
    );

    // 9. Inject Pre-rendered Semantic HTML inside <div id="root">
    html = html.replace('<div id="root"></div>', `<div id="root">${pageBodyHtml}</div>`);

    // 10. Determine Destination File Path
    let targetFile;
    if (route.path === "/") {
      targetFile = path.resolve(DIST_DIR, "index.html");
    } else {
      const cleanPath = route.path.replace(/^\//, "");
      const targetDir = path.resolve(DIST_DIR, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      targetFile = path.resolve(targetDir, "index.html");
    }

    fs.writeFileSync(targetFile, html, "utf-8");
    generatedCount++;
  }

  console.log(`[Prerender] SUCCESS! Successfully pre-rendered ${generatedCount} static HTML routes with unique canonicals and rich HTML DOM.`);
}

runPrerender();
