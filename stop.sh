#!/bin/bash
# Stop and remove the portfolio-static container if running
docker stop portfolio-static 2>/dev/null
docker rm portfolio-static 2>/dev/null

echo "Stopped and removed portfolio-static container."

