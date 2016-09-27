app.factory('addFactory', function($http,$q) {
   
return function(newEmp){

   var deferred = $q.defer();

$http.post("http://localhost:3000/employee",newEmp).then(function(response){

   deferred.resolve(response.data);

});
   return (deferred.promise);
};

});//end add factory

