FROM node:16.9.1
ENV NODE_ENV=production
WORKDIR /usr/share/nginx/html
COPY ["package.json", "./"]
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /usr/share/nginx/html/dist /usr/share/nginx/html
RUN echo "nginx:alpine started."
EXPOSE 80
EXPOSE 443
CMD ["nginx","-g","daemon off;"]