const knex = require("knex");
const knexConfig = require("../knexfile");

//const result = process.env.PORT ? knexConfig.production : knexConfig.development;
const result = process.env.DB_ENV === "production" ? "production" : "development";


module.exports = knex(knexConfig[result]);
