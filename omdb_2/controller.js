// var app=angular.module('myapp',[]);

// app.controller('myctrl',function($scope,$http){

// $scope.result=function(){
// var title=$scope.movieTitle;

// $http.get("http://www.omdbapi.com/?s="+title)
// .then(function(response){ $scope.details = response.data.Search; });


// };
// });
// });
app.controller('myctrl',function($scope,myfactory){
	var title=$scope.movieTitle;
console.log($scope.movieTitle);
var promise=myfactory($scope.movieTitle);
promise.then(function(details){
$scope.details=details.Search;

});
$scope.idcatch=function(details){

	$scope.movieid=details.imdbID;
	alert("dsvcvdysvcyuvvvyv");
	alert(movieid);

};

});