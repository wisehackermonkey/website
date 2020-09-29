# website
```text
 my personal website
```

![](./screen_v1.png)
## link [click here](orancollins.com)

### how to build 
```bash
docker build . -t wisehackermonkey/website:latest
```


### how to run  (DEV windows)
```bash
docker run -it --rm -v ${PWD}/website:/usr/share/nginx/html -p 7000:80 wisehackermonkey/website:latest
```


### how to deploy
```bash
docker run -d --restart always --name website -p 80:80 wisehackermonkey/website:latest
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

