var app = angular.module('myApp', []);
app.controller('MovieController', function($scope, $http){

    $scope.add = function() {
        return $scope.num1 + $scope.num2;
    };

    $scope.sub = function() {
        return $scope.num1 -  $scope.num2;
    };

    $scope.mul = function() {
        return $scope.num1 * $scope.num2;
    };

    $scope.div = function() {
        return $scope.num1 / $scope.num2;
    };
});