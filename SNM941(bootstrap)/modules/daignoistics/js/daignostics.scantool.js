(function(){
    
   'use strict';
    angular
    .module('inSNM941.daignostics')
    .controller('scanToolCtrl',['$http','NgTableParams',
        function($http,NgTableParams){

       var ts = {};  

        ts.componentDetails = new NgTableParams({},{

            counts: [],
            getData : function($defer,params){
                 $http.get('modules/daignoistics/daignostics-scan-tools.json').then(function(response) {
                 ts.componentData = response.data.scanTools;
                 $defer.resolve(ts.componentData);
                 console.log(ts.componentData);
                }); 
            }
        });
        return ts;
    }])
})();  
