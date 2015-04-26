(function () {
    'use strict';

    angular.module('actorsDetails').controller('ResourceCtrl', ResourceCtrl);

    ResourceCtrl.$inject = ['initialData'];

    function ResourceCtrl(initialData) {
        /* jshint validthis:true */
        var vm = this;
        vm.activate = activate;
        vm.actors = initialData;
        
        activate();

        function activate() { }

    }
})();
