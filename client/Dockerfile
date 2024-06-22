# Stage 1: Build the React Vite application
FROM node:latest AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React Vite application with NGINX
FROM nginx:1.25.2-alpine-slim

# Copy the built static files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
