var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('Testando server na porta ' + port);

const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'flutter',
    password: 'flavio22',
    port: 5432,
});

pool.query('SELECT * from usuario', (err, res) => {
    console.log(err, res.rows[0].nome);
    pool.end();
})


