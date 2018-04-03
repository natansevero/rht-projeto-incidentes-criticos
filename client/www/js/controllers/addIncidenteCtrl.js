
app.controller('addIncidenteCtrl', function($scope, $stateParams, $http, $state, $ionicPopup, 
    $filter, ionicMaterialInk) {
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
        $ionicPopup.show({
          title: 'Sucesso!',
          template: 'O incidente foi adicionado!', 
          buttons: [{ 
            text: 'OK',
            type: 'button-balanced'
          }]
        });
    	}, function(erro) {
        $ionicPopup.show({
          title: 'Erro!',
          template: 'O incidente não foi adicionado!', 
          buttons: [{ 
            text: 'Voltar',
            type: 'button-assertive'
          }]
        });
	    }
    );
    $state.go("app.funcionarios");
  };
});