import os
import sys
import time
import json
import logging
from pathlib import Path
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

from instagrapi import Client
from instagrapi.exceptions import LoginRequired

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

ROOT_DIR = Path("D:/anurag/content_journey")
SESSION_PATH = ROOT_DIR / "session.json"
AUTOPILOT_LEDGER_PATH = ROOT_DIR / "autopilot_ledger.json"
DM_LEDGER_PATH = ROOT_DIR / "auto_dm_ledger.json"
LOCK_FILE = ROOT_DIR / "auto_dm_responder.lock"

def acquire_lock():
    """Ensure single active instance to prevent rate limits and race conditions."""
    if LOCK_FILE.exists():
        try:
            with open(LOCK_FILE, "r") as f:
                pid = int(f.read().strip())
            import ctypes
            PROCESS_QUERY_INFORMATION = 0x0400
            handle = ctypes.windll.kernel32.OpenProcess(PROCESS_QUERY_INFORMATION, 0, pid)
            if handle != 0:
                ctypes.windll.kernel32.CloseHandle(handle)
                return False  # Active process exists
        except Exception:
            pass
    try:
        with open(LOCK_FILE, "w") as f:
            f.write(str(os.getpid()))
        return True
    except Exception:
        return True

def release_lock():
    """Release single active instance lock."""
    try:
        if LOCK_FILE.exists():
            with open(LOCK_FILE, "r") as f:
                pid = int(f.read().strip())
            if pid == os.getpid():
                LOCK_FILE.unlink()
    except Exception:
        pass

# Official Live Website Portal URL (Replaces raw GitHub URLs)
PORTAL_BASE = "https://anuragkumarpandit2000-jpg.github.io/content_journey"

# Video Configuration Matrix with Unique Codes
VIDEO_CONFIG = {
    "video#1": {
        "title": "Windows C-Drive Space Rescue & Dynamic Partition Allocation",
        "code": "DRIVE",
        "keywords": ["drive", "c drive", "partition", "space", "storage", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video1_cdrive_rescue.pdf",
        "portal_url": f"{PORTAL_BASE}/?code=DRIVE",
        "message": (
            "Hey @{username}! 🚀 Here is your requested C-Drive Storage Rescue & Partition Master Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: DRIVE):\n"
            f"{PORTAL_BASE}/?code=DRIVE\n\n"
            "⚡ Quick Wins to Reclaim 20+ GB in 3 Minutes:\n"
            "1. Run CMD as Admin: `powercfg -h off` (Instantly frees RAM-sized GBs)\n"
            "2. Clean WinSxS: `Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase`\n"
            "3. Dynamic Partitioning: Safely expand C: using D: free space without formatting!\n\n"
            "Upar diye gaye portal link par click karke direct PDF download aur commands copy karein! 💾"
        )
    },
    "video#2": {
        "title": "2026 Mobile Optimization, Battery Longevity & Privacy Lockdown",
        "code": "SPEED",
        "keywords": ["trick", "mobile", "hack", "battery", "phone", "speed", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video2_mobile_speedup_privacy.pdf",
        "portal_url": f"{PORTAL_BASE}/?code=SPEED",
        "message": (
            "Hey @{username}! 📱✨ Here is your complete 2026 Mobile Optimization & Privacy Lockdown Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: SPEED):\n"
            f"{PORTAL_BASE}/?code=SPEED\n\n"
            "⚡ Core Hacks Inside:\n"
            "1. Disable Virtual RAM / RAM Plus (Stops storage wear & eliminates micro-stutters)\n"
            "2. Developer Options: Set Window, Transition & Animator scale to 0.5x\n"
            "3. Block 98% in-app ads & trackers with Private DNS `dns.adguard.com`\n\n"
            "Portal link se direct PDF download karein aur full ADB cheatsheet access karein! 🚀"
        )
    },
    "video#3": {
        "title": "The ₹0 AI Content Machine: Complete Blueprint & Source Code",
        "code": "MACHINE",
        "keywords": ["auto", "code", "free", "ai", "content", "automation", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video3_zero_cost_content_machine.pdf",
        "portal_url": f"{PORTAL_BASE}/?code=MACHINE",
        "message": (
            "Hey @{username}! 🤖💰 Here is the complete architecture & source code for the ₹0 AI Content Machine!\n\n"
            "🔗 Direct Blueprint Access (Code: MACHINE):\n"
            f"{PORTAL_BASE}/?code=MACHINE\n\n"
            "⚡ What you get in this blueprint:\n"
            "1. Gemini 2.5 Flash Native Audio WebSocket script (Free studio speech synthesis)\n"
            "2. Remotion + React declarative video component templates (Zero Adobe cost)\n"
            "3. Autonomous Python publisher script (Instagrapi with Task Scheduler)\n\n"
            "Portal link par direct PDF aur architecture boilerplate ready hai! 🎬"
        )
    },
    "video#4": {
        "title": "Autonomous Video Production with AI Agents: Architecture & Full Stack Guide",
        "code": "AGENT",
        "keywords": ["agent", "claude", "antigravity", "remotion", "react", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video4_agentic_video_pipeline.pdf",
        "portal_url": f"{PORTAL_BASE}/?code=AGENT",
        "message": (
            "Hey @{username}! 🤖⚡ Here is your requested Autonomous Video Production with AI Agents Architecture Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: AGENT):\n"
            f"{PORTAL_BASE}/?code=AGENT\n\n"
            "⚡ Declarative Video Engineering:\n"
            "1. Antigravity AI Agents orchestrating 5-scene high-retention storyboards\n"
            "2. Remotion React components generating 60 FPS motion graphics\n"
            "3. Syllable-level dynamic audio cuts with zero manual timeline editing\n\n"
            "Upar diye gaye link se PDF download karein aur agent stack explore karein! 🚀"
        )
    },
    "video#5": {
        "title": "Turn Your Smartphone into a ₹50 Lakh Hollywood Motion Rig in Blender",
        "code": "BLENDER",
        "keywords": ["blender", "rig", "camera", "motion", "osc", "link", "script", "tutorial", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video5_blender_motion_rig.pdf",
        "portal_url": f"{PORTAL_BASE}/?code=BLENDER",
        "message": (
            "Hey @{username}! 🎬✨ Here is your requested Smartphone to Hollywood Motion Rig in Blender Master Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: BLENDER):\n"
            f"{PORTAL_BASE}/?code=BLENDER\n\n"
            "⚡ Inside your portal:\n"
            "• Free iOS & Android IMU sensor app configuration (VirtuCamera & Sensors2OSC)\n"
            "• Zero-latency UDP OSC bridge script for Blender 4.x / 5.x\n"
            "• Live 60 FPS quaternion keyframe baking into Blender Action timeline\n\n"
            "Portal link par direct PDF download aur 1-click Python script copy ready hai! 💾"
        )
    }
}

def load_dm_ledger():
    """Load or initialize the DM response tracking ledger."""
    if DM_LEDGER_PATH.exists():
        try:
            with open(DM_LEDGER_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {"replies": []}
    return {"replies": []}

def save_dm_ledger(ledger):
    """Save the updated DM ledger to disk."""
    with open(DM_LEDGER_PATH, "w", encoding="utf-8") as f:
        json.dump(ledger, f, indent=2, ensure_ascii=False)

def get_instagram_client():
    """Authenticate and return instagrapi Client."""
    if not SESSION_PATH.exists():
        logging.error(f"Session file not found at {SESSION_PATH}")
        sys.exit(1)
    cl = Client()
    cl.load_settings(SESSION_PATH)
    return cl

def is_user_following(cl: Client, user_id: int) -> bool:
    """Check if a specific user follows our account."""
    try:
        friendship = cl.user_friendship_v1(user_id)
        return bool(friendship.followed_by)
    except Exception as e:
        logging.warning(f"Could not verify follow status for user {user_id}: {e}")
        return False

def process_comments(cl: Client, target_media_code: str = None, dry_run: bool = False):
    """Scan reels for new comments and automatically send the promised PDF via DM."""
    if not AUTOPILOT_LEDGER_PATH.exists():
        logging.warning("No autopilot_ledger.json found. No reels to track.")
        return

    with open(AUTOPILOT_LEDGER_PATH, "r", encoding="utf-8") as f:
        auto_ledger = json.load(f)

    dm_ledger = load_dm_ledger()
    # Track comments that received the final PDF guide
    fulfilled_comment_ids = {
        r["comment_id"] for r in dm_ledger.get("replies", []) if r.get("status") == "SENT"
    }

    uploads = auto_ledger.get("uploads", [])
    if not uploads:
        logging.info("No published reels in ledger.")
        return

    for upload in uploads:
        folder = upload.get("folder")
        media_code = upload.get("media_code")
        if not media_code or folder not in VIDEO_CONFIG:
            continue

        if target_media_code and media_code != target_media_code:
            continue

        config = VIDEO_CONFIG[folder]
        logging.info(f"Checking comments for [{folder}] (Media Code: {media_code})...")

        try:
            media_pk = cl.media_pk_from_code(media_code)
            comments = cl.media_comments(media_pk)
            logging.info(f"  Found {len(comments)} comment(s) on {folder}.")

            for comment in comments:
                c_id = str(comment.pk)
                user_id = str(comment.user.pk)
                username = comment.user.username
                comment_text = (comment.text or "").strip()

                if c_id in fulfilled_comment_ids:
                    continue

                logging.info(f"  ⚡ New Comment from @{username}: '{comment_text}' on [{folder}]")

                # Verify Follower Status
                following = is_user_following(cl, int(user_id))
                logging.info(f"    Follower status for @{username}: {'FOLLOWING ✅' if following else 'NOT FOLLOWING ❌'}")

                if following:
                    # Send Full Deliverable PDF Guide
                    formatted_msg = config["message"].format(username=username)
                    status_flag = "SENT"
                    log_action = "Delivering Solution PDF Guide"
                else:
                    # Send Follow-Gate Unlock Prompt
                    formatted_msg = (
                        f"Hey @{username}! 🔒\n\n"
                        f"Aapka requested '{config['title']}' ready hai!\n"
                        f"Lekin VIP Blueprint Vault unlock karne ke liye pehle @parker.render ko FOLLOW karein ✨\n\n"
                        f"👉 https://www.instagram.com/parker.render/\n\n"
                        f"Follow karne ke baad reel par dobara comment karein ya yahan 'DONE' likhein — aapka direct portal link (Code: {config['code']}) instantly unlock ho jayega! 🚀"
                    )
                    status_flag = "PENDING_FOLLOW"
                    log_action = "Sending Follow-Gate Prompt"

                if dry_run:
                    logging.info(f"    [DRY RUN] {log_action} to @{username} (ID: {user_id})")
                    logging.info(f"    Status: {status_flag}")
                    logging.info(f"    Message Preview: {formatted_msg[:100]}...")
                else:
                    # Send Instagram Direct Message
                    try:
                        logging.info(f"    {log_action} to @{username}...")
                        cl.direct_send(text=formatted_msg, user_ids=[int(user_id)])
                        logging.info(f"    ✅ DM sent successfully to @{username} (Status: {status_flag})!")

                        # Like commenter's comment as acknowledgment
                        try:
                            cl.comment_like(comment.pk)
                            logging.info(f"    ❤️ Liked comment {comment.pk}")
                        except Exception as e:
                            logging.warning(f"    Could not like comment: {e}")

                        # Record in ledger
                        dm_ledger.setdefault("replies", []).append({
                            "comment_id": c_id,
                            "user_id": user_id,
                            "username": username,
                            "folder": folder,
                            "media_code": media_code,
                            "comment_text": comment_text,
                            "following": following,
                            "sent_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                            "status": status_flag
                        })
                        save_dm_ledger(dm_ledger)

                        if following:
                            fulfilled_comment_ids.add(c_id)

                        # Sleep to respect Instagram rate limits
                        time.sleep(3)

                    except Exception as dm_err:
                        logging.error(f"    ❌ Failed to send DM to @{username}: {dm_err}")

        except Exception as e:
            logging.error(f"  Error processing media {media_code} ({folder}): {e}")

def run_responder(loop_mode=False, interval_sec=30, dry_run=False):
    """Main runner for auto DM responder with ultra-fast sub-minute response."""
    if not acquire_lock():
        logging.info("Another responder daemon is already running and monitoring comments. Exiting gracefully.")
        return

    import atexit
    atexit.register(release_lock)

    logging.info("====================================================")
    logging.info("🤖 AUTONOMOUS INSTAGRAM DM RESPONDER ACTIVATED")
    logging.info(f"⚡ Mode: {'Continuous Loop (every ' + str(interval_sec) + 's)' if loop_mode else 'Single Pass'}")
    logging.info("====================================================")

    cl = get_instagram_client()

    try:
        if loop_mode:
            logging.info(f"Running high-frequency monitor (checking every {interval_sec}s for sub-minute delivery)...")
            while True:
                try:
                    process_comments(cl, dry_run=dry_run)
                except Exception as e:
                    logging.error(f"Error during polling cycle: {e}")
                time.sleep(interval_sec)
        else:
            process_comments(cl, dry_run=dry_run)
    finally:
        release_lock()

if __name__ == "__main__":
    dry = "--dry-run" in sys.argv
    loop = "--loop" in sys.argv
    interval = 30
    if "--interval" in sys.argv:
        try:
            idx = sys.argv.index("--interval")
            interval = int(sys.argv[idx + 1])
        except Exception:
            interval = 30
    run_responder(loop_mode=loop, interval_sec=interval, dry_run=dry)
