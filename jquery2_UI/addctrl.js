app.controller('addctrl',['$scope', 'addFactory','$mdDialog',function($scope,addFactory,$mdDialog)
{ 
    

    $scope.db = function(ev)
    {
    //     $mdDialog.show(
    //   $mdDialog.alert()
    //     .parent(angular.element(document.querySelector('#popupContainer')))
    //     .clickOutsideToClose(true)
    //     .title('This is an alert title')
    //     .textContent('You can specify some description text in here.')
    //     .ariaLabel('Alert Dialog Demo')
    //     .ok('Got it!')
    //     .targetEvent(ev)
    // );
    var confirm = $mdDialog.confirm()
          .title('Would you like to save your record')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('yes')
          .cancel('no');

        var newEmp = {
            name : $scope.name,
            gender : $scope.gender,
            age : $scope.age,
            company : $scope.company,
            email : $scope.email,
            contact : $scope.phone
        };

       
    
    $mdDialog.show(confirm).then(function() {
        // $scope.newEmp={}; 


       var promise=addFactory(newEmp);
    promise.then(function(data)
    {

        $scope.myAdd=data;
        // console.log($scope.myAdd.id);

    });
        $scope.status = 'Save Successful';
     
}, function() {
      $scope.status = 'Data Not saved';
    });
//     

    };//end scope  db
    // $scope.db();
}]);//end  add details


