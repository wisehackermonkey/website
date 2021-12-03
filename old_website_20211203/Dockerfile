FROM nginx:alpine
COPY website/ /usr/share/nginx/html
RUN echo "nginx:alpine started."
EXPOSE 80
CMD ["nginx","-g","daemon off;"]