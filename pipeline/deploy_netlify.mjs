import fs from 'fs';
import { execSync } from 'child_process';

const token = 'nfp_9gDbtKLbccdasCKEiS9DcD688ywbQ5vu87c4';

async function main() {
  console.log('1. Checking Netlify account details...');
  const userRes = await fetch('https://api.netlify.com/api/v1/user', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const userData = await userRes.json();
  console.log('Logged in as:', userData.email || userData.full_name || userData.id);

  console.log('2. Checking existing sites...');
  const sitesRes = await fetch('https://api.netlify.com/api/v1/sites', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const sites = await sitesRes.json();
  let targetSite = sites.find(s => s.name === 'parker-render' || s.name === 'parkerrender');

  if (!targetSite) {
    console.log('Creating site parker-render...');
    const createRes = await fetch('https://api.netlify.com/api/v1/sites', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'parker-render' })
    });
    targetSite = await createRes.json();
    if (createRes.status >= 400) {
      console.log('parker-render could not be created:', targetSite.message);
      console.log('Trying parkerrender...');
      const createRes2 = await fetch('https://api.netlify.com/api/v1/sites', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'parkerrender' })
      });
      targetSite = await createRes2.json();
    }
  }

  console.log('Target Site:', targetSite.name, targetSite.id, targetSite.ssl_url || targetSite.url);

  console.log('3. Deploying docs folder using Netlify CLI...');
  const cwd = 'D:/anurag/content_journey';
  const out = execSync(`npx --yes netlify-cli deploy --dir=docs --prod --site=${targetSite.id} --auth=${token} --no-build`, {
    cwd,
    encoding: 'utf-8',
    stdio: 'pipe'
  });
  console.log(out);
  console.log('SUCCESS! Site is live at:', targetSite.ssl_url || targetSite.url);
}

main().catch(console.error);
