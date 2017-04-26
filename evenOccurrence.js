/*
Finds the first item that occurs an even number of times in an array
*/
function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var evenElements = {};
  for (var element of arr) {
    if (evenElements[element] === undefined) {
      evenElements[element] = [element, 1];
    } else {
      evenElements[element][1]++;
      evenElements[element][1] = evenElements[element][1] % 2
    }
  }
  for (var evenElement in evenElements) {
    if (evenElements[evenElement][1] === 0) {
      return evenElements[evenElement][0];
    }
  }
  return null;
}
