
app.controller('addIncidenteCtrl', function($scope, $stateParams) {
    
	let idFuncionario = $stateParams.idFuncionario;

   	$scope.addIncidente = function() {
   		console.log("teste");
   		$state.go("app.funcionarios");
   	};

});