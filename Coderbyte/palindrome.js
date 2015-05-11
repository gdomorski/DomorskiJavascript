//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 


function Palindrome(str) { 

	var palcheck = ""; //create a new variable to hold a reversed string
  str = str.split(" ").join("").toLowerCase();  //splits it into an array and joins it together to get rid of spaces. makes the the string all lowercase
  
  for(var i = str.length - 1; i >= 0; i--) {   //reverses the string
 	palcheck += str[i];

  }
  
  if (str === palcheck){  //checks to see if the reverse is the same as it is forward
    return true;
  }

    return false;
    
 
         
}


Palindrome("never odd or even");