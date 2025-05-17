#!/bin/bash
# This was my main db checking script, paths are outdated since I moved into project

read -p "Print listings as dictionaries (D) or a table (T) ?: " user_input

# Check the entered character and run the corresponding script
case "$user_input" in
  "D" | "d")
    echo "Using showRecentPostDicts.js"
    node tests/showRecentPostDicts.js
    ;;

  "T" | "t")
    echo "Using showRecentPostTable.js"
    node tests/showRecentPostTable.js
    ;;

  "Q" | "q")
    echo "Exiting"
    ;;

  *)
    echo "Invalid character. Exiting."
    ;;

esac
