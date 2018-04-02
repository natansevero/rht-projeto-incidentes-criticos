
app.controller('perfilFuncionarioCtrl', function($scope, $state, $stateParams, $http, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Variaveis
    var idFunc = $stateParams["idFuncionario"];
    $scope.funcionario = {};

    // Adiciona incidente ao funcionario
    $scope.addIncidente = function(idFunc) {
    	$state.go("app.addIncidente", {"idFuncionario": idFunc});
    };

    // Chamada http para recuperar o funcionario pelo id
    $http.get(apiUrl + "/funcionarios/" + idFunc)
    .then(
        function(resp) {
            console.log(resp.data);
            $scope.funcionario = resp.data;
        }, function(erro) {
            console.log("Erro: " + erro);
        }
    );
});