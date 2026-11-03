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

# Base GitHub URL for raw PDF downloads
GITHUB_RAW_BASE = "https://github.com/anuragkumarpandit2000-jpg/content_journey/raw/main/deliverables"

# Video Configuration Matrix
VIDEO_CONFIG = {
    "video#1": {
        "title": "Windows C-Drive Space Rescue & Dynamic Partition Allocation",
        "keywords": ["drive", "c drive", "partition", "space", "storage", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video1_cdrive_rescue.pdf",
        "pdf_url": f"{GITHUB_RAW_BASE}/guide_video1_cdrive_rescue.pdf",
        "message": (
            "Hey @{username}! 🚀 Here is your requested C-Drive Storage Rescue & Partition Reallocation Master Guide!\n\n"
            "📥 Direct PDF Download Link:\n"
            f"{GITHUB_RAW_BASE}/guide_video1_cdrive_rescue.pdf\n\n"
            "⚡ Quick Wins to Reclaim 20+ GB in 3 Minutes:\n"
            "1. Run CMD as Admin: `powercfg -h off` (Instantly frees space equal to your RAM)\n"
            "2. Clean WinSxS: `Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase`\n"
            "3. Compress OS: `compact.exe /compactos:always` (Frees 3-5 GB without performance loss)\n"
            "4. Dynamic Partitioning: Safely expand C: using D: drive free space without formatting!\n\n"
            "Check the full PDF for complete step-by-step commands & zero-risk guide! Save this message for future reference 💾"
        )
    },
    "video#2": {
        "title": "2026 Mobile Optimization, Battery Longevity & Privacy Lockdown",
        "keywords": ["trick", "mobile", "hack", "battery", "phone", "speed", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video2_mobile_speedup_privacy.pdf",
        "pdf_url": f"{GITHUB_RAW_BASE}/guide_video2_mobile_speedup_privacy.pdf",
        "message": (
            "Hey @{username}! 📱✨ Here is your complete 2026 Mobile Optimization, Battery & Privacy Lockdown Blueprint!\n\n"
            "📥 Direct PDF Download Link:\n"
            f"{GITHUB_RAW_BASE}/guide_video2_mobile_speedup_privacy.pdf\n\n"
            "⚡ Core Hacks Inside:\n"
            "1. Disable Virtual RAM / RAM Plus (Stops NAND flash wear & eliminates micro-stutters)\n"
            "2. Developer Options: Set Window, Transition & Animator scale to 0.5x for 2x snappier UI\n"
            "3. Block 98% in-app ads & trackers: Set Private DNS to `dns.adguard.com`\n"
            "4. Disable Google Usage & Diagnostics to stop background CPU wake-locks\n\n"
            "Full ADB debloating terminal guide is inside the PDF. Let me know if you need help! 🚀"
        )
    },
    "video#3": {
        "title": "The ₹0 AI Content Machine: Complete Blueprint & Source Code",
        "keywords": ["auto", "code", "free", "ai", "content", "automation", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video3_zero_cost_content_machine.pdf",
        "pdf_url": f"{GITHUB_RAW_BASE}/guide_video3_zero_cost_content_machine.pdf",
        "message": (
            "Hey @{username}! 🤖💰 Here is the complete architecture & source code for the ₹0 AI Content Machine!\n\n"
            "📥 Direct PDF Download Link:\n"
            f"{GITHUB_RAW_BASE}/guide_video3_zero_cost_content_machine.pdf\n\n"
            "⚡ What you get in this blueprint:\n"
            "1. Gemini 2.5 Flash Native Audio WebSocket script (Free studio-quality speech synthesis)\n"
            "2. Remotion + React declarative video component templates (Zero Adobe Premiere cost)\n"
            "3. Autonomous Python publisher script (Instagrapi with Task Scheduler)\n"
            "4. Dynamic audio ducking and sound design engine\n\n"
            "Check the full PDF for copy-pasteable production scripts! Happy building! 🎬"
        )
    },
    "video#4": {
        "title": "Autonomous Video Production with AI Agents: Architecture & Full Stack Guide",
        "keywords": ["agent", "claude", "antigravity", "remotion", "react", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video4_agentic_video_pipeline.pdf",
        "pdf_url": f"{GITHUB_RAW_BASE}/guide_video4_agentic_video_pipeline.pdf",
        "message": (
            "Hey @{username}! 🤖⚡ Here is your requested Autonomous Video Production with AI Agents Architecture Guide!\n\n"
            "📥 Direct PDF Download Link:\n"
            f"{GITHUB_RAW_BASE}/guide_video4_agentic_video_pipeline.pdf\n\n"
            "⚡ Declarative Video Engineering:\n"
            "1. Antigravity AI Agents orchestrating 5-scene high-retention video storyboards\n"
            "2. Remotion React components generating 60 FPS motion graphics without Premiere Pro\n"
            "3. Syllable-level dynamic audio cuts with zero manual timeline editing\n"
            "4. Hands-free daily cloud releases even when your laptop is sleeping\n\n"
            "Check the full PDF for architectural diagrams and boilerplates! 🚀"
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

def process_comments(cl: Client, target_media_code: str = None, dry_run: bool = False):
    """Scan reels for new comments and automatically send the promised PDF via DM."""
    if not AUTOPILOT_LEDGER_PATH.exists():
        logging.warning("No autopilot_ledger.json found. No reels to track.")
        return

    with open(AUTOPILOT_LEDGER_PATH, "r", encoding="utf-8") as f:
        auto_ledger = json.load(f)

    dm_ledger = load_dm_ledger()
    processed_comment_ids = {r["comment_id"] for r in dm_ledger.get("replies", [])}
    # Also track (user_id, video_folder) pairs to avoid sending multiple identical DMs to same user on same video
    processed_user_video = {(r["user_id"], r["folder"]) for r in dm_ledger.get("replies", [])}

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

                if c_id in processed_comment_ids:
                    continue

                # User requirement: "kuchh bhi type krenge to usnke dm me chla jaye mera pdf and specific video ke hisaab se"
                # Any comment on this reel qualifies, or matches keywords
                logging.info(f"  ⚡ New Comment from @{username}: '{comment_text}' on [{folder}]")

                formatted_msg = config["message"].format(username=username)

                if dry_run:
                    logging.info(f"    [DRY RUN] Would send DM to @{username} (ID: {user_id})")
                    logging.info(f"    Message Preview: {formatted_msg[:120]}...")
                else:
                    # Send Instagram Direct Message
                    try:
                        logging.info(f"    Sending DM to @{username}...")
                        cl.direct_send(text=formatted_msg, user_ids=[int(user_id)])
                        logging.info(f"    ✅ DM sent successfully to @{username}!")

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
                            "sent_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                            "status": "SENT"
                        })
                        save_dm_ledger(dm_ledger)
                        processed_comment_ids.add(c_id)

                        # Sleep to respect Instagram rate limits
                        time.sleep(3)

                    except Exception as dm_err:
                        logging.error(f"    ❌ Failed to send DM to @{username}: {dm_err}")

        except Exception as e:
            logging.error(f"  Error processing media {media_code} ({folder}): {e}")

def run_responder(loop_mode=False, interval_sec=60, dry_run=False):
    """Main runner for auto DM responder."""
    logging.info("====================================================")
    logging.info("🤖 AUTONOMOUS INSTAGRAM DM RESPONDER ACTIVATED")
    logging.info("====================================================")

    cl = get_instagram_client()

    if loop_mode:
        logging.info(f"Running in continuous daemon mode (polling every {interval_sec}s)...")
        while True:
            try:
                process_comments(cl, dry_run=dry_run)
            except Exception as e:
                logging.error(f"Error during polling cycle: {e}")
            time.sleep(interval_sec)
    else:
        process_comments(cl, dry_run=dry_run)

if __name__ == "__main__":
    dry = "--dry-run" in sys.argv
    loop = "--loop" in sys.argv
    run_responder(loop_mode=loop, dry_run=dry)
