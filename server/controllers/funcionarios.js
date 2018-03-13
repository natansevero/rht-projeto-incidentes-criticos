module.exports = app => {
    const FuncionariosModel = app.models.funcionarios;

    const FuncionariosController = {
        create: (req, res) => {
            let funcionario = req.body;

            FuncionariosModel.create(funcionario, (err, result) => {
                if(err) return res.status(500).json({ "Error " : err })
                return res.status(200).json(result)
            })
        },

        getAll: (req, res) => {
            FuncionariosModel.getAll((err, result) => {
                if(err) return res.status(500).json({ "Error " : err })
                return res.status(200).json(result.rows)
            })
        },

        getOne: (req, res) => {
            let id = req.params.id;

            FuncionariosModel.getOne(id, (err, result) => {
                if(err) return res.status(500).json({ "Error ": err })
                
                let resultados = result.rows;
                let quant_positivos = 0; 
                let quant_negativos = 0;

                resultados.forEach(item => {
                    if(item.classificacao == 'Positivo') ++quant_positivos
                    else ++quant_negativos
                })

                let porct_positivos = (100 * quant_positivos) / resultados.length;
                let porct_negativos = (100 * quant_negativos) / resultados.length;

                let constructResponse = {
                    nome: resultados[0].nome,
                    data_admissao: resultados[0].data_admissao,
                    porcentagens: {
                        positivos: porct_positivos,
                        negativos: porct_negativos
                    }
                }

                return res.status(200).json(constructResponse);
            })
        },

        update: (req, res) => {
            let funcionario = {
                id: req.params.id,
                nome: req.body.nome,
                data_admissao: req.body.data_admissao 
            }

            FuncionariosModel.update(funcionario, (err, result) => {
                if(err) return res.status(500).json({ "Error ": err })
                return res.status(200).json(result);
            })
        },

        delete: (req, res) => {
            let id = req.params.id

            FuncionariosModel.delete(id, (err, result) => {
                if(err) return res.status(500).json({ "Error ": err })
                return res.status(200).json(result);
            })
        }
    } 

    return FuncionariosController;
}