
app.controller('perfilFuncionarioCtrl', function($scope, $state, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.funcionario = {
    	"id": 7,
        "name":"Maria Silva",
        "admissao": "2013-02-14",
        "positivo": "50",
        "negativo": "50"
    };

    $scope.addIncidente = function(idFunc) {
    	$state.go("app.addIncidente", {"idFuncionario": idFunc});
    };

});