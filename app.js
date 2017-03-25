// Require Express
var express = require('express');

// Instantiate an instance of express and assign it to app
var app = express();

// Set the port to the environment variable port or 3000 if it is not defined
var port = process.env.PORT || 3000;

// On a get request to / send 'welcome to the api' to the client
app.get('/', function (req, res) {
  res.send('welcome to the API');
});

// Set the server to listen on the port
app.listen(port, function () {
  console.log('Running on PORT: ' + port);
});