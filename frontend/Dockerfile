# frontend/Dockerfile
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

# Set API base url from --build-arg
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
