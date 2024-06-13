# Stage 1: Build the React application
FROM node:14-alpine as build

WORKDIR /app

# Remove NODE_OPTIONS since Node.js 14 doesn't need the OpenSSL legacy provider
# ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
