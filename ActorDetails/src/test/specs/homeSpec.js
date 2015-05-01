describe('HomeCtrl', function () {
    var scope;
    var $controllerConstructor;
    beforeEach(module('actorsDetails'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));
    it('should initiate the HomeCtrl and return true', function () {
        var ctrl = $controllerConstructor('HomeCtrl', {$scope:scope});
        expect(ctrl).toBeDefined();
    });
    /*it('should inject dependency',inject(function ($resource) {
        expect($resource).toBeDefined();
    }));*/
});
/*describe('new testing test', function () {
    var scope;
    var $controllerConstructor;
    beforeEach(module('actorsDetails'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));
    it('should initiate the HomeCtrl and return true', function () {
        expect(true).toEqual(true);
    });
    it('should inject dependency',function ($controller) {
        expect($controllerConstructor).toBeDefined();
    });
});*/
