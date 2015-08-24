var flatten = function (item){
  
  var result = [];
  // subroutine way of doing recursion
  
  function subRoutine(arr) {
    // iterate over the array
    _.each(arr, function(value) {
      //check if the value is an array
      if(Array.isArray(value)) {
        //if it is pass it back through subroutine
        subRoutine(value);
      } else {
        result.push(value);
      }
    });
  }
  
  if(Array.isArray(item)) {
      subRoutine(item);
  } else {
    alert('Flatten only works on Array! Dummy!');
  }
  
  return result;
  
};



//Another way

function PutArraysTogether(arrays){
    return arrays.reduce(function(a,b){   //The reduce/concat methods are excellent ways of flattening arrays. Using reduce is also an example of a callback
        return a.concat(b);
        
    })    
}


//Another way...Only works with numbers. Or you could convert everything to strings...


var flatten = function(arr) {
	var newArr = arr.toString().split(',');
	for (var i = 0; i < newArr.length; i++) {
		newArr[i] = Number(newArr[i]);
	}
	return newArr;
}


//Flatten using reduce

var flatten = function  (arr) {
   return reduce(arr, function  (a,b) {
       if (Array.isArray(b)) {
           return a.concat(flatten(b));
       }else{
           return a.concat(b);
       }
   },[]);
};

