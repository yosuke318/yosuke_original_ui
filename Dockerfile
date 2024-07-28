FROM node:20.5.0

WORKDIR /data/src

RUN npm install -g npm@latest && npm install -g vite@latest