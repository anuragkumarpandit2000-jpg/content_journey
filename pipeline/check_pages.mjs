import fs from 'fs';

const dotenv = fs.readFileSync('D:/anurag/content_journey/.env', 'utf-8');
const pat = dotenv.match(/GITHUB_PAT=([^\r\n]+)/)[1].trim();

async function checkPages() {
  const res = await fetch('https://api.github.com/repos/anuragkumarpandit2000-jpg/content_journey/pages', {
    headers: {
      Authorization: `token ${pat}`,
      'User-Agent': 'node',
      Accept: 'application/vnd.github.v3+json'
    }
  });
  const data = await res.json();
  console.log('Pages status:', res.status, data);
}

checkPages();
