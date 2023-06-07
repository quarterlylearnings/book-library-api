const knex = require('./db'); // importing the existing knex config

const Bookshelf = require('bookshelf'); // importing the Bookshelf ORM library

const bookshelf = Bookshelf(knex); // Initializing this app's Bookshelf instance with our knex configuration

// exporting our specific configuration with Bookshelf so it connects to the database
module.exports = bookshelf