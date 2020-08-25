#!/bin/sh

foo=10
x=foo

y1='$'$x
echo $y1

eval y2='$'$x
echo $y2

exit 0
