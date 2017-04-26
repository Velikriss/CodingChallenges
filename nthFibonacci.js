/*
Calculates the nth Fibonacci in the Fibonacci sequence
*/

nthFibonacci = function(n) {  
  if (n === 0)
    return 0
    
  var current = 1;
  var last = 0;
  
  for (var i = 1; i < n; i++) {
    
    var temp = current;
    current += last;
    last = temp;
  }
  
  return current;
};

