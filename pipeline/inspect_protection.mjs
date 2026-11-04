const token = 'nfp_9gDbtKLbccdasCKEiS9DcD688ywbQ5vu87c4';
const siteId = '834618f5-cdff-4ace-afa8-afaa6d9cac19';

async function inspectSite() {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  // Filter for access or protection keys
  const keys = Object.keys(data).filter(k => k.includes('access') || k.includes('protect') || k.includes('auth') || k.includes('login') || k.includes('pass'));
  console.log('Matching keys:');
  keys.forEach(k => console.log(k, ':', data[k]));
}

inspectSite();
