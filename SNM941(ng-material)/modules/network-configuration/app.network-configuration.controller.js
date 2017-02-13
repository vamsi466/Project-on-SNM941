(function() {
    'use strict';

    angular
        .module('inTmbleApp.network_configuration')
        .controller('networkConfigurationCtrl', networkConfigurationCtrl);

    networkConfigurationCtrl.$inject = [ '$http', 'ngTableParams', '$mdDialog'];

    function networkConfigurationCtrl( $http, ngTableParams, $mdDialog) {
        var networkConfig = {};
        networkConfig.jsonData = { 'connection': [] };


        networkConfig.connectionTable = new ngTableParams({}, {
            counts: [],
            //Returns the data for rendering
            getData: function($defer, params) {
                $http.get('modules/network-configuration/data.jsons/connection.json').then(function(response) {
                    networkConfig.jsonData.connection = response.data.connection;
                    $defer.resolve(networkConfig.jsonData.connection);
                });
            }
        });

        networkConfig.networkTypeTable = new ngTableParams({}, {
            counts: [],
            //Returns the data for rendering
            getData: function($defer, params) {
                $http.get('modules/network-configuration/data.jsons/networkType.json').then(function(response) {
                    networkConfig.jsonData.networkType = response.data.networkType;
                    $defer.resolve(networkConfig.jsonData.networkType);
                });
            }
        });

        networkConfig.serviceNetwork = new ngTableParams({}, {
            counts: [],
            //Returns the data for rendering
            getData: function($defer, params) {
                $http.get('modules/network-configuration/data.jsons/serviceNetwork.json').then(function(response) {
                    networkConfig.jsonData.serviceNetwork = response.data.serviceNetwork;
                    $defer.resolve(networkConfig.jsonData.serviceNetwork);
                });
            }
        });

        networkConfig.portForwarding = new ngTableParams({}, {
            counts: [],
            //Returns the data for rendering
            getData: function($defer, params) {
                $http.get('modules/network-configuration/data.jsons/portForwarding.json').then(function(response) {
                    networkConfig.jsonData.portForwarding = response.data.portForwarding;
                    $defer.resolve(networkConfig.jsonData.portForwarding);
                });
            }
        });

        // pop-up to add a wifi
        networkConfig.showAddWifi = function(event) {
            $mdDialog.show({
                controller: addWifiCtrl,
                controllerAs: 'addWifi',
                templateUrl: 'modules/network-configuration/templates/add-wifi-connection-dialog.tpl.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: false,
                fullscreen: networkConfig.customFullscreen, // Only for -xs, -sm breakpoints.
                locals: {
                    networkTypeTable: networkConfig.networkTypeTable
                }
            })
        }

        function addWifiCtrl($mdDialog, networkTypeTable) {
            var addWifi = {};
            addWifi.networkTypeTable = networkTypeTable;
            addWifi.cancel = function() {
                $mdDialog.cancel();
            };

            addWifi.saveNetwork = function() {
                $mdDialog.hide();
            };
            return addWifi;
        }

        networkConfig.showdeleteConform = function(event) {
            $mdDialog.show({
                controller: deleteCtrl,
                controllerAs: 'deleteModal',
                templateUrl: 'modules/network-configuration/templates/delete-dialog.tpl.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: false,
                fullscreen: networkConfig.customFullscreen // Only for -xs, -sm breakpoints.
            })
        }

        function deleteCtrl($mdDialog) {
            var deleteModal = {};
            deleteModal.cancel = function() {
                $mdDialog.cancel();
            };

            deleteModal.delete = function() {
                $mdDialog.hide();
            };
            return deleteModal;
        }

        return networkConfig;
    }
})();
