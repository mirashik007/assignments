app.controller('viewController',['$scope','factoryview','$stateParams',function($scope,factoryview,$stateParams){
			
            console.log($stateParams.id);
			
			var promise=factoryview($stateParams.id);
			promise.then(function(details)
			{
				$scope.details=details;
			});

			
			
		}]);