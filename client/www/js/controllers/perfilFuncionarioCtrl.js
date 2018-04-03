
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

    $scope.incidentesFuncionario = function() {
        localStorage.setItem('nomeFuncionario', $scope.funcionario.nome);
        $state.go("app.incidentesFuncionario", {"incidente": idFunc});
        
        // if ($scope.funcionario.porcentagens) {
        //     $state.go("app.incidentesFuncionario", {"incidente": idFunc});
        // } else {
        //     $ionicPopup.show({
        //         template: 'O funcionário não possui incidentes!', 
        //         buttons: [{ 
        //             text: 'OK',
        //             type: 'button-positive'
        //         }]
        //     });
        // }
    }

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
            $scope.funcionario = resp.data;

            if ($scope.funcionario.porcentagens) {
                $scope.funcionario.porcentagens.positivos = parseFloat($scope.funcionario.porcentagens.positivos.toFixed(2));
                $scope.funcionario.porcentagens.negativos = parseFloat($scope.funcionario.porcentagens.negativos.toFixed(2));
            }
                
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