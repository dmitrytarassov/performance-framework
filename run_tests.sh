#!/bin/sh

mkdir -p tmp

for FILE in "$1"/*
do
  if [ -f "$FILE" ]; then
    echo "$FILE"
    node make-test-file.js tmp "$FILE"
    /usr/bin/time node tmp/"$FILE"
  fi
done