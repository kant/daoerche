#!/bin/sh

foo() {
  echo "daoerche"
  return 1;
}

result="$(foo)"

echo "$result"

exit 0
