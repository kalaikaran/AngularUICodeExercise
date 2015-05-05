describe('FormCtrl', function () {
    var scope;
    var $controllerConstructor;
    var $formCtrl;
    var actAPI;
    beforeEach(module('actorsDetails'));
    beforeEach(inject(function (actorApi) {
        actAPI = actorApi;
    }));
    beforeEach(inject(function ($controller, $rootScope, _actorApi_, $state) {
        $controllerConstructor = $controller;

        scope = $rootScope.$new();
        var initialData = {
            id: 15,
            name: "Alexandra",
            firstname: "Alexandra",
            lastname: "Daddario",
            img: "",
            description: "Sample Testing ..."
        }

    }));

});
