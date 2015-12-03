#!/bin/bash

#docker push stefand12/tictactoe

echo killing tester 

ssh vagrant@192.168.33.11 docker kill tester

echo removing tester

ssh vagrant@192.168.33.11 docker rm -f tester

echo pulling latest image

ssh vagrant@192.168.33.11 docker pull stefand12/tictactoe

echo running up docker named tester

ssh vagrant@192.168.33.11 docker run -p 9090:8080 -d --name tester -e "NODE_ENV=production" stefand12/tictactoe

ssh vagrant@192.168.33.11 exit

echo done
