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
















