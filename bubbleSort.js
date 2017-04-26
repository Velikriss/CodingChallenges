/*
Sorts an array using bubbleSort
*/

function bubbleSort (input) {
  // Write your code here, and
  // return your final answer.
  var swap = false;
  while (true) {
    for (var i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        var temp = input[i + 1];
        input[i + 1] = input[i];
        input[i] = temp;
        swap = true;
      }
    }
    if (!swap) break;
    swap = false;
  }
  return input;
}
