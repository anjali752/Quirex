@echo off
title Launching Quirex Project
echo ===================================================
echo           Starting Quirex Fullstack Project
echo ===================================================
echo.
echo Starting Backend (Port 4000)...
start "Quirex Backend Server" cmd /k "cd /d %~dp0backend && npm start"

echo Starting Frontend (Port 5173)...
start "Quirex Frontend Server" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Both Frontend and Backend are starting in separate windows!
echo Frontend will be available at: http://localhost:5173
echo Backend will be available at:  http://localhost:4000
echo ===================================================
pause
