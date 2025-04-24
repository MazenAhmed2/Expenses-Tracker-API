FROM node:23-alpine3.20

WORKDIR /usr/app
COPY . /usr/app
RUN npm install


CMD ['node', 'index.js']
