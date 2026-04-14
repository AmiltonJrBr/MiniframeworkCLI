@echo off
setlocal

for %%I in ("%~dp0..") do set "PROJECT_ROOT=%%~fI"

start "" cmd.exe /k "title Mini Framework CLI && cd /d ""%PROJECT_ROOT%"" && node index.js"

echo Nova janela do terminal aberta para o Mini Framework CLI.
