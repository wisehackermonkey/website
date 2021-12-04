
# website
```text
 my personal website
```
![](assets/2021-12-03-13-37-31.png)
## link [click here](orancollins.com)

# how to run the website
### using npm
```bash
npm install
npm run dev-host
```
### using pnpm
```bash
curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
pnpm install
pnpm run dev-host
```

# How to run using a docker container
### Prebuild (Recomended)
```bash
docker-compose  down
docker-compose  up -d
```
### Build From Scratch
```bash
docker build -t website:latest ./
docker run --rm -it --name website -p 80:80 website
```

# (Maintainer notes)
### Note: heres how to push new version to docker hub
```bash
docker login
docker build -t wisehackermonkey/website:react ./
docker push  wisehackermonkey/website:react

```

# How to run ssl version
### 
```bash
cd ~
cd /path/to/website
mkdir ./.cert
cp -r /etc/letsencrypt/live/orancollins.com/ /etc/letsencrypt/live/orancollins.com.old
ln -s /etc/letsencrypt/live/orancollins.com/ ./.cert/

docker build -f Dockerfile.ssl -t wisehackermonkey/website:react-ssl . 
docker push  wisehackermonkey/website:react-ssl
docker-compose down

docker-compose  -f docker-compose.ssl.yml up -d 

docker run --rm -it -p 443:443 -v "${PWD}/.cert/orancollins.com:/app/.cert/orancollins.com" wisehackermonkey/website:react-ssl 

/bin/sh

version: '3.3'
services:
    website:
        restart: always
        container_name: website
        ports:
            - '80:80'
            - '443:443'
        image: 'wisehackermonkey/website:react-ssl'
        volumes:
            - './.cert/orancollins.com:/app/.cert/orancollins.com'


```

# Link
### particles.js  lhttps://particles.js.org/