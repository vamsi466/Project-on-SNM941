(function(){
	'use strict';

	angular
		.module('inSNM941.dashboard')
		.controller('dashboardCtrl',['dashboardService',dashboardController])
		
	function dashboardController(dashboardService){
		var dashboard = {}
		
		dashboard.cardsData = [];

		dashboardService.getCardsData().then(function(response){
			dashboard.cardsData = response.data;
		})

		return dashboard;
	}

})();
