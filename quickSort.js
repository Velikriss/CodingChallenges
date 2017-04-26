/*
Sorts an array using quicksort
*/

function quickSort(arr) {
  //your code here
  var sortedArr = [];
  console.log(arr);
  if (arr.length === 1) {
    return arr;
  }
  var pivot = arr[Math.floor(arr.length / 2)];
  sortedArr.push(pivot);
  var left = [];
  var right = [];
  
  for (var i = 0; i < arr.length; i++) {
    arr[pivot] === arr[i] ?
    arr[]
    left.push(arr[i]) : right.push(arr[i]);
  }
  
  if (left)
    quickSort(left).concat(sortedArr);
  if (right)
    sortedArr.concat(quickSort(right));
  
  console.log(sortedArr);
  return sortedArr;
}