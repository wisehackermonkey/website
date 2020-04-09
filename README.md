# website
 my personal website

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
docker run -d --restart always  -p 80:80 wisehackermonkey/website:latest
```

