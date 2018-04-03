
app.controller('funcionariosCtrl', function ($scope, $state, $http, $ionicPopup, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Variáveis do Escopo
    $scope.funcionarios = [];

    // Mudança para a pagina de perfil do funcionario
    $scope.funcDetails = function(id) {
        $state.go("app.perfilFuncionario", {"idFuncionario": id});
    };

    // Tela de Cadastro de Funcionario
    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        $state.go('app.addFuncionario');
    });

    // Chamada HTTP para lista de Funcionarios
    $http.get(apiUrl + "/funcionarios")
        .then(function(resp) {
            // $ionicPopup.show({
            //     title: 'Sucesso!',
            //     template: 'Lista de funcionários encontra-se disponível!',
            //     buttons: [{ 
            //         text: 'OK',
            //         type: 'button-positive'
            //     }]
            // });
            $scope.funcionarios = resp.data;

        }, function(erro) {
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

});