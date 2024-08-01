#!/bin/bash

# Specify the directory containing the files
DIRECTORY=$1

mkdir -p tmp
mkdir -p "tmp/$DIRECTORY"

# Check if init.js exists in the original directory
if [ -f "$DIRECTORY/init.js" ]; then
  cp "$DIRECTORY/init.js" "tmp/$DIRECTORY/init.js"
  node "tmp/$DIRECTORY/init.js" "tmp/$DIRECTORY"
fi

# Loop through each .js file in the original directory
for FILE in "$DIRECTORY"/*.js
do
  # Check if the item is a file (not a directory) and is not 'init.js'
  if [ -f "$FILE" ] && [ "$(basename "$FILE")" != "init.js" ]; then
    echo "$FILE"
    node make-test-file.js tmp "$FILE"
    /usr/bin/time node tmp/"$FILE" "tmp/$DIRECTORY"
  fi
done
