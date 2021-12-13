var app = angular.module("voltorbFlipGame", []);

app.controller('TableCtrl', ['$scope', function($scope) {
  $scope.flipCard = function(x) {
    console.log(x);
    $scope.cardId = x;
    $scope.angular.getElementById(`card-5`).style.backgroundColor = "#d6a185";
  };
}]);