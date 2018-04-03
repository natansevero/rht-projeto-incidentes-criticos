
app.controller('incidentesFuncionarioCtrl', function($scope, $state, $stateParams, $http, $ionicPopup, ionicMaterialInk) {
	ionicMaterialInk.displayEffect();
	
	let incidente = $stateParams["incidente"];
    $scope.nomeFuncionario = localStorage.getItem("nomeFuncionario");

	$scope.incidentes = [];
    atualiza_lista();

    $scope.removeIncidente = function(idIncidente) {
        $http.delete(apiUrl + "/incidentes/" + idIncidente)
        .then(function(resp) {
            atualiza_lista();
        }, function(erro) {
            console.log("Erro: " + erro);
        })
    }

    $scope.detalhesIncidente = function(idIncidente) {
        $state.go("app.detalhesIncidente", {"incidente": idIncidente});
    }

	// Chamada HTTP para lista de Funcionarios
    function atualiza_lista() {
        $http.get(apiUrl + "/incidentes/funcionario/" + incidente)
        .then(
            function(resp) {
                $scope.incidentes = resp.data;

                if ($scope.incidentes.lenght > 1) {
                    $ionicPopup.show({
                        template: 'O funcionario não possui incidentes!',
                        buttons: [{ 
                            text: 'OK',
                            type: 'button-balanced'
                        }]
                    });
                }
            }, 
            function(erro) {
                $ionicPopup.show({
                    title: 'Erro!',
                    template: 'Não conseguimos encontrar Lista de funcionários no momento!',
                    buttons: [{ 
                        text: 'OK',
                        type: 'button-assertive'
                    }]
                });
            }
        );
    }

});