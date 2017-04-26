/*
Returns the first non-repeating character
*/
function firstNonRepeatedCharacter (string) {
    var results = Array.prototype.reduce.call(string, function(acc, val) {
      console.log(acc[val]);
      acc[val] ? acc[val]++ : acc[val] = 1;
      return acc;
    }, {});
    for (var char of string) {
      if (results[char] === 1) {
        return char;
      }
    }
    return 'repeats';
  }

