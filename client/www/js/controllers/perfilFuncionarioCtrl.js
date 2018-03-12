
app.controller('perfilFuncionarioCtrl', function($scope, $state) {
    
    $scope.funcionario = {
    	"id": 7,
        "name":"Maria Silva",
        "admissao": "2013-02-14"
    };

    $scope.addIncidente = function(idFunc) {
    	$state.go("app.addIncidente", {"idFuncionario": idFunc});
    };

});