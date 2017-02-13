(function(){
	'use strict';

	angular
		.module('inSNM941.dashboard')
		.service('dashboardService',['$http',dashboardService])

	function dashboardService($http){
		this.getCardsData = getCardsData;

		function getCardsData(){
			return $http.get("modules/dashboard/dashboardData.json")
		}		
	}
})();
