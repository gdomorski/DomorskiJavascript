function MeanMode(arr) {

//find the mean
var sum = eval(arr.join("+"));  //adds up everything in an array, by joining it together and evaluating it with a + sign between all the numbers
//one could also use the reduce method to add up all the numbers as using eval is considered bad practice.

var mean = (sum / arr.length).toString();  //find the mean by dividing the sum by the amount of numbers. You have to make it a string so you can compare it to the mode
var mode = 0;
var counter = {};
var maxCounter = 0;



for(var i = 0; i < arr.length; i++){  //loop through the array
	if(counter[arr[i]] === undefined){  //if there isn't the array number in counter
		counter[arr[i]] = 0;	 //create it
		
	}
	counter[arr[i]]++ //add one every time it comes through
}


for(key in counter){  //use a for in loop to go over the object
	if(counter[key] > maxCounter){  //we see if the number of times is greater than the max counter
	maxCounter = counter[key]; //if it is, we assing a new number to max counter
	mode = key;  //we set the mode to that number
	}
}



// are mean and mode the same?

return (mean === mode)?1:0;

// you could say if ( mean === mode){
//return 1;
//} else {
//return 0;
//}, but a ternary operator makes the code less bulky





}
   
   
   

MeanMode([4, 4, 4, 6, 2])


