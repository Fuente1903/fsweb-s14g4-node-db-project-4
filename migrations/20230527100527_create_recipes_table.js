/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    exports.up = function (knex) {
        return knex.schema.createTable('recipes', function (table) {
          table.increments('id').primary();
          table.string('name').notNullable();
        });
      };
      
      exports.down = function (knex) {
        return knex.schema.dropTableIfExists('recipes');
      };
      
  
};
