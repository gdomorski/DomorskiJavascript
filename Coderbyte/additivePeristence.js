function AdditivePersistence(num) { 
	var counter=0;    // create a new variable which is an empty counter
  while(num>9){     
    counter++     //while the number is double digits, it wil countine to add to the counter
    num=sumDigits(num);  //makes a new value of num, based on the function
  }
  // code goes here  
  return counter; 
         
}
function sumDigits(num){
	return eval(num.toString().split('').join('+'));     //makes the number a string, splits it to an array, joins it together with plus signs in the middle. The eval method gets the sum of all the numbers 
}

