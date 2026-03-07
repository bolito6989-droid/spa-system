@echo off
echo ==========================
echo SUBIENDO CAMBIOS A GITHUB
echo ==========================

git add .

set /p mensaje=Mensaje del commit: 

git commit -m "%mensaje%"

git push

echo ==========================
echo CAMBIOS SUBIDOS
echo ==========================

pause