#!/bin/bash

echo ""
#echo "This script is only neccesary the first time you run the server in your terminal session."
#echo "Next time, just use 'npm run dev'"
echo ""

cd ..
sudo chmod -R 777 /home/j_moran/tigerlist-4-2

cd tigerlist-4-2

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash;

source ~/.bashrc;
nvm use 18;


read -p "Ready to run site. Clear terminal content before proceeding? (Y/N): " user_input

# Check the entered character and run the corresponding script
case "$user_input" in
  "Y" | "y")
    clear
    ;;

  "N" | "n")
    ;;
*)
    echo "Unexpected Character. Continuing."
    ;;

esac




npm run dev;

echo "process complete"