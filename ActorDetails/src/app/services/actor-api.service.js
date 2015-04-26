(function () {
    'use strict';

    angular.module('actorsDetails').factory('actorApi', actorApi);

    actorApi.$inject = ['$http', 'appSpinner'];

    function actorApi($http, appSpinner) {
        var service = {
            getActors: getActors,
            addActor: addActor
        };

        var baseUrl = 'https://baas.kinvey.com/appdata/kid_bkBCX5qo9';
        var requestConfig = {
            headers: {
                'Authorization': 'Basic a2lkX2JrQkNYNXFvOTplM2QwOTc1NjQzMTQ0MTM4YWUzZGVhNGVmNmFlN2FkMA=='
            }
        };

        return service;

        function getActors() {
            return httpGet('/author');
        }

        function addActor(league) {
            return httpPost('/author', league);
        }

        function httpExecute(requestUrl, method, data) {
            appSpinner.showSpinner();
            return $http({
                url: baseUrl + requestUrl,
                method: method,
                data: data,
                headers: requestConfig.headers
            }).then(function (response) {

                appSpinner.hideSpinner();
                console.log('**response from EXECUTE', response);
                return response.data;
            });
        }
        function httpPost(url, data){
            return httpExecute(url, 'POST', data);
        }


        function httpGet(url) {
            return httpExecute(url, 'GET');
        }

        function httpPost(url, data) {
            return httpExecute(url, 'POST', data);
        }

    }
})();