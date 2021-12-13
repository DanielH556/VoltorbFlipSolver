(function createBoard(card) {
  var container = document.getElementById('board');
  var elementCnt = '';
  cards.forEach(card => {
    elementCnt += `<button class="card" type="button" id="card-${card.id}" ng-click="flipCard(${card.id},${card.state},${card.value},${card.image})"></button>`;
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