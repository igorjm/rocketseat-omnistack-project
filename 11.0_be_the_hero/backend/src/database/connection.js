const knex = require('knex');
const configuration = requier('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;
