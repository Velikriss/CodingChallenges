/*
Finds the longest run of identical characters and returns an array containing the start and end indices of that run
*/

function longestRun (string) {
  // Write your code here, and
  // return your final answer.
  
  //check if the char is the same as the next one
    //if it is, increment the counter and move on
    
    //if not, compare the current run to the max run
      //if it is greater, then save the results
      //if it is not, ignore
    //then change the current character AND reset the counter
    
    //edge case, it is the last character of the string, compare immediately
    
  var result = [0, 0];
  var previousChar = '';
  var currentChar;
  var currentRun = 1;
  var maxRun = 1;
  var maxChar = '';
  for (var i = 0; i< string.length; i++) {
    
    currentChar = string[i]; //set the char to be compared
    if (previousChar === currentChar) { //check it to the last character (will be blank on the first run)
      currentRun++; //increment the current run

    } else {
      if (currentRun > maxRun) {
        //this is the new max
        //save the PREVIOUS index (since this iteration combo breaks)
        maxRun = currentRun;
        maxChar = string[i - 1];
        result[1] = i - 1;
      }
      currentRun = 1; //reset the counter
    }
    
    previousChar = currentChar; //current char is compared, now previous char
  } //end of for loop
  
  if (currentRun > maxRun) {
    //the edge case-- if the last character was the streak, this will save the last index
    maxChar = string[string.length - 1];
    result[1] = string.length - 1;
  }
  
  //find the first index of the longest ran character
  maxChar === '' ? result[0] = 0 : result[0] = string.indexOf(maxChar);
  return result;
}
