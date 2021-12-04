const express = require('express');
const path = require('path');
const fs = require('fs'),
    http = require('http'),
    https = require('https')

const app = express();
const PORT = 443
var options = {
    key: fs.readFileSync(path.join(__dirname,'.cert',"orancollins.com","privkey.pem")),
    cert: fs.readFileSync('.cert/orancollins.com/cert.pem'),
};


app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});



const server = https.createServer(options, app).listen(PORT, function () {
    console.log("Orans Server server listening on PORT: " + PORT);
});