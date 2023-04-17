/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('condition').del()
  await knex('condition').insert([
    {id: 1, condition: 'Brand New'},
    {id: 2, condition: 'Pre-Owned'},
    {id: 3, condition: 'Refrubished'},
    {id: 4, condition: 'Defective'},
    {id: 5, condition: 'Damaged'}
  ]);
};
