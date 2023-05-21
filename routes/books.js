var express = require('express');
var router = express.Router();
var knex = require('../db'); // Import db.js

// GET all books
router.get('/', function(req, res, next) {
  knex('books')
    .select('*')
    .then(books => res.json(books))
    .catch(err => next(err));
});

// GET a specific book by ID
router.get('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('books')
    .select('*')
    .where({ id })
    .first()
    .then(book => res.json(book))
    .catch(err => next(err));
});

// POST a new book
router.post('/', function(req, res, next) {
  const { shelfId, title, author, summary, coverImageUrl } = req.body;

  knex('books')
    .insert({ shelfId, title, author, summary, coverImageUrl })
    .returning('*')
    .then(book => res.json(book))
    .catch(err => next(err));
});

// PUT (update) a specific book by ID
router.put('/:id', function(req, res, next) {
  const { id } = req.params;
  const { shelfId, title, author, summary, coverImageUrl } = req.body;

  knex('books')
    .update({ shelfId, title, author, summary, coverImageUrl })
    .where({ id })
    .returning('*')
    .then(book => res.json(book))
    .catch(err => next(err));
});

// DELETE a specific book by ID
router.delete('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('books')
    .del()
    .where({ id })
    .returning('*')
    .then(book => res.json(book))
    .catch(err => next(err));
});

module.exports = router;
