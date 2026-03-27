#!/bin/bash

echo "Stopping and removing existing 'dog-walking-app' containers..."
docker stop $(docker ps -aq --filter ancestor=dog-walking-app) 2>/dev/null
docker rm $(docker ps -aq --filter ancestor=dog-walking-app) 2>/dev/null

echo "Removing 'dog-walking-app' image..."
docker rmi dog-walking-app 2>/dev/null

echo "Rebuilding 'dog-walking-app' image without cache..."
docker build --no-cache -t dog-walking-app .

if [ $? -eq 0 ]; then
    echo "Image 'dog-walking-app' rebuilt successfully."
else
    echo "Image rebuild failed."
    exit 1
fi
