app.factory('myfactory',function($http,$q){

return function(title){

    var deferred = $q.defer();

$http.get("http://www.omdbapi.com/?s="+title).then(function(response){

    deferred.resolve(response.data);

});
    return (deferred.promise);
};



});