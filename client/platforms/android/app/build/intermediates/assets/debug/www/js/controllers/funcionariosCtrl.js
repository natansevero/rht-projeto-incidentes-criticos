
app.controller('funcionariosCtrl', function ($scope, $state, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.funcionarios = [
        {
            "id": 1,
            "name": "Maria Silva"
        },
        {
            "id": 2,
            "name": "José Guimarães"
        },
        {
            "id": 3,
            "name": "João Silveira"
        }, 
        {
            "id": 4,
            "name": "Pedro Marcos José"
        },
        {
            "id": 5,
            "name": "Fernando Barbosa"
        },
        {
            "id": 6,
            "name": "Wernnevon Vieira"
        }
    ];

    $scope.funcDetails = function(id) {
        $state.go("app.perfilFuncionario", {"idFuncionario": id});
    };

    // Tela de Cadastro de Funcionario
    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        $state.go('app.addFuncionario');
    });

});