var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match! Good job!");
	} else{
		alert("Sorry, try again. ");
	};
}
// else{
// 	alert("you haven't selected two yet")
// }
