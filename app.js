//require http module, express and body parser and express modules.
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

//initialize express into app
var app = express();

//Set the port
var port = process.env.PORT || 8000;

//tell express to use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require back-end files and initialize with app
var routes = require('./routes/routes.js')(app);

// start server
var server = app.listen(port, function(){
  console.log('listening on port 8000');
})
