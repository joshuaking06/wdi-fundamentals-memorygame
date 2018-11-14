var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "../images/king-of-diamonds.png"
}
];
// ../images/king-of-diamonds.png for file path
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
	console.log("User flipped " + cards[cardId].rank + ".");
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};












	// var cardOne = cards[0];
	// cardsInPlay.push(cardOne);

	// var cardTwo = cards[1];
	// cardsInPlay.push(cardTwo);