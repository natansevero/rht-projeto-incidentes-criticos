
app.controller('addFuncionarioCtrl', function ($scope, $http, $state, $filter, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.funcionario = {};
    $scope.addFuncionario = function() {
        $scope.funcionario.data_admissao = $filter("dateFormat")($scope.funcionario.data_admissao);
        console.log($scope.funcionario.data_admissao);

    	// Chamada HTTP para add a lista de  Funcionarios
    	$http({
    		"method": "POST",
    		"url": apiUrl + "/funcionarios",
    		"data": $scope.funcionario
    	})
        .then(
        	function(resp) {
            	console.log("Sucesso ao cadastrar: " + resp.data);
            	$scope.funcionarios = resp.data;
        	}, function(erro) {
            	console.log("Erro: " + erro);
	        }
    	);
        $state.go("app.funcionarios");
    };
});;