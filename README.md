# website
```text
 my personal website
```

![](./screen_v1.png)
## link [click here](orancollins.com)

### It loads super fast on dialup!!!
![](./dialup_speed.gif)
### also i added my own custom http headers!
![](https://i.imgur.com/WGvbHwi.png)
### also also funny robots hehe
![](https://i.imgur.com/o0x61eF.png)

### how to build 
```bash
docker build . -t wisehackermonkey/website:latest
```
### build for multiple arches
```bash
docker login
export DOCKER_CLI_EXPERIMENTAL=enabled
DOCKER_BUILDKIT=1 & docker buildx create --use --name multiarchbuilder
docker buildx ls
# DOCKER_BUILDKIT=1 & docker build -t wisehackermonkey/website:latest .
DOCKER_BUILDKIT=1 & docker buildx build -t wisehackermonkey/website:latest --platform=linux/arm,linux/arm64,linux/amd64 . --push

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

### How to build for multiple archatectures like raspbery pi 2,3,4!
#### fallowed tutorial [here](https://collabnix.com/building-arm-based-docker-images-on-docker-desktop-made-possible-using-buildx/)
```bash
docker buildx ls
docker buildx create --name rpi_builder
docker buildx use rpi_builder
docker buildx ls
docker buildx inspect --bootstrap
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm/v6 -t wisehackermonkey/website --push .
```
