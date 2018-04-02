
app.controller('addIncidenteCtrl', function($scope, $stateParams, $http, $state, $filter, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

	// Variaveis
	var idFunc = $stateParams["idFuncionario"];
  $scope.incidente = {};

  $scope.addIncidente = function() {
 		// organizando parametros
    $scope.incidente.id_funcionario = idFunc;
   	$scope.incidente.data = $filter("dateFormat")($scope.incidente.data);

    // Chamada HTTP para add incidente
  	$http({
  		"method": "POST",
    	"url": apiUrl + "/incidentes",
    	"data": $scope.incidente
  	}).then(
      function(resp) {
        console.log($scope.incidente);
    	}, function(erro) {
       	console.log("Erro: " + erro);

	    }
    );
    $state.go("app.funcionarios");
  };
});