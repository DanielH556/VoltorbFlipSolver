var app = angular.module("voltorbFlipGame", []);

app.controller("TableCtrl", function($scope) {
  $scope.cards = [
    // Contagem de row e column feita de cima para baixo, da esquerda para a direita.
    { id: 1, row: 1, column: 1, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 2, row: 1, column: 2, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 3, row: 1, column: 3, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 4, row: 1, column: 4, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 5, row: 1, column: 5, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 6, row: 2, column: 1, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 7, row: 2, column: 2, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 8, row: 2, column: 3, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 9, row: 2, column: 4, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 10, row: 2, column: 5, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 11, row: 3, column: 1, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 12, row: 3, column: 2, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 13, row: 3, column: 3, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 14, row: 3, column: 4, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 15, row: 3, column: 5, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 16, row: 4, column: 1, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 17, row: 4, column: 2, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 18, row: 4, column: 3, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 19, row: 4, column: 4, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 20, row: 4, column: 5, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 21, row: 5, column: 1, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
    { id: 22, row: 5, column: 3, state: 'covered', value: 2, image: 'Voltorb.png', memoLine: [] },
    { id: 23, row: 5, column: 3, state: 'covered', value: 3, image: 'Voltorb.png', memoLine: [] },
    { id: 24, row: 5, column: 4, state: 'covered', value: 0, image: 'Voltorb.png', memoLine: [] },
    { id: 25, row: 5, column: 5, state: 'covered', value: 1, image: 'Voltorb.png', memoLine: [] },
  ];
});

app.controller('BorderCtrl', function($scope) {
  $scope.labels = [
    { id: 1, sum: 4, voltorb: 4 },
    { id: 2, sum: 4, voltorb: 4 },
    { id: 3, sum: 4, voltorb: 4 },
    { id: 4, sum: 4, voltorb: 4 },
    { id: 5, sum: 4, voltorb: 4 },
  ];
});