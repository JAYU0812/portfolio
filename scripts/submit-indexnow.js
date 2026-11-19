import { projects } from "../src/data/projects.js";
import { CATEGORIES, DEVELOPER_QUESTIONS } from "../src/data/developerQuestionsData.js";

const HOST = "portfolio-iota-nine-7b2v5ah7u8.vercel.app";
const BASE_URL = `https://${HOST}`;
const KEY = "6c5a27891d4e48b598b0f92b719323ef";
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

// Assemble all canonical site URLs
const urls = [
  `${BASE_URL}/`,
  `${BASE_URL}/about`,
  `${BASE_URL}/projects`,
  `${BASE_URL}/resume`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/developer-questions`,
  `${BASE_URL}/medical-demo`,
  `${BASE_URL}/kirana-demo`,
  `${BASE_URL}/salon-demo`,
];

// Add all 8 QA categories
for (const cat of Object.values(CATEGORIES)) {
  urls.push(`${BASE_URL}/developer-questions/${cat.slug}`);
}

// Add all 15 QA articles
for (const q of DEVELOPER_QUESTIONS) {
  urls.push(`${BASE_URL}/developer-questions/${q.categorySlug}/${q.slug}`);
}

// Add all 20 project case studies
for (const p of projects) {
  urls.push(`${BASE_URL}/projects/${p.id}`);
}

console.log(`[IndexNow] Prepared ${urls.length} URLs for instant submission to search engines.`);

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  try {
    console.log(`[IndexNow] Pinging api.indexnow.org...`);
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] SUCCESS! Status: ${response.status} ${response.statusText}`);
      console.log(`[IndexNow] All ${urls.length} URLs successfully submitted for real-time indexing.`);
    } else {
      const text = await response.text();
      console.warn(`[IndexNow] Response: ${response.status} ${response.statusText} - ${text}`);
    }
  } catch (err) {
    console.error(`[IndexNow] Network Error:`, err.message);
  }
}

submitIndexNow();
