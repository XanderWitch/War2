var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#createDeck', function() {
        it('should return a 52-card deck in an array with 4 suits and 13 ranks and 13 values for each suit. The first value should be {"Hearts", "2", 2}.', function() {
            let deck = new Deck();
            deck.createDeck(["Hearts", "Spades", "Diamonds", "Clubs"], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
            expect(deck.cardsInDeck[0].suit).to.equal('Hearts');
            expect(deck.cardsInDeck[0].rank).to.equal('2');
            expect(deck.cardsInDeck[0].value).to.equal(2);
        });

        it('should throw an error if the first parameter is not a string', function() {
            expect(function() {
                createDeck([5, 5], [4, 5], ["ace", "king"]);
                }).to.throw(Error);
        });
    });
});