# website
```text
 my personal website
```

![](./screen_v1.png)
## link [click here](orancollins.com)

### It loads super fast on dialup!!!
![](./dialup_speed.gif)
### how to build 
```bash
docker build . -t wisehackermonkey/website:latest
```
#### docker compose (DEV)
```bash
cd project/folder/here/

docker-compose -f docker-compose.development.yml build
docker-compose -f docker-compose.development.yml up
```


### how to run  (DEV windows)
```bash
docker run -it --rm -v ${PWD}/website:/usr/share/nginx/html -p 7000:80 wisehackermonkey/website:latest
```


### how to deploy
#### Docker (normal)
```bash
docker run -d --restart always --name website -p 80:80 wisehackermonkey/website:latest
```
#### docker compose
#### docker compose (DEV)
```bash
cd project/folder/here/
docker-compose  up -d
```
### Run on raspberry pi 3 (ARM) os = dietpi 20200929
#### Build
```bash
git clone https://github.com/wisehackermonkey/website.git
cd website
docker build . -t wisehackermonkey/website:arm
docker login
docker push wisehackermonkey/website:arm 
```

#### Install
```bash
docker run -d --restart always --name website -p 80:80 wisehackermonkey/website:arm
```

### Codespaces github one command
```bash
docker kill test && docker rm test &&docker build . -t wisehackermonkey/website:latest&&docker run -d --restart always --name test -p 80:80 wisehackermonkey/website:latest
```



# How to setup https with traefik
### Link [How To Use Traefik v2 as a Reverse Proxy for Docker Containers on Ubuntu 20.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-traefik-v2-as-a-reverse-proxy-for-docker-containers-on-ubuntu-20-04)
```bash
sudo apt-get install apache2-utils
htpasswd -nb admin secure_password

code traefik_dynamic.toml
docker network create web
code acme.json
chmod 600 acme.json 
code docker-compose.traefik.yml
docker-compose -f docker-compose.traefik.yml up

code docker-compose.traefik2.yml
docker-compose -f docker-compose.traefik2.yml up

```