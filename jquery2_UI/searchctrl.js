app.controller('searchctrl',['$scope','factorysearch','$stateParams',function($scope,factorysearch,$stateParams){
			
            console.log($stateParams.name);
            $scope.selected = [];

  			$scope.query = {
    		order: 'name',
    		limit: 5,
   			 page: 1
  			};
			$scope.searchData = function(){
			var promise=factorysearch($stateParams.name);
			promise.then(function(details)
			{
				$scope.details=details;
			});

			}
			$scope.searchData();
		}]);

//controller for  ADD Employee

