import os
import zipfile
import requests
import io

TOKEN = "nfp_9gDbtKLbccdasCKEiS9DcD688ywbQ5vu87c4"
SITE_ID = "834618f5-cdff-4ace-afa8-afaa6d9cac19"
DOCS_DIR = r"D:\anurag\content_journey\docs"

zip_buffer = io.BytesIO()
with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zip_file:
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, DOCS_DIR)
            zip_file.write(file_path, arcname)

zip_data = zip_buffer.getvalue()
print(f"Zipped docs: {len(zip_data)} bytes")

url = f"https://api.netlify.com/api/v1/sites/{SITE_ID}/deploys"
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/zip"
}

resp = requests.post(url, headers=headers, data=zip_data, timeout=60)
if resp.status_code in [200, 201]:
    data = resp.json()
    print("DEPLOY SUCCESS!")
    print(f"State: {data.get('state')}")
    print(f"URL: {data.get('ssl_url') or data.get('url')}")
else:
    print(f"Error {resp.status_code}: {resp.text}")
