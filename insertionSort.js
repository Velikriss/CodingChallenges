/*
Sorts an array using insertion sort
*/

function insertionSort (array) {
  // Write your code here, and
  // return your final answer.
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i].value < array[j].value || 
      (array[i].value === array[j].value && 
      array[i].order < array[j].order)) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
