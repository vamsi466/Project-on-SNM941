(function() {
    'use strict';

    angular
        .module('inSNM941.network_configuration')
        .controller('networkConfigurationCtrl', networkConfigurationCtrl);

    networkConfigurationCtrl.$inject = ['$http', 'ngTableParams'];

    function networkConfigurationCtrl($http, ngTableParams) {
        var self = this;

        self.connection = new ngTableParams({}, {
            counts: [],

            getData: function() {
                return $http.get('modules/network-configuration/data.jsons/connection.json').
                then(function(response) {
                    return response.data.connection;
                })
            }
        })

        self.network = new ngTableParams({}, {
            counts: [],

            getData: function() {
                return $http.get('modules/network-configuration/data.jsons/networkType.json').
                then(function(response) {
                    return response.data.networkType;
                })
            }
        })

        self.portForward = new ngTableParams({}, {
            counts: [],

            getData: function() {
                return $http.get('modules/network-configuration/data.jsons/portForwarding.json').
                then(function(response) {
                    return response.data.portForwarding;
                })
            }
        })

        self.serviceNetwork = new ngTableParams({}, {
            counts: [],

            getData: function() {
                return $http.get('modules/network-configuration/data.jsons/serviceNetwork.json').
                then(function(response) {
                    return response.data.serviceNetwork;
                })
            }
        })

        return self;
    }
})();
