cards = [
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

labels = [
  { id: 1, sum: 4, voltorb: 4 },
  { id: 2, sum: 4, voltorb: 4 },
  { id: 3, sum: 4, voltorb: 4 },
  { id: 4, sum: 4, voltorb: 4 },
  { id: 5, sum: 4, voltorb: 4 },
];

(function createBoard(card) {
  var container = document.getElementById('board');
  var elementCnt = '';
  cards.forEach(card => {
    elementCnt += `<button class="card" type="button" id="card-${card.id}" ng-click="flipCard(${card.id})"></button>`;
  });

  container.innerHTML = elementCnt;

  var containerRight = document.getElementById('rightBar');
  var containerBottom = document.getElementById('bottomBar');
  var elementCtnR = '';
  var elementCtnB = '';

  labels.forEach(label => {
    elementCtnR += `<div class="refer-bars-button"><input type="number" name="sum-${label.id}" id="right-sum-card-${label.id}" ng-value=${label.sum} min="0"> <b class="label-ref">S</b>
    <input type="number" name="sum-${label.id}" id="right-voltorb-card-${label.id}" ng-value=${label.voltorb} min="0" max="5"><img src="Voltorb.png" alt="LabelVoltorb" class="label-ref"></div>`;

    elementCtnB += `<div class="refer-bars-button"><input type="number" name="sum-${label.id}" id="bottom-sum-card-${label.id}" ng-value=${label.sum} min="0"> <b class="label-ref">S</b>
    <input type="number" name="sum-${label.id}" id="bottom-voltorb-card-${label.id}" ng-value=${label.voltorb} min="0" max="5"><img src="Voltorb.png" alt="LabelVoltorb" class="label-ref"></div>`;
  });

  containerRight.innerHTML = elementCtnR;
  containerBottom.innerHTML = elementCtnB;
})();