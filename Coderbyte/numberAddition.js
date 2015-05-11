function NumberAddition(str) { 
 
	var arr = str.match(/\d+/g);    //finds all the numbers in the string
	var sum=arr.reduce(function(a,b){return parseInt(a)+parseInt(b);});   // the function adds up all the numbers in the string, parseInt makes the string a number
  return sum;
         
}
   
   
NumberAddition("75Number9");



