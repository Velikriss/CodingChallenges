/*
A function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character
*/

function characterFrequency (string) {
  // Write your code here, and
  // return your final answer.
  var freq = {};
  for (var char of string) {
    freq[char] ? freq[char]++ : freq[char] = 1;
  }
  
  return freq.map().sort(function(a, b) {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      if (a[0] > b[0]) {
        return 1
      } else {
        return -1;
      }
    }
  });
} 

Object.prototype.map = function() {
  var arrayFromObject = [];
  for (var key in this) {
    if (key !== 'map')
    arrayFromObject.push([key, this[key]]);
  }
  return arrayFromObject;
}