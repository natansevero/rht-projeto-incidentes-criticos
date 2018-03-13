module.exports = app => {
    const IncidentesModel = app.models.incidentes;

    const IncidentesModel = {
        create: (req, res) => {
            let incidente = {
                id_funcionario: req.body.id_funcionario,
                data: req.body.data,
                classificacao: req.body.classificacao,
                tipo: req.body.tipo,
                titulo: req.body.titulo,
                descricao: req.body.descricao
            }

            IncidentesModel.create(incidente, (err, result) => {
                if(err) return res.status(500).json({ "Error ": err })
                return res.status(200).json(result) 
            })
        }
    }

    return IncidentesModel;
}