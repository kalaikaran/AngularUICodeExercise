(function () {
    'use strict';

    angular.module('actorsDetails').controller('HomeCtrl', [HomeCtrl]);

    /* @ngInject */
    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.test = true;
        vm.navigate = navigate;

        activate();

        ////////////////

        function activate() {
            //return true;
        }
        
        function navigate() {
            //$state.go('form');
        }


    }
})();