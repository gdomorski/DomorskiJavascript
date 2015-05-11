function LetterCount(str) {

	var words = str.split(" "); //split the string into an array of words that are each an individual string
	var highestCount = 0;
	var largestIndex = 0;
	
	
	for (var i = 0; i < words.length; i++) {  // loop through the array     
		var word = words[i].split("")   // create a new variable for the words, split them into seperate characters
		for(var j = 0; j < word.length - 1; j++) {  //create a second for loop to go through the letters of each word, you have to put -1 after word.length because it is comparing a word. 
			if(word[j] === word[j+1]) { //if the j index is equal to the one after it, add to the counter;
				count++;
		
			}
		}
		
		if(count > highestCount) {  
		highestCount = count;
		largestIndex = i;
		}

}

if(highestCount > 0){
return words[largestIndex];
}else{
-1;
}
    
  //could also use ternary operator to make code more efficent, which would be: return highestCount > 0 ? words[largestIndex] : -1;
    
}





// YOU CAN ALSO SOLVE THIS PROBLEM USING OBJECTS



function LetterCount(str) {

	var words = str.split(" ")
	var counter = {};
	var maxCounter = 0;
	var repeatingWord = "";
	
	for (var i = 0; i < words.length; i++) { 
	   if(counter[words[i]] === undefined){
	    counter[words[i]] = MulLetters();
	}   
	}

    for (key in counter) {
    if(counter[key] > maxCounter){
      maxCounter = counter[key];
      repeatingWord = key;
     
    }
  }
 
  

function MulLetters() { 
    var MulLettersCounter = 0
    var newWord = words[i].split("").sort().join("")
    for (var j = 0; j < newWord.length; j++) {
        if(newWord[j] === newWord[j+1]){
        MulLettersCounter++
        }
        }
        return MulLettersCounter;
    }


    return repeatingWord;

}  


    


LetterCount("Hello how are you");