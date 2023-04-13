/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('order', function (table){
    table.increments("id").primary();
    table.integer('post_id').references("post.id");
    table.integer('seller_id').references("user.id");
    table.integer('buyer_id').references("user_id");
    table.string('delivery',64).references("delivery_status.delivery");

  })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable('order')
  
};
