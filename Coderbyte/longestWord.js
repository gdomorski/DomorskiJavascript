
function LongestWord(sen) { 

    return sen.match(/[A-z]+/g).sort(function(a,b){return b.length-a.length})[0];
    
}


//the regular expression A-z searches for all upper and lowercase letters, + means to find one or more occurence, g means to analyze the entire string. // The match method puts the words into an array already, so you don't have to use the split method. 
//function(a,b){return b.length-a.length} sorts the function in descending order
//[0], get the first item in the array
         
   
LongestWord("hey guys what is up");



//IF YOU WANT TO DO IT WITHOUT A REGULAR EXPRESSION, you can loop through the string and make a new string with every word that does not equal -1

function LongestWord(sen) { 

  var alpha = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var newWords = ""
  
  for(var i = 0; i < sen.length; i++){
    if(alpha.indexOf(sen[i]) != -1){
      newWords += sen[i];
    }
  }
  return newWords;
	 newWords = newWords.split(" ")
     return newWords.sort(function (a,b){ return b.length - a.length})[0]

}
