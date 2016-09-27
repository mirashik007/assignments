
app.controller('myctrl',function($scope,myfactory,factorydel,$mdDialog){
//alert("hello");
    var start;
    var end;
		$scope.pageno =1;
        $scope.total_count = 0;
        $scope.itemsPerPage = 10;
  		$scope.selected = [];

  			$scope.query = {
    		order: 'name',
    		limit: 5,
   			 page: 1
  			};
   		$scope.getData = function(pageno){
         start = (pageno -  1)*10;
        end = ((pageno -1)*10)+10;
			var promise=myfactory(start,end);

				promise.then(function(details){
					$scope.details=details.data;
					console.log(details);
           $scope.total_count = details.headers('X-Total-Count');
						}); //end of promise function
			}
   $scope.getData($scope.pageno);

   $scope.delData = function(ev,id){

        var confirm = $mdDialog.confirm()
          .title('Would you like to delete your record')
          .textContent('Hello Sir..')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('yes')
          .cancel('no');

      $mdDialog.show(confirm).then(function() {

      var promise=factorydel(id);
      promise.then(function(details)
      {
        $scope.details=details;
      });

        $scope.status = 'Delete Successful';
     
}, function() {
      $scope.status = 'Data not deleted';
    });

      };
	});


