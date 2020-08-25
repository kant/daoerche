#!/bin/sh

echo "Enter password"
read trythis

while [ "$trythis" != "123456" ]
do
  echo "Sorry, try again"
  read trythis
done
exit 0
