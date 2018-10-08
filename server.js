const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const {
    port: serverPort
} = require("./config.json");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', express.static(path.join(__dirname, './', 'public')));

app.listen(serverPort, () => {
    console.log(`Listening on ${serverPort}`);
})