module.exports = app => {
    const FuncionariosController = app.controllers.funcionarios;

    // cadastrar funcionario
    app.post('/funcionarios', FuncionariosController.create)
    
    // Todos os funcionarios
    app.get('/funcionarios', FuncionariosController.getAll)
    
    // traz um funcionario pelo id (traz a porcetagem de indicides tbm)
    app.get('/funcionarios/:id', FuncionariosController.getOne)
    
    app.put('/funcionarios/:id')
    
    app.delete('/funcionarios/:id')
}