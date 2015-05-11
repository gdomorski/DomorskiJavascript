//Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

function SimpleSymbols(str) {
    
    for (var i = 0, x = str.length; i < x; i++) {       // loop through the user input
        if (/[A-z]/.test(str[i])) {                     // use a regular expression to find letters, .test gives back a truth or false value
            if (!((str[i + 1] == "+") && (str[i - 1] == "+"))) {  //if there is a + sign in front or back of the letter it returns false, 
                return false;
            }
        }
    }

    return true;  //otherwise the result is true
}

// If there's a plus before and after every letter, return true
// If there's NOT (a plus before AND after) a letter, return false
!(before && after) return false
"d+"

// If the letter before is NOT a plus OR if the letter after is not a plus, return false
!before || !after return false
"d+"

if !foo
	return false
	
5 * (4 + 3)



function SimpleSymbols(str) { 

  for(var i = 0; i < str.length; i++){
   if(/[A-z]/.test(str[i])){
     if(!((str[i - 1] === "+") || (str[i + 1] === "+"))){
       return false;
    
  }
}     
  }
  
  
  
  return true; 
         
}