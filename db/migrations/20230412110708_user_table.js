/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", function(table){
        table.increments("id").primary();
        table.string("username").notNullable().index();
        table.string("email",32).notNullable().index();
        table.string("address",255).notNullable();
        table.integer('phone');
        table.integer('age');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("user");
};
