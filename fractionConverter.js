/*
* Takes a number as its argument and returns a string that represents that number’s simplified fraction.
* Whole numbers and mixed fractions are returned as improper fractions.
*/

function fractionConverter (number) {
  // Write your code here, and
  // return your final answer.
  var negative = false;
  
  // don't feel like dealing with negative math logic
  if (number < 0) {
    negative = true;
    number = -number;
  }
  
  var numerator = Math.floor(number);
  var decimal = (number % 1) * 100;
  // remove the integer and convert decimal to whole number
  var denominator = 100;
  
  //have to find the common factor of decimal and 100
  
  if (decimal === 0) {
    // if there is no decimal, then it's just a whole number
    // so set the denominator to 1
    denominator = 1;
    
  } else {
    var modulo = 2;
    while (modulo <= Math.abs(decimal)) {
      if (decimal % modulo === 0 && denominator % modulo === 0) {
        // if the current number is a common factor of the num. and den.
        decimal /= modulo;
        denominator /= modulo;
      } else {
        modulo++;
      }
    }
    
    numerator *= denominator;
    numerator += decimal;
  }
  
  if (negative) {
    numerator = -numerator;
  }
  
  return numerator + '/' + denominator;
}
