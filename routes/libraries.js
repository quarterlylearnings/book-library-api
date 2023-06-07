var express = require('express');
var router = express.Router();
var knex = require('../db'); // Import knexfile
const Library = require('../models/Library') // importing the Library model which already has a configuration (via Bookshelf for connecting to the database)

// GET all libraries
router.get('/', function(req, res, next) {

  Library.fetchAll()
  .then(libraries => res.json(libraries))
  .catch(err => next(err));

  // the code above should give the same response as the code below
  // the difference is that now, we're using Bookshelf models for a
  // less SQL-like syntax that more closely looks like how we'd describe what's taking place
  
  // knex('libraries')
  //   .select('*')
  //   .then(libraries => res.json(libraries))
  //   .catch(err => next(err));
  });


// GET all shelves for a specific library by ID
router.get('/:id/shelves', function(req, res, next) {
    const { id } = req.params;
  
    knex('shelves')
      .select('*')
      .where({ libraryId: id })
      .then(shelves => res.json(shelves))
      .catch(err => next(err));
});

  // GET all books for a specific library by ID
router.get('/:id/books', function(req, res, next) {
    const { id } = req.params;
  
    knex('books')
      .join('shelves', 'shelves.id', 'books.shelfId')
      .select('books.*')
      .where({ 'shelves.libraryId': id })
      .then(books => res.json(books))
      .catch(err => next(err));
});

// GET a specific library by its ID
router.get('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('libraries')
    .select('*')
    .where({ id })
    .first()
    .then(library => res.json(library))
    .catch(err => next(err));
});

// POST a new library
router.post('/', function(req, res, next) {
  const { name } = req.body;

  knex('libraries')
    .insert({ name })
    .returning('*')
    .then(library => res.json(library))
    .catch(err => next(err));
});

// PUT (update) a specific library by its ID
router.put('/:id', function(req, res, next) {
  const { id } = req.params;
  const { name } = req.body;

  knex('libraries')
    .update({ name })
    .where({ id })
    .returning('*')
    .then(library => res.json(library))
    .catch(err => next(err));
});

// DELETE a specific library by its ID
router.delete('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('libraries')
    .del()
    .where({ id })
    .returning('*')
    .then(library => res.json(library))
    .catch(err => next(err));
});

module.exports = router;
