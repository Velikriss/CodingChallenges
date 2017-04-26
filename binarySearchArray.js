/*
Implements binary searching in an array
*/

function binarySearch (array, target, indexBuffer = 0) {
  // Write your code here, and
  // return your final answer.)
  
  var mid = Math.ceil(array.length - 1 / 2) - 1;
  return array[mid] === target ? mid + indexBuffer:
         array.length === 1 ? -1 :
         array[mid] > target ? 
            binarySearch(array.slice(0, mid), target, indexBuffer) : 
            binarySearch(array.slice(mid), target, indexBuffer + Math.ceil(array.length / 2));
  
}
