(function () {
    'use strict';
    var app = angular.module('actorsDetails', [
        // Angular modules
        //'ngRoute',

        // 3rd Party Modules
        'ui.bootstrap',
        'ui.router'

    ]);

    app.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state('form', {
                url: '/form',
                templateUrl: 'app/form/form.html',
                controller: 'FormCtrl',
                controllerAs: 'vm',
                resolve: {
                    initialData: ['actorApi', function (actorApi) {
                        return actorApi.getActors();

                    }]
                }

            })
            .state('resource', {
                url: '/resource',
                templateUrl: 'app/resource/resource.html',
                controller: 'ResourceCtrl',
                controllerAs: 'vm',
                resolve: {
                    initialData: ['actorApi', function (actorApi) {
                        return actorApi.getActors();

                    }]
                }
            });


        $urlRouterProvider.otherwise('/main');
    }

    app.run(['$state', function ($state) {
        // Include $route to kick start the router.
    }]);
})();