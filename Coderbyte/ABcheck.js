//BEST PRACTICE

function ABCheck(str) { 
  return /a...b/g.test(str);   //using a regular expression could easily solve this problem
}
   
   
   
   
//USING A FOR LOOP


function ABCheck(str) { 
	str === str.toLowerCase();  //make the whole string lowercase, this will not cause problems with upper case letters
  
  for(var i = 0; i < str.length; i++){  //loop through the string
 
     if((str[i] === "a" && str[i + 4] === "b") || (str[i] === "b" && str[i + 4] === "a")){ //see if the letters are apart from each other
  
       return true;
       }
  }
     return false;
         
}

ABCheck("Laura sobs");
