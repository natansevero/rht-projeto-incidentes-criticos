module.exports = app => {
    const IncidentesController = app.controllers.incidentes;

    // A requisição vem com id do funcionario
    /*
        {
            id_funcionario,
            data,
            classificacao,
            tipo,
            titulo,
            descricao
        } 
    */
    app.post('/incidentes', IncidentesController.create)
    
    /* traz todos os incidentes de acordo com os parametros da requisição 
    (endpoint para a tela de busca) */
    /*
            /incidentes?data=23/09/1290&classificacao=Positivo&tipo=Conhecimentos
    */
    app.get('/incidentes', IncidentesController.getAll)
    
    // Traz um incidente pelo id (traz o nome do funcionario tbm)
    app.get('/incidentes/:id', IncidentesController.getOne)
    
    // traz todos os incidentes de um funcionario
    app.get('/incidentes/funcionario/:id_funcionario', IncidentesController.getAllByFuncionario)
}