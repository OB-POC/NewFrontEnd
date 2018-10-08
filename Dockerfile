FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004
CMD [ "npm", "build" ]
CMD [ "npm", "run", "serve" ]