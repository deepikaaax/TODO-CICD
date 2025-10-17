# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY backend/package.json backend/
COPY frontend/package.json frontend/
COPY . .

WORKDIR /app/frontend
RUN npm ci && npm run build

FROM node:20-alpine
WORKDIR /app

COPY backend/package.json backend/
COPY backend/src backend/src
RUN cd backend && npm ci --omit=dev

COPY --from=build /app/frontend/dist ./frontend/dist

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000 4000
CMD ["node", "backend/src/server.js"]
