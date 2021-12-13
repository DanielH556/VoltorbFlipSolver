var rowTotal = 0;
var columnTotal = 0;

function sumRow(cards) {
  cards.forEach(card => {
    rowTotal += card.value;
  });
  console.log(rowTotal);
};

function sumColumn(cards) {
  cards.forEach(card => {
    columnTotal += card.value;
  });
  console.log(columnTotal);
};

// function flipCard(cardId, cardIcon, cardValue) {
//   var flippedCard = document.getElementById(`card-${cardId}`);
//   console.log(flippedCard);
//   flippedCard.style.backgroundColor = "#d6a185";
//   if (cardValue == 1) {
//     flippedCard.innerHTML = `<h2>${cardValue}</h2>`;
//   }else if (cardValue == 2) {
//     flippedCard.innerHTML = `<h2>${cardValue}</h2>`;
//   }else if (cardValue == 3) {
//     flippedCard.innerHTML = `<h2>${cardValue}</h2>`;
//   }else if (cardValue == 0) {
//     flippedCard.innerHTML = `<img src="${cardIcon}" name="card-image-${cardId}"/>`;
//   };
// };



function checkLine(voltorb, sum, memoLine) {
  switch(memoLine) {
    case voltorb + sum == 5:
      memoLine = [0, 1];
      break;
    case voltorb + sum == 6:
      memoLine = [0, 1, 2];
      break;
    case voltorb + sum >= 7:
      memoLine = [0, 1, 2, 3];
      break;
    case voltorb == 0:
      flipCard();
      break;
    case voltorb == 5:
      memoLine = [0];
    default:
      return;
  };
};

function checkCard(cardRow, cardColumn) {
  
}
