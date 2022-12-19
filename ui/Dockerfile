FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/ui /usr/share/nginx/html
