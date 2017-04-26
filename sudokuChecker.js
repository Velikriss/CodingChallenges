/*
Confirms if a sudoku solution is legitimate
*/

function sudokuCheck (boardStr) {
  // Write your code here, and
  // return your final answer.
  var rows = boardStr.split('\n');
  // row is invalid if it does not equal 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
  // 45
  
  // there are 27 checks to see if a solution is valid
  
  var valid = true;
  // innocent until proven guilty
  
  var rowSum = [];
  var colSum = [];
  var gridSum = [];
  
  for (var num = 0; num < rows.length; num++) {
    //instantiate all indices with 0
    rowSum[num] = 0;
    colSum[num] = 0;
    gridSum[num] = 0;
  }
  //check the rows first
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[0].length; j++) {
      // you can just iterate through the rows one by one and keep track that way
      // there will be 9 sums for each type of check
      var currentNum = parseInt(rows[i][j]); //starts at (0, 0), (0, 1) ... (0, 9), (1, 0)
      var grindex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      rowSum[i] += currentNum;
      colSum[j] += currentNum;
      gridSum[grindex] += currentNum;
      
      
      if (rowSum[i] > 45 || colSum[j] > 45 || gridSum[grindex] > 45) {
        valid = false;
        return validity(valid);
      }
    }
  }
  
  for (var k = 0; k < rowSum.length; k++) {
    if (rowSum[k] !== 45 || colSum[k] !== 45 || gridSum[k] !== 45) {
      valid = false;
      return validity(valid);
    }
  }
  
  return validity(valid);
  
}

function validity(valid) {
  return valid ? 'solved' : 'invalid';
}
