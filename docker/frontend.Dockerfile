FROM nginx:alpine

# eliminar configuración default
RUN rm -rf /usr/share/nginx/html/*

# copiar frontend
COPY frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]