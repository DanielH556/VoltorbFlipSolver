var app = angular.module("voltorbFlipGame", []);
// A
app.controller('TableCtrl', ['$scope', function($scope) {
  $scope.flipCard = function(cardId, cardState, cardValue) {
    var cardIcon = 'Voltorb.png'

    if (cardState == 0) {
      document.getElementById(`card-${cardId}`).style.backgroundColor = '#d6a185';
      cardState = 1;
    };

    if (cardValue == 1) {
      document.getElementById(`card-${cardId}`).innerHTML = `<h2>${cardValue}</h2>`;
    }else if (cardValue == 2) {
      document.getElementById(`card-${cardId}`).innerHTML = `<h2>${cardValue}</h2>`;
    }else if (cardValue == 3) {
      document.getElementById(`card-${cardId}`).innerHTML = `<h2>${cardValue}</h2>`;
    }else if (cardValue == 0) {
      document.getElementById(`card-${cardId}`).innerHTML = `<img src="${cardIcon}" name="card-image-${cardId}"/>`;
    };
  }
}]);