function OffLineMinimum(strArr) { 

	var answer = [];  //create an empty array called answer
 var min = 0;  
  
  
 function findMin (arr) { return arr.sort(function (a,b) {return a- b;})[0]; }   //sorts the array making the lowest number come first
  
  
  for (var i=0;i<strArr.length;i++) {  // loops through the array
    if (strArr[i] == "E") {      
      
		min = findMin(strArr.slice(0,i));  //if there is an E, its slices up to the E point, and puts it in the function FindMin   
		var minIndex = strArr.indexOf(min) //find the index of the minimum number
		
		answer.push(min);  //puts the minimun number in a new array
      
      strArr.splice(minIndex, 1);   // takes out the lowest number
      strArr.splice(strArr.indexOf("E"), 1);   //takes out of the first E
      i = 0  // you set i = 0 so it starts at the beginning of the array again, without the min and the first E, 
      
    }
  }
  return answer.join(",");  //joins the numbers together with a comma between them        
         
}

   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());                            















                            
                            
                            
  