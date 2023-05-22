var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var librariesRouter = require('./routes/libraries');
var shelvesRouter = require('./routes/shelves');
var booksRouter = require('./routes/books');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/libraries', librariesRouter);
app.use('/shelves', shelvesRouter);
app.use('/books', booksRouter);

// 404 Not Found handler
app.use(function(req, res, next) {
    res.status(404).send('404 Not Found');
});
  
  // Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('A server error occurred');
});

module.exports = app;
