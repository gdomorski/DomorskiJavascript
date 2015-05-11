//Create a method called change that accepts one arbitrary string as an argument and returns a string of length 26 with each character being a number equaling the count of a letter in the alphabet.

//The objective is to detect if letters of the alphabet (upper or lower case) are present anywhere in the string, and set each of the 26 characters corresponding to each letter to either "1" if present, "0" if not.

//So if an "a" or an "A" appears anywhere in the argument(parameter) string (any number of times), set the first character of the returned string to "1" otherwise to "0" if "b" or "B" set the second character to "1", and so on for the rest of the alphabet. The returned string consists only of "1's" and "0's" and is 26 characters long.


function change(str){
    str = str.toLowerCase();         //changes all the charaters in the string to lower case
    var alpha = "abcdefghijklmnopqrstuvwxyz";   // create a new variable of all the letters in the alphabet
    var finalString = "";  // creates a new string
    
    
    for(var i = 0; i < alpha.length; i++) {  //loop through all the letters of the alphabet
    if(str.indexOf(alpha[i]) !== -1) {   //the indexOf method checks the location of a alpha letter in the string. If it is not in there it will return -1, which is a falsy value. 
		finalString += 1;  //adds one if the value is located in the alphabet 
    } else {
		finalString += 0;  //otherwise it adds 0
    }
    }
    return finalString;  //returns the final value
}

change("basketball");

