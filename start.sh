#!/bin/bash
# Build the Docker image
docker build -t portfolio-static .

# Run the Docker container, mapping port 8080 to container port 80
docker run -d --name portfolio-static -p 8080:80 portfolio-static

echo "Portfolio is running at http://localhost:8080"

