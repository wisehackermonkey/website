FROM node:16.9.1
ENV NODE_ENV=production
WORKDIR /usr/share/nginx/html
COPY ["package.json", "./"]
COPY . .
RUN npm install -D
RUN npm install --production
RUN npm run build

FROM nginx:alpine
COPY --from=0 /usr/share/nginx/html/dist /usr/share/nginx/html
RUN echo "nginx:alpine started."
EXPOSE 80
CMD ["nginx","-g","daemon off;"]