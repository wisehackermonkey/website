FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /usr/share/nginx/html
COPY ["package.json", "./"]
RUN npm install --production
RUN npm run build

FROM nginx:alpine
COPY --from=0 /usr/share/nginx/html/ /usr/share/nginx/html
RUN echo "nginx:alpine started."
EXPOSE 80
CMD ["nginx","-g","daemon off;"]