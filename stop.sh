#!/bin/bash

# Stop and remove Docker containers for the dog-walking project

PROJECT_NAME="dog-walking"

echo "Stopping Docker containers for $PROJECT_NAME..."

# Stop all containers with the project name
docker ps --filter "name=$PROJECT_NAME" --quiet | xargs -r docker stop

echo "Done! All $PROJECT_NAME containers have been stopped."
