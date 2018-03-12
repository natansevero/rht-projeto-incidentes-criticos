
app.controller('perfilFuncionarioCtrl', function($scope, $state) {
    
    $scope.funcionario = {
        "name":"Maria Silva",
        "admissao": "2013-02-14"
    };

    $scope.addIncidente = function(idFuncionario) {
    	$state.go("app.addIncidente");
    };

});