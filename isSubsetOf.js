/*
An array method that can return whether or not a context array is a subset of an input array
*/

Array.prototype.isSubsetOf = function(array) {
  var isSubset = true;
  for (var elements of this) {
    if (!array.includes(elements)) {
      return false  
    }
  }
  return isSubset;
};