const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connection = require('./api/db/Conexao');
const UsuarioController = require('./api/controller/UsuarioController');

let porta = 3000;
app.listen(porta);

console.log('Iniciando server nodeJS na porta ' + porta);

require('./api/router/UsuarioRoutes')(app);