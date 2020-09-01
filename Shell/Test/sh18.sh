#!/bin/sh

echo The current directory is $PWD
echo The current users are $(who)

whoisthere=$(who)
echo $whoisthere

exit 0
