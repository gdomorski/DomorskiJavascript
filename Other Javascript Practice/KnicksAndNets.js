// As a practice for coding bootcamps I decided to create my own project comparing the 2014-2015 New York Knicks
// to the 2014-2015 Brooklyn Nets. I decided to make the data for the Knicks an array of objects and the Nets an 
// object of objects to test my coding ability. My background is from Eloquent Javascript, CodeSchool and Coderbyte
// excercises. Thank you for checking out my code!


var knicks = [
  
  {"name": "Quincy Acy", "position": "forward", "gamesPlayed": 63, "PPG": 5.7, "reb": 4.4},
  {"name": "Cole Aldrich", "position": "center", "gamesPlayed": 56, "PPG": 5.1, "reb": 5.4},
  {"name": "Lou Amundson", "position": "forward", "gamesPlayed": 48, "PPG": 4.7, "reb": 5},
  {"name": "Carmelo Anthony", "position": "forward", "gamesPlayed": 40, "PPG": 24.2, "reb": 6.6},
  {"name": "Andrea Bargnani", "position": "center", "gamesPlayed": 28, "PPG": 14.8, "reb": 4.3},
  {"name": "Jose Calderon", "position": "guard", "gamesPlayed": 42, "PPG": 9.1, "reb": 3},
  {"name": "Cleanthony Early", "position": "forward", "gamesPlayed": 36, "PPG": 5.5, "reb": 2.4},
  {"name": "Langston Galloway", "position": "guard", "gamesPlayed": 40, "PPG": 11.3, "reb": 4.3},
  {"name": "Tim Hardaway Jr.", "position": "guard", "gamesPlayed": 65, "PPG": 11.1, "reb": 2.2},
  {"name": "Shane Larkin", "position": "guard", "gamesPlayed": 71, "PPG": 6.1, "reb": 2.3},
  {"name": "Ricky Ledo", "position": "guard", "gamesPlayed": 13, "PPG": 5.9, "reb": 2.2},
  {"name": "Alexey Shved", "position": "guard", "gamesPlayed": 42, "PPG": 10.3, "reb": 2.4},
  {"name": "Jason Smith", "position": "forward", "gamesPlayed": 77, "PPG": 7.7, "reb": 3.8},
  {"name": "Lance Thomas", "position": "forward", "gamesPlayed": 57, "PPG": 7.2, "reb": 3.2},
  {"name": "Travis Wear", "position": "forward", "gamesPlayed": 51, "PPG": 3.9, "reb": 2.1},
  {"numOfTeammates": 15}
];

var nameDetails = [];

knicks.forEach(function(person){
  var relationship = {}; 
  relationship["name"] = person.name;
  relationship["PPG"] = person.PPG;
  relationship["position"] = person.position; 
  nameDetails.push(relationship);
});

var PPGofAllPlayers = [];


nameDetails.forEach(function(person){
 PPGofAllPlayers.push(person.PPG)

})




var allPositions = {};


knicks.forEach(function (person){
  if(!allPositions[person.position])
    allPositions[person.position] = [];
  allPositions[person.position].push(person.PPG)
})

for(key in allPositions){
    console.log("A " + key + " on the Knicks scores an average of " + Math.round(average(allPositions[key])) + " points per game\n" )
}

console.log("Each player on the Knicks scores an average of " + average(PPGofAllPlayers) + " points per game\n");

console.log("All the players on the Knicks score an of average of " + total(PPGofAllPlayers) + " points. This does not account time on the court. It also states that every player would play in every game, which causes the value to be a very high number\n");



function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function total(array){
  return array.reduce(function (a,b) {
  return a+b;
  })
}

function addPlayer(name, position, gamesPlayed, PPG, reb){
  for(var i = 0; i < knicks.length; i++){
     if(knicks[i].numOfTeammates != undefined){
         knicks[i].numOfTeammates++
     } 
  }
  knicks.push({name: name, position: position, gamesPlayed: gamesPlayed, PPG: PPG, reb: reb});

}

function removePlayer(name){
  for(var i = 0; i < knicks.length; i++){
    if(knicks[i].name === name){
    knicks.splice(i, 1)
    }
    if(knicks[i].numOfTeammates != undefined){
      knicks[i].numOfTeammates--
    }
  }
}





var nets = {
  "Alan Anderson": {"position": "guard", "gamesPlayed": 74, "PPG" : 7.4, "reb":2.8},
  "Bojan Bogdanovic": {"position": "guard", "gamesPlayed": 78, "PPG": 9, "reb":2.7},
  "Markel Brown": {"position": "guard", "gamesPlayed": 47, "PPG":4.6, "reb":2.3},
  "Earl Clark": {"position": "forward", "gamesPlayed": 10, "PPG": 2.7, "reb":2.3},
  "Jarrett Jack": {"position": "guard", "gamesPlayed": 80, "PPG": 12, "reb":3.1},
  "Cory Jefferson": {"position": "forward", "gamesPlayed": 50, "PPG": 3.7, "reb":2.9},
  "Joe Johnson": {"position": "forward", "gamesPlayed": 80, "PPG": 14.4, "reb":4.8},
  "Jerome Jordan": {"position": "center", "gamesPlayed": 44, "PPG": 3.1, "reb":2.4},
  "Sergey Karasev": {"position": "forward", "gamesPlayed": 33, "PPG": 4.6, "reb":2},
  "Brook Lopez": {"position": "center", "gamesPlayed": 72, "PPG": 17.2, "reb":7.4},
  "Darius Morris": {"position": "guard", "gamesPlayed": 38, "PPG": 2.2, "reb":0.7},
  "Mason Plumlee": {"position": "forward", "gamesPlayed": 82, "PPG": 8.7, "reb":6.2},
  "Mirza Teletovic": {"position": "forward", "gamesPlayed": 40, "PPG": 8.5, "reb":4.9},
  "Deron Williams": {"position": "guard", "gamesPlayed": 68, "PPG": 13, "reb":3.5},
  "Thaddeus Young": {"position": "forward", "gamesPlayed": 76, "PPG": 14.1, "reb":5.4},
  "numofPlayers": 15

  
};

function addTeammate (name, position, gamesPlayed, PPG, reb) {
    nets.numofPlayers++;
    nets[name] = {position: position, gamesPlayed: gamesPlayed, PPG: PPG, reb: reb}
  }


function removeTeammate (name){
    delete nets[name]
    nets.numofPlayers--;
    
  }





var allPositions = {};
for(key in nets){
 if(allPositions[nets[key]["position"]] === undefined){
    allPositions[nets[key]["position"]] = [];
 }
 allPositions[nets[key]["position"]].push(nets[key].PPG)
 delete allPositions[undefined];
 }

for(k in allPositions){
  console.log("The average " + k + ", on the Nets scores " + Math.round(average(allPositions[k])) +  " points per game \n")
