describe('HomeCtrl', function () {
    beforeEach(module('ngResource'));
    it('should initiate the HomeCtrl and return true', function () {
        expect(true).toEqual(true);
    });
    it('should inject dependency',inject(function ($resource) {
        expect($resource).toBeDefined();
    }));
});
describe('HomeCtrl', function () {
    beforeEach(angular.module('actorsDetails'));
    //beforeEach(module('ngResource'));
    it('should initiate the HomeCtrl and return true', function () {
        expect(true).toEqual(true);
    });
    it('should inject dependency',inject(function ($resource) {
        expect($resource).toBeDefined();
    }));
});