app.controller('delctrl',['$scope','factorydel','$stateParams','$mdDialog',function($scope,factorydel,$stateParams,$mdDialog){
			
            
            $scope.empid=$stateParams.id;
            // console.log($scope.empid);

// 			$scope.delData = function(ev){

// 				var confirm = $mdDialog.confirm()
//           .title('Would you like to delete your record')
//           .textContent('Hello Sir..')
//           .ariaLabel('Lucky day')
//           .targetEvent(ev)
//           .ok('yes')
//           .cancel('no');

// 			$mdDialog.show(confirm).then(function() {

// 			var promise=factorydel($stateParams.id);
// 			promise.then(function(details)
// 			{
// 				$scope.details=details;
// 			});

// 			  $scope.status = 'Delete Successful';
     
// }, function() {
//       $scope.status = 'Data not deleted';
//     });

// 			};
		}]);

//controller for  ADD Employee

