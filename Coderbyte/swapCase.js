function SwapCase(str) { 

	var answer = "";  //create a new variable which will hold a string, which will store our answer

  for (i=0;i<str.length;i++) {  //loop through the user input data

    if (str[i] === str[i].toUpperCase()) {  //checks to see if the letter is uppercase

		answer += str[i].toLowerCase();  //if the letter is uppercase, it makes it lowercase

    }

    else if (str[i] === str[i].toLowerCase()) {  //checks to see if the letter is lowercase

		answer += str[i].toUpperCase(); // if it is, makes the letter uppercase

	} else {

		answer += str[i];  //otherwise if the input data isn't uppercase or lowercase, it must be not be a letter and does not make changes to that input. It could be a symbol for example.

    }

  }

  

return answer;  

  

}
