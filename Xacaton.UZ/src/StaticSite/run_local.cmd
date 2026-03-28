@echo off
setlocal
cd /d "%~dp0"

rem Use local APPDATA so NuGet doesn't touch Roaming (решает отказ доступа)
set APPDATA=%CD%\.appdata
if not exist "%APPDATA%" mkdir "%APPDATA%"

echo APPDATA=%APPDATA%
echo Starting server on http://localhost:5000 ...

dotnet run --configfile NuGet.Config --urls http://localhost:5000

endlocal
