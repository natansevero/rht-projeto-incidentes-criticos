module.exports = app => {
    // const IncidentesController = app.controllers.incidente;

    // A requisição vem com  id do funcionario
    app.post('/incidentes')
    
    /* traz todos os incidentes de acordo com os parametros da requisição 
    (endpoint para a tela de busca) */
    app.get('/incidentes')
    
    // Traz um incidente pelo id (traz o nome do funcionario tbm)
    app.get('/incidentes/:id')
    
    // traz todos os incidentes de um funcionario
    app.get('/incidentes/:id_funcionario')
}