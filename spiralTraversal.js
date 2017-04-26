/*
Prints out a 2d matrix as if it were being traversed in a spiral
*/

function spiralTraversal (matrix) {
  // Write your code here, and
  // return your final answer.
  var spiral = [];
  // shift all elements and push into spiral
  // when at the end of first row, pop the other rows
  // when at the last row, pop all elements
  // shift the other rows until you hit the first row
  // recursively
  // stop when matrix is empty
  
  
  
  while (matrix.length > 0) {
    var length = matrix[0].length;
    // length has to be saved otherwise the for loops conditions dynamically
    for (var i = 0; i < length; i++) {
      spiral.push(matrix[0].shift());
    }
    matrix.shift();
    
    if (matrix.length === 0) {
      return spiral;
    }
    
    for (var j = 0; j < matrix.length - 1; j++) {
      spiral.push(matrix[j].pop());
    }
    
    
    var length = matrix[matrix.length - 1].length;
    for (var k = 0; k < length; k++) {
      spiral.push(matrix[matrix.length - 1].pop());
    }
    matrix.pop();
    
    
    if (matrix[0].length === 0) {
      break;
    }
    for (var l = matrix.length - 1; l > 0; l--) {
      spiral.push(matrix[l].shift());
    }
    
    
    
  }
  
  return spiral;
}
