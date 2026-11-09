import os
import sys
import time
import json
import random
import logging
from pathlib import Path
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

from instagrapi import Client
from instagrapi.exceptions import LoginRequired

ROOT_DIR = Path("D:/anurag/content_journey")
LOG_PATH = ROOT_DIR / "auto_dm.log"

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(LOG_PATH, encoding='utf-8')
    ]
)

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

# Official Live Website Portal URL on Netlify (Ultra-Short & Branded)
PORTAL_BASE = "https://parker-render.netlify.app"

# Natural Public Comment Reply Variations (Prevents Instagram duplicate spam filters)
REPLY_TEMPLATES_FOLLOWING = [
    "@{username} Check your DM! 🚀 Blueprint bhej diya hai 📥",
    "@{username} Check your DM! Sent the complete guide 📩✨",
    "@{username} Just sent to your DM! Check message requests if not visible 🚀",
    "@{username} Link sent to your DM! Download karein aur test karein 📥🔥",
    "@{username} Check your DM! Guide and resources sent ⚡",
]

REPLY_TEMPLATES_NOT_FOLLOWING = [
    "@{username} Check your DM! 🔒 Follow @parker.render to unlock the link ✨",
    "@{username} Sent you a DM! Follow karke link instantly unlock karein 🚀",
    "@{username} Check your DM! Pehle follow karein fir link unlock ho jayega 📩",
]

# Video Configuration Matrix with Unique Codes
VIDEO_CONFIG = {
    "video#1": {
        "title": "Windows C-Drive Space Rescue & Dynamic Partition Allocation",
        "code": "DRIVE",
        "keywords": ["drive", "c drive", "partition", "space", "storage", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video1_cdrive_rescue.pdf",
        "portal_url": f"{PORTAL_BASE}/drive",
        "message": (
            "Hey @{username}! 🚀 Here is your requested C-Drive Storage Rescue & Partition Master Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: DRIVE):\n"
            f"{PORTAL_BASE}/drive\n\n"
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
        "portal_url": f"{PORTAL_BASE}/speed",
        "message": (
            "Hey @{username}! 📱✨ Here is your complete 2026 Mobile Optimization & Privacy Lockdown Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: SPEED):\n"
            f"{PORTAL_BASE}/speed\n\n"
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
        "portal_url": f"{PORTAL_BASE}/machine",
        "message": (
            "Hey @{username}! 🤖💰 Here is the complete architecture & source code for the ₹0 AI Content Machine!\n\n"
            "🔗 Direct Blueprint Access (Code: MACHINE):\n"
            f"{PORTAL_BASE}/machine\n\n"
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
        "portal_url": f"{PORTAL_BASE}/agent",
        "message": (
            "Hey @{username}! 🤖⚡ Here is your requested Autonomous Video Production with AI Agents Architecture Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: AGENT):\n"
            f"{PORTAL_BASE}/agent\n\n"
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
        "portal_url": f"{PORTAL_BASE}/blender",
        "message": (
            "Hey @{username}! 🎬✨ Here is your requested Smartphone to Hollywood Motion Rig in Blender Master Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: BLENDER):\n"
            f"{PORTAL_BASE}/blender\n\n"
            "⚡ Inside your portal:\n"
            "• Free iOS & Android IMU sensor app configuration (VirtuCamera & Sensors2OSC)\n"
            "• Zero-latency UDP OSC bridge script for Blender 4.x / 5.x\n"
            "• Live 60 FPS quaternion keyframe baking into Blender Action timeline\n\n"
            "Portal link par direct PDF download aur 1-click Python script copy ready hai! 💾"
        )
    },
    "video#6": {
        "title": "Stop Paying $22/Month for ElevenLabs: Free Local F5-TTS Voice Cloning",
        "code": "VOICE",
        "keywords": ["voice", "f5tts", "elevenlabs", "clone", "audio", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video6_f5_tts_voice_cloning.pdf",
        "portal_url": f"{PORTAL_BASE}/voice",
        "message": (
            "Hey @{username}! 🎙️⚡ Here is your requested F5-TTS Free Local Voice Cloning Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: VOICE):\n"
            f"{PORTAL_BASE}/voice\n\n"
            "⚡ What you get inside:\n"
            "• 5-Second voice cloning without cloud subscription fees\n"
            "• 1-Click PyTorch & CUDA local GPU installer script\n"
            "• Hindi, Hinglish & English natural flow matching guide\n\n"
            "Portal link par direct PDF download aur complete Python script copy ready hai! 🚀"
        )
    },
    "video#7": {
        "title": "DeepSeek V3 Local & Cursor IDE Setup: 100x Cheaper than Claude 3.7",
        "code": "DEEPSEEK",
        "keywords": ["deepseek", "claude", "cursor", "model", "moe", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video7_deepseek_v3_setup.pdf",
        "portal_url": f"{PORTAL_BASE}/deepseek",
        "message": (
            "Hey @{username}! ⚡💻 Here is your requested DeepSeek V3 Local & Cursor IDE Integration Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: DEEPSEEK):\n"
            f"{PORTAL_BASE}/deepseek\n\n"
            "⚡ Inside your guide:\n"
            "• 1-Click Cursor IDE custom OpenAI endpoint configuration\n"
            "• Local Ollama offline setup for zero-data logging\n"
            "• 90%+ SWE-Bench coding prompt templates\n\n"
            "Portal link se direct PDF download karein aur Cursor config copy karein! 🔥"
        )
    },
    "video#8": {
        "title": "20-Line Python Autonomous Agent: LangGraph, Gemini Flash & Memory",
        "code": "BOT",
        "keywords": ["agent", "bot", "python", "langgraph", "autonomous", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video8_python_autonomous_agent.pdf",
        "portal_url": f"{PORTAL_BASE}/bot",
        "message": (
            "Hey @{username}! 🤖⚡ Here is your requested 20-Line Python Autonomous Agent Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: BOT):\n"
            f"{PORTAL_BASE}/bot\n\n"
            "⚡ What you get:\n"
            "• 20-Line production LangGraph cyclic agent script\n"
            "• SQLite session checkpointer for long-term memory\n"
            "• Zero cloud cost using free Gemini 2.5 Flash API\n\n"
            "Portal link par direct PDF aur starter boilerplate ready hai! 🚀"
        )
    },
    "video#9": {
        "title": "Instagram 4K Crystal Sharpness Hack: 1080x1920 CRF 23 FFmpeg Engine",
        "code": "4K",
        "keywords": ["4k", "ffmpeg", "hd", "sharp", "quality", "compress", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video9_4k_instagram_ffmpeg.pdf",
        "portal_url": f"{PORTAL_BASE}/4k",
        "message": (
            "Hey @{username}! 📱🎬 Here is your requested Instagram 4K Crystal Sharpness & FFmpeg Master Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: 4K):\n"
            f"{PORTAL_BASE}/4k\n\n"
            "⚡ What's inside:\n"
            "• Exact 1080x1920 CRF 23 parameters that bypass Instagram re-compression\n"
            "• Windows 1-click drag-and-drop batch converter file\n"
            "• BT.709 color matrix & 320kbps AAC audio settings\n\n"
            "Portal link se PDF download karein aur batch script copy karein! 💾"
        )
    },
    "video#10": {
        "title": "Modern Web Scraping in 2026: Crawl4AI + Gemini Structured JSON",
        "code": "CRAWL",
        "keywords": ["crawl", "scrape", "scraper", "crawl4ai", "bs4", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video10_crawl4ai_web_scraper.pdf",
        "portal_url": f"{PORTAL_BASE}/crawl",
        "message": (
            "Hey @{username}! 🕷️⚡ Here is your requested Modern Web Scraping with Crawl4AI Master Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: CRAWL):\n"
            f"{PORTAL_BASE}/crawl\n\n"
            "⚡ Highlights inside:\n"
            "• 15-Second Crawl4AI stealth browser setup (bypasses Cloudflare)\n"
            "• Pydantic schema-driven Gemini structured JSON extraction\n"
            "• Token-efficient markdown conversion for LLM pipelines\n\n"
            "Portal link par direct PDF aur complete production scraper ready hai! 🚀"
        )
    },
    "video#11": {
        "title": "The 100% Free Local AI Master Guide: Run 70B & DeepSeek Offline",
        "code": "LOCAL",
        "keywords": ["local", "ollama", "deepseek", "llama", "70b", "offline", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video11_local_llm_ollama.pdf",
        "portal_url": f"{PORTAL_BASE}/local",
        "message": (
            "Hey @{username}! 🧠⚡ Here is your 100% Free Local AI Master Guide (Run 70B & DeepSeek Offline)!\n\n"
            "🔗 Direct Blueprint Access (Code: LOCAL):\n"
            f"{PORTAL_BASE}/local\n\n"
            "⚡ What you get in this blueprint:\n"
            "• VRAM / RAM hardware sizing cheat sheet (8B, 14B, 70B quants)\n"
            "• 1-Line Ollama setup & Dockerized Open WebUI launch commands\n"
            "• Python OpenAI-compatible drop-in script for unmetered local inference\n\n"
            "Portal link se direct PDF download karein aur cloud bills ko bye-bye bole! 🚀"
        )
    },
    "video#12": {
        "title": "Real-Time AI Voice Agent Architecture: LiveKit + WebRTC",
        "code": "CALL",
        "keywords": ["call", "voice", "voicebot", "livekit", "phone", "audio", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video12_livekit_voice_agent.pdf",
        "portal_url": f"{PORTAL_BASE}/call",
        "message": (
            "Hey @{username}! 📞⚡ Here is your Real-Time AI Voice Agent Architecture Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: CALL):\n"
            f"{PORTAL_BASE}/call\n\n"
            "⚡ Highlights inside:\n"
            "• Sub-300ms conversational turn-taking with Silero VAD & Deepgram\n"
            "• Real-time human interruption cancellation logic\n"
            "• Complete Python LiveKit voice assistant starter repository\n\n"
            "Portal link par direct PDF aur telephony template ready hai! 🔥"
        )
    },
    "video#13": {
        "title": "Cursor AI Killer: Autonomous Coding in VS Code with Cline & DeepSeek",
        "code": "CLINE",
        "keywords": ["cline", "cursor", "vscode", "roo", "deepseek", "coding", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video13_cline_cursor_alternative.pdf",
        "portal_url": f"{PORTAL_BASE}/cline",
        "message": (
            "Hey @{username}! 💻🤖 Here is your requested Cursor AI Killer (VS Code + Cline) Setup Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: CLINE):\n"
            f"{PORTAL_BASE}/cline\n\n"
            "⚡ Highlights inside:\n"
            "• Autonomous terminal control & self-healing bug fixes in VS Code\n"
            "• DeepSeek-V3 API configuration ($0.14/million tokens vs $20/month)\n"
            "• Tested .clinerules developer template for zero hallucinations\n\n"
            "Portal link se direct PDF download karein aur Cline setup karein! 🚀"
        )
    },
    "video#14": {
        "title": "Autonomous WhatsApp AI Assistant with Python & Baileys",
        "code": "WHATSAPP",
        "keywords": ["whatsapp", "chat", "chatbot", "bot", "auto", "client", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video14_whatsapp_ai_bot.pdf",
        "portal_url": f"{PORTAL_BASE}/whatsapp",
        "message": (
            "Hey @{username}! 📱💬 Here is your Autonomous WhatsApp AI Agent Architecture Guide!\n\n"
            "🔗 Direct Blueprint Access (Code: WHATSAPP):\n"
            f"{PORTAL_BASE}/whatsapp\n\n"
            "⚡ Highlights inside:\n"
            "• 24/7 autonomous client receptionist using Python & Baileys Webhook\n"
            "• Anti-ban human typing delay & automatic session recovery protocol\n"
            "• Automated PDF quotes dispatch & Google Calendar meeting scheduling\n\n"
            "Portal link par direct PDF aur complete FastAPI bridge script ready hai! 🚀"
        )
    },
    "video#15": {
        "title": "2D to 3D AI Masterclass: Generate Game-Ready 3D Assets with Trellis & Blender",
        "code": "3D",
        "keywords": ["3d", "trellis", "triposr", "blender", "mesh", "model", "render", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video15_ai_3d_mesh_blender.pdf",
        "portal_url": f"{PORTAL_BASE}/3d",
        "message": (
            "Hey @{username}! 🗿✨ Here is your 2D to 3D AI Masterclass & Blender Automation Blueprint!\n\n"
            "🔗 Direct Blueprint Access (Code: 3D):\n"
            f"{PORTAL_BASE}/3d\n\n"
            "⚡ Highlights inside:\n"
            "• 1-Click Blender Python auto-import & polygon decimation script\n"
            "• Microsoft Trellis & TripoSR local/API generation environment\n"
            "• Game-ready PBR texture generation (Albedo, Normal, Roughness)\n\n"
            "Portal link par direct PDF download karein aur Blender addon copy karein! 🎨"
        )
    },
    "video#26": {
        "title": "GTA 6 vs GTA 5: The ₹16,000 Crore AI Comparison Blueprint & 4K Leak Assets",
        "code": "GTA",
        "keywords": ["gta", "gta6", "gtavi", "leak", "leaks", "car", "physics", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video26_gta6_vs_gta5_comparison.pdf",
        "portal_url": f"{PORTAL_BASE}/gta",
        "message": (
            "Hey @{username}! 🚗💥 Here is your GTA 6 vs GTA 5 Comparison Blueprint & Secret Leaks Guide!\n\n"
            "📄 Direct PDF Guide Link (Click to Open Instantly):\n"
            f"{PORTAL_BASE}/pdf/guide_video26_gta6_vs_gta5_comparison.pdf\n\n"
            "🔗 Direct Vault Link:\n"
            f"{PORTAL_BASE}/gta\n\n"
            "⚡ Key Highlights Inside:\n"
            "• RAGE 9 Vehicle Deformation & Real Suspension Physics Breakdown\n"
            "• Dynamic Buoyancy & Ocean Fluid Simulation Mechanics\n"
            "• AI-Driven NPC Social Media Livestream System\n"
            "• 70%+ Enterable Interiors Map Architecture\n\n"
            "Link par click karte hi direct PDF document khul jayega! 🎮"
        )
    },
    "video#27": {
        "title": "Google Microphone Audio Surveillance Lockdown Blueprint & Cheatsheet",
        "code": "STOP",
        "keywords": ["stop", "privacy", "mic", "google", "spy", "ad", "shoes", "shoe", "audio", "listen", "link", "bhejo", "send", "pls", "please"],
        "pdf_name": "guide_video27_google_microphone_privacy.pdf",
        "portal_url": f"{PORTAL_BASE}/stop",
        "message": (
            "Hey @{username}! 🛡️🔇 Here is your Google Microphone Privacy & Audio Surveillance Lockdown Guide!\n\n"
            "📄 Direct PDF Guide Link (Click to Open Instantly):\n"
            f"{PORTAL_BASE}/pdf/guide_video27_google_microphone_privacy.pdf\n\n"
            "🔗 Direct Vault Link:\n"
            f"{PORTAL_BASE}/stop\n\n"
            "⚡ Key Steps Inside:\n"
            "• Stop 'Include voice and audio recordings' background logging\n"
            "• Auto-Delete 3-Month Acoustic Log Flush\n"
            "• Revoke background mic permissions from third-party apps\n\n"
            "Link par click karte hi direct PDF document khul jayega! 🔒"
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

    # Check recent reels (last 4) to prevent Instagram rate-limiting, unless target specified
    active_uploads = [u for u in uploads if u.get("media_code") == target_media_code] if target_media_code else (uploads[-4:] if len(uploads) > 4 else uploads)

    for upload in active_uploads:
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

                # Verify Follower Status (for logs)
                following = is_user_following(cl, int(user_id))
                logging.info(f"    Follower status for @{username}: {'FOLLOWING ✅' if following else 'NOT FOLLOWING ❌'}")

                # Directly deliver the Solution PDF Guide immediately on comment
                formatted_msg = config["message"].format(username=username)
                status_flag = "SENT"
                log_action = "Delivering Solution PDF Guide"

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

                        # Public reply to comment notifying them to check their DM
                        try:
                            reply_text = random.choice(REPLY_TEMPLATES_FOLLOWING).format(username=username)
                            cl.media_comment(
                                media_id=str(media_pk),
                                text=reply_text,
                                replied_to_comment_id=int(comment.pk)
                            )
                            logging.info(f"    💬 Replied to comment {comment.pk}: '{reply_text}'")
                        except Exception as reply_err:
                            logging.warning(f"    Could not reply to comment: {reply_err}")

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
                        fulfilled_comment_ids.add(c_id)

                        # Sleep to respect Instagram rate limits
                        time.sleep(3)

                    except Exception as dm_err:
                        logging.error(f"    ❌ Failed to send DM to @{username}: {dm_err}")

        except Exception as e:
            logging.error(f"  Error processing media {media_code} ({folder}): {e}")
        finally:
            time.sleep(random.uniform(2.5, 4.0))

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
