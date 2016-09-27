app.controller('viewController',['$scope','factoryview','$routeParams',function($scope,factoryview,$routeParams){
			
            console.log($routeParams.id);
			
			var promise=factoryview($routeParams.id);
			promise.then(function(details)
			{
				$scope.details=details;
			});

			
			
		}]);