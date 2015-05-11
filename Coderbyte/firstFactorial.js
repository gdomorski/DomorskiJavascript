



function firstFactorial(num) {
	var total = 1;
	for(num; num >= 1; num--){
		total *= num;	
		
	}
}



//FIRST FACTORIAL USING RECURSION, 


function FirstFactorial(num) { 

  if(num === 0){
	return 1;
  }else{
	return FirstFactorial(num - 1) * num; //simple to understand if knowing how stacking works in javascript, everytime it is called num gets its OWN value on each recursive call.
  }
         
}
   
/*
For Example, if we had FirstFactorial(3);

It would be num = 3, num=2, num = 1, num = 0, because we are subtracting 1 each time. 
Then 0 would = num, which would return 1
Then num would = 1 it would be 1 * 1, which = equals 1
Then, it would be 1 * 2, which equals 2
Then, it would be 2 * 3, which equal to 6, which is the answer

*/
 
   
   
   
   