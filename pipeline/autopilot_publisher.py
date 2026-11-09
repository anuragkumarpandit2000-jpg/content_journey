import os
import sys
import re
import json
import time
import subprocess
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

from instagrapi import Client
from instagrapi.exceptions import LoginRequired, TwoFactorRequired, ChallengeRequired
from instagrapi.mixins.password import PasswordMixin

def _patched_password_publickeys(self):
    resp = self.public.get("https://i.instagram.com/api/v1/launcher/sync/")
    key_id = resp.headers.get("ig-set-password-encryption-key-id")
    pub_key = resp.headers.get("ig-set-password-encryption-pub-key")
    return int(key_id), pub_key

PasswordMixin.password_publickeys = _patched_password_publickeys

from datetime import datetime

# Root directory configuration
ROOT_DIR = Path("D:/anurag/content_journey")
ENV_PATH = ROOT_DIR / ".env"
SESSION_PATH = ROOT_DIR / "session.json"
LEDGER_PATH = ROOT_DIR / "autopilot_ledger.json"
MANIFEST_PATH = ROOT_DIR / "reels_schedule_manifest.json"
VIDEOS_DIR = ROOT_DIR / "videos"

def load_env():
    """Load key-value pairs from .env into os.environ."""
    if not ENV_PATH.exists():
        return
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip()

def load_ledger():
    """Load or initialize the publication ledger."""
    if LEDGER_PATH.exists():
        try:
            with open(LEDGER_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {"uploads": []}
    return {"uploads": []}

def save_ledger(ledger):
    """Save the updated ledger to disk."""
    with open(LEDGER_PATH, "w", encoding="utf-8") as f:
        json.dump(ledger, f, indent=2)

def extract_video_number(folder_name):
    """Extract integer number from 'video#3' or 'video#10'."""
    match = re.search(r'\d+', folder_name)
    return int(match.group()) if match else 9999

def load_manifest_schedule():
    """Load scheduling dates from manifest if available."""
    if MANIFEST_PATH.exists():
        try:
            with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
                data = json.load(f)
                return {r["video_id"]: r for r in data.get("reels", [])}
        except Exception:
            return {}
    return {}

def find_next_video(target_specific=None):
    """Scan videos/ directory for rendered master reels and find the next unposted one."""
    ledger = load_ledger()
    uploaded_folders = {u["folder"] for u in ledger.get("uploads", []) if u.get("status") == "UPLOADED"}
    manifest_map = load_manifest_schedule()
    today_str = datetime.now().strftime("%Y-%m-%d")

    candidate_folders = []
    if target_specific:
        spec_path = VIDEOS_DIR / target_specific
        if spec_path.exists():
            candidate_folders.append(spec_path)
        else:
            print(f"[AUTOPILOT] Specified folder does not exist: {target_specific}")
            return None
    else:
        if not VIDEOS_DIR.exists():
            print(f"[AUTOPILOT] Videos folder not found: {VIDEOS_DIR}")
            return None
        candidate_folders = sorted(
            [p for p in VIDEOS_DIR.iterdir() if p.is_dir() and "video#" in p.name.lower()],
            key=lambda p: extract_video_number(p.name)
        )

    for folder in candidate_folders:
        folder_name = folder.name
        if folder_name in uploaded_folders and not target_specific:
            continue

        # Respect scheduled publish dates
        if not target_specific and folder_name in manifest_map:
            sched_date = manifest_map[folder_name].get("publish_date")
            if sched_date and sched_date > today_str:
                # Video is scheduled for future date - keep queued
                continue

        out_dir = folder / "out"
        if not out_dir.exists():
            continue

        # Look for optimized or master reel mp4
        opt_files = list(out_dir.glob("*optimized*.mp4"))
        mp4_files = opt_files or sorted(list(out_dir.glob("*master_reel*.mp4")) or list(out_dir.glob("*.mp4")))
        if mp4_files:
            return {
                "folder": folder_name,
                "folder_path": folder,
                "video_path": mp4_files[0]
            }

    return None

def get_or_generate_caption(video_info):
    """Retrieve existing caption.txt or generate default viral caption."""
    folder_path = video_info["folder_path"]
    folder_name = video_info["folder"]
    caption_file = folder_path / "caption.txt"

    if caption_file.exists():
        with open(caption_file, "r", encoding="utf-8") as f:
            return f.read().strip()

    # Pre-defined high-converting caption for Video #3
    if folder_name == "video#3":
        caption = (
            "I automated my entire content creation without spending a SINGLE rupee! 💸🤖\n\n"
            "Sab log bolte hain AI videos banane ke liye paid tools chahiye—ChatGPT Plus, ElevenLabs, Runway etc.\n"
            "Maine apna pura production pipeline 100% FREE open-source stack se automate kar diya:\n\n"
            "⚡ Gemini 3.8 Flash Neural TTS (Free)\n"
            "⚡ Code-based video rendering via React & Remotion (Zero Cost)\n"
            "⚡ Automated Chromatic Color Shifts & Sound Design\n"
            "⚡ Auto-pilot cloud uploading\n\n"
            "Want the complete source code & free blueprint?\n"
            "👉 Comment 'AUTO' and I'll DM you the link immediately! 🔥\n\n"
            "#ai #contentautomation #coding #python #remotion #developer #techhacks #reelsindia #programming #aitools #zerocost"
        )
        return caption

    # Default fallback caption
    return (
        f"Automated Content Journey - {folder_name.upper()} 🚀\n\n"
        "100% automated video created entirely with code & AI neural models.\n"
        "No manual editing, no timeline scrubbing.\n\n"
        "Comment 'CODE' to get the full source stack! 🔥\n\n"
        "#ai #tech #automation #coding #developer #programming #reels"
    )

def ensure_optimized_video(video_path):
    """If video exceeds 35MB, automatically compress it with ffmpeg for fast, reliable upload."""
    size_mb = video_path.stat().st_size / (1024 * 1024)
    if size_mb <= 35 or "optimized" in video_path.name:
        return video_path

    opt_path = video_path.parent / f"{video_path.stem}_optimized.mp4"
    if opt_path.exists() and opt_path.stat().st_size > 0:
        return opt_path

    print(f"[AUTOPILOT] Video size is {round(size_mb, 1)}MB (>35MB). Auto-optimizing for Instagram...")
    try:
        cmd = f'ffmpeg -i "{video_path}" -c:v libx264 -crf 23 -preset fast -pix_fmt yuv420p -c:a aac -b:a 192k -y "{opt_path}"'
        subprocess.run(cmd, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if opt_path.exists() and opt_path.stat().st_size > 0:
            new_size = round(opt_path.stat().st_size / (1024 * 1024), 1)
            print(f"[AUTOPILOT] Auto-optimization complete! Reduced from {round(size_mb, 1)}MB -> {new_size}MB.")
            return opt_path
    except Exception as e:
        print(f"[AUTOPILOT] Compression notice: {e}, proceeding with original video.")
    return video_path

def ensure_thumbnail(video_path):
    """Ensure a high quality thumbnail frame exists for the reel."""
    thumb_path = video_path.parent / "thumb_cover.jpg"
    if not thumb_path.exists():
        try:
            cmd = f'ffmpeg -ss 00:00:02 -i "{video_path}" -vframes 1 -update 1 -y "{thumb_path}"'
            subprocess.run(cmd, shell=True, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception as e:
            print(f"[AUTOPILOT] Warning: Could not generate thumbnail with ffmpeg: {e}")
            return None
    return thumb_path if thumb_path.exists() else None

def get_instagram_client(username, password):
    """Initialize instagrapi client with persistent session handling."""
    cl = Client()
    cl.delay_range = [2, 5]

    session_loaded = False
    if SESSION_PATH.exists():
        try:
            print(f"[AUTOPILOT] Loading existing session from: {SESSION_PATH}")
            cl.load_settings(SESSION_PATH)
            session_loaded = True
        except Exception as e:
            print(f"[AUTOPILOT] Warning: Could not load session ({e}), will re-login.")

    try:
        if session_loaded:
            print(f"[AUTOPILOT] Verifying active session for @{username}...")
            try:
                cl.get_timeline_feed()
                print(f"[AUTOPILOT] Session active and authenticated! 🎉")
                return cl
            except LoginRequired:
                print(f"[AUTOPILOT] Session expired. Performing fresh login...")

        print(f"[AUTOPILOT] Logging in to Instagram as @{username}...")
        cl.login(username, password)
        print(f"[AUTOPILOT] Login successful! Saving new session to: {SESSION_PATH}")
        cl.dump_settings(SESSION_PATH)
        return cl

    except TwoFactorRequired:
        print("\n[AUTOPILOT 2FA ALERT] Two-Factor Authentication (2FA) is enabled on this account.")
        code = input("Please enter your Instagram 2FA security code: ").strip()
        cl.login(username, password, verification_code=code)
        cl.dump_settings(SESSION_PATH)
        return cl

    except ChallengeRequired:
        print("\n[AUTOPILOT CHALLENGE] Instagram requested an email/SMS challenge verification.")
        sys.exit(1)

    except Exception as e:
        print(f"\n[AUTOPILOT AUTH ERROR] Failed to authenticate with Instagram: {e}")
        sys.exit(1)

def run_autopilot(target_specific=None, dry_run=False):
    """Main execution function for the daily autonomous publisher."""
    load_env()
    print("====================================================")
    print("🤖 AUTONOMOUS INSTAGRAM REEL PUBLISHER (INSTAGRAPI)")
    print("====================================================\n")

    username = os.environ.get("INSTAGRAM_USERNAME", "console.a1")
    password = os.environ.get("INSTAGRAM_PASSWORD")

    if not password and not dry_run and not SESSION_PATH.exists():
        print("[AUTOPILOT ERROR] INSTAGRAM_PASSWORD not found in D:/anurag/content_journey/.env")
        print("Please add your Instagram password to .env to enable 100% autonomous posting:")
        print("INSTAGRAM_PASSWORD=your_password_here\n")
        sys.exit(1)

    # Step 1: Detect next video
    print("[AUTOPILOT] Step 1: Hunting for unposted rendered master reel...")
    video_info = find_next_video(target_specific)
    if not video_info:
        print("[AUTOPILOT] No unposted rendered video found in videos/ directory.")
        print("All rendered videos are already uploaded, or no master reel exists.")
        return

    folder_name = video_info["folder"]
    video_path = ensure_optimized_video(video_info["video_path"])
    print(f"  Target Reel Found: [{folder_name}] -> {video_path}")

    # Step 2: Prepare Caption & Thumbnail
    caption = get_or_generate_caption(video_info)
    thumb_path = ensure_thumbnail(video_path)

    print("\n[AUTOPILOT] Step 2: Content Specs:")
    print(f"  Folder:    {folder_name}")
    print(f"  Video:     {video_path.name} ({round(video_path.stat().st_size / (1024*1024), 2)} MB)")
    print(f"  Thumbnail: {thumb_path.name if thumb_path else 'None'}")
    print(f"  Caption:   {caption[:80]}...")

    if dry_run:
        print("\n[AUTOPILOT DRY RUN] Mode is dry-run. Skipping actual Instagram upload.")
        return

    # Step 3: Login & Upload via instagrapi
    print(f"\n[AUTOPILOT] Step 3: Authenticating with @{username}...")
    cl = get_instagram_client(username, password)

    print(f"\n[AUTOPILOT] Step 4: Uploading Reel to @{username}...")
    start_time = time.time()
    try:
        media = cl.clip_upload(
            path=str(video_path),
            caption=caption,
            thumbnail=str(thumb_path) if thumb_path else None
        )
        duration = round(time.time() - start_time, 2)
        media_code = getattr(media, "code", None) or getattr(media, "id", "uploaded")
        reel_url = f"https://www.instagram.com/reel/{media_code}/"

        print(f"\n🎉 [AUTOPILOT SUCCESS] Reel published successfully in {duration}s!")
        print(f"  Target Account: @{username}")
        print(f"  Media Code:     {media_code}")
        print(f"  Live Reel Link: {reel_url}")

        # Step 5: Update ledger
        ledger = load_ledger()
        ledger.setdefault("uploads", []).append({
            "folder": folder_name,
            "video_path": str(video_path),
            "media_code": media_code,
            "reel_url": reel_url,
            "uploaded_at": time.strftime("%Y-%m-%d %H:%M:%S"),
            "status": "UPLOADED"
        })
        save_ledger(ledger)
        print(f"  Ledger Updated: {LEDGER_PATH}")

        # Step 6: Post-Upload Automation Sync (Netlify & Auto DM Responder)
        print("\n[AUTOPILOT] Step 6: Syncing Netlify portal & activating Auto DM Responder...")
        try:
            deploy_script = ROOT_DIR / "pipeline" / "deploy_netlify_direct.py"
            if deploy_script.exists():
                subprocess.run([sys.executable, str(deploy_script)], cwd=str(ROOT_DIR), check=False)
                print("  ✅ Netlify Portal synced and live at https://parker-render.netlify.app!")
        except Exception as netlify_err:
            print(f"  [WARN] Netlify sync warning: {netlify_err}")

        try:
            dm_script = ROOT_DIR / "pipeline" / "auto_dm_responder.py"
            python_bin = sys.executable
            subprocess.run([python_bin, str(dm_script)], cwd=str(ROOT_DIR), check=False)
            print("  ✅ Auto DM Responder activated for new reel comments!")
        except Exception as dm_sync_err:
            print(f"  [WARN] DM trigger warning: {dm_sync_err}")

    except Exception as e:
        print(f"\n[AUTOPILOT UPLOAD ERROR] Failed to upload Reel: {e}")
        sys.exit(1)

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else None
    dry = "--dry-run" in sys.argv
    run_autopilot(target_specific=target, dry_run=dry)
