/*
Implements the functions compose and pipe
*/

var compose = function(...funcs){
  return (args) => {
    return funcs.reduceRight((previous, func)=> {
      console.log(previous)
      return func.call(this, previous);
    }, args);
  }
};

var pipe = function(...funcs){
  return (args) => {
    return funcs.reduce((previous, func)=> {
      return func.call(func, previous)
    }, args);
  }
};
