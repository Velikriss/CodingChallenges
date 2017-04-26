/*
Returns the largest product possible from three of those numbers from an array of numbers
*/

function largestProductOfThree (array) {
  // Write your code here, and
  // return your final answer.
  var sorted = array.sort(sortNumber);
  
  //there are only 2 possible largest numbers from the way my list is sorted
  var last = sorted.length - 1;
  
  var largest = sorted[0] * sorted[1] * sorted[2];
  largest = Math.max(largest, sorted[0] * sorted[last] * sorted[last - 1] );
  
  return largest;
}

function sortNumber(a,b) {
    return b - a  ;
}
