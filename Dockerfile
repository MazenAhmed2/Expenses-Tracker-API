FROM node:23-alpine3.20

RUN npm install

COPY . .

CMD ['node', 'index.js']