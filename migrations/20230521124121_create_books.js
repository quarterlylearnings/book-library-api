/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.integer('shelfId').unsigned().notNullable();
      table.string('title').notNullable();
      table.string('author').notNullable();
      table.text('summary').notNullable();
      table.string('coverImageUrl');
      table.timestamps(true, true);
  
      table.foreign('shelfId').references('id').inTable('shelves');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('books');
  };