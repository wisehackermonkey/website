const express = require('express');
const path = require('path');
const fs = require('fs'),
    http = require('http'),
    https = require('https')

const app = express();
const PORT = 443
var options = {
    key: fs.readFileSync('./.cert/key.pem'),
    cert: fs.readFileSync('./.cert/cert.pem'),
};


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



const server = https.createServer(options, app).listen(PORT, function () {
    console.log("Orans.dev server listening on PORT: " + PORT);
});