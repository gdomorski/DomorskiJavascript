function PrimeMover(num) { 
  
  
 function isPrime(num) { 
  
  if(num < 2){
   return false; 
  }
  
  for (var i = 2; i < num; i++){
    if (num % i === 0){
      return false;
    }
  }
  return true;
}
  

  var counter = 0;
  var numToCheck = 0;
  
  while(counter < num){
   numToCheck++
   if(isPrime(numToCheck)){
   counter++ 
   } 
  }
  
  return numToCheck;
  
  
  
  
}