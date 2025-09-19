# Serve the static SPA files with NGINX
FROM nginx:stable-alpine

# Copy your NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your static files directly to the NGINX web root
COPY ./app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]