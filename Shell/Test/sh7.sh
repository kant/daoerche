#!/bin/sh

text="global variable"

foo() {
  local text="local variable"
  echo "Function foo is executing"
  echo $text
}

echo $text
foo
echo $text

exit 0
