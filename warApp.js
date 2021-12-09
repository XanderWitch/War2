// For the final project you will be creating an automated version of the classic card game WAR.
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// o	Ties result in zero points for either Player
// -	After all cards have been played, display the score.
/****/// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

//Create a card class with suits, ranks, and values (the values will be used to determine who gets a point on each play)

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

//Create a 52-card deck with suits, ranks, and values;
class Deck {

    constructor() {
        this.cardsInDeck = [];
    }

    createDeck() {
        const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        //Use a loop to push 13 cards of each suit to the deck
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cardsInDeck.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    //shuffle the deck -- loop through the entire deck, swapping each card with another at a random position in the deck
    shuffleDeck() { /* keeping suits together??? */
        
        for (var i = 0; i < this.cardsInDeck.length; i++) {

            //pick up a card, assign it to a temporary value
            var tempCard = this.cardsInDeck[i];
  
            //pick a random position to switch it with
            var randomSwitchCardIndex = Math.floor(Math.random() * 52);

            //switch the cards by replacing the first card with the second and then vice versa, where the first card has been temporarily stored in the tempCard variable
            this.cardsInDeck[i] = this.cardsInDeck[randomSwitchCardIndex];
            this.cardsInDeck[randomSwitchCardIndex] = tempCard;
        }

    }
}

//create a player class to hold basic player information
class Player {
    constructor(name) {
        this.playersName = name;
        this.playersCards = []
    }
}

//use the Table class to keep track of cards in a game, as if they are being played on a table
class Table {
    constructor() {
        this.cardsInPlay = [];
        this.players = [];
    }        
    
    //start the game by creating players, creating a deck, and shuffling the deck; then deal out 26 cards each by slicing the deck into two stacks
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();

        this.players[0].playersCards = deck.cardsInDeck.slice(0, 26);
        this.players[1].playersCards = deck.cardsInDeck.slice(26, 52);
        
        //set initial scores to 0
        this.players[0].playersScore = 0;
        this.players[1].playersScore = 0;

        //loop through each index in the players cards, comparing them
        for (let i = 0; i < 26; i++) {
            console.log("Current Score: " + playerOneName + ": " + this.players[0].playersScore + ", " + playerTwoName + ": " + this.players[1].playersScore  + "\n" + "\n" + "TURN #" + (i+1) + ":" + "\n" + "\n" +  playerOneName + "'s Card: " + this.players[0].playersCards[i].rank + " of " + this.players[0].playersCards[i].suit + "\n" + playerTwoName + "'s Card: " + this.players[1].playersCards[i].rank + " of " + this.players[1].playersCards[i].suit);
            
            if (this.players[0].playersCards[i].value > this.players[1].playersCards[i].value) {
                this.players[0].playersScore++;
                console.log(playerOneName + " gets the point!");
            } else if (this.players[0].playersCards[i].value < this.players[1].playersCards[i].value) {
                this.players[1].playersScore++;
                console.log(playerTwoName + " gets the point!");
            } else {
                console.log("It's a tie! No points awarded.");
            }
            
        }
        console.log("\n" + "Final Score: " + playerOneName + ": " + this.players[0].playersScore + ", " + playerTwoName + ": " + this.players[1].playersScore);
        if (this.players[0].playersScore > this.players[1].playersScore) {
            console.log("\n" + playerOneName + " is the Winner!");
        } else if (this.players[0].playersScore < this.players[1].playersScore) {
            console.log("\n" + playerTwoName + " is the Winner!");
        } else {
            console.log("\n" + "The game is a tie!");
        }
    }
}


let warTable = new Table();

const playerOne = prompt("Player 1, enter your name.");
const playerTwo = prompt("Player 2, enter your name.")
warTable.start(playerOne, playerTwo);/*ENTER PROMPTS FOR PLAYER NAMES AND MAYBE CHANGE CONSOLE LOGS TO ALERTS */






