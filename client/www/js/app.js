// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

// var apiUrl = "http://localhost:3000";
var apiUrl = "https://rht-incidentes-criticos.herokuapp.com";

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        cache:false
    })

    .state('app.addFuncionario', {
        url: '/addFuncionario',
        views: {
            'menuContent': {
                templateUrl: 'templates/addFuncionario.html',
                controller: 'addFuncionarioCtrl'
            }
        },
        cache:false
    })

    .state('app.funcionarios', {
        url: '/funcionarios',
        views: {
            'menuContent': {
                templateUrl: 'templates/funcionarios.html',
                controller: 'funcionariosCtrl'
            }
        },
        cache:false
    })

    .state('app.perfilFuncionario', {
        url: '/perfilFuncionario/{idFuncionario}',
        views: {
            'menuContent': {
                templateUrl: 'templates/perfilFuncionario.html',
                controller: 'perfilFuncionarioCtrl'
            }
        },
        cache:false
    })

    .state('app.incidentes', {
        url:'/incidentes',
        views: {
            'menuContent': {
                templateUrl: 'templates/incidentes.html',
                controller: 'incidentesCtrl'
            }
        },
        cache:false
    })

    .state('app.addIncidente', {
        url: '/addIncidente/{idFuncionario}',
        views: {
            'menuContent': {
                templateUrl: 'templates/addIncidente.html',
                controller: 'addIncidenteCtrl'
            }
        },
        cache:false
    })

    .state('app.detalhesIncidente', {
        url: '/detalhesIncidente/{incidente}',
        views: {
            'menuContent': {
                templateUrl: 'templates/detalhesIncidente.html',
                controller: 'detalheIncidenteCtrl'
            }
        },
        cache:false
    })

    .state('app.incidentesFuncionario', {
        url: '/incidentesFuncionario/{incidente}',
        views: {
            'menuContent': {
                templateUrl: 'templates/incidentesFuncionario.html',
                controller: 'incidentesFuncionarioCtrl'
            }
        },
        cache:false
    })


    .state('app.about_incidentes', {
        url: '/about_incidentes',
        views: {
            'menuContent': {
                templateUrl: 'templates/about_incidentes.html'
            }
        }
    })

    .state('app.about_app', {
        url: '/about_app',
        views: {
            'menuContent': {
                templateUrl: 'templates/about_app.html'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/funcionarios');
});
