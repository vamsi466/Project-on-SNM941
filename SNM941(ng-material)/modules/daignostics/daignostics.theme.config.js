(function () {
	"use strict";

	angular
        .module('inTmbleApp.daignostics')
        .config(function($mdThemingProvider) {

            var customPrimary = {
                '50': '#ff7b82',
                '100': '#ff626a',
                '200': '#ff4852',
                '300': '#ff2f3a',
                '400': '#ff1522',
                '500': '#000000',
                '600': '#e1000c',
                '700': '#c8000a',   
                '800': '#ae0009',
                '900': '#950008',
                'A100': '#ff959a',
                'A200': '#ffaeb3',
                'A400': '#ffc8cb',
                'A700': '#7b0006',
                'contrastDefaultColor': 'light',  
                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
                'contrastLightColors': undefined  };

            $mdThemingProvider .definePalette('customPrimary', customPrimary);
            
            $mdThemingProvider
                .theme('mytheme')
                .primaryPalette('customPrimary')
                .accentPalette('blue', {
                    'default': '600',
                    'hue-1': '100',
                });

        });
})();