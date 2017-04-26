/*
Deletes duplicate characters from a string
*/

function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
  var unique = {};
  for (var char of str) {
    unique[char] ? unique[char]++ : unique[char] = 1;
  }
  
  var output = '';
  for (var char in unique) {
    if(unique[char] === 1) {
      output += char
    }
  }
  
  return output;
  
}
