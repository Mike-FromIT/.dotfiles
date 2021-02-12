#!/usr/bin/env bash

killall -q polybar
while pgrep -U $UID -x polybar >/dev/null; do sleep 1; done


polybar bar1&
polybar bar2&
