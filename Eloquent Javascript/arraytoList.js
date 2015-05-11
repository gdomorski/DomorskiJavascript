function arrayToList(array){

	var list = {}
	array.forEach(function (number){
		list["value"] = number;
		array.splice(0, 1);  //take out of the first element in the array
		if (array.length > 0) {  //if there is something in the array
		list["rest"] = arrayToList(array);   //setting rest to a new list and call it recursively
  	} else {
  		list["rest"] = null;  //if the array is empty, set the last value to null;
  	}

	}
)
  return list;
}

console.log(arrayToList([10, 20]));



//create an empty array
//take the keys out of an object
//push them to the empty array
//return that array




function listToArray(obj) {

	var arr = [];  //create an empty array
	
	function converter (obj) {
	
		arr.push(obj.value)  //push in the value

		if(obj.rest !== null){

			converter(obj.rest);  //keep calling the rest in the object
	
		}
	}

	converter(obj);  //call converter the first time to kick it off

	return arr;

}

// If list is null
// then set newList equal to {value: element, rest: null}
// If list has a value
// then newList equal to {value: element, rest: list}


//if you want to add a number to the front of the list

function prepend(element, list) {
	var newList = {};
		newList["value"] = element;  //create a value, key
		newList["rest"] = list; //create a rest key
	return newList;
}




function nth(list, index){

	// get object at index's depth
	function getObjectAtIndex (list, index) {
		// When creating a recursive function that returns a value, we need to initialize the value at the top.
        newList = {}; // create a new obj
		if (index == 0) {  //if the index is 0, the New List is now list
           // save inner function's value that the outer function will know about, the one we set at the top!
			newList = list;
		} else {
			index--;  //if not decrement the number down 1, 
			getObjectAtIndex(list.rest, index);  //call it again using recursion
		}
        return newList;
	}

	var obj = getObjectAtIndex(list, index);  //use this to kick it off

	// When creating a recursive functoin that returns a value, we need to return at the bottom of the function.
	return obj.value   //return the value of obj at the right index;




}


// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20