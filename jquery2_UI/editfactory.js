//for edit
app.factory('editFactory', function($http,$q) {
  
return function(id){

  var deferred = $q.defer();

$http.get("http://localhost:3000/employee/"+id).then(function(response){

  deferred.resolve(response.data);

});
  return (deferred.promise);
};

});//end add factory

