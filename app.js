// For the final project you will be creating an automated version of the classic card game WAR.
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// o	Ties result in zero points for either Player
// -	After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.



//Create a 52-card deck. There should be four suits (Spades, Hearts, Diamonds, and Clubs) with thirteen cards each (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A)

function createCardDeck () {

    var suits = ["hearts", "spades", "diamonds", "clubs"]
/***  var cards = [{name: "2", value: 2; "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"] */  
    var value = []
    var wholeDeck = [];
    var card = {};

    for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) {

        for (var valueCounter = 0; valueCounter < ranks.length; valueCounter++) {
        wholeDeck.push({Suit: suits[suitCounter], Card: ranks[valueCounter]});
    }
    
    //assign numerical values to face cards
    }
    return wholeDeck;
}
var wholeDeck = createCardDeck();
console.log(wholeDeck);

//shuffle the deck -- loop through deck, swapping each one with another at a random position in the deck all the way through the deck

function shuffleDeck(wholeDeck)
 {
     for (position = 0; position < wholeDeck.length; position++) {

    //pick up each card
    var tempCard = wholeDeck[position];
        console.log(tempCard + " temp card");
    //pick a random position to switch with
    var randomSwitchCardIndex = Math.floor(Math.random() * 52);

    //switch the cards by replacing the first card with the second and then vice versa, where the first card has been temporarily stored in the tempCard variable
    wholeDeck[position] = wholeDeck[randomSwitchCardIndex];
    wholeDeck[randomSwitchCardIndex] = tempCard;
    }

//create the deck and assign it to a variable array
var shuffledDeck = createCardDeck();

//shuffle the deck with the shuffleDeck function
shuffleDeck(shuffledDeck);
    console.log(shuffledDeck);

    //Create two players.


//Deal two hands.
function deal2Hands(deck) {
    const numberOfCards = deck.length / 2;
    const player1Hand = [];
    const player2Hand = [];

    //deal the first 26 cards to player 1
    for (var i = 0; i < 26; i++) {
        player1Hand.push(deck[i]);;
    }

    //deal the last 26 cards to player 2
    for (var i = 26; i < 52; i++) {
        player2Hand.push(deck[i]);;
    }
    console.log(player1Hand, player2Hand);
}        

deal2Hands(shuffledDeck);

//Create turns where each player plays a card.
//Idea: create a loop that compares the identical indexes of player1Hand and player2Hand
//will need to give values to face cards and aces

function playAHandOfWar {
    for (var i = 0; i < 52; i++ {

    })
}


//Award one point to player with the highest card or zero points for equal cards

//Display total cards and winner.

//write unit test for one function


