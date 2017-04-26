/* 
Uses 2 stacks to implement a queue 
*/

var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);

  };

  this.pop = function(){
    return storage.pop();

  };

  this.size = function(){
    
    return storage.length;

  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);

  };

  this.dequeue = function(){
    while (inbox.size() > 0) {
      outbox.push(inbox.pop())
    }
    var dequeued = outbox.pop();
    console.log('Before' ,dequeued);
    
    while (outbox.size() > 0) {
      inbox.push(outbox.pop());
    }
    
    console.log('After',dequeued);
    return dequeued;
 
  };

  this.size = function(){
    return inbox.size();

  };
};
