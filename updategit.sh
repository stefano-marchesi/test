#!/usr/bin/expect -f
spawn git push origin master
expect "*: "
send "stefano-marchesi\r"
expect "*:"
send "albachiara1\r"
