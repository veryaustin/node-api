var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookAPI');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Book Model
var Book = require('./models/bookModel');

// Book Router
bookRouter = require('./routes/bookRouter')(Book);

// Use bookRouter for the /api route
app.use('/api/books', bookRouter);

app.get('/', function (req, res) {
  res.send('welcome to the API');
});

app.listen(port, function () {
  console.log('Running on PORT: ' + port);
});