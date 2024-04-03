FROM node:alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production
RUN npm install @types/node
RUN npm install -g typescript

COPY . .

RUN npm run build

FROM node:alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/server.js"]