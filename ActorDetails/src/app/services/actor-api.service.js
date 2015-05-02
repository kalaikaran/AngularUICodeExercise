(function () {
    'use strict';

    angular.module('actorsDetails').factory('actorApi', actorApi);

    actorApi.$inject = ['$http', 'appSpinner', '$resource'];

    function actorApi($http, appSpinner, $resource) {
        var service = {
            getActors: getActors,
            addActor: addActor,
            getActorsResource: getActorsResource,
            addActorResource: addActorResource
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

        function getActorsResource() {
            return getResource('/author');
        }

        function addActorResource(league) {
            return postResource('/author', league);
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

        function executeResource(requestUrl, method, data) {
            var urlResource = $resource(baseUrl + requestUrl, {}, {
                query: {
                    method: 'GET',
                    headers: requestConfig.headers,
                    isArray: true
                },
                save: {
                    method: 'POST',
                    headers: requestConfig.headers
                }

            });
            if (method === 'GET') {
                return urlResource.query();
            } else if (method === 'POST') {
                return urlResource;
            } else {
                return {};
            }
        }

        function postResource(url, data) {
            return executeResource(url, 'POST', data);
        }


        function getResource(url) {
            return executeResource(url, 'GET');
        }

        function httpGet(url) {
            return httpExecute(url, 'GET');
        }

        function httpPost(url, data) {
            return httpExecute(url, 'POST', data);
        }

    }
})();