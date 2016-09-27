app.factory('factorysearch',function($http,$q) //declaration of factory
{

	return function(name){

		var deferred = $q.defer(); //A new instance of deferred is constructed 

		$http.get("http://localhost:3000/employee?name_like="+name).then(function(response){ 

			deferred.resolve(response.data); 

		});
		return (deferred.promise);//returning the promise
	};

});

