app.factory('factorydel',function($http,$q) //declaration of factory
{

	return function(id){

		var deferred = $q.defer(); //A new instance of deferred is constructed 

		$http.delete("http://localhost:3000/employee/"+id).then(function(response){ 

			deferred.resolve(response.data); 

		});
		return (deferred.promise);//returning the promise
	};

});

