/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("component_categories", function (table) {
    table.increments("id").primary();
    table.string("categories",64).unique();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable("component_categories");
  ;
};
