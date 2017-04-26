/*
Returns true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
*/

function isBalanced (str) {
  // Write your code here, and
  // return your final answer.
  const map = ['(', ')', '[', ']', '{', '}'];
  var stack = [];
  for (var char of str) {
    if (map.includes(char)) {
      var closing = map.indexOf(char) % 2; 
      //if it's opening, it'll be 0, closing will be 1
      if (!closing) {
        stack.push(char);
      } else {
        var openBracket = stack.pop();
        if (map.indexOf(char) -1 !== map.indexOf(openBracket)) {
          return false;  
        }
      }
    } //end of if statement
  } //end of for loop
  return stack.length === 0;
}
