app.factory('factoryview',function($http,$q) //declaration of factory
{

	return function(id){

		var deferred = $q.defer(); //A new instance of deferred is constructed 

		$http.get("http://www.omdbapi.com/?i="+id+"&plot=full").then(function(response){ 

			deferred.resolve(response.data); 

		});
		return (deferred.promise);//returning the promise
	};

});

