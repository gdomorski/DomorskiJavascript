function LetterCountI(str) { 
 
  str = str.split(" ");
  var newArr = [];
  var answer;
  var maxCounter = 0;
  var currentWord;
  
  for(var i = 0; i < str.length; i++){
    currentWord = str[i].split("").sort("").join("")
    newArr.push(currentWord);
	} 
  
  
  for(var j = 0; j < newArr.length; j++){
   
    var counter = 0;
   	for(var k = 0; k < newArr[j].length; k++){
   	    
     if(newArr[j][k] === newArr[j][k + 1]){
        counter++;
      	if(counter > maxCounter){
         maxCounter = counter;
         answer = str[j];
        }
     }
    }
  }
  if(maxCounter === 0){
    return -1; 
  }else{
    return answer;
  }
  
  
}


LetterCountI("No words");
