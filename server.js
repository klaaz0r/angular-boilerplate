var express = require('express');
var app = express();

//let heroku pick a port
var port = process.env.PORT || 8081;

app.use(express.static(__dirname + '/public'));
//start server
app.listen(port);
