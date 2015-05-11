
function Bubblesort(arr){ 

	
	for(var i = 0; i < arr.length-1; i++){  //you make the length -1  because u don't want to compare the last number to undefined

		for(var j = 0; j < arr.length-1; j++){
		    console.log(arr[j], arr[j+1]);
			if(arr[j] > arr[j + 1]);
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		
	}
	

	}
	return arr;
}


//the inner loop moves the largest number to the end. The out loop, makes sure every number is sorted


Bubblesort([1,2,4,12,11,9]);