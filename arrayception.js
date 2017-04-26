/*
Return n, where n is the deepest level that contains a non-array value
*/

function arrayception (array) {
  // Write your code here, and
  // return your final answer.
  var limbo = 0;
  
  function goDeeper(array, currentLayer) {
    if (Array.isArray(array)) {
      for (var layer of array) {
        //we must go deeper
        goDeeper(layer, currentLayer + 1);
      } 
    } else {
        limbo = Math.max(currentLayer, limbo);
        return;
    }
  }
  goDeeper(array, 0)
  
  return limbo;
  
}
