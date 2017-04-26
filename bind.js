/*
Implements the function ‘bind’, which accepts a function and a context as arguments
*/

var bind = function(func, context){
  //Your code here
  if (typeof func !== 'function') {
    console.log('Test sucks');
  }
  
  var parameters = [];
  if (arguments.length > 2) {
    parameters = Array.prototype.slice.call(arguments, 2);
  }
  return function(){
    var bound2u = parameters;
      if (arguments.length > 0) {
        bound2u = bound2u.concat(Array.prototype.slice.call(arguments, 0));
      }
      return func.apply(context, bound2u);
      //Your code here
    };
};  

Function.prototype.bind = function(context) {
  var func = this;
  if (typeof func !== 'function') {
    console.log('Test sucks');
  }
  
  var parameters = [];
  if (arguments.length > 1) {
    parameters = Array.prototype.slice.call(arguments, 1);
  }
  return function(){
    var bound2u = parameters;
      
      if (arguments.length > 0) {
        bound2u = bound2u.concat(Array.prototype.slice.call(arguments, 0));
      }
      return func.apply(context, bound2u);
      //Your code here
    };
};
