
app.controller('addIncidenteCtrl', function($scope, $stateParams, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
	let idFuncionario = $stateParams.idFuncionario;

   	$scope.addIncidente = function() {
   		console.log("teste");
   		$state.go("app.funcionarios");
   	};

});