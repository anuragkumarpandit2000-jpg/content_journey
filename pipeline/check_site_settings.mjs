const token = 'nfp_9gDbtKLbccdasCKEiS9DcD688ywbQ5vu87c4';
const siteId = '834618f5-cdff-4ace-afa8-afaa6d9cac19';

async function check() {
  const res = await fetch(`https://api.netlify.com/api/v1/sites/${siteId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  console.log('Site protection fields:', {
    password_protected: data.password_protected,
    has_password: data.has_password,
    published_deploy: data.published_deploy ? data.published_deploy.state : null,
    account_slug: data.account_slug,
    access_control: data.access_control,
    roles: data.roles
  });
}

check();
