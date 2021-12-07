(function generateCards() {
  var cards = [
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
  
  boardGrid = document.getElementById('board');
  htmlContent = '';
  
  for (var i = 0; i < cards.length; i++) {
    const card = cards[i];
    htmlContent += `<button class="card" id="card-${card.id}" value="${card.value}" onclick="flipCard(${card.id}, '${card.image}', ${card.value})"></button>`;
  };
  
  boardGrid.innerHTML = htmlContent;


  (function generateBorder() {
    var referee = document.getElementById('right-buttons-container');
    var refereeB = document.getElementById('bottom-buttons-container');
    var insertVessel = '';
    var insertVesselB = '';
    
    let card = cards

    var labels = [
      { id: 1, "sum": [card[0].value], "voltorb": 0 },
      { id: 2, "sum": 0, "voltorb": 0 },
      { id: 3, "sum": 0, "voltorb": 0 },
      { id: 4, "sum": 0, "voltorb": 0 },
      { id: 5, "sum": 0, "voltorb": 0 },
    ];

    for (let i = 0; i < labels.length; i++) {
      const ref = labels[i];
      insertVessel += `        <div class="refer-bars-button">
        <input type="number" name="sum-${ref.id}" id="right-sum-card-${ref.id}" value="${ref.sum}" min="0" onchange="checkRefs(${ref.id})"> <b class="label-ref">S</b>
        <input type="number" name="sum-${ref.id}" id="right-voltorb-card-${ref.id}" value="${ref.voltorb}" min="0" max="5" onchange="checkRefs(${ref.id})><img src="Voltorb.png" alt="LabelVoltorb" class="label-ref">
      </div>`
      insertVesselB += `<div class="refer-bars-button">
        <input type="number" name="sum-${ref.id}" id="bottom-sum-card-${ref.id}" value="${ref.sum}" min="0" onchange="checkRefs(${ref.id})"> <b class="label-ref">S</b>
        <input type="number" name="sum-${ref.id}" id="bottom-voltorb-card-${ref.id}" value="${ref.voltorb}" min="0" max="5" onchange="checkRefs(${ref.id})><img src="Voltorb.png" alt="LabelVoltorb" class="label-ref">
      </div>`
    };
    
    referee.innerHTML = insertVessel;
    refereeB.innerHTML = insertVesselB;
  })();
})();