/*
Returns the number of islands in the map
Sample input:

..000.
..000.
..000.
.0....
..000.

*/

function countIslands (mapStr) {
  // Write your code here, and
  // return your final answer.
  // constraints, cannot have more islands than 0's or total spaces
  // look for first 0, add coordinates to checked array
  // check all adajacent spaces next to it (with a helper function)
  // increment island count
  // continue iteration, skipping over 0's 
  // that have been pushed into the checked array
  var mapRows = mapStr.split('\n');
  var confirmedLand = {};
  var islandCount = 0;
  
  for (var i = 0; i < mapRows.length; i++) {
    for (var j = 0; j < mapRows[0].length; j++) {
      if (!wasChecked(i, j) && mapRows[i][j] === '0') {
        checkOrthogonal(i, j);
        islandCount++;
      }
    }
  }
  
  
  return islandCount;
  
  //recursive function that will check all other orthogonal points
  function checkOrthogonal(x, y) {
    console.log(x, 'x', y, 'y');
    // if this was called, then it had to have been an island so push
    // it in my checkedCoordinates array
    
    // if no index for it exists yet, then create an array
    if (!confirmedLand[x]) {
      confirmedLand[x] = [y];
    } else {
      confirmedLand[x].push(y);
    }  // otherwise just push another index in
    
    
    // now check all four orthogonal coordinates (any better way of doing this other than four ifs?)
    
    // check if it was checked already AND if it's land
    
    //west (can't go negative)
    if (x > 0 && !wasChecked(x - 1, y) && mapRows[x - 1][y] === '0') {
      checkOrthogonal(x - 1, y);
    }
    //east (can't go above row.length)
    if (x < mapRows.length - 1 && !wasChecked(x + 1, y) && mapRows[x + 1][y] === '0') {
      checkOrthogonal(x + 1, y);
    }
    
    //north
    if (y < mapRows[0].length - 1 && !wasChecked(x, y + 1) && mapRows[x][y + 1] === '0') {
      checkOrthogonal(x, y + 1);
    }
    
    //south
    if (y > 0 && !wasChecked(x, y - 1) && mapRows[x][y - 1] === '0') {
      checkOrthogonal(x, y - 1);
    }
  }
  
  // helper function to just get a boolean (little bit cleaner)
  function wasChecked(x, y) {
    // if index is not there, default false
    return confirmedLand[x] ? confirmedLand[x].includes(y) : false;
  }
}
