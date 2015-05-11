function SimpleMode(arr) { 

 // Set up an object that will keep track of each item's count in the array
 // ex. counter = {5: 2, 2: 2, 1: 1}
 var counter = {};
  
 // Count up each number in the array by looping through the array
 for(var i = 0; i < arr.length; i++){
   // If no counter for the item exists, then create it
   if (counter[arr[i]] === undefined) {
	   counter[arr[i]] = 0;
   }
   
   // Bump the counter of the item up
	counter[arr[i]]++;

   
//Brackets are used when finding something in object or array, parenthesis are used when dealing with functions   
   
  }
  
  
  [4, 4, 4, 3, 2,]
  
  4:3
  3:1
  2:1
 
  maxCounter;
   
 
  // ex. counter = { 5: 1 }
    var maxCounter = 0;
    var mode = 0;
	var modes = [];
	var value;
  
// Figure out which numbers appears the most
  for (key in counter) {
    // item is our key
    // the item's count is our value, counter[key]
	value = counter[key]
    if(counter[key] >= maxCounter){
      maxCounter = counter[key];
      modes.push(counter[key]);
      mode = key;
    }
    
  }


       
  // If there's more than one mode
  if (modes.length > 1) {
    // Return the one that's first in the array
    mode = modes[0];
    var index = 0;
    var minIndex = arr.length;
    for (var i = 0; i < modes.length; i++) {
        // At what index does our mode appear in the array?
        index = arr.indexOf(mode); // 5 -> 0; 2 -> 2
        if(index < minIndex) {
          // Set new minIndex
          minIndex = index;
          // Set our new mode!
          mode = modes[i];
        }
    }
  }
     
  // If nothing appears more than once, return -1
  if (maxCounter < 2) {
    mode = -1;
  }
  
  // Return the mode
  return mode; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());                            







https://www.youtube.com/watch?v=stt26Ia2IDk










                            
                            
                            
  