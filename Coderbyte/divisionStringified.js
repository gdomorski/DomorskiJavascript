

function DivisionStringified(num1,num2) { 
  
  var result = Math.round(num1/num2);  //divides two numbers and rounds them
  result = result.toString();  //converts the result to a string
  var resultArr = result.split("");  //splits the results into an array, which will help us place a comma in the right place
  
  if (result >= 999) {    
  for (i=result.length-3;i>0;i-=3){   //goes through the result in descending order and insides a comma at every third spot using the splice method
	  resultArr.splice(i,0,",");  //it says at the i position removed 0 items and insert a comma
    }
  }
  
  resultArr = resultArr.join("");  //joins together the array into a string
  return resultArr;  //returns the value
  
}


DivisionStringified(6874, 67);


