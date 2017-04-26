/*
Rotates a matrix 90 degress
*/

function rotateMatrix (matrix, rotation) {
  // Write your code here, and
  // return your final answer.
  // not what the prompt asked for, but might be useful for something else
  // for (var row = 0; row < matrix.length; row++) {
  //   //only pop the row if it's not the last row
  //   if (row < matrix[row].length - 2) {
  //     console.log(row)
  //     var end = matrix[row].pop();
  //     matrix[row + 1].push(end);
  //   }
    
  //   //only unshift the row if it's not the first row {
  //   if (row > 0) {
  //     var beg = matrix[row].shift();
  //     matrix[row - 1].unshift(beg);
  //   }
  // }
  
  // return matrix;
  
  var rotatedMatrix = [];
  for (var i = 0; i < matrix.length; i++) {
    rotatedMatrix.push([]);
  }
  
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix.length; col++) {
      //are there any tests for counter-clockwise rotation...?
      rotation > 0 ? 
      rotatedMatrix[col].push(matrix[row][col])  :
      rotatedMatrix[col].unshift(matrix[row][col])
    }
  }
  
  return rotatedMatrix;
}
