app.factory('myfactory',function($http,$q){
 var deferred = $q.defer();

return function(title){

$http.get("http://www.omdbapi.com/?s="+title).then(function(response){

    deferred.resolve(response.data);
   });

    return (deferred.promise);  

};

});
