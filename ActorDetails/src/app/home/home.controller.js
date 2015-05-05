(function () {
    'use strict';

    angular.module('actorsDetails').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl($state) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.navigate = navigate;
        vm.homeCtrl = "HomeCtrl";

        activate();

        ////////////////

        function activate() {
        }
        
        function navigate() {
            $state.go('form');
        }


    }
})();
