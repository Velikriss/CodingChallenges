/*
Tests to see if a number is prime
*/

function primeTester (n) {
  // Write your code here, and
  // return your final answer.
  
  
  //base cases
  if (n === 2 || n === 3 || n === 5 || n === 7) {
    return true;
  }
  
 if (isSquare(n)) {
   return false;
 }
 
 var count = Math.sqrt(n);
 
 for (var i = 3; i < count; i += 2) {
   if (n % i === 0) {
     return false;
   }
 }
 
  return true;
  
}

var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};


