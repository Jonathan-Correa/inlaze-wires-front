FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --omit=dev
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angular-template-frontend /usr/share/nginx/html