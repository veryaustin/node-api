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
var bookRouter = express.Router();

// Route for '/books
bookRouter.route('/books')
  .get(function (req, res) {
    var query = {};

    if (req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, function (err, books) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  })
  .post(function (req, res) {
    var book = new Book(req.body);
    book.save();
    res.status(201).send(book);
  });

// Route for single book
bookRouter.route('/books/:bookId')
  .get(function (req, res) {
    Book.findById(req.params.bookId, function (err, book) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(book);
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