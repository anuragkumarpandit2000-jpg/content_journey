const token = 'nfp_9gDbtKLbccdasCKEiS9DcD688ywbQ5vu87c4';
const siteId = '834618f5-cdff-4ace-afa8-afaa6d9cac19';

async function disableSSO() {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sso_login: false
    })
  });
  const data = await res.json();
  console.log('Error 422 details:', data);
}

disableSSO();
