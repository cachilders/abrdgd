angular.module('app.view1', [])

.controller('View1Controller', ['$scope','$state', function($scope, $state) {

  $scope.view2 = function() {
    $state.go('secondary');
  };

}]);
