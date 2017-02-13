(function(){
	'use strict';

	angular
		.module('SNM941',['ui.router','inSNM941.dashboard','inSNM941.daignostics','inSNM941.network_configuration'])
		.controller('mainCtrl', function(){
			this.sidebarToggle = {
						left: false,
					}
			// this.sidebarStat = function(event) {
			// 			if (!angular.element(event.target).parent().hasClass('active')) {
			// 				this.sidebarToggle.left = false;
			// 			}
			// 		}
		})		

})()


