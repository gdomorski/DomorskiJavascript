function LetterChanges(str) { 

  
 var alpha = "abcdefghijklmnopqrstuvwxyz";
 var newalpha = "bcdEfghIjklmnOpqrstUvwxyzA";
 var answer = "";
 
 
 	for(var i = 0; i < str.length; i++){
      if(alpha.indexOf(str[i]) !== -1){        //you can't put simply str[i] here because yoou will not get any -1 values.
	 var index = alpha.indexOf(str[i]);	  
      answer += newalpha.charAt(index);         //adds in the character from the newAlpha string
         }else{
         answer += str[i]
         
         }
    }
  
  return answer; 
         
}

LetterChanges("hello");




