/*
Return the common characters in the same order that they appear in the first argument
*/

commonCharacters = function(string1, string2){
  var commonChars = [];
  
  for (var char of string1) {
    if (string2.indexOf(char) !== -1) {
      if (!commonChars.includes(char) && char !== ' ') {
        commonChars.push(char);
      }
    }
  }
  
  return commonChars.join('');
};
