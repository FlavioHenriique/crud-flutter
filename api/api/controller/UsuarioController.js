module.exports = class UsuarioController {
    constructor() {
        this.connection = require('../db/Conexao');
    }

    listarTodos() {
        return this.connection.query('SELECT * from USUARIO');
    }

    salvar(user) {
        let sql = 'INSERT into Usuario(email, nome, senha)'
            + '\n values ($1, $2, $3)';
        let values = [user.email, user.nome, user.senha];

        return this.connection.query(sql, values);
    }

    deletarTodos() {
        let sql = "DELETE from USUARIO;";
        return this.connection.query(sql);
    }

    deletar(email) {
        let sql = "DELETE from USUARIO where EMAIL = $1;";
        return this.connection.query(sql, [email]);
    }

    buscar(email) {
        return this.connection.query('SELECT * from USUARIO where email = $1', [email]);
    }
}