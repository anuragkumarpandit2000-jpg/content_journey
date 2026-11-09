@echo off
chcp 65001 >nul
cd /d "D:\anurag\content_journey"
echo [AUTO DM DAEMON] Starting continuous 180s loop responder with anti-rate-limit safety...
"C:\Program Files\PostgreSQL\18\pgAdmin 4\python\python.exe" -u pipeline\auto_dm_responder.py --loop --interval 180 >> auto_dm.log 2>&1
