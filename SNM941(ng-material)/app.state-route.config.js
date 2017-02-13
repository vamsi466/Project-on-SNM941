(function(){
	'use strict';

	angular
		.module('inTmbleApp')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  			$urlRouterProvider.otherwise('/');

			$stateProvider
			  .state('dashboard', {
			    url:'/',
			    templateUrl: 'modules/dashboard/dashboard.tpl.html',
			    controller: 'dashboardCtrl',
			    controllerAs: 'dc' 
			  })

			  .state('networkconfig', {
			    url:'/network-configuration',
			    templateUrl: 'modules/network-configuration/templates/network-configuration.tpl.html',
			    controller:'networkConfigurationCtrl',
		        controllerAs:"networkConfig"
			  })

			  .state('telematic', {
		          url:'/telematic',
		          templateUrl: 'modules/telematic/telematic.tpl.html'
		      })
			  .state('rebroadcast', {
			    url:'/rtk-rebroadcast',
			    templateUrl: 'modules/rebroadcast/rebroadcast.tpl.html'
			  })

			  .state('diagnostics', {
		          url:'/diagnostics',
		          templateUrl: 'modules/daignostics/daignostics.html'
		      })
		      
			  .state('settings', {
		          url:'/settings',
		          templateUrl: 'modules/settings/settings.tpl.html'
		      })
		}]);
})();