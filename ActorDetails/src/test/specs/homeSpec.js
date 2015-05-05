describe('HomeCtrl', function () {
    var scope;
    var $controllerConstructor;
    beforeEach(module('actorsDetails'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should initiate the HomeCtrl and return HomeCtrl', function () {
        var ctrl = $controllerConstructor('HomeCtrl', {$scope:scope});
        expect(ctrl).toBeDefined();
    });

    it('should initiate the HomeCtrl and return HomeCtrl', function () {
        var ctrl = $controllerConstructor('HomeCtrl', {$scope:scope});
        expect(ctrl.homeCtrl).toBe("HomeCtrl");
    });

});
