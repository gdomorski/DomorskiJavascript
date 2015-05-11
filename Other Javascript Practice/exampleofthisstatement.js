//EXAMPLE OF A THIS STATEMENT


var numbers = {
	addUp: function() {
		// Use this to access something on the given object, or on the scope
		alert(this.numberSet);
		return this.numberArr.reduce(function(a,b) return a+b;});
	},
	numberArr: [4, 3, 2],
	numberSet: {
		4: 3,
		2: 1,
		1: 1
	}
	
};
// Outside scope of numbers
alert(numbers.numberArr);
alert(numbers.numberSet);




function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");   //the this statement refers to the object fatRabbit
}

var fatRabbit = {type: "fat", speak: speak};

fatRabbit.speak("I could sure use a carrot right now.");


