/* 
* Sorts an array using merge sort
*/

function mergeSort(arr){
  //Your code here
  var left = arr.slice(0, arr.length / 2);
  var right = arr.slice(arr.length / 2);
  var sortedArray = [];
  
  var li = 0; //left.length = 2, then li is 1 at most 
  var ri = 0; //right.length = 1, then ri is 0 at most
  
  if (left.length > 1) {
    left = sortedArray.concat(mergeSort(left));
  }
  
  if (right.length > 1) {
    right = sortedArray.concat(mergeSort(right));
  }
  
  while (li + ri < left.length + right.length) {
    
    if ((left[li] < right[ri] && li < left.length) || !right[ri]) {
      sortedArray.push(left[li]);
      li++;
    } else if ((left[li] >= right[ri] && ri < right.length) || !left[li]) {
      sortedArray.push(right[ri]);
      ri++;
    }
  }
  return sortedArray;
}