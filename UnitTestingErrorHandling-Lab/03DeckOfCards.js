function printDeckOfCards(cards) {

    function createCard(face, suit) {
        
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660', // Spades
            'H': '\u2665', // Hearts
            'D': '\u2666', // Diamonds
            'C': '\u2663'  // Clubs
        };

        if (!validFaces.includes(face) || !suits[suit]) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return {
            toString: () => face + suits[suit]
        };
    }

    // Loop through the cards array and process each card string
    let deck = [];

    for (let cardStr of cards) {
        let face = cardStr.slice(0, -1); // Everything except the last character
        let suit = cardStr.slice(-1);    // The last character

        try {
            let card = createCard(face, suit);
            deck.push(card.toString());
        } catch (error) {
            console.log(error.message);
            return;  // Stop further execution on error
        }
    }

    console.log(deck.join(' '));
}


printDeckOfCards(['AS', '10D', 'KH', '2C'])

printDeckOfCards(['5S', '3D', 'QD', '1C'])