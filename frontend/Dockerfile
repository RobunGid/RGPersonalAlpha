FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY ./frontend/ .
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]