import { projects } from '../src/data/projects.js';
import { resumeData } from '../src/data/resumeData.js';

const urlSet = new Set();

projects.forEach(p => {
  if (p.liveUrl) urlSet.add(p.liveUrl);
  if (p.githubUrl) urlSet.add(p.githubUrl);
  if (p.playStoreUrl) urlSet.add(p.playStoreUrl);
});

resumeData.flagshipProjects?.forEach(p => {
  if (p.url && p.url.startsWith('http') && !p.url.includes('vercel.app/projects')) {
    urlSet.add(p.url);
  }
});

resumeData.projects?.forEach(p => {
  if (p.url && p.url.startsWith('http') && !p.url.includes('vercel.app/projects')) {
    urlSet.add(p.url);
  }
});

// Also add panel.nbpropertytech.com if mentioned
urlSet.add('https://panel.nbpropertytech.com');

const urls = Array.from(urlSet).sort();

console.log(`Checking ${urls.length} target URLs...\n`);

async function checkUrl(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);
  
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      signal: controller.signal,
      redirect: 'follow'
    });
    clearTimeout(timeoutId);
    return {
      url,
      status: res.status,
      statusText: res.statusText,
      finalUrl: res.url,
      ok: res.ok || res.status === 403 || res.status === 401 // 403/401 can mean cloudflare or auth, but server is up
    };
  } catch (err) {
    clearTimeout(timeoutId);
    return {
      url,
      status: 'DOWN',
      error: err.name === 'AbortError' ? 'Timeout (12s)' : err.message,
      ok: false
    };
  }
}

const results = await Promise.all(urls.map(u => checkUrl(u)));

console.log('=== URL STATUS AUDIT REPORT ===\n');

const upList = [];
const downList = [];

for (const r of results) {
  if (r.status === 200 || (typeof r.status === 'number' && r.status < 400)) {
    upList.push(r);
  } else {
    downList.push(r);
  }
}

console.log(`[ACTIVE / 200 OK (${upList.length})]:`);
upList.forEach(r => console.log(`  [${r.status}] ${r.url} -> ${r.finalUrl !== r.url ? r.finalUrl : ''}`));

console.log(`\n[DOWN / UNREACHABLE / ERROR (${downList.length})]:`);
downList.forEach(r => console.log(`  [${r.status}] ${r.url} -> Error: ${r.error || r.statusText}`));
