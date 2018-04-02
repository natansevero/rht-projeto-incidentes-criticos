
app.controller('funcionariosCtrl', function ($scope, $state, $http, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Variáveis do Escopo
    $scope.funcionarios = [];

    // Mudança para a pagina de perfil do funcionario
    $scope.funcDetails = function(id) {
        $state.go("app.perfilFuncionario", {"idFuncionario": id});
    };

    // Tela de Cadastro de Funcionario
    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        $state.go('app.addFuncionario');
    });

    // Chamada HTTP para lista de Funcionarios
    $http.get(apiUrl + "/funcionarios")
        .then(function(resp) {
            console.log("Sucesso: " + resp.data);
            $scope.funcionarios = resp.data;
        }, function(erro) {
            console.log("Erro: " + erro);
        }
    );

});