var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];



flipCard(0);
flipCard(1);

function checkForMatch(){
		if(cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match! Good job!");
		} else{
			console.log("Sorry, try again. ");
		};
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};












	// var cardOne = cards[0];
	// cardsInPlay.push(cardOne);

	// var cardTwo = cards[1];
	// cardsInPlay.push(cardTwo);