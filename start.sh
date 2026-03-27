#!/bin/bash

echo "Starting 'dog-walking-app' container..."
docker run -p 80:80 dog-walking-app

if [ $? -eq 0 ]; then
    echo "Container 'dog-walking-app' started on http://localhost."
else
    echo "Failed to start container."
    exit 1
fi
