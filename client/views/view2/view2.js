angular.module('app.view2', [])

.controller('View2Controller', ['$scope','$state', function($scope, $state) {

  $scope.view1 = function() {
    $state.go('initial');
  };

}]);
