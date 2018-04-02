
app.controller('detalheIncidenteCtrl', function($scope, $state, $stateParams, $http, ionicMaterialInk) {
	ionicMaterialInk.displayEffect();

	let idIncidente = $stateParams["incidente"];
	$scope.incid = {};

	$scope.voltar = function() {
		$state.go("app.incidentes");
	}

	$http.get(apiUrl + "/incidentes/" + idIncidente)
		.then(function(resp){
			$scope.incid = resp.data;
		}, function(erro) {
			console.log(erro);
		}
	);
});