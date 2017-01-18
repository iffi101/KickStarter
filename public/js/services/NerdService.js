// public/js/services/NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
			
            return $http.get('/api/nerds');
        },
              // these will work when more API routes are defined on the Node side of things
			 // call to POST and create a new nerd
        create : function(nerdData) {
			//console.log(nerdData);
           return $http.post('/api/createNerds', nerdData);
		   
        },

        // call to DELETE a nerd
        delete : function(id) {
			//console.log(req.body);
            return $http.post('/api/deleteNerds' , id);
        },
		 update : function(data) {
			console.log(data);
            return $http.post('/api/UpdateNerds' , data);
        },
		
		getOneNerd : function(id){
			 return $http.post('/api/getOneNerd' , id);
		},
		
		testPaypal : function (data){
			console.log('in service');
			 return $http.post('/api/PayPal' , data);

		}
		
    }       

}]);