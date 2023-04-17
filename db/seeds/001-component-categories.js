/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('component_categories').del()
  await knex('component_categories').insert([
    {id: 1, categories: 'CPU' },
    {id: 2, categories: 'GPU' },
    {id: 3, categories: 'PSU'},
    {id: 4, categories: 'Mother Board'},
    {id: 5, categories: "RAM"},
    {id: 6, categories: "Storage"},
    {id: 7, categories: 'Others'}
  ]);
};
