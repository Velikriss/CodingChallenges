/*
Shuffles a deck that is given as an array
*/

var shuffleDeck = function(deck) {
  var shuffled = [];
  while (deck.length > 0) {
    shuffled.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
  }
  return shuffled;
}
