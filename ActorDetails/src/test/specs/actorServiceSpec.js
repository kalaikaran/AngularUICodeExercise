/**
 * Created by 228331 on 5/5/2015.
 */
describe("Actor API Service", function () {
    var actorsDetailsService, httpBackend, appSpinner, resource, scope;
    beforeEach(module("actorsDetails"));

    beforeEach(inject(function (_actorApi_, $http, $resource, _appSpinner_, $httpBackend, $rootScope) {
        actorsDetailsService = _actorApi_;
        httpBackend = $http;
        resource = $resource;
        appSpinner = _appSpinner_;
        scope = $rootScope.$new();;

    }));

    it("should check whether the actorsDetailsService is defined", function () {
        expect(actorsDetailsService).toBeDefined();

    });

    it("should check whether the getActorsResource service in actorsDetailsService is defined", function () {
        expect(actorsDetailsService.getActorsResource()).toBeDefined();

    });

    it("should check whether the addActorResource service in actorsDetailsService is defined", function () {
        expect(actorsDetailsService.addActorResource()).toBeDefined();

    });

    it("should do actorsDetailsService to be defined", function () {
        expect(actorsDetailsService).toBeDefined();
    });

});
