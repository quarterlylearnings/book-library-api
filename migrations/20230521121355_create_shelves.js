/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('shelves', function(table) {
      table.increments('id').primary();
      table.integer('libraryId').unsigned().notNullable();
      table.string('genre').notNullable();
      table.timestamps(true, true);
  
      table.foreign('libraryId').references('id').inTable('libraries');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('shelves');
  };
  