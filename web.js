var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var indexHTMLBuffer = fs.readFileSync('index.html');
var indexHTMLString = indexHTMLBuffer.toString('utf-8',0,indexHTMLBuffer.length);

app.get('/', function(request, response) {
  response.send(indexHTMLString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
