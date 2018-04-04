
app.controller('detalheIncidenteCtrl', function($scope, $state, $stateParams,
		$http, $ionicPopup, ionicMaterialInk) {

	ionicMaterialInk.displayEffect();

	let idIncidente = $stateParams["incidente"];
	$scope.incid = {};

	$scope.voltar = function() {
		$state.go("app.funcionarios");
	}

	$http.get(apiUrl + "/incidentes/" + idIncidente)
		.then(function(resp){
			$scope.incid = resp.data;
		}, function(erro) {
			$ionicPopup.show({
                title: 'Erro!',
                template: 'Não foi possível carregar os detalhes do incidente. \n\
                	Verifique sua conexão com a internet!', 
                buttons: [{ 
                    text: 'Voltar',
                    type: 'button-assertive',
                    onTap: function(event) {
                    	$state.go("app.incidentes");
                    }
                }]
            });
		}
	);
});