
var environment = process.env.NODE_ENV || 'development'; // if something else isn't setting ENV, use development
var config = require('./knexfile')[environment]; // require environment's settings from knexfile
var knex = require('knex')(config); // connect knex to the database via the config

module.exports = knex;
