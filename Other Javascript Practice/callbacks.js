//EXAMPLE OF CALLBACKS


//In simple words, a callback is a function that takes another function in its parameter

// Good way. Callback!
var callMe = function(msg, saySomething) {
	alert(msg);
	saySomething();
}

var sayHi = function() {
	alert('hi');
}

var sayBye = function() {
	alert('bye!');
}


callMe("Oh, Greg!", sayHi)
callMe("Oh, Greg!", sayBye)



// Bad way
var sayHi = function(msg) {
	alert(msg);
	alert('hi');
}

var sayBye = function(msg) {
	alert(msg);
	alert('bye!');
}

var sayWhatsUp = function(msg) {
	alert(msg);
	alert('what is up');
}









callMe("Oh Greg")
