FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY . .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]