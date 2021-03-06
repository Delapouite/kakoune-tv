#!/bin/bash

# this script should be run in a tmux window
# some of the sleep commands may be extraneous

if [ $# -eq 0 ]; then
  # it must point to a valid dir with a cmd file inside
  echo 'You need to provide a valid VimGolf id'
  exit
fi

# open a new column on the right
tmux split -h -l 120
# split this column vertically, this ways the recording pane will be of decent size
tmux split -v -t 1

# start asciinema recording
xdotool getwindowfocus windowfocus --sync type "asciinema rec ./asciicasts/$1.json"
xdotool key Return
sleep 1

# launch kak without clippy
xdotool type --delay 50 "kak -n -e 'set global ui_options ncurses_assistant=none; set global autoinfo normal' $1/in"
xdotool key Return

# kakoune magic previously generated by convert.sh
source "xdokeys/$1.sh"

# need to quit kakoune to send the next ctrl+d
sleep 2
xdotool type --delay 1000 ':q!'
sleep 1
xdotool key Return
sleep 1

# stop asciinema recording
xdotool key 'ctrl+d'
sleep 1

# kill recording tmux pane
xdotool type 'exit'
sleep 1
xdotool key Return

# kill positioning tmux pane
xdotool type 'exit'
sleep 1
xdotool key Return
