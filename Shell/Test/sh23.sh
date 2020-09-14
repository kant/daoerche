#!/bin/sh

ed a_text_file <<!FUCK!
3
d
.,\$s/is/was/
w
q
!FUCK!

exit 0
