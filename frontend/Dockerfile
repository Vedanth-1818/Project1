FROM node:18-alpine
WORKDIR /app/frontend/my-app
COPY frontend/my-app/package*.json ./
RUN npm install --legacy-peer-deps
COPY frontend/my-app/ ./
EXPOSE 3000
CMD ["npm","start"]
