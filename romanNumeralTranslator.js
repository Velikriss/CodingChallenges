/*
Converts the roman numeral to a number and outputs it
*/

function translateRomanNumeral (romanNumeral) {
  // Write your code here, and
  // return your final answer.
  var total = 0;
  var previousNumber = 0;
  var currentNumber = 0;
  for (var i = romanNumeral.length - 1; i >= 0; i--) {
    currentNumber = DIGIT_VALUES[romanNumeral[i]];
    if (!currentNumber) {
      return 'null';
    }
    
    console.log(currentNumber)
    if (previousNumber <= currentNumber) {
      total += currentNumber;
    } else {
      total -= currentNumber;
    }
    previousNumber = currentNumber;
  }
  return total;
}
