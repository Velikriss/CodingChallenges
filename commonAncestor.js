/*
Finds the path to an Ancestor and finds the closest common ancestor between two nodes.
Helper tree functions were given.
*/

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(tree1, tree2){
  var ancestorPath = [];
  console.log(this.getAncestorPath(tree1));
  return ancestorPath;
}

Tree.prototype.getAncestorPath = function(endPoint){
  var familyLineage = [this];
  if (endPoint === this) {
    return familyLineage;
  }
  
  if (this.isDescendant(endPoint)) {
    for (var child of this.children) {
      if (child.getAncestorPath(endPoint)) {
        return familyLineage.concat(child.getAncestorPath(endPoint));
      }
    }
  } else {
    return null;  
  }
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
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

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};