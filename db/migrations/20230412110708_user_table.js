/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    return await knex.schema.createTable("user", function(table){
        table.increments("id").primary();
        table.string("username",255).notNullable().index();
        table.string("email",32).notNullable().index();
        table.text("address",'text').notNullable();
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("user");
};
