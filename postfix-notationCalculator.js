/*
Handles calculations using post-fix or Polish notiation
*/

function calculate (inputs) {
  var digitReg = /^\d+$/;
  var digits = [];
  var currentDigit = '';
  
  var mathmaticalMap = {
    '+':(a, b) => ( a + b ) ,
    '-':(a, b) => ( b - a ) ,
    '*':(a, b) => ( a * b ) ,
    '/':(a, b) => ( b / a )
  };
  // Write your code here, and
  // return your final answer.
  for (var i= 0; i < inputs.length; i++) {
    if (inputs[i] === ' ') {
      if (currentDigit.length > 0) //if there's currently a digit
        digits.push(parseFloat(currentDigit));
      currentDigit = ''; //reset digit
    }
    else if (inputs[i] === '.' || digitReg.test(inputs[i])) {
      currentDigit += inputs[i]; //add string of digits
    } else {
      var result = mathmaticalMap[inputs[i]](digits.pop(), digits.pop());
      digits.push(result);
    }

  }
  
  return digits[0];
}
