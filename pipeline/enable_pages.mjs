import fs from 'fs';

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();

async function enablePages() {
  const res = await fetch('https://api.github.com/repos/anuragkumarpandit2000-jpg/content_journey/pages', {
    method: 'POST',
    headers: {
      Authorization: `token ${pat}`,
      'User-Agent': 'node',
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      source: {
        branch: 'main',
        path: '/docs'
      }
    })
  });
  const data = await res.json();
  console.log('Enable Pages response:', res.status, data);
}

enablePages();
