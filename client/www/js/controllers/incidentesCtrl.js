
app.controller('incidentesCtrl', function($scope, $state, $stateParams, $http, ionicMaterialInk) {
	ionicMaterialInk.displayEffect();
	
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
        $http.get(apiUrl + "/incidentes")
        .then(function(resp) {
                $scope.incidentes = resp.data;
            }, function(erro) {
                console.log("Erro: " + erro);
            }
        );
    }

});