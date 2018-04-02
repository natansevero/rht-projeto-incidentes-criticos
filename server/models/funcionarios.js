module.exports = app => {
    const conn = app.libs.db;

    const FuncionariosModel = {
        create: (funcionario, callback) => {
            conn.then(client => {
                client.query('insert into funcionario(nome, data_admissao) values ($1, $2)',
                    [funcionario.nome, funcionario.data_admissao],
                    callback);
            })
        },

        getAll: (callback) => {
            conn.then(client => {
                client.query('select * from funcionario', callback)
            })
        },

        getOneAlternative: (id, callback) => {
            conn.then(client => {
                client.query('select * from funcionario where id = $1', 
                    [id], 
                    callback)
            })
        },

        getOne: (id, callback) => {
            conn.then(client => {
                client.query('select f.id, f.nome, f.data_admissao, i.classificacao from funcionario f, incidente i where f.id = $1 and f.id = i.id_funcionario',
                    [id],
                    callback)
            })
        },

        update: (funcionario, callback) => {
            conn.then(client => {
                client.query('update funcionario set nome = $1, data_admissao = $2 where id = $3',
                    [funcionario.nome, funcionario.data_admissao, funcionario.id],
                    callback)
            })
        },

        delete: (id, callback) => {
            conn.then(client => {
                client.query('delete from funcionario where id = $1',
                    [id],
                    callback)
            })
        }
    }

    return FuncionariosModel;
}