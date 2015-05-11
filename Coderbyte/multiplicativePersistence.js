function MultiplicativePersistence(num) { 
  
  //tell it to stop when it gets to single digits
  //keep on multiplying until it gets to single digits;
  //split to the numbers up and add them together, and make it enter some sort of loop to make it keep doing it
  //create a counter
  
  var counter = 0;
  
  while(num > 9){
   num = MulDigits(num);
   counter++;
  }
  
  function MulDigits(num) { 
    return eval(num.toString().split("").join("*"));
  }
  
 
  return counter; 
         
}