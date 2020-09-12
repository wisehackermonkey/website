# website
```
 my personal website
```

![](./screen_v1.png)
## link [click here](orancollins.com)

### how to build 
```
docker build . -t wisehackermonkey/website:latest
```


### how to run  (DEV windows)
```
docker run -it --rm -v ${PWD}/website:/usr/share/nginx/html -p 7000:80 wisehackermonkey/website:latest
```


### how to deploy
```
docker run -d --restart always --name website -p 80:80 wisehackermonkey/website:latest
```

### Codespaces github one command
```bash
docker kill test && docker rm test &&docker build . -t wisehackermonkey/website:latest&&docker run -d --restart always --name test -p 80:80 wisehackermonkey/website:latest
```

