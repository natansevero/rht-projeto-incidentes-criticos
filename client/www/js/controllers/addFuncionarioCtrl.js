
app.controller('addFuncionarioCtrl', function ($scope, $http, $state, $filter, $ionicPopup, ionicMaterialInk) {
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
                $ionicPopup.show({
                    title: 'Sucesso!',
                    template: 'O funcionário foi adicionado!',
                    buttons: [{ 
                        text: 'OK',
                        type: 'button-balanced'
                    }]
                });
        	}, function(erro) {
            	$ionicPopup.show({
                    title: 'Erro!',
                    template: 'O funcionário não pode ser adicionado no momento, \
                                tente mais tarde!',
                    buttons: [{ 
                        text: 'Voltar',
                        type: 'button-assertive'
                    }]
                });
	        }
    	);
        $state.go("app.funcionarios");
    };
});;