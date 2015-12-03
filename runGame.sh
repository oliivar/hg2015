#!/bin/bash

echo killing container

docker kill devel

echo removing container

docker rm -f devel

echo starting up new container

docker run -p 9000:8080 -d --name devel -e "NODE_ENV=production" stefand12/tictactoe

docker ps

echo DONE!

