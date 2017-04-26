/*
Finds the word that contains the greatest number of other words. A word must be at least two letters long in a given array of words
*/
function nestedWordCount (wordList) {
  // Write your code here, and
  // return your final answer.
  var mostWords = [0, ''];
  for (var i = 0; i < wordList.length; i++) {
    var wordCount = 0;
    for (var j = 0; j < wordList.length; j++) {
      if (wordList[i].includes(wordList[j])) {
        wordCount++;
      }
    }
    if (mostWords[0] < wordCount) {
        mostWords[0] = wordCount;
        mostWords[1] = wordList[i];
      }
  }
  
  return mostWords[1];
    
}

