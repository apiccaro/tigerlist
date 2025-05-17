#!/bin/bash

echo ""
#echo "This script is only necessary the first time you run the server in your terminal session."
#echo "Next time, just use 'npm run dev'"
echo ""

sudo chmod -R 777 /home/j_moran/tigerlist

cd /home/j_moran/tigerlist

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash;

source ~/.bashrc;
nvm use 18;

read -p "Ready to run site. 'Y' to clear terminal, Enter to skip: " user_input

# Check the entered character and run the corresponding script
case "$user_input" in
  "Y" | "y")
    clear
    ;;

  "")
    echo "Continuing"
    ;;
  *)
    echo "Unexpected Entry. Continuing."
    ;;

esac

#npm run dev;
# So terminal does not print out localhost 
npm run dev -- --hostname tigerlist.coloradocollege.edu --port 3000


echo "done"

