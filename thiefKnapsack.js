var knapsack = function(items, limit) {
  //naive way: find every possible combination that is under the limit
  //and then find the max
  var numberOfItems = 0;
  var itemsArray = [];
  var maxBag = [0, 0];
  
  for (var weight in items) {
    itemsArray.push([parseInt(weight), items[weight]]);
    numberOfItems++;
  }
  for (var i = 0; i < Math.pow(2, numberOfItems); i++) {
    var bag = [0, 0];
    var binaryMap = i.toString(2);
    while (binaryMap.length < numberOfItems) {
      binaryMap = '0' + binaryMap;
    }
    
    for (var bit = 0; bit < numberOfItems; bit++) {
      if (binaryMap[bit] === '1') {
        bag[0] += itemsArray[bit][0];
        bag[1] += itemsArray[bit][1];
        
        //small optimization
        if(bag[0] > limit) {
          continue;
          //break out if the limit is ever exceeded while adding
        }
      }
    }
    
    if(bag[0] <= limit) {
      if (bag[1] > maxBag[1]) {
        maxBag[1] = bag[1];
        maxBag[0] = bag[0];
      }
    }
  }
  
  return maxBag[1];
  
    // TODO: Implement
}


// TODO: Write test cases!