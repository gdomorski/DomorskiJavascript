// Check if the number is a power of two. For example 16 will return true, while 22 will return false.


function PowersofTwo(num) { 
  var x = num;
  while (x>1) {     //the number will keep on dividing by two in the loop as long as x is larger than one. So in the question example, the number 16, will go to 8, then 4, then 2, then 1
    x=x/2;
  }
  if (x===1) {  //if ending result is 1, the value will be a power of 2
    return "true";
  } else {
    return "false";  //otherwise the number is not a power of 2
  }
}
   