@echo off
echo ==============================================
echo      STARTING TREKPATH FULL-STACK PROJECT
echo ==============================================
echo.

:: Start the Backend Server in a new command prompt window
echo Starting Backend Server on port 5000...
start "TrekPath Backend" cmd /k "cd backend && node setupDb.js && node server.js"

:: Start the Frontend Server in a new command prompt window
echo Starting Frontend Server on port 3000...
start "TrekPath Frontend" cmd /k "cd frontend && node server.js"

echo.
echo Servers are booting up... 
ping 127.0.0.1 -n 5 > nul

:: Automatically open the homepage in the default web browser
echo Opening the website in your browser!
start chrome http://127.0.0.1:3000/index.html
