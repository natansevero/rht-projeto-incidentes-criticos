
app.controller('addFuncionarioCtrl', function ($scope, $state, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.addFuncionario = function() {
        // logica p add
        
        $state.go("app.funcionarios");
    };
});