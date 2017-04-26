/*
Converts a time string into military (24-hour) time
*/

function toMilitary (time) {
  // Write your code here, and
  // return your final answer.
  var m = time.indexOf('m');
  var colon = time.indexOf(':')
  var militaryHour = time.substring(0, colon);
  var militaryMin = time.substring(colon);
  
  if (m > -1) {
      militaryMin = time.substring(colon, m - 1)
      if (time.charAt(m - 1) === 'p') {
        militaryHour = (parseInt(militaryHour) + 12)
        if (militaryHour === 24) {
          militaryHour = 12
        }
      } else if (militaryHour === '12') {
        militaryHour = 0;
      }
  }
  
  militaryTime = militaryHour.toString() + militaryMin.toString();
  
  while (militaryTime.length < 5) {
    militaryTime = '0' + militaryTime;
  }
  
  return militaryTime;
  
  
  
}
