(function(){
	'use strict';

	angular
		.module('inTmbleApp',['ngMaterial', 'ngMessages','ui.router','inTmbleApp.dashboard','inTmbleApp.network_configuration','inTmbleApp.daignostics'])
		.controller('appCtrl', ['$mdSidenav','$mdMedia','$scope',appController]);

	function appController($mdSidenav,$mdMedia,$scope){
		var appScope = {};
		
		appScope.sideNavToggle = sideNavToggle;
		appScope.navMenuDisplay = true;

		function sideNavToggle() {
			$mdSidenav('left').toggle();
			appScope.navMenuDisplay = !appScope.navMenuDisplay;
		}

		return appScope;
	}

})();