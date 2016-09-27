app.factory('myfactory',function($http,$q){
 


return function(start,end){
 var deferred = $q.defer();
		$http.get("http://localhost:3000/employee?_start="+start+"&_end="+end).then(function(response){

    		deferred.resolve(response);
   });

    return (deferred.promise);  

};

});
