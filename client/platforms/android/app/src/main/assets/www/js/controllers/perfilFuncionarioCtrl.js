
app.controller('perfilFuncionarioCtrl', function($scope, $state, $stateParams, $http,
    $ionicPopup, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Variaveis
    var idFunc = $stateParams["idFuncionario"];
    $scope.funcionario = {};

    // Adiciona incidente ao funcionario
    $scope.addIncidente = function(idFunc) {
    	$state.go("app.addIncidente", {"idFuncionario": idFunc});
    };

    $scope.removeFuncionario = function() {
        
        $http.delete(apiUrl + "/funcionarios/" + idFunc).then(
            function(resp) {
                $ionicPopup.show({
                    title: 'Sucesso!',
                    template: 'O perfil do funcionário foi excluído!', 
                    buttons: [{ 
                        text: 'OK',
                        type: 'button-balanced'
                    }]
                });  
                $state.go("app.funcionarios");
            }, 
            function(erro) {
                $ionicPopup.show({
                    title: 'Erro!',
                    template: 'Não foi excluir o perfil do funcionário!', 
                    buttons: [{ 
                        text: 'OK',
                        type: 'button-assertive'
                    }]
                });
            }
        );
        
    }

    // Chamada http para recuperar o funcionario pelo id
    $http.get(apiUrl + "/funcionarios/" + idFunc)
    .then(
        function(resp) {
            console.log(resp.data);
            $scope.funcionario = resp.data;

        }, function(erro) {
            $ionicPopup.show({
                title: 'Erro!',
                template: 'Não foi possível carregar o perfil do funcionário!', 
                buttons: [{ 
                    text: 'OK',
                    type: 'button-assertive'
                }]
            });
        }
    );
});