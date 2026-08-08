@echo off
echo ==============================================
echo      STARTING TREKPATH FULL-STACK PROJECT
echo ==============================================
echo.

echo Cleaning up old processes...
FOR /F "tokens=5" %%T IN ('netstat -a -n -o ^| findstr :5000') DO (
  taskkill /PID %%T /F >nul 2>&1
)
FOR /F "tokens=5" %%T IN ('netstat -a -n -o ^| findstr :3001') DO (
  taskkill /PID %%T /F >nul 2>&1
)
echo Old processes cleaned.
echo.

:: Start the Backend Server in a new command prompt window
echo Starting Backend Server on port 5000...
start "TrekPath Backend" cmd /k "cd backend && node setupDb.js && node server.js"

:: Start the Frontend Server in a new command prompt window
echo Starting Frontend Server on port 3001...
start "TrekPath Frontend" cmd /k "cd frontend && node server.js"

echo.
echo Servers are booting up... 
ping 127.0.0.1 -n 5 > nul

:: Automatically open the homepage in the default web browser
echo Opening the website in your browser!
start http://127.0.0.1:3001/index.html
