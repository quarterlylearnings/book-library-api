var express = require('express');
var router = express.Router();
var knex = require('../db'); // Import db.js

// GET all shelves
router.get('/', function(req, res, next) {
  knex('shelves')
    .select('*')
    .then(shelves => res.json(shelves))
    .catch(err => next(err));
});

// GET all books for a specific shelf by ID
router.get('/:id/books', function(req, res, next) {
    const { id } = req.params;
  
    knex('books')
      .select('*')
      .where({ shelfId: id })
      .then(books => res.json(books))
      .catch(err => next(err));
  });
  

// GET a specific shelf by ID
router.get('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('shelves')
    .select('*')
    .where({ id })
    .first()
    .then(shelf => res.json(shelf))
    .catch(err => next(err));
});

// POST a new shelf
router.post('/', function(req, res, next) {
  const { libraryId, genre } = req.body;

  knex('shelves')
    .insert({ libraryId, genre })
    .returning('*')
    .then(shelf => res.json(shelf))
    .catch(err => next(err));
});

// PUT (update) a specific shelf by ID
router.put('/:id', function(req, res, next) {
  const { id } = req.params;
  const { libraryId, genre } = req.body;

  knex('shelves')
    .update({ libraryId, genre })
    .where({ id })
    .returning('*')
    .then(shelf => res.json(shelf))
    .catch(err => next(err));
});

// DELETE a specific shelf by ID
router.delete('/:id', function(req, res, next) {
  const { id } = req.params;

  knex('shelves')
    .del()
    .where({ id })
    .returning('*')
    .then(shelf => res.json(shelf))
    .catch(err => next(err));
});

module.exports = router;