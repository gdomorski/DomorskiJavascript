//Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

//Use the Parameter Testing feature in the box below to test your code with different arguments.


function CaesarCipher(str,num) { 
  
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ" //make an upper and lowercase alphabet twice. You have to make it twice, in case the letter goes past Z, it goes back to the beginning.
  var lowerAlpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  var answer = "";
  
  while(num > 25){          //if the number is larger than the whole alphabet, We subtract the amount of numbers in the alphabet. So a person could input an extremely high value like 1250 and we will still get the right answer.
	  num -= 26;
  }
  
  
  for(var i = 0; i < str.length; i++){            //loop through the string, checking for both upper and lowercase letters
   if(lowerAlpha.indexOf(str[i]) !== -1){
     var index = lowerAlpha.indexOf(str[i]);
	 answer += lowerAlpha.charAt(index + num);    //find the value using the charAt method.
     
   }else if(upperAlpha.indexOf(str[i]) !== -1){
     var index2 = upperAlpha.indexOf(str[i]);
	 answer += upperAlpha.charAt(index2 + num);  
   } else {
	   answer += str[i];                             //if the character is not a letter, just insert its regular value.
   }
 
  }
  
  
  return answer
         
}