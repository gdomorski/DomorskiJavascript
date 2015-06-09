//MAP makes one list and returns another, forEach, changes everything in the list;



var footballPlayers = [ ["Jameis", "Winston"],["Marcus", "Mariota"], ["Vic", "Beasley"] ];

 
var modifiedNames = footballPlayers.map(function (arrayCell){
    return arrayCell[0] + " " + arrayCell[1];
    
})

console.log(modifiedNames)


//Also useful when adding or multiplying an array


var array = [1.1,2.2,3,4,5,6]

array.map(function (num){
    return num * 2;
    
})


//

function map(array, callback) {
  var mapped = [];
  for (var i = 0; i < array.length; i++){
    mapped.push(callback(array[i]));
  }
  return mapped;
}


function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
