module.exports = app => {
    const IncidentesModel = app.models.incidentes;

    const IncidentesController = {
        create: (req, res) => {
            let incidente = {
                id_funcionario: req.body.id_funcionario,
                data: req.body.data,
                classificacao: req.body.classificacao,
                tipo: req.body.tipo,
                titulo: req.body.titulo,
                descricao: req.body.descricao
            }

            console.log(incidente)

            IncidentesModel.create(incidente, (err, result) => {
                if(err) return res.status(500).json({ "Error ": err })
                return res.status(200).json(result) 
            })
        },

        getAll: (req, res) => {
            IncidentesModel.getAll((err, result) => {
                if(err) return res.status(500).json({ "Error " : err })
                return res.status(200).json(result.rows)
            })
        },

        getAllWithParams: (req, res) => {
            let parametros = {
                data: req.query.data,
                classificacao: req.query.classificacao,
                tipo: req.query.tipo
            }

            IncidentesModel.getAllWithParams(parametros, (err, result) => {
                if(err) return res.status(500).json({ "Error " : err })

                if(result.rows.length == 0) {
                    return res.status(404).json({ "404": "Não foi encontrado dados" })
                }

                return res.status(200).json(result.rows)
            })
        },

        getOne: (req, res) => {
            let id = req.params.id;

            IncidentesModel.getOne(id, (err, result) => {
                if(err) return res.status(500).json({ "Error " : err })
                return res.status(200).json(result.rows[0])
            })           
        },

        getAllByFuncionario: (req, res) => {
            let id_funcionario = req.params.id_funcionario;

            IncidentesModel.getAllByFuncionario(id_funcionario, (err, result) => {
                if(err) return res.status(500).json({ "Error " : err })
                return res.status(200).json(result.rows)
            })
        }
    }

    return IncidentesController;
}