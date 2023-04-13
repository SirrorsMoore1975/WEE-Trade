/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable("post", function (table) {
    table.increments("id").primary();
    table.integer("seller_id").references("user.id").notNullable();
    table.string("img_url",255)
    table.text("description","text").notNullable(); // options: tinytext, text, mediumtext, longtext,
    table.string("categories",64).references("component_categories.categories").notNullable();
    table.string("condition",64).references("condition.condition").notNullable();
    table.date("post_date").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.decimal("cost",12,2).notNullable();
  }
  )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    return await knex.schema.dropTable("post");
  
};
