
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
npm run dev
```
### using pnpm
```bash
pnpm install
pnpm run dev
```

# How to run using a docker container
### Prebuild

### Build From Scratch
```bash
docker build -t website:latest ./
docker run --rm -it --name website -p 80:80 website
```

# Link
### particles.js  lhttps://particles.js.org/