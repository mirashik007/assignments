app.factory('myfactory',function($http,$q){
 var deferred = $q.defer();

return function(title,pageno){

$http.get("http://www.omdbapi.com/?s="+title+"&page="+pageno).then(function(response){

    deferred.resolve(response.data);
   });

    return (deferred.promise);  

};

});
