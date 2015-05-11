
//WORKING WITH PROTOTYPES

var Car = function(color, sound){       //the this statement points to all the cars, or the new object that is being created.
	this.color = color;
	this.sound = sound;
	this.honk = function () { console.log("The car goes" + this.sound);
	};
};


var mustang = new Car("dark grey","zoom") //the word new creates a new object, calls the constructor function and makes a link the the constructors prototype;
var nissan = new Car("black","rumpf")

//each new car object has their own duplicate honk function, with the exact same code in it, if we take out the honk function,
//we take out the this statment.

Car.prototype.honk = function () { console.log("The car goes" + this.sound);
	};

	//now every object that is created that will reference the function, so there is not any duplicate functions. 

	//What if you wanted every car to have four doors?

Car.prototype.doors = 4

//Now every car has four doors;


//According to JS heirarchy, everything has a prototype, including strings, functions, objects and arrays. 
//That is how we get common methods used, which is what Javascripts gives a person out of the box. The prototpye chain 
//allows strings methods to use object prototypes.  