#!/usr/bin/expect -f
spawn ssh root@5.189.145.126
expect "*assword: "
send "qoK8VLMl8CJbW\r"
expect "*#"
send "cd /home/build \r"
expect "*#"
send "git pull https://github.com/stefano-marchesi/test.git \r"
expect "*#"
send "docker-compose kill\r"
expect "*#"
send "docker-compose up\r"
