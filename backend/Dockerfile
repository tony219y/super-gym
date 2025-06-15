# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Compile TypeScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 4001
# Run the compiled JS
CMD ["npm", "start"]
