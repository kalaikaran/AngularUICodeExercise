(function () {
    'use strict';

    angular.module('actorsDetails').controller('FormCtrl', FormCtrl);

    FormCtrl.$inject = ['initialData', 'actorApi', '$state'];

    function FormCtrl(initialData, actorApi, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.activate = activate;
        vm.addActor = addActor;
        vm.navigate = navigate;
        //vm.actor = actor;
        vm.actors = initialData;

        activate();

        function activate() {}

        function addActor() {
            var actor = {
                id: parseInt(vm.id),
                name: vm.name,
                firstName: vm.firstname,
                lastName: vm.lastname,
                url: vm.img,
                description: vm.description
            };

            actorApi.addActorResource(actor).save(actor, function (data, postHeader) {
                vm.dataSaved = true;
                vm.data = data;
                vm.postHeader = postHeader;
                $state.go('resource');
            });
        }
        function navigate(){
            $state.go('resource');
        }
    }
})();
