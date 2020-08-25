#!/bin/sh

isYourName() {
  echo "Is your name $* ?"
  while true
  do
    echo -n "Enter yes or no: "
    read x
    case "$x"
    in
      y | yes ) return 0;;
      n | no  ) return 1;;
      *       ) echo "Answer yes or no"
    esac
  done
}

echo "Original parameters are $*"

if isYourName "$*"
then 
  echo "Hi $1, nice name"
else
  echo "Never mind"
fi

exit 0
