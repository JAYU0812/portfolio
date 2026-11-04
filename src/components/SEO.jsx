import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://portfolio-iota-nine-7b2v5ah7u8.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/og-cover.svg`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  image = DEFAULT_IMAGE,
  structuredData = null
}) {
  const location = useLocation();

  const siteTitle = title 
    ? `${title} | Soni Jaykumar — Lead Architect & Engineer Ahmedabad`
    : "Soni Jaykumar Hasmukh | Lead Mobile & Full Stack Architect | Ahmedabad, India";

  const metaDescription = description || 
    "Portfolio of Soni Jaykumar Hasmukh — Award-winning Lead Mobile & Full-Stack Architect based in Ahmedabad, Gujarat. Specialist in Flutter (SDK 36), React, Node.js/NestJS, Isar NoSQL (2-8ms reads), and Offline-First PropTech systems.";

  const metaKeywords = keywords || 
    "Soni Jaykumar, Jay Soni, Engineer in Ahmedabad, Software Engineer Ahmedabad, Full Stack Developer Ahmedabad, Flutter Developer Ahmedabad, Lead Mobile Architect Ahmedabad, React Developer Gujarat, Offline First Architecture, Isar Database, PropKart CRM, NestJS Developer India";

  const canonicalUrl = canonical || `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = siteTitle;

    // Helper to safely set or create a meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", metaDescription);
    setMetaTag("name", "keywords", metaKeywords);
    setMetaTag("name", "author", "Soni Jaykumar Hasmukh");
    setMetaTag("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // 3. Geographic / Local SEO Meta Tags for Ahmedabad, Gujarat
    setMetaTag("name", "geo.region", "IN-GJ");
    setMetaTag("name", "geo.placename", "Ahmedabad");
    setMetaTag("name", "geo.position", "23.0225;72.5714");
    setMetaTag("name", "ICBM", "23.0225, 72.5714");

    // 4. Open Graph Tags (Facebook, LinkedIn, WhatsApp, AI crawlers)
    setMetaTag("property", "og:title", siteTitle);
    setMetaTag("property", "og:description", metaDescription);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:site_name", "Jay Soni Portfolio");
    setMetaTag("property", "og:locale", "en_US");

    // 5. Twitter Card Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", siteTitle);
    setMetaTag("name", "twitter:description", metaDescription);
    setMetaTag("name", "twitter:image", image);

    // 6. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 7. Dynamic JSON-LD Structured Data
    const scriptId = "dynamic-json-ld";
    let scriptTag = document.getElementById(scriptId);

    // Default Person & WebSite Schema
    const defaultSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          "name": "Soni Jaykumar Hasmukh",
          "alternateName": ["Jay Soni", "Jaykumar Soni", "Jayu Soni"],
          "url": BASE_URL,
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
          },
          "worksFor": {
            "@type": "Organization",
            "name": "NB Developers / NB PropertyTech",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Science City",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            }
          },
          "award": "Certificate of Appreciation for Exceptional Performance & Leadership (NB Infra Projects Limited, Since 1946)",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Gandhinagar University"
          },
          "sameAs": [
            "https://github.com/JAYU0812",
            "https://linkedin.com/in/sonijay1908",
            "https://play.google.com/store/apps/details?id=com.hssolutiontech.ParichaySammelan",
            "https://play.google.com/store/apps/details?id=com.jeweller.ledger"
          ],
          "knowsAbout": [
            "Mobile Application Architecture",
            "Offline-First Systems",
            "Flutter & Dart",
            "React & Next.js",
            "Node.js & NestJS",
            "PostgreSQL & Database Migrations",
            "Isar NoSQL Embedded Database",
            "Natural Language AI Search Engines",
            "Enterprise Real Estate CRM (PropTech)",
            "Docker & VPS Deployment",
            "Cryptographic P2P Engines"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          "url": BASE_URL,
          "name": "Soni Jaykumar Hasmukh — Portfolio",
          "description": "Portfolio and Technical Case Studies of Jay Soni, Lead Mobile & Full-Stack Architect in Ahmedabad, Gujarat, India.",
          "publisher": {
            "@id": `${BASE_URL}/#person`
          },
          "inLanguage": "en-US"
        }
      ]
    };

    const finalSchema = structuredData || defaultSchema;

    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(finalSchema, null, 2);

  }, [siteTitle, metaDescription, metaKeywords, canonicalUrl, ogType, image, structuredData]);

  return null;
}
