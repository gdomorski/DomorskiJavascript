function RunLength(str) { 

  var counter = 0;
  var answer = "";
  
  
  for(var i = 0; i < str.length; i++){
   counter++
    if(str[i] !== str[i+1]){
     answer += counter;
     answer += str[i];
     counter = 0;
    }
  }
  

  return answer 
         
}


//If you wanted to count all the same letters in the entire string


function RunLength(str) { 

  var letterCounter = {};
  var newStr = ""
  
  for(var i = 0; i < str.length; i++){
     if(letterCounter[str[i]] === undefined){
      letterCounter[str[i]] = 0; 
     }
     letterCounter[str[i]]++
  }
  
  for(var key in letterCounter){
   newStr += (letterCounter[key] + key)
  }
  
  return newStr;

         
}
