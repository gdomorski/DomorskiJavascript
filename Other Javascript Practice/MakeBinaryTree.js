function MakeBinaryTree(val) {
  
  //var this = {};
  this.value = val;
  this.left = null;
  this.right = null;
  //return this;
  
}


// this.value = 10
// this.right = {this.value = 11, this.right = null, this.left};
// this.left = null;


MakeBinaryTree.prototype.add = function(val) {
  
  
  function subRoutine(node) {
    //value, right, left
    if(val > node.value){
      if(node.left){
        subRoutine(node.left);
      }else{
        node.left = new MakeBinaryTree(val)
      }
      //do something this
      
    } else if (val < node.value) {
      if(node.right){
        subRoutine(node.right)
      } else {
        node.right = new MakeBinaryTree(val);
      }
      
    }
    
  }
  // what do we pass in?
  subRoutine(this);
  
  
};


MakeBinaryTree.prototype.contains = function(val) {
  
  //create a boolean value and set it to false as a default
  var comparison = false;

  function subRoutine(node){

  	//if they are equal
  	//return true
  	if(val == node.value){
  		comparison = true;
  	  return;
  	}


  	//if it is less, check the left side, recursively
  	if(val > node.value){
  		if(node.left){
  		subRoutine(node.left);
  		}
  	}	

  	//if it is greater check the right, recursively
  	else if (val < node.value){
  		if(node.right){
  		subRoutine(node.right);
  	    }
    }
}

  subRoutine(this);


//return the boolean value;
return comparison;
};

