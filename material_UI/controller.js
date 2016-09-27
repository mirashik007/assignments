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

		$scope.pageno =1;
        $scope.total_count = 0;
        $scope.itemsPerPage = 12;
        $scope.getData = function(pageno)
        {

	var title=$scope.movieTitle;


// console.log("hii"+$scope.movieTitle);
var promise=myfactory($scope.movieTitle,pageno);
promise.then(function(details){
$scope.details=details.Search;
$scope.total_count = details.totalResults;
}); //end of promise function
}

  $scope.getData($scope.pageno);

});
// $scope.idcatch=function(details){

// 	$scope.movieid=details.imdbID;
// 	alert(movieid);
// };
// });
