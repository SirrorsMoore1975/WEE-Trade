/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.alterTable('user', function(table) {
        table.unique("email");
        table.unique("username");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('user',function(table) {
        table.dropUnique("email");
        table.dropUnique("username");
    })
  
};
