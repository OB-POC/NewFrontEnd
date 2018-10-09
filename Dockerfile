FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004
CMD [ "npm","run", "build" ]
CMD [ "npm", "run", "serve" ]