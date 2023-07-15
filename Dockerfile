FROM node:19.8.1

WORKDIR /data/src

RUN npm install -g npm@latest && npm install -g vite@latest