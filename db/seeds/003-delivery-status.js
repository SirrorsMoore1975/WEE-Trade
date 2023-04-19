/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('delivery_status').del()
  await knex('delivery_status').insert([
    {id: 1, delivery_status: 'Pending'},
    {id: 2, delivery_status: 'Shipped'},
    {id: 3, delivery_status: 'Delivering'},
    {id: 4, delivery_status: 'Delivered'},
    {id: 5, delivery_status: 'Order Cancelled'}
  ]);
};
