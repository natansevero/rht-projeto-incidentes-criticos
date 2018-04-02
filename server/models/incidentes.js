module.exports = app => {
    const conn = app.libs.db;

    const IncidentesModel = {
        create: (incidente, callback) => {
            conn.then(client => {
                client.query(`insert into incidente (id_funcionario, data, classificacao, tipo, titulo, descricao)
                    values ($1, $2, $3, $4, $5, $6)`,
                    [incidente.id_funcionario, incidente.data, incidente.classificacao, incidente.tipo, incidente.titulo, incidente.descricao],
                    callback)
            })
        },

        delete: (id_incidente, callback) => {
            conn.then(client => {
                client.query(`delete from incidente where id = $1`,
                    [id_incidente], callback)
            })
        },


        getAll: (callback) => {
            conn.then(client => {
                client.query(`select i.id, i.titulo, f.nome, i.classificacao, i.tipo, i.data
                    from funcionario f join incidente i on f.id = i.id_funcionario`,
                    callback)
            })
        },

        getAllWithParams: (parametros, callback) => {
            // 23/09/1290 Positivo Conhecimentos

            conn.then(client => {
                client.query(`select i.titulo, f.nome, i.classificacao, i.tipo, i.data
                    from funcionario f, incidente i
                    where i.data = $1 and i.classificacao = $2 and i.tipo = $3 and f.id = i.id_funcionario`,
                    [parametros.data, parametros.classificacao, parametros.tipo],
                    callback)
            })
        },

        getOne: (id, callback) => {
            conn.then(client => {
                client.query(`select i.id, f.nome, i.data, i.classificacao, i.tipo, i.titulo, i.descricao  
                    from funcionario f, incidente i 
                    where i.id = $1 and f.id = i.id_funcionario`,
                    [id],
                    callback)
            })
        },

        getAllByFuncionario: (id_funcionario, callback) => {
            conn.then(client => {
                client.query(`select * from incidente where id_funcionario = $1`,
                    [id_funcionario],
                    callback)
            })
        }
    }

    return IncidentesModel;
}
