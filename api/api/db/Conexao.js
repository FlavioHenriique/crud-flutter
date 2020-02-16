const { Pool, Client } = require('pg');

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'flutter',
    password: 'flavio22',
    port: 5432,
});

module.exports = connection;