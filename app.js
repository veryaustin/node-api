var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/bookAPI');

// Book Model
var Book = require('./models/bookModel');

// Book Router
var bookRouter = express.Router();

// Create a new route '/books
bookRouter.route('/books')
  .get(function (req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  });

// Use bookRouter for the /api route
app.use('/api', bookRouter);

app.get('/', function (req, res) {
  res.send('welcome to the API');
});

app.listen(port, function () {
  console.log('Running on PORT: ' + port);
});