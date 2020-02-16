const express = require('express');
const UsuarioController = require('../controller/UsuarioController');
const Usuario = require('../model/Usuario');
const controller = new UsuarioController();
const router = express.Router();

router.get('/', (req, res) => {
    controller.listarTodos()
        .then(resp => {
            res.send(resp.rows);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/', (req, res) => {

    controller.salvar(new Usuario(
        req.body.nome,
        req.body.nome,
        req.body.nome)
    )
        .then(res => {
            res.status(201).send();
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

module.exports = app => app.use('/usuario', router);