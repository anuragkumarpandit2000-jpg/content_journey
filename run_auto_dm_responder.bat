@echo off
chcp 65001 >nul
cd /d "D:\anurag\content_journey"
echo [AUTO DM RESPONDER] Checking Instagram comments and sending automated PDF solution guides...
"C:\Program Files\PostgreSQL\18\pgAdmin 4\python\python.exe" -u pipeline\auto_dm_responder.py >> auto_dm.log 2>&1
echo [AUTO DM RESPONDER] Completed scan at %DATE% %TIME%.
