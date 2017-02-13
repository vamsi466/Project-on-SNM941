(function(){
	'use strict';

	angular
		.module('inSNM941.daignostics')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  			$urlRouterProvider.when('/daignostics','/daignostics/ping');
			
			$stateProvider
			  .state('daignostics.ping', {
			    url:'/ping',
			    templateUrl: 'modules/daignoistics/view/ping.html'
			  })

			  .state('daignostics.networkinterface', {
			    url:'/network-interface',
			    templateUrl: 'modules/daignoistics/view/network-interface.html'
			  })

			  .state('daignostics.scantool', {
		          url:'/scan-tool',
		          templateUrl: 'modules/daignoistics/view/scantool.html'
		      });
		}]);
})();