/*
Implements a linked list data structure
*/


      var LinkedList = function (initialValue) {
      // Write your code here
        if (initialValue) {
          var node = new Node(initialValue)
          this.head = node;
          this.tail = node;
        } else {
          this.head = null;
          this.tail = null;
        }
      };
      
      LinkedList.prototype.addToTail = function(value) {
        var tail = new Node(value);
        this.tail = tail;
        
        if (this.head === null) {
          this.head = tail; //only make head if there isn't one
        } else {
          var node = this.head;
          while (node.next !== null) {
            node = node.next;
          }
          node.next = tail;  
        }
      };
      
      LinkedList.prototype.removeHead = function() {
        this.head = this.head.next;
        
        if (this.head === null) {
          this.tail = null;
          //get rid of the tail if there was no other node
        }
        
      };
      
      LinkedList.prototype.contains = function(value) {
        var node = this.head;
        
        while (node !== null) {
          if (node.value === value) {
            return true;
          }
          node = node.next;
        }
        
        return false;
      }
      
      // constructor for nodes in LinkedList
      var Node = function(value) {
        this.value = value;
        this.next = null;
        
      }
      

// etc...
