app.controller('editctrl',['$scope','$stateParams','editFactory','saveFactory',function($scope,$stateParams,editFactory,saveFactory)
{ 
   $scope.id = $stateParams.id;
   var  id = $scope.id;
   // console.log(id);
   var promise=editFactory($stateParams.id);
   promise.then(function(data)
   {
       $scope.myEdit=data;
       $scope.name= $scope.myEdit.name;
       $scope.gender= $scope.myEdit.gender;
       $scope.age= $scope.myEdit.age;
       $scope.company= $scope.myEdit.company;
       $scope.email= $scope.myEdit.email; 
       $scope.phone= $scope.myEdit.phone;
   });//end promise

   $scope.save = function()
   {
       console.log($stateParams.id);
       var saveDetails = {
            id : $scope.id,
            name : $scope.name,
            gender : $scope.gender,
            age : $scope.age,
            company : $scope.company,
            email : $scope.email,
            contact : $scope.phone
       };
       
       var promise=saveFactory(saveDetails,$stateParams.id);
       promise.then(function(details)
       {
           $scope.details = details;
           console.log($scope.details);
       });
   }// end save function
}]);//end  edit details
