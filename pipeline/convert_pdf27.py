import subprocess
from pathlib import Path

html_path = Path(r"D:\anurag\content_journey\docs\pdf\guide_video27_google_microphone_privacy.html")
pdf_path = Path(r"D:\anurag\content_journey\docs\pdf\guide_video27_google_microphone_privacy.pdf")
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

cmd = [
    edge_path,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_path}",
    str(html_path)
]

print(f"Running: {' '.join(cmd)}")
res = subprocess.run(cmd, capture_output=True, text=True)
print("Return code:", res.returncode)
if pdf_path.exists():
    print(f"SUCCESS: Generated PDF ({pdf_path.stat().st_size} bytes)")
else:
    print("FAILED: PDF not found")
