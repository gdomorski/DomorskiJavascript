//NOTES ON SPEAK, CALL AND BIND

function speak(line) {
	console.log("Clemson University has the best " + this.sport + " team, and..." + line);
}
var clemson = {sport: "football", speak: speak};


clemson.speak("I believe they will win the national championship!");

//Above uses a this statement to refer to the object below


speak.apply(clemson, ["I believe they will win the national championship!"] )
// the apply method looks in the object clemson, to find the type of an array is needed in the second parameter


speak.call(clemson, "I believe they will win the national championship!" )
//the second parameter in the call method does NOT need to be an array
//APPLY = ARRAY, CALL = COMMA










