function bubblesort(array){
	//if it is not an array or the the array's length is less than one
	if(!Array.isArray(array) || array.length < 1){
		//throw new error();
		throw new Error();
	}

	//create a new variable called changed
	var changed;

	//iterate through the array, with the length set to minus one because the last index has already been compared with what is in front of i
	for(var i = 0; i < array.length - 1; i++){
		//set changed to false;
		changed = false;
		//make a inner loop that loops through the array
		for(var k = 0; k < array.length - 1; k++){
			if(array[k] > array[k + 1]){
				//set changed to true;
				changed = true;
				//set the variable to a temp value;
				var temp = array[k];
				//set the value to the one in front of it
				array[k] = array[k+1];
				//set the value in front to the larger value;
				array[k + 1] = temp;
			}
		}
	}

	//return the array;
	return array;

}
