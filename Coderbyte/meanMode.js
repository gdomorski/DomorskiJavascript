function MeanMode(arr) {

//find the mean
var sum = eval(arr.join("+"));  //adds up everything in an array, by joining it together and evaluating it with a + sign between all the numbers
var mean = (sum / arr.length).toString();  //find the mean by dividing the sum by the amount of numbers
var mode = 0;
var counter = {};
var maxCounter = 0;



for(var i = 0; i < arr.length; i++){
	if(counter[arr[i]] === undefined){
		counter[arr[i]] = 0;	
		
	}
	counter[arr[i]]++
}


for(key in counter){
	if(counter[key] > maxCounter){
	maxCounter = counter[key];
	mode = key;
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


