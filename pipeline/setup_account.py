import os
import sys
import getpass
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

from instagrapi import Client
from instagrapi.exceptions import TwoFactorRequired, ChallengeRequired

ROOT_DIR = Path("D:/anurag/content_journey")
ENV_PATH = ROOT_DIR / ".env"
SESSION_PATH = ROOT_DIR / "session.json"

def update_env(username, password):
    lines = []
    if ENV_PATH.exists():
        with open(ENV_PATH, "r", encoding="utf-8") as f:
            lines = f.readlines()

    new_lines = []
    has_user = False
    has_pass = False

    for line in lines:
        if line.strip().startswith("INSTAGRAM_USERNAME="):
            new_lines.append(f"INSTAGRAM_USERNAME={username}\n")
            has_user = True
        elif line.strip().startswith("INSTAGRAM_PASSWORD="):
            new_lines.append(f"INSTAGRAM_PASSWORD={password}\n")
            has_pass = True
        else:
            new_lines.append(line)

    if not has_user:
        new_lines.append(f"INSTAGRAM_USERNAME={username}\n")
    if not has_pass:
        new_lines.append(f"INSTAGRAM_PASSWORD={password}\n")

    with open(ENV_PATH, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print(f"✅ Credentials updated in: {ENV_PATH}")

def setup():
    print("====================================================")
    print("🔐 INSTAGRAM ACCOUNT SETUP FOR AUTOPILOT")
    print("====================================================\n")

    username = input("Enter your Instagram Username / Handle: ").strip().lstrip("@")
    if not username:
        print("Username cannot be empty!")
        return

    password = getpass.getpass("Enter your Instagram Password (typing hidden): ").strip()
    if not password:
        print("Password cannot be empty!")
        return

    print(f"\nVerifying credentials with Instagram for @{username}...")
    cl = Client()
    cl.delay_range = [2, 4]

    try:
        cl.login(username, password)
        print(f"🎉 Login Successful for @{username}!")

        # Save session
        cl.dump_settings(SESSION_PATH)
        print(f"✅ Permanent session saved to: {SESSION_PATH}")

        # Update .env
        update_env(username, password)
        print("\n🚀 All set! Your account is now fully connected to the Autopilot Engine.")

    except TwoFactorRequired:
        code = input("Enter 2FA Security Code sent to your phone/authenticator: ").strip()
        cl.login(username, password, verification_code=code)
        cl.dump_settings(SESSION_PATH)
        update_env(username, password)
        print("🎉 2FA Verified & Account successfully connected!")

    except ChallengeRequired:
        print("⚠️ Instagram requested an email/SMS challenge. Please verify it in your Instagram app.")

    except Exception as e:
        print(f"❌ Login failed: {e}")

if __name__ == "__main__":
    setup()
