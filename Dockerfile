FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3004
CMD [ "npm", "run", "serve" ]