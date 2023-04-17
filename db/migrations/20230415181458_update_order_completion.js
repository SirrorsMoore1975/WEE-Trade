/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.alterTable('order', function (table){
    table.timestamp("order_created").defaultTo(knex.fn.now());
    table.timestamp("order_updated").defaultTo(knex.fn.now());
  } )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.alterTable('order', function (table) {
    table.dropColumn("completion");
  })
};
