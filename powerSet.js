function powerSet (string) {
  var sortedString = string.toLowerCase(); 
  sortedString = sortedString.split('');
  sortedString.sort(compare);
  var uniqueSortedString = sortedString.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
  });

  var powerSets = [];
  
  for (var i = 0; i < Math.pow(2, uniqueSortedString.length); i++) {
    var binarySelector = convertToBinary(i); //binary string to find all subsets
    
    while(binarySelector.length < uniqueSortedString.length) {
      binarySelector = '0' + binarySelector;
    }
    
    var oneSet = '';
    
    for (var bit = uniqueSortedString.length - 1; bit >= 0; bit--) {
      if (binarySelector.charAt(bit) === '1') {
        oneSet += uniqueSortedString[uniqueSortedString.length - 1 - bit];
      }
    }
    
    powerSets.push(oneSet);
    
    
  }
  

  return powerSets.sort(compare);
}

function compare(strA, strB) {
   if (strA > strB) {
       return 1;
   } else if (strA < strB) {
       return -1;
   } else {
       // the characters are equal.
       return 0;
   }
}

function convertToBinary(decimalNumber){
    return (decimalNumber >>> 0).toString(2);
}
