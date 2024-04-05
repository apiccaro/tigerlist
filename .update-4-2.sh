#!/bin/bash

echo ""
echo "This script stashes changes in tigerlist-4-2 and pulls a new version."
echo "Changes are not saved anywhere special, and work continues in the same branch."
echo ""


git branch
echo ""

git stash
git pull
echo ""

cd ..

read -p "Process complete. Clear terminal content before proceeding? (Y/N): " user_input

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
