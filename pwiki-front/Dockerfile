FROM node:20.11.1 as angular
WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular /app/dist/pwiki/browser /usr/share/nginx/html 
COPY assets/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80