module.exports = app => {
    // const FuncionariosController = app.controllers.funcionarios;

    // cadastrar funcionario
    app.post('/funcionarios')
    
    // Todos os funcionarios
    app.get('/funcionarios')
    
    // traz um funcionario pelo id (traz a porcetagem de indicides tbm)
    app.get('/funcionarios/:id')
    
    app.put('/funcionarios/:id')
    
    app.delete('/funcionarios/:id')
}