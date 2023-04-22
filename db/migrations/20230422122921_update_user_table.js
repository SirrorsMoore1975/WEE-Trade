/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.alterTable("user", function (table) {
        table.string("UID");
    } )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.alterTable("user", function (table) {
        table.dropColumn("UID");
    })
  
};
