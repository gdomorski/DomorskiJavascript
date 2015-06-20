
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



//Prototypes


//say we create new object function called SportsTeam,

function SportsTeam(team) {
  this.team = team;
}

//we add a new Sports Team Called the Knicks

var KnicksSportsTeam = new SportsTeam("Knicks");
console.log(KnicksSportsTeam.team);

//It will log out Knicks, because it will reference the this statement

SportsTeam.prototype.speak = function(line) {
  console.log("The " + this.team + " will be " +
              line);
};

KnicksSportsTeam.speak("the best team in the league!");

//When you log it, it will say, "The Knicks will be the best team in the league!"


SportsTeam.prototype.gamePlayed = "basketball"

console.log(KnicksSportsTeam.gamePlayed);  //it will automatically assign basketball, unless you assign it it's own value;




