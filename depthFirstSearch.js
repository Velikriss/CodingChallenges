/*
Calls a function on each of the nodes in Depth First order, 
and returns a flat array of node values of the tree for which the filter returns true.
*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {      
  var depthOrdered = [];
  var currentDepth = 0;
  
  depthOrder(this, filter, currentDepth);
  
  function depthOrder (tree, filter, depth) {
    
    if (filter(tree.value, depth)) {
      depthOrdered.push(tree.value);
    }
    
    for (var child of tree.children) {
      depthOrder(child, filter, depth + 1);
    }
  }
  
  return depthOrdered.length === 0 ? [0] : depthOrdered;
};








Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
