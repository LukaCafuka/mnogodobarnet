# Build Stage
FROM node:18-alpine AS build
LABEL authors="LukaCafuka"

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .
RUN npm run build


FROM node:18-alpine AS runtime
LABEL authors="LukaCafuka"

WORKDIR /app


ENV NODE_ENV=production


COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public


RUN npm ci --omit=dev

EXPOSE 3000
USER node

CMD ["npm", "start"]