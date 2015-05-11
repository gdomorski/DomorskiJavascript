function StringScramble(str1,str2) { 

  if (str1.length < str2.length) {
    return false;        
  }
 //if the first string is less than the second string, there is no possible way a portion of string1 characters can match string2

  
  var str1Arr = str1.split('');   //split each string into an array and put it in alphabetical order
  str1Arr.sort();
  var str2Arr = str2.split('');
  str2Arr.sort();
  


  var i = 0
  var j = 0;
  
  while (i < str1Arr.length && j < str2Arr.length) {   //go through each element and make a counter if the letter appears in both
    if (str1Arr[i] == str2Arr[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  
  return j == str2Arr.length; 
            
}






//String Scrambler


var str = "I am really looking forward to going to coding school";

var shuffled = str.split("").sort(function(){return 0.5-Math.random()}).join('');
