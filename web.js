var express = require('express');
var fs = require('fs');
f1 = fs.readFileSync('index.html')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(f1.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
