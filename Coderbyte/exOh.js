// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 


function ExOh(str) { 
	var xCount = 0;   //holds a counter for x's
	var oCount = 0;   // holds a counter for o's
  
  for (var i =0; i<str.length; i++){
    if (str[i] == "x" || str[i] == "X"){
        xCount++;
        
    }else if (str[i] == "o" || str[i] == "O"){
        oCount++;
        
    }
    
  }
  if (xCount == oCount){
    return true;
  }else {
    return false;
    
  }