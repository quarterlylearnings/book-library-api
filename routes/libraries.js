var express = require('express');
var router = express.Router();
var knex = require('../db'); // Import knexfile

// GET all libraries
router.get('/', function(req, res, next) {
  knex('libraries')
    .select('*')
    .then(libraries => res.json(libraries))
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
