(function(){
	'use strict';

	angular
		.module('SNM941')
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  			$urlRouterProvider.otherwise('/');
				//	$urlRouterProvider.when('/daignostics','/daignostics/ping');
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
					controllerAs:"nc"
			  })

			  .state('telematic', {
		          url:'/telematic',
		          templateUrl: 'modules/telematic/telematic.tpl.html'
		      })
			  .state('rebroadcast', {
			    url:'/rtk-rebroadcast',
			    templateUrl: 'modules/rebroadcast/rebroadcast.tpl.html'
			  })

			  .state('daignostics', {
		          url:'/daignostics',
		          templateUrl: 'modules/daignoistics/view/daignostics.home.tpl.html'
		      })
		    //   .state('daignostics.ping', {
			  //   url:'/ping',
			  //   templateUrl: 'view/ping.html'
			  // })

			  // .state('daignostics.networkinterface', {
			  //   url:'/network-interface',
			  //   templateUrl: 'view/network-interface.html'
			  // })

			  // .state('daignostics.scantool', {
		    //       url:'/scan-tool',
		    //       templateUrl: 'view/scantool.html'
		    //   })
			  .state('settings', {
		          url:'/settings',
		          templateUrl: 'modules/settings/settings.tpl.html'
		      })
		}]);
})();