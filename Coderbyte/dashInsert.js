// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.  

function DashInsert(num) { 

	num = num.toString();    //make the number into a string
	var answer = "";  		 //create a new variable, which is an empty string, which will store the answer
  
  for (var i=0; i < num.length; i++) {            //loops through the length of the user input
    if ((num[i] % 2 === 1) && (num[i-1] % 2 === 1)) {   //checks to see if the number and the number behind it are odd
        answer += "-";        
        }
        answer += num[i];   //if you do not add the letters, you will only get the dashes
        }
        
  return answer; 
  
}