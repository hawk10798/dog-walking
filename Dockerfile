# Stage 1: Build the Astro project with Node.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --prefix /app

# Copy the rest of the application code
COPY . .

# Build the Astro project
RUN npm run build --prefix /app

# Stage 2: Serve the Astro project with Nginx
FROM nginx:alpine

# Copy Nginx configuration (optional, using default for now)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Astro application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
