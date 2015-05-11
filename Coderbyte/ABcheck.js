//BEST PRACTICE

function ABCheck(str) { 
  return /a...b/g.test(str);   
}
   
   
   
   
//USING A FOR LOOP


function ABCheck(str) { 
	str === str.toLowerCase();
  
  for(var i = 0; i < str.length; i++){
 
     if((str[i] === "a" && str[i + 4] === "b") || (str[i] === "b" && str[i + 4] === "a")){
  
       return true;
       }
  }
     return false;
         
}

ABCheck("Laura sobs");
