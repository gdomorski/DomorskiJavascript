
// FIRST AND BETTER WAY


function TimeConvert(num) { 
	var minutes = num % 60;   // find the minutes by doing the module of the amount of minutes in an hour
	var hours = Math.floor(num/60);  //find the hours by dividing the hours by 60

  return "" + hours + ":" + minutes;         
}


// SECOND, LONGER WAYß



function TimeConvert(num) { 
var minutes = 0;  //create three new variables, which will represent seconds, minutes and hours
var hour = 0;
  
  function final(x) {
	if(x<0) {
	return Math.ceil(x);   // create a new function, which will eliminate a decimal when finding the hours.
	} else {
  	return Math.floor(x);
}
}
  
  if (num > 60){				//first checks the hours
  hour = final(num/60); 
  minutes = num % 60;          //then returns the remainder of minutes using the mod operator
  }else if (num == 60){
	  hour = 1; 					//if the number of minutes is equal to 60, there is exactly one hour
    minutes = 0;
  }  else if (num < 60){
	  hour = 0; 					//if the number is less than 60, it returns just the minutes.
    minutes = num;
  }
  
  
  return hour +":" +minutes;  //returns the code in the correct format
 
         
}