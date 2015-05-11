//Reversing a string

	function reverse(str) {
		var newstr = '';  //create a new variable, where your answer will be stored
	  for (var i = str.length - 1; i >= 0; i--) //loops through the string backwards
		  newstr += str[i];  //adds each letter in reverse
	  return newstr; // returns the correct value
	  
	  
	}
	
	
	
	function firstReverse(str) { 
		return str.split("").reverse().join("");         //splits thr string into an array, reverses it and joins it back together
	
	
	
	}
	
	