//for save
app.factory('saveFactory', function($http,$q) {
  
return function(saveDetails,id){
  console.log(saveDetails);

  var deferred = $q.defer();

$http.patch("http://localhost:3000/employee/"+id,saveDetails).then(function(response){

  deferred.resolve(response.data);

});
  return (deferred.promise);
};

});//end add factory