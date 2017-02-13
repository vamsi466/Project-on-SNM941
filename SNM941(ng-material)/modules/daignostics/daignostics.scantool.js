(function(){
    
   'use strict';
    angular
    .module('inTmbleApp.daignostics')
    .controller('scanToolCtrl',['$http','NgTableParams','$mdMedia',
        function($http,NgTableParams,$mdMedia){

       var ts = this;  
          
        ts.$doCheck= function(){  
            ts.screenResolution = $mdMedia('gt-sm') ? true : false 
        }
        
        ts.componentDetails = new NgTableParams({},{

            counts: [],
            getData : function($defer,params){
                 $http.get('modules/daignostics/daignostics-scan-tools.json').then(function(response) {
                 ts.componentData = response.data.scanTools;
                 $defer.resolve(ts.componentData);
                }); 
            }
        });
        return ts;
    }])
})();  
