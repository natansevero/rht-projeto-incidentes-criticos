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
        }
    }

    return IncidentesModel;
}