function playingCards(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        'S': '\u2660',  // Spades (♠)
        'H': '\u2665',  // Hearts (♥)
        'D': '\u2666',  // Diamonds (♦)
        'C': '\u2663'   // Clubs (♣)
    };

    // Validate face
    if (!validFaces.includes(face)) {
        throw new Error(`Invalid card face: ${face}`);
    }

    // Validate suit
    if (!validSuits[suit]) {
        throw new Error(`Invalid card suit: ${suit}`);
    }

    // Return the card object with a toString method
    return {
        face: face,
        suit: validSuits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}


console.log(playingCards('A', 'S'))

console.log(playingCards('10', 'H'))

console.log(playingCards('1', 'C'))